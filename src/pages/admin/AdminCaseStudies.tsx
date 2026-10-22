import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {supabase, type CaseStudyRow} from "../../lib/supabase"

export default function AdminCaseStudies(){
    const [rows, setRows] = useState<CaseStudyRow[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const load = async () =>{
        setLoading(true); setError(null)
        const {data, error:err} = await supabase.from("case_studies").select("*").order("created_at", {ascending:true})
        if(err){ setError(err.message); setLoading(false); return }
        setRows((data ?? []) as CaseStudyRow[])
        setLoading(false)
    }
    useEffect(() =>{ load() }, [])

    const onDelete = async (row:CaseStudyRow) =>{
        if(!confirm(`Delete "${row.title}"? This can't be undone.`)) return
        const {error:err} = await supabase.from("case_studies").delete().eq("id", row.id)
        if(err){ alert(err.message); return }
        setRows(rows.filter(r => r.id !== row.id))
    }

    const onTogglePublish = async (row:CaseStudyRow) =>{
        const next = !row.published
        const {error:err} = await supabase.from("case_studies").update({published:next}).eq("id", row.id)
        if(err){ alert(err.message); return }
        setRows(rows.map(r => r.id === row.id ? {...r, published:next} : r))
    }

    return <>
        <div className="page-head">
            <h1>Case Studies</h1>
            <Link to="/admin/case-studies/new" className="btn orange">+ New case study</Link>
        </div>
        {error && <div className="admin-error">{error}</div>}
        {loading
            ? <div className="admin-empty">Loading…</div>
            : rows.length === 0
                ? <div className="admin-empty">No case studies yet. Create the first one.</div>
                : <table className="admin-table">
                    <thead>
                        <tr><th>Title</th><th>Client</th><th>Service</th><th>Status</th><th></th></tr>
                    </thead>
                    <tbody>
                        {rows.map(row =>(
                            <tr key={row.id}>
                                <td>{row.title}</td>
                                <td>{row.name}</td>
                                <td>{row.service}</td>
                                <td><span className={`badge ${row.published ? "published" : "draft"}`}>{row.published ? "Published" : "Draft"}</span></td>
                                <td>
                                    <div className="actions">
                                        <Link to={`/admin/case-studies/${row.id}`}>Edit</Link>
                                        <button type="button" onClick={() => onTogglePublish(row)}>{row.published ? "Unpublish" : "Publish"}</button>
                                        <button type="button" className="danger" onClick={() => onDelete(row)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        }
    </>
}
