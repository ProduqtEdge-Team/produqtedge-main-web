import {useEffect, useState} from "react"
import {supabase, type CaseStudyRow, type InsightRow, type JobRow} from "./supabase"

// public reads for the website. all queries filter on published; the
// anon RLS policy enforces this too, this is just belt-and-braces.

// ---------- shared text helpers ----------
export type Point = string | {text:string, points:string[]}

// ---------- insights ----------
export type InsightBlock = string | {heading:string, sub?:boolean} | {points:Point[], ordered?:boolean}
    | {image:string, alt?:string, caption?:string} | {video:string, caption?:string} | {quote:string}

export type Insight ={
    id:string
    slug:string
    title:string
    topic:string
    type:string
    date:string
    authors:string[]
    cover:string
    summary:string
    article:InsightBlock[]
}

export const INSIGHT_TOPICS = ["Industry Trends and Analysis", "Product Management", "Growth"]
export const INSIGHT_TYPES = ["Article", "Podcast", "Report", "Video", "Webinar"]

function toInsight(row:InsightRow): Insight{
    return {
        id:row.id,
        slug:row.slug,
        title:row.title,
        topic:row.topic,
        type:row.type,
        date:row.date,
        authors:row.authors,
        cover:row.cover_url ?? "",
        summary:row.summary,
        article:(row.article ?? []) as InsightBlock[],
    }
}

export function useInsights(){
    const [insights, setInsights] = useState<Insight[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(() =>{
        supabase.from("insights").select("*").eq("published", true).order("date", {ascending:false}).then(({data, error:err}) =>{
            if(err){ setError(err.message); setLoading(false); return }
            setInsights(((data ?? []) as InsightRow[]).map(toInsight))
            setLoading(false)
        })
    }, [])
    return {insights, loading, error}
}

export function useInsight(slug:string | undefined){
    const [insight, setInsight] = useState<Insight | null>(null)
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    useEffect(() =>{
        if(!slug){ setLoading(false); setNotFound(true); return }
        setLoading(true); setNotFound(false)
        supabase.from("insights").select("*").eq("slug", slug).eq("published", true).maybeSingle().then(({data, error:err}) =>{
            if(err || !data){ setNotFound(true); setLoading(false); return }
            setInsight(toInsight(data as InsightRow))
            setLoading(false)
        })
    }, [slug])
    return {insight, loading, notFound}
}

// ---------- case studies ----------
export type CaseStudyBlock = string | {points:string[], ordered?:boolean}
export type CaseStudySection = {title:string, content:CaseStudyBlock[]}

export type CaseStudy ={
    id:string
    slug:string
    name:string
    logo:string
    path:string
    thumb?:string
    title:string
    heading?:string
    blurb:string
    service:string
    article:CaseStudySection[]
}

function toCaseStudy(row:CaseStudyRow): CaseStudy{
    return {
        id:row.id,
        slug:row.slug,
        name:row.name,
        logo:row.logo_url ?? "",
        path:row.cover_url ?? "",
        thumb:row.thumb_url ?? undefined,
        title:row.title,
        heading:row.heading ?? undefined,
        blurb:row.blurb,
        service:row.service,
        article:(row.article ?? []) as CaseStudySection[],
    }
}

export function useCaseStudies(slugs?:string[]){
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(() =>{
        supabase.from("case_studies").select("*").eq("published", true).order("created_at", {ascending:true}).then(({data, error:err}) =>{
            if(err){ setError(err.message); setLoading(false); return }
            let rows = ((data ?? []) as CaseStudyRow[]).map(toCaseStudy)
            if(slugs){
                const order = new Map(slugs.map((s, i) => [s, i]))
                rows = rows.filter(r => order.has(r.slug)).sort((a, b) => (order.get(a.slug) ?? 0) - (order.get(b.slug) ?? 0))
            }
            setCaseStudies(rows)
            setLoading(false)
        })
    // slugs reference changes should re-run; serialise for a cheap compare
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slugs?.join("|")])
    return {caseStudies, loading, error}
}

export function useCaseStudy(slug:string | undefined){
    const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null)
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    useEffect(() =>{
        if(!slug){ setLoading(false); setNotFound(true); return }
        setLoading(true); setNotFound(false)
        supabase.from("case_studies").select("*").eq("slug", slug).eq("published", true).maybeSingle().then(({data, error:err}) =>{
            if(err || !data){ setNotFound(true); setLoading(false); return }
            setCaseStudy(toCaseStudy(data as CaseStudyRow))
            setLoading(false)
        })
    }, [slug])
    return {caseStudy, loading, notFound}
}

// ---------- jobs ----------
export type JobSection = {title:string, sub?:boolean, content?:string[], points?:Point[], ordered?:boolean}

export type Job ={
    id:string
    slug:string
    title:string
    tags:string[]
    link?:string
    location:string
    details:{title:string, content:string}[]
    article:JobSection[]
}

export const CAREER_PERKS = [
    "Hybrid opportunities with a headquarters in Lagos",
    "Collaborative team culture with a focus on creativity and innovation",
    "Opportunities for growth and development",
    "Ability to contribute to our mission of helping people",
]

function toJob(row:JobRow): Job{
    return {
        id:row.id,
        slug:row.slug,
        title:row.title,
        tags:row.tags,
        link:row.link ?? undefined,
        location:row.location,
        details:(row.details ?? []) as {title:string, content:string}[],
        article:(row.article ?? []) as JobSection[],
    }
}

export function useJobs(){
    const [jobs, setJobs] = useState<Job[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(() =>{
        supabase.from("jobs").select("*").eq("published", true).eq("is_open", true).order("created_at", {ascending:true}).then(({data, error:err}) =>{
            if(err){ setError(err.message); setLoading(false); return }
            setJobs(((data ?? []) as JobRow[]).map(toJob))
            setLoading(false)
        })
    }, [])
    return {jobs, loading, error}
}

export function useJob(slug:string | undefined){
    const [job, setJob] = useState<Job | null>(null)
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    useEffect(() =>{
        if(!slug){ setLoading(false); setNotFound(true); return }
        setLoading(true); setNotFound(false)
        supabase.from("jobs").select("*").eq("slug", slug).eq("published", true).maybeSingle().then(({data, error:err}) =>{
            if(err || !data){ setNotFound(true); setLoading(false); return }
            setJob(toJob(data as JobRow))
            setLoading(false)
        })
    }, [slug])
    return {job, loading, notFound}
}
