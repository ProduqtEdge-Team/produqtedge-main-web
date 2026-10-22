import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {supabase, type JobRow} from "../../lib/supabase"

export default function AdminJobs(){
    const [rows, setRows] = useState<JobRow[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const load = async () =>{
        setLoading(true); setError(null)
        const {data, error:err} = await supabase.from("jobs").select("*").order("created_at", {ascending:true})
        if(err){ setError(err.message); setLoading(false); return }
        setRows((data ?? []) as JobRow[])
        setLoading(false)
    }
    useEffect(() =>{ load() }, [])

    const onDelete = async (row:JobRow) =>{
        if(!confirm(`Delete "${row.title}"? This can't be undone.`)) return
        const {error:err} = await supabase.from("jobs").delete().eq("id", row.id)
        if(err){ alert(err.message); return }
        setRows(rows.filter(r => r.id !== row.id))
    }

    const onTogglePublish = async (row:JobRow) =>{
        const next = !row.published
        const {error:err} = await supabase.from("jobs").update({published:next}).eq("id", row.id)
        if(err){ alert(err.message); return }
        setRows(rows.map(r => r.id === row.id ? {...r, published:next} : r))
    }

    return <>
        <div className="page-head">
            <h1>Jobs</h1>
            <Link to="/admin/jobs/new" className="btn orange">+ New job</Link>
        </div>
        {error && <div className="admin-error">{error}</div>}
        {loading
            ? <div className="admin-empty">Loading…</div>
            : rows.length === 0
                ? <div className="admin-empty">No jobs yet. Create the first one.</div>
                : <table className="admin-table">
                    <thead>
                        <tr><th>Title</th><th>Tags</th><th>External link?</th><th>Open</th><th>Status</th><th></th></tr>
                    </thead>
                    <tbody>
                        {rows.map(row =>(
                            <tr key={row.id}>
                                <td>{row.title}</td>
                                <td>{row.tags.join(" | ")}</td>
                                <td>{row.link ? "Yes" : "—"}</td>
                                <td>{row.is_open ? "Open" : "Closed"}</td>
                                <td><span className={`badge ${row.published ? "published" : "draft"}`}>{row.published ? "Published" : "Draft"}</span></td>
                                <td>
                                    <div className="actions">
                                        <Link to={`/admin/jobs/${row.id}`}>Edit</Link>
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
