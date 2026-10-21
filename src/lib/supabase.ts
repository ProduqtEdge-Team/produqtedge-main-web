import {createClient} from "@supabase/supabase-js"

// supabase client used by the admin UI (auth, writes) and by the public pages (reads)
// vars live in .env.local, see .env.example for the template
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabaseConfigured = Boolean(url && anonKey)

if(!supabaseConfigured){
    // surface the misconfig once rather than silently failing on first query.
    // we still fall through to createClient with a placeholder so importing this
    // module from a public page never throws at load time.
    console.warn("Supabase env vars missing — set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local before using the admin")
}

export const supabase = createClient(
    url || "https://placeholder.supabase.co",
    anonKey || "placeholder-anon-key",
    {auth: {persistSession:true, autoRefreshToken:true}},
)

// row shapes mirror the schema.sql tables
export type InsightRow = {
    id: string
    slug: string
    title: string
    topic: string
    type: string
    date: string
    authors: string[]
    cover_url: string | null
    summary: string
    article: unknown[]
    published: boolean
    created_at: string
    updated_at: string
}

export type CaseStudyRow = {
    id: string
    slug: string
    name: string
    logo_url: string | null
    cover_url: string | null
    thumb_url: string | null
    title: string
    heading: string | null
    blurb: string
    service: string
    article: unknown[]
    published: boolean
    created_at: string
    updated_at: string
}

export type JobRow = {
    id: string
    slug: string
    title: string
    tags: string[]
    link: string | null
    location: string
    details: unknown[]
    article: unknown[]
    is_open: boolean
    published: boolean
    created_at: string
    updated_at: string
}
