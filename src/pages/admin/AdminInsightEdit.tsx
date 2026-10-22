import {useEffect, useState, type ChangeEvent, type FormEvent} from "react"
import {Link, useNavigate, useParams} from "react-router-dom"
import {supabase, type InsightRow} from "../../lib/supabase"

// kept in sync with src/js/insights.ts for now — move to a settings table later
const TOPICS = ["Industry Trends and Analysis", "Product Management", "Growth"]
const TYPES = ["Article", "Podcast", "Report", "Video", "Webinar"]

// matches the InsightBlock union in src/js/insights.ts
type Block =
    | {kind:"paragraph", text:string}
    | {kind:"heading", heading:string, sub:boolean}
    | {kind:"points", points:string[], ordered:boolean}
    | {kind:"image", image:string, alt:string, caption:string}
    | {kind:"video", video:string, caption:string}
    | {kind:"quote", quote:string}

// serialise our editor blocks into the DB JSON shape used by the public pages
function toDbBlock(b:Block): unknown{
    switch(b.kind){
        case "paragraph": return b.text
        case "heading": return b.sub ? {heading:b.heading, sub:true} : {heading:b.heading}
        case "points": return b.ordered ? {points:b.points, ordered:true} : {points:b.points}
        case "image": return {image:b.image, ...(b.alt && {alt:b.alt}), ...(b.caption && {caption:b.caption})}
        case "video": return {video:b.video, ...(b.caption && {caption:b.caption})}
        case "quote": return {quote:b.quote}
    }
}

function fromDbBlock(raw:unknown): Block | null{
    if(typeof raw === "string") return {kind:"paragraph", text:raw}
    if(!raw || typeof raw !== "object") return null
    const o = raw as Record<string, unknown>
    if(typeof o.heading === "string") return {kind:"heading", heading:o.heading, sub:o.sub === true}
    if(Array.isArray(o.points)) return {kind:"points", points:o.points.map(p => typeof p === "string" ? p : ""), ordered:o.ordered === true}
    if(typeof o.image === "string") return {kind:"image", image:o.image, alt:typeof o.alt === "string" ? o.alt : "", caption:typeof o.caption === "string" ? o.caption : ""}
    if(typeof o.video === "string") return {kind:"video", video:o.video, caption:typeof o.caption === "string" ? o.caption : ""}
    if(typeof o.quote === "string") return {kind:"quote", quote:o.quote}
    return null
}

function slugify(s:string): string{
    return s.toLowerCase().trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .slice(0, 80)
}

async function uploadImage(file:File, prefix:string): Promise<string>{
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg"
    const path = `${prefix}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
    const {error} = await supabase.storage.from("content").upload(path, file, {upsert:false})
    if(error) throw new Error(error.message)
    const {data} = supabase.storage.from("content").getPublicUrl(path)
    return data.publicUrl
}

type FormState ={
    title:string
    slug:string
    topic:string
    type:string
    date:string
    authors:string
    cover_url:string
    summary:string
    published:boolean
    article:Block[]
}

const EMPTY: FormState ={
    title:"", slug:"", topic:TOPICS[0], type:TYPES[0],
    date:new Date().toLocaleDateString("en-US", {month:"long", day:"numeric", year:"numeric"}),
    authors:"", cover_url:"", summary:"", published:false, article:[],
}

export default function AdminInsightEdit(){
    const {id} = useParams()
    const navigate = useNavigate()
    const isNew = !id || id === "new"
    const [form, setForm] = useState<FormState>(EMPTY)
    const [loading, setLoading] = useState(!isNew)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [coverUploading, setCoverUploading] = useState(false)

    useEffect(() =>{
        if(isNew){ setLoading(false); return }
        supabase.from("insights").select("*").eq("id", id).single().then(({data, error:err}) =>{
            if(err){ setError(err.message); setLoading(false); return }
            const row = data as InsightRow
            const blocks: Block[] = (row.article ?? []).map(fromDbBlock).filter((b):b is Block => b !== null)
            setForm({
                title:row.title, slug:row.slug, topic:row.topic, type:row.type, date:row.date,
                authors:row.authors.join(", "), cover_url:row.cover_url ?? "", summary:row.summary,
                published:row.published, article:blocks,
            })
            setLoading(false)
        })
    }, [id, isNew])

    const patch = (p:Partial<FormState>) => setForm(f => ({...f, ...p}))

    const onTitleBlur = () =>{
        if(!form.slug && form.title){ patch({slug:slugify(form.title)}) }
    }

    const onCoverFile = async (e:ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files?.[0]
        if(!file) return
        setCoverUploading(true); setError(null)
        try{
            const url = await uploadImage(file, "insights/covers")
            patch({cover_url:url})
        }catch(err){
            setError(err instanceof Error ? err.message : String(err))
        }finally{
            setCoverUploading(false)
            e.target.value = ""
        }
    }

    // --- block editor helpers ---
    const addBlock = (kind:Block["kind"]) =>{
        const blank: Record<Block["kind"], Block> ={
            paragraph: {kind:"paragraph", text:""},
            heading: {kind:"heading", heading:"", sub:false},
            points: {kind:"points", points:[""], ordered:false},
            image: {kind:"image", image:"", alt:"", caption:""},
            video: {kind:"video", video:"", caption:""},
            quote: {kind:"quote", quote:""},
        }
        patch({article:[...form.article, blank[kind]]})
    }
    const updateBlock = (i:number, next:Block) =>{
        const copy = [...form.article]; copy[i] = next
        patch({article:copy})
    }
    const removeBlock = (i:number) =>{
        patch({article:form.article.filter((_, j) => j !== i)})
    }
    const moveBlock = (i:number, dir:-1 | 1) =>{
        const j = i + dir
        if(j < 0 || j >= form.article.length) return
        const copy = [...form.article]
        ;[copy[i], copy[j]] = [copy[j], copy[i]]
        patch({article:copy})
    }
    const onBlockImageFile = async (i:number, e:ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files?.[0]
        if(!file) return
        setError(null)
        try{
            const url = await uploadImage(file, "insights/body")
            const b = form.article[i]
            if(b.kind === "image") updateBlock(i, {...b, image:url})
        }catch(err){
            setError(err instanceof Error ? err.message : String(err))
        }finally{
            e.target.value = ""
        }
    }

    // --- save ---
    const onSubmit = async (e:FormEvent) =>{
        e.preventDefault()
        if(saving) return
        setSaving(true); setError(null)
        const payload ={
            title:form.title.trim(),
            slug:form.slug.trim() || slugify(form.title),
            topic:form.topic,
            type:form.type,
            date:form.date.trim(),
            authors:form.authors.split(",").map(a => a.trim()).filter(Boolean),
            cover_url:form.cover_url || null,
            summary:form.summary,
            article:form.article.map(toDbBlock),
            published:form.published,
        }
        const q = isNew
            ? supabase.from("insights").insert(payload).select("id").single()
            : supabase.from("insights").update(payload).eq("id", id!).select("id").single()
        const {data, error:err} = await q
        setSaving(false)
        if(err){ setError(err.message); return }
        if(isNew && data?.id){ navigate(`/admin/insights/${data.id}`, {replace:true}) }
    }

    const onDelete = async () =>{
        if(isNew) return
        if(!confirm(`Delete "${form.title}"? This can't be undone.`)) return
        const {error:err} = await supabase.from("insights").delete().eq("id", id!)
        if(err){ alert(err.message); return }
        navigate("/admin/insights", {replace:true})
    }

    if(loading) return <div className="admin-empty">Loading…</div>

    return <form className="admin-editor" onSubmit={onSubmit}>
        <div className="page-head">
            <h1>{isNew ? "New insight" : "Edit insight"}</h1>
            <div className="actions-row">
                <Link to="/admin/insights" className="btn ghost">Back</Link>
                {!isNew && <button type="button" className="btn danger" onClick={onDelete}>Delete</button>}
                <button type="submit" className="btn orange" disabled={saving}>{saving ? "Saving…" : "Save"}</button>
            </div>
        </div>

        {error && <div className="admin-error">{error}</div>}

        <div className="editor-grid">
            <section className="card">
                <h2>Details</h2>
                <label>
                    Title
                    <input type="text" value={form.title} onChange={e => patch({title:e.target.value})} onBlur={onTitleBlur} required/>
                </label>
                <label>
                    Slug <span className="hint">(URL path, e.g. my-insight-title)</span>
                    <input type="text" value={form.slug} onChange={e => patch({slug:e.target.value})} required/>
                </label>
                <div className="row">
                    <label>
                        Topic
                        <select value={form.topic} onChange={e => patch({topic:e.target.value})}>
                            {TOPICS.map(t => <option key={t}>{t}</option>)}
                        </select>
                    </label>
                    <label>
                        Type
                        <select value={form.type} onChange={e => patch({type:e.target.value})}>
                            {TYPES.map(t => <option key={t}>{t}</option>)}
                        </select>
                    </label>
                </div>
                <div className="row">
                    <label>
                        Date <span className="hint">(any readable format, e.g. "May 12, 2026")</span>
                        <input type="text" value={form.date} onChange={e => patch({date:e.target.value})} required/>
                    </label>
                    <label>
                        Authors <span className="hint">(comma-separated)</span>
                        <input type="text" value={form.authors} onChange={e => patch({authors:e.target.value})} placeholder="Jane Doe, John Smith"/>
                    </label>
                </div>
                <label>
                    Summary
                    <textarea value={form.summary} onChange={e => patch({summary:e.target.value})} rows={3}/>
                </label>
                <label className="checkbox">
                    <input type="checkbox" checked={form.published} onChange={e => patch({published:e.target.checked})}/>
                    Published <span className="hint">(unchecked = draft, hidden from the public site)</span>
                </label>
            </section>

            <section className="card">
                <h2>Cover image</h2>
                {form.cover_url && <img className="cover-preview" src={form.cover_url} alt=""/>}
                <label>
                    URL
                    <input type="text" value={form.cover_url} onChange={e => patch({cover_url:e.target.value})} placeholder="https://…"/>
                </label>
                <label className="file-label">
                    {coverUploading ? "Uploading…" : "Upload image"}
                    <input type="file" accept="image/*" onChange={onCoverFile} disabled={coverUploading}/>
                </label>
            </section>

            <section className="card wide">
                <h2>Article body</h2>
                <p className="hint">Build the article as a sequence of blocks. Paragraph text supports <code>**bold**</code>, <code>*italics*</code> and <code>[link](url)</code>.</p>
                <div className="blocks">
                    {form.article.length === 0 && <div className="blocks-empty">No blocks yet. Add one below.</div>}
                    {form.article.map((b, i) =>(
                        <div key={i} className="block">
                            <div className="block-head">
                                <span className="block-kind">{b.kind}</span>
                                <div className="block-controls">
                                    <button type="button" onClick={() => moveBlock(i, -1)} title="Move up">↑</button>
                                    <button type="button" onClick={() => moveBlock(i, 1)} title="Move down">↓</button>
                                    <button type="button" className="danger" onClick={() => removeBlock(i)} title="Delete">✕</button>
                                </div>
                            </div>
                            {b.kind === "paragraph" && (
                                <textarea value={b.text} rows={4} onChange={e => updateBlock(i, {...b, text:e.target.value})} placeholder="Paragraph text…"/>
                            )}
                            {b.kind === "heading" && (
                                <>
                                    <input type="text" value={b.heading} onChange={e => updateBlock(i, {...b, heading:e.target.value})} placeholder="Heading…"/>
                                    <label className="checkbox inline">
                                        <input type="checkbox" checked={b.sub} onChange={e => updateBlock(i, {...b, sub:e.target.checked})}/>
                                        Smaller sub-heading
                                    </label>
                                </>
                            )}
                            {b.kind === "points" && (
                                <>
                                    <textarea rows={Math.max(3, b.points.length)}
                                        value={b.points.join("\n")}
                                        onChange={e => updateBlock(i, {...b, points:e.target.value.split("\n")})}
                                        placeholder="One bullet per line…"/>
                                    <label className="checkbox inline">
                                        <input type="checkbox" checked={b.ordered} onChange={e => updateBlock(i, {...b, ordered:e.target.checked})}/>
                                        Numbered list
                                    </label>
                                </>
                            )}
                            {b.kind === "image" && (
                                <>
                                    {b.image && <img className="block-preview" src={b.image} alt={b.alt}/>}
                                    <input type="text" value={b.image} onChange={e => updateBlock(i, {...b, image:e.target.value})} placeholder="Image URL…"/>
                                    <label className="file-label small">
                                        Upload image
                                        <input type="file" accept="image/*" onChange={e => onBlockImageFile(i, e)}/>
                                    </label>
                                    <input type="text" value={b.alt} onChange={e => updateBlock(i, {...b, alt:e.target.value})} placeholder="Alt text (describes the image)…"/>
                                    <input type="text" value={b.caption} onChange={e => updateBlock(i, {...b, caption:e.target.value})} placeholder="Caption (optional)…"/>
                                </>
                            )}
                            {b.kind === "video" && (
                                <>
                                    <input type="text" value={b.video} onChange={e => updateBlock(i, {...b, video:e.target.value})} placeholder="YouTube embed URL…"/>
                                    <input type="text" value={b.caption} onChange={e => updateBlock(i, {...b, caption:e.target.value})} placeholder="Caption (optional)…"/>
                                </>
                            )}
                            {b.kind === "quote" && (
                                <textarea value={b.quote} rows={3} onChange={e => updateBlock(i, {...b, quote:e.target.value})} placeholder="Quote text…"/>
                            )}
                        </div>
                    ))}
                </div>
                <div className="add-block">
                    <span className="hint">Add block:</span>
                    <button type="button" onClick={() => addBlock("paragraph")}>Paragraph</button>
                    <button type="button" onClick={() => addBlock("heading")}>Heading</button>
                    <button type="button" onClick={() => addBlock("points")}>Bullet list</button>
                    <button type="button" onClick={() => addBlock("image")}>Image</button>
                    <button type="button" onClick={() => addBlock("video")}>Video</button>
                    <button type="button" onClick={() => addBlock("quote")}>Quote</button>
                </div>
            </section>
        </div>
    </form>
}
