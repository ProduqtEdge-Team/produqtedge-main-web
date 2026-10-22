import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {supabase, type InsightRow} from "../../lib/supabase"

export default function AdminInsights(){
    const [rows, setRows] = useState<InsightRow[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const load = async () =>{
        setLoading(true)
        setError(null)
        const {data, error:err} = await supabase
            .from("insights")
            .select("*")
            .order("date", {ascending:false})
        if(err){ setError(err.message); setLoading(false); return }
        setRows((data ?? []) as InsightRow[])
        setLoading(false)
    }

    useEffect(() =>{ load() }, [])

    const onDelete = async (row:InsightRow) =>{
        if(!confirm(`Delete "${row.title}"? This can't be undone.`)) return
        const {error:err} = await supabase.from("insights").delete().eq("id", row.id)
        if(err){ alert(err.message); return }
        setRows(rows.filter(r => r.id !== row.id))
    }

    const onTogglePublish = async (row:InsightRow) =>{
        const next = !row.published
        const {error:err} = await supabase.from("insights").update({published:next}).eq("id", row.id)
        if(err){ alert(err.message); return }
        setRows(rows.map(r => r.id === row.id ? {...r, published:next} : r))
    }

    return <>
        <div className="page-head">
            <h1>Insights</h1>
            <Link to="/admin/insights/new" className="btn orange">+ New insight</Link>
        </div>

        {error && <div className="admin-error">{error}</div>}

        {loading
            ? <div className="admin-empty">Loading…</div>
            : rows.length === 0
                ? <div className="admin-empty">No insights yet. Create the first one.</div>
                : <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row =>(
                            <tr key={row.id}>
                                <td>{row.title}</td>
                                <td>{row.topic}</td>
                                <td>{row.date}</td>
                                <td><span className={`badge ${row.published ? "published" : "draft"}`}>{row.published ? "Published" : "Draft"}</span></td>
                                <td>
                                    <div className="actions">
                                        <Link to={`/admin/insights/${row.id}`}>Edit</Link>
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
