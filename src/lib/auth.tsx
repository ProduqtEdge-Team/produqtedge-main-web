import {createContext, useContext, useEffect, useState, type ReactNode} from "react"
import {Navigate, useLocation} from "react-router-dom"
import type {Session} from "@supabase/supabase-js"
import {supabase} from "./supabase"

type AuthState = {
    session: Session | null
    loading: boolean
    signIn: (email:string, password:string) => Promise<{error?:string}>
    signOut: () => Promise<void>
}

const AuthContext = createContext<AuthState | undefined>(undefined)

// wraps the admin tree, holds the current Supabase session, re-renders on sign in/out
export function AuthProvider({children}:{children:ReactNode}){
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        supabase.auth.getSession().then(({data}) =>{
            setSession(data.session)
            setLoading(false)
        })
        const {data:sub} = supabase.auth.onAuthStateChange((_evt, s) =>{
            setSession(s)
        })
        return () => sub.subscription.unsubscribe()
    }, [])

    const value: AuthState ={
        session,
        loading,
        signIn: async (email, password) =>{
            const {error} = await supabase.auth.signInWithPassword({email, password})
            return {error: error?.message}
        },
        signOut: async () =>{
            await supabase.auth.signOut()
        },
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthState{
    const ctx = useContext(AuthContext)
    if(!ctx) throw new Error("useAuth must be used inside AuthProvider")
    return ctx
}

// gate for /admin/* routes — bounces unauth'd visitors to /admin/login,
// remembering where they came from so we can send them back after sign-in
export function RequireAuth({children}:{children:ReactNode}){
    const {session, loading} = useAuth()
    const location = useLocation()
    if(loading) return <div className="admin-loading">Loading…</div>
    if(!session) return <Navigate to="/admin/login" state={{from:location.pathname}} replace/>
    return <>{children}</>
}
