import {useState, type FormEvent} from "react"
import {Navigate, useLocation, useNavigate} from "react-router-dom"
import {useAuth} from "../../lib/auth"
import "../../css/Admin.css"

export default function AdminLogin(){
    const {session, signIn} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [busy, setBusy] = useState(false)

    // already signed in: skip the form and send them straight through
    if(session){
        const dest = (location.state as {from?:string} | null)?.from ?? "/admin/insights"
        return <Navigate to={dest} replace/>
    }

    const onSubmit = async (e:FormEvent) =>{
        e.preventDefault()
        setBusy(true)
        setError(null)
        const {error:err} = await signIn(email, password)
        setBusy(false)
        if(err){ setError(err); return }
        const dest = (location.state as {from?:string} | null)?.from ?? "/admin/insights"
        navigate(dest, {replace:true})
    }

    return <div className="admin-login">
        <form onSubmit={onSubmit}>
            <h1>Admin sign in</h1>
            {error && <div className="admin-error">{error}</div>}
            <label>
                Email
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" required/>
            </label>
            <label>
                Password
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" required/>
            </label>
            <button type="submit" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
        </form>
    </div>
}
