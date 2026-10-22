import {useEffect, useState, type ChangeEvent, type FormEvent} from "react"
import {Link, useNavigate, useParams} from "react-router-dom"
import {supabase, type CaseStudyRow} from "../../lib/supabase"

type Block = {kind:"paragraph", text:string} | {kind:"points", points:string[], ordered:boolean}
type Section = {title:string, blocks:Block[]}

type DbBlock = string | {points:string[], ordered?:boolean}
type DbSection = {title:string, content:DbBlock[]}

function toDbSection(s:Section): DbSection{
    return {
        title:s.title,
        content:s.blocks.map(b => b.kind === "paragraph" ? b.text : (b.ordered ? {points:b.points, ordered:true} : {points:b.points})),
    }
}

function fromDbSection(raw:unknown): Section | null{
    if(!raw || typeof raw !== "object") return null
    const o = raw as Record<string, unknown>
    const title = typeof o.title === "string" ? o.title : ""
    const content = Array.isArray(o.content) ? o.content : []
    const blocks: Block[] = content.map(c =>{
        if(typeof c === "string") return {kind:"paragraph" as const, text:c}
        if(c && typeof c === "object" && Array.isArray((c as Record<string, unknown>).points)){
            const p = c as Record<string, unknown>
            return {kind:"points" as const, points:(p.points as unknown[]).map(x => typeof x === "string" ? x : ""), ordered:p.ordered === true}
        }
        return null
    }).filter((b): b is Block => b !== null)
    return {title, blocks}
}

function slugify(s:string): string{
    return s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 80)
}

async function uploadImage(file:File, prefix:string): Promise<string>{
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg"
    const path = `${prefix}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
    const {error} = await supabase.storage.from("content").upload(path, file, {upsert:false})
    if(error) throw new Error(error.message)
    return supabase.storage.from("content").getPublicUrl(path).data.publicUrl
}

type FormState ={
    slug:string
    name:string
    logo_url:string
    cover_url:string
    thumb_url:string
    title:string
    heading:string
    blurb:string
    service:string
    published:boolean
    article:Section[]
}

const EMPTY: FormState ={
    slug:"", name:"", logo_url:"", cover_url:"", thumb_url:"",
    title:"", heading:"", blurb:"", service:"", published:false, article:[],
}

export default function AdminCaseStudyEdit(){
    const {id} = useParams()
    const navigate = useNavigate()
    const isNew = !id || id === "new"
    const [form, setForm] = useState<FormState>(EMPTY)
    const [loading, setLoading] = useState(!isNew)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() =>{
        if(isNew){ setLoading(false); return }
        supabase.from("case_studies").select("*").eq("id", id).single().then(({data, error:err}) =>{
            if(err){ setError(err.message); setLoading(false); return }
            const row = data as CaseStudyRow
            const sections: Section[] = (row.article ?? []).map(fromDbSection).filter((s): s is Section => s !== null)
            setForm({
                slug:row.slug, name:row.name, logo_url:row.logo_url ?? "", cover_url:row.cover_url ?? "", thumb_url:row.thumb_url ?? "",
                title:row.title, heading:row.heading ?? "", blurb:row.blurb, service:row.service,
                published:row.published, article:sections,
            })
            setLoading(false)
        })
    }, [id, isNew])

    const patch = (p:Partial<FormState>) => setForm(f => ({...f, ...p}))

    const uploadInto = async (field:"logo_url" | "cover_url" | "thumb_url", e:ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files?.[0]
        if(!file) return
        setError(null)
        try{
            const url = await uploadImage(file, "case-studies")
            patch({[field]:url})
        }catch(err){ setError(err instanceof Error ? err.message : String(err)) }
        finally{ e.target.value = "" }
    }

    // --- section + block helpers ---
    const addSection = () => patch({article:[...form.article, {title:"", blocks:[]}]})
    const updateSection = (i:number, next:Section) =>{
        const copy = [...form.article]; copy[i] = next; patch({article:copy})
    }
    const removeSection = (i:number) => patch({article:form.article.filter((_, j) => j !== i)})
    const moveSection = (i:number, dir:-1 | 1) =>{
        const j = i + dir; if(j < 0 || j >= form.article.length) return
        const copy = [...form.article]; [copy[i], copy[j]] = [copy[j], copy[i]]; patch({article:copy})
    }
    const addBlock = (i:number, kind:Block["kind"]) =>{
        const blank: Record<Block["kind"], Block> ={
            paragraph:{kind:"paragraph", text:""},
            points:{kind:"points", points:[""], ordered:false},
        }
        updateSection(i, {...form.article[i], blocks:[...form.article[i].blocks, blank[kind]]})
    }
    const updateBlock = (si:number, bi:number, next:Block) =>{
        const blocks = [...form.article[si].blocks]; blocks[bi] = next
        updateSection(si, {...form.article[si], blocks})
    }
    const removeBlock = (si:number, bi:number) =>{
        updateSection(si, {...form.article[si], blocks:form.article[si].blocks.filter((_, j) => j !== bi)})
    }

    const onSubmit = async (e:FormEvent) =>{
        e.preventDefault()
        if(saving) return
        setSaving(true); setError(null)
        const payload ={
            slug:form.slug.trim() || slugify(form.title),
            name:form.name.trim(),
            logo_url:form.logo_url || null,
            cover_url:form.cover_url || null,
            thumb_url:form.thumb_url || null,
            title:form.title.trim(),
            heading:form.heading.trim() || null,
            blurb:form.blurb,
            service:form.service,
            article:form.article.map(toDbSection),
            published:form.published,
        }
        const q = isNew
            ? supabase.from("case_studies").insert(payload).select("id").single()
            : supabase.from("case_studies").update(payload).eq("id", id!).select("id").single()
        const {data, error:err} = await q
        setSaving(false)
        if(err){ setError(err.message); return }
        if(isNew && data?.id){ navigate(`/admin/case-studies/${data.id}`, {replace:true}) }
    }

    const onDelete = async () =>{
        if(isNew) return
        if(!confirm(`Delete "${form.title}"? This can't be undone.`)) return
        const {error:err} = await supabase.from("case_studies").delete().eq("id", id!)
        if(err){ alert(err.message); return }
        navigate("/admin/case-studies", {replace:true})
    }

    if(loading) return <div className="admin-empty">Loading…</div>

    return <form className="admin-editor" onSubmit={onSubmit}>
        <div className="page-head">
            <h1>{isNew ? "New case study" : "Edit case study"}</h1>
            <div className="actions-row">
                <Link to="/admin/case-studies" className="btn ghost">Back</Link>
                {!isNew && <button type="button" className="btn danger" onClick={onDelete}>Delete</button>}
                <button type="submit" className="btn orange" disabled={saving}>{saving ? "Saving…" : "Save"}</button>
            </div>
        </div>

        {error && <div className="admin-error">{error}</div>}

        <div className="editor-grid">
            <section className="card">
                <h2>Details</h2>
                <label>
                    Client name <span className="hint">(e.g. "Lendsqr")</span>
                    <input type="text" value={form.name} onChange={e => patch({name:e.target.value})} required/>
                </label>
                <label>
                    Slug <span className="hint">(URL path)</span>
                    <input type="text" value={form.slug} onChange={e => patch({slug:e.target.value})} required/>
                </label>
                <label>
                    Card title <span className="hint">(shown on the Case Studies grid)</span>
                    <input type="text" value={form.title} onChange={e => patch({title:e.target.value})} required/>
                </label>
                <label>
                    Article heading <span className="hint">(optional, falls back to the card title)</span>
                    <input type="text" value={form.heading} onChange={e => patch({heading:e.target.value})}/>
                </label>
                <label>
                    Blurb <span className="hint">(one-line summary under the hero)</span>
                    <textarea value={form.blurb} onChange={e => patch({blurb:e.target.value})} rows={3}/>
                </label>
                <label>
                    Related service
                    <input type="text" value={form.service} onChange={e => patch({service:e.target.value})} placeholder="e.g. Growth"/>
                </label>
                <label className="checkbox">
                    <input type="checkbox" checked={form.published} onChange={e => patch({published:e.target.checked})}/>
                    Published
                </label>
            </section>

            <section className="card">
                <h2>Images</h2>
                {form.cover_url && <img className="cover-preview" src={form.cover_url} alt=""/>}
                <label>
                    Cover image URL
                    <input type="text" value={form.cover_url} onChange={e => patch({cover_url:e.target.value})}/>
                </label>
                <label className="file-label small">
                    Upload cover
                    <input type="file" accept="image/*" onChange={e => uploadInto("cover_url", e)}/>
                </label>
                <label>
                    Logo URL
                    <input type="text" value={form.logo_url} onChange={e => patch({logo_url:e.target.value})}/>
                </label>
                <label className="file-label small">
                    Upload logo
                    <input type="file" accept="image/*" onChange={e => uploadInto("logo_url", e)}/>
                </label>
                <label>
                    Thumb URL <span className="hint">(home card thumbnail, falls back to cover)</span>
                    <input type="text" value={form.thumb_url} onChange={e => patch({thumb_url:e.target.value})}/>
                </label>
                <label className="file-label small">
                    Upload thumb
                    <input type="file" accept="image/*" onChange={e => uploadInto("thumb_url", e)}/>
                </label>
            </section>

            <section className="card wide">
                <h2>Article sections</h2>
                <p className="hint">Each section is a heading plus paragraphs or bullet lists.</p>
                <div className="blocks">
                    {form.article.length === 0 && <div className="blocks-empty">No sections yet. Add one below.</div>}
                    {form.article.map((section, i) =>(
                        <div key={i} className="block">
                            <div className="block-head">
                                <span className="block-kind">Section {i + 1}</span>
                                <div className="block-controls">
                                    <button type="button" onClick={() => moveSection(i, -1)}>↑</button>
                                    <button type="button" onClick={() => moveSection(i, 1)}>↓</button>
                                    <button type="button" className="danger" onClick={() => removeSection(i)}>✕</button>
                                </div>
                            </div>
                            <input type="text" value={section.title} onChange={e => updateSection(i, {...section, title:e.target.value})} placeholder="Section title…"/>
                            {section.blocks.map((b, bi) =>(
                                <div key={bi} className="block" style={{marginTop:8}}>
                                    <div className="block-head">
                                        <span className="block-kind">{b.kind}</span>
                                        <div className="block-controls">
                                            <button type="button" className="danger" onClick={() => removeBlock(i, bi)}>✕</button>
                                        </div>
                                    </div>
                                    {b.kind === "paragraph" && (
                                        <textarea rows={3} value={b.text} onChange={e => updateBlock(i, bi, {...b, text:e.target.value})} placeholder="Paragraph text…"/>
                                    )}
                                    {b.kind === "points" && (
                                        <>
                                            <textarea rows={Math.max(3, b.points.length)} value={b.points.join("\n")}
                                                onChange={e => updateBlock(i, bi, {...b, points:e.target.value.split("\n")})}
                                                placeholder="One bullet per line…"/>
                                            <label className="checkbox inline">
                                                <input type="checkbox" checked={b.ordered} onChange={e => updateBlock(i, bi, {...b, ordered:e.target.checked})}/>
                                                Numbered list
                                            </label>
                                        </>
                                    )}
                                </div>
                            ))}
                            <div className="add-block">
                                <span className="hint">Add to section:</span>
                                <button type="button" onClick={() => addBlock(i, "paragraph")}>Paragraph</button>
                                <button type="button" onClick={() => addBlock(i, "points")}>Bullet list</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="add-block">
                    <button type="button" onClick={addSection}>+ Add section</button>
                </div>
            </section>
        </div>
    </form>
}
