import {NavLink, Outlet, useNavigate} from "react-router-dom"
import {useAuth} from "../../lib/auth"
import "../../css/Admin.css"

// shared shell for every /admin/* page: sidebar nav + <Outlet/> for the content
export default function AdminLayout(){
    const {signOut, session} = useAuth()
    const navigate = useNavigate()

    const onSignOut = async () =>{
        await signOut()
        navigate("/admin/login", {replace:true})
    }

    return <div className="admin-shell">
        <aside className="admin-sidebar">
            <div className="brand">ProduqtEdge CRM</div>
            <nav>
                <NavLink to="/admin/insights" className={({isActive}) => isActive ? "active" : ""}>Insights</NavLink>
                <NavLink to="/admin/case-studies" className={({isActive}) => isActive ? "active" : ""}>Case Studies</NavLink>
                <NavLink to="/admin/jobs" className={({isActive}) => isActive ? "active" : ""}>Jobs</NavLink>
            </nav>
            <div className="footer">
                <span>{session?.user?.email}</span>
                <button type="button" onClick={onSignOut}>Sign out</button>
            </div>
        </aside>
        <main className="admin-main">
            <Outlet/>
        </main>
    </div>
}
