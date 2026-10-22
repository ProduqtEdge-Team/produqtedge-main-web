import {useEffect, useState, type FormEvent} from "react"
import {Link, useNavigate, useParams} from "react-router-dom"
import {supabase, type JobRow} from "../../lib/supabase"

type Detail = {title:string, content:string}
type Section = {title:string, sub:boolean, paragraphs:string[], points:string[], ordered:boolean}

type DbSection = {title:string, sub?:boolean, content?:string[], points?:string[], ordered?:boolean}

function toDbSection(s:Section): DbSection{
    const out: DbSection = {title:s.title}
    if(s.sub) out.sub = true
    const paras = s.paragraphs.filter(p => p.trim())
    if(paras.length) out.content = paras
    const pts = s.points.filter(p => p.trim())
    if(pts.length){ out.points = pts; if(s.ordered) out.ordered = true }
    return out
}

function fromDbSection(raw:unknown): Section | null{
    if(!raw || typeof raw !== "object") return null
    const o = raw as Record<string, unknown>
    const title = typeof o.title === "string" ? o.title : ""
    const paragraphs = Array.isArray(o.content) ? (o.content as unknown[]).map(c => typeof c === "string" ? c : "") : []
    const pointsRaw = Array.isArray(o.points) ? (o.points as unknown[]) : []
    const points = pointsRaw.map(p => typeof p === "string" ? p : (p && typeof p === "object" && typeof (p as Record<string, unknown>).text === "string" ? (p as Record<string, unknown>).text as string : ""))
    return {title, sub:o.sub === true, paragraphs, points, ordered:o.ordered === true}
}

function slugify(s:string): string{
    return s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 80)
}

type FormState ={
    slug:string
    title:string
    tags:string
    link:string
    location:string
    details:Detail[]
    article:Section[]
    is_open:boolean
    published:boolean
}

const EMPTY: FormState ={
    slug:"", title:"", tags:"", link:"", location:"",
    details:[], article:[], is_open:true, published:false,
}

export default function AdminJobEdit(){
    const {id} = useParams()
    const navigate = useNavigate()
    const isNew = !id || id === "new"
    const [form, setForm] = useState<FormState>(EMPTY)
    const [loading, setLoading] = useState(!isNew)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() =>{
        if(isNew){ setLoading(false); return }
        supabase.from("jobs").select("*").eq("id", id).single().then(({data, error:err}) =>{
            if(err){ setError(err.message); setLoading(false); return }
            const row = data as JobRow
            const sections = (row.article ?? []).map(fromDbSection).filter((s): s is Section => s !== null)
            setForm({
                slug:row.slug, title:row.title, tags:row.tags.join(", "), link:row.link ?? "", location:row.location,
                details:(row.details ?? []) as Detail[],
                article:sections, is_open:row.is_open, published:row.published,
            })
            setLoading(false)
        })
    }, [id, isNew])

    const patch = (p:Partial<FormState>) => setForm(f => ({...f, ...p}))

    const onTitleBlur = () =>{
        if(!form.slug && form.title){ patch({slug:slugify(form.title)}) }
    }

    // --- details repeater ---
    const addDetail = () => patch({details:[...form.details, {title:"", content:""}]})
    const updateDetail = (i:number, next:Detail) =>{
        const copy = [...form.details]; copy[i] = next; patch({details:copy})
    }
    const removeDetail = (i:number) => patch({details:form.details.filter((_, j) => j !== i)})

    // --- sections ---
    const addSection = () => patch({article:[...form.article, {title:"", sub:false, paragraphs:[""], points:[], ordered:false}]})
    const updateSection = (i:number, next:Section) =>{
        const copy = [...form.article]; copy[i] = next; patch({article:copy})
    }
    const removeSection = (i:number) => patch({article:form.article.filter((_, j) => j !== i)})
    const moveSection = (i:number, dir:-1 | 1) =>{
        const j = i + dir; if(j < 0 || j >= form.article.length) return
        const copy = [...form.article]; [copy[i], copy[j]] = [copy[j], copy[i]]; patch({article:copy})
    }

    const onSubmit = async (e:FormEvent) =>{
        e.preventDefault()
        if(saving) return
        setSaving(true); setError(null)
        const payload ={
            slug:form.slug.trim() || slugify(form.title),
            title:form.title.trim(),
            tags:form.tags.split(",").map(t => t.trim()).filter(Boolean),
            link:form.link.trim() || null,
            location:form.location.trim(),
            details:form.details.filter(d => d.title || d.content),
            article:form.article.map(toDbSection),
            is_open:form.is_open,
            published:form.published,
        }
        const q = isNew
            ? supabase.from("jobs").insert(payload).select("id").single()
            : supabase.from("jobs").update(payload).eq("id", id!).select("id").single()
        const {data, error:err} = await q
        setSaving(false)
        if(err){ setError(err.message); return }
        if(isNew && data?.id){ navigate(`/admin/jobs/${data.id}`, {replace:true}) }
    }

    const onDelete = async () =>{
        if(isNew) return
        if(!confirm(`Delete "${form.title}"? This can't be undone.`)) return
        const {error:err} = await supabase.from("jobs").delete().eq("id", id!)
        if(err){ alert(err.message); return }
        navigate("/admin/jobs", {replace:true})
    }

    if(loading) return <div className="admin-empty">Loading…</div>

    return <form className="admin-editor" onSubmit={onSubmit}>
        <div className="page-head">
            <h1>{isNew ? "New job" : "Edit job"}</h1>
            <div className="actions-row">
                <Link to="/admin/jobs" className="btn ghost">Back</Link>
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
                    Slug <span className="hint">(URL path)</span>
                    <input type="text" value={form.slug} onChange={e => patch({slug:e.target.value})} required/>
                </label>
                <label>
                    Tags <span className="hint">(comma-separated — e.g. "Delivery, Lagos Hybrid, Fulltime")</span>
                    <input type="text" value={form.tags} onChange={e => patch({tags:e.target.value})}/>
                </label>
                <label>
                    External link <span className="hint">(if set, the card opens this URL instead of the on-site job page)</span>
                    <input type="text" value={form.link} onChange={e => patch({link:e.target.value})} placeholder="https://…"/>
                </label>
                <label>
                    Location
                    <input type="text" value={form.location} onChange={e => patch({location:e.target.value})}/>
                </label>
                <label className="checkbox">
                    <input type="checkbox" checked={form.is_open} onChange={e => patch({is_open:e.target.checked})}/>
                    Open to applications
                </label>
                <label className="checkbox">
                    <input type="checkbox" checked={form.published} onChange={e => patch({published:e.target.checked})}/>
                    Published
                </label>
            </section>

            <section className="card">
                <h2>Sidebar details</h2>
                <p className="hint">Appears in the aside on the job page (e.g. "Reports to: Engineering Manager").</p>
                {form.details.map((d, i) =>(
                    <div key={i} className="block">
                        <div className="block-head">
                            <span className="block-kind">Detail {i + 1}</span>
                            <div className="block-controls">
                                <button type="button" className="danger" onClick={() => removeDetail(i)}>✕</button>
                            </div>
                        </div>
                        <input type="text" value={d.title} onChange={e => updateDetail(i, {...d, title:e.target.value})} placeholder="Label (e.g. Reports to)"/>
                        <input type="text" value={d.content} onChange={e => updateDetail(i, {...d, content:e.target.value})} placeholder="Value"/>
                    </div>
                ))}
                <div className="add-block">
                    <button type="button" onClick={addDetail}>+ Add detail</button>
                </div>
            </section>

            <section className="card wide">
                <h2>Article sections</h2>
                <p className="hint">
                    If this job uses an external link, you can leave sections empty.
                    Otherwise each section is a heading + paragraphs + optional bullet list.
                </p>
                <div className="blocks">
                    {form.article.length === 0 && <div className="blocks-empty">No sections yet.</div>}
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
                            <label className="checkbox inline">
                                <input type="checkbox" checked={section.sub} onChange={e => updateSection(i, {...section, sub:e.target.checked})}/>
                                Smaller sub-heading
                            </label>
                            <label>
                                Paragraphs <span className="hint">(one per blank-line-separated group)</span>
                                <textarea rows={5} value={section.paragraphs.join("\n\n")}
                                    onChange={e => updateSection(i, {...section, paragraphs:e.target.value.split(/\n\n+/)})}
                                    placeholder="Paragraph one.&#10;&#10;Paragraph two."/>
                            </label>
                            <label>
                                Bullet list <span className="hint">(one per line)</span>
                                <textarea rows={Math.max(2, section.points.length)} value={section.points.join("\n")}
                                    onChange={e => updateSection(i, {...section, points:e.target.value.split("\n").filter(l => l !== "" || section.points.includes(""))})}
                                    placeholder="One bullet per line…"/>
                            </label>
                            <label className="checkbox inline">
                                <input type="checkbox" checked={section.ordered} onChange={e => updateSection(i, {...section, ordered:e.target.checked})}/>
                                Numbered list
                            </label>
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
