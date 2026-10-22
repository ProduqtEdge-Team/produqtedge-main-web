import {useState} from "react"
import {supabase} from "../../lib/supabase"
import {insights as staticInsights, type InsightBlock as StaticInsightBlock} from "../../js/insights"
import {caseStudies as staticCaseStudies} from "../../js/caseStudies"
import {jobs as staticJobs} from "../../js/careers"

// one-time migration from the static TS arrays into Supabase. idempotent:
// slugs are the natural key so re-running updates in place. images are
// re-fetched from Vite's bundle at runtime and uploaded to the content bucket.

type Log = {kind:"info" | "ok" | "err", text:string}

function extFromUrl(url:string): string{
    const clean = url.split("?")[0].split("#")[0]
    const dot = clean.lastIndexOf(".")
    if(dot < 0) return "jpg"
    return clean.slice(dot + 1).toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg"
}

async function uploadFromBundleUrl(bundleUrl:string, storagePath:string): Promise<string>{
    const res = await fetch(bundleUrl)
    if(!res.ok) throw new Error(`fetch failed for ${bundleUrl}: ${res.status}`)
    const blob = await res.blob()
    const {error} = await supabase.storage.from("content").upload(storagePath, blob, {upsert:true, contentType:blob.type})
    if(error) throw new Error(`upload failed for ${storagePath}: ${error.message}`)
    return supabase.storage.from("content").getPublicUrl(storagePath).data.publicUrl
}

export default function AdminMigrate(){
    const [running, setRunning] = useState(false)
    const [log, setLog] = useState<Log[]>([])
    const [done, setDone] = useState(false)

    const push = (entry:Log) => setLog(l => [...l, entry])

    const run = async () =>{
        setRunning(true); setLog([]); setDone(false)
        try{
            push({kind:"info", text:`Migrating ${staticInsights.length} insights…`})
            for(const ins of staticInsights){
                try{
                    const coverPath = `migrated/insights/${ins.slug}/cover.${extFromUrl(ins.cover)}`
                    const coverUrl = await uploadFromBundleUrl(ins.cover, coverPath)
                    const article: unknown[] = []
                    let imgIdx = 0
                    for(const block of ins.article as StaticInsightBlock[]){
                        if(typeof block === "object" && block !== null && "image" in block){
                            const path = `migrated/insights/${ins.slug}/body-${imgIdx++}.${extFromUrl(block.image)}`
                            const url = await uploadFromBundleUrl(block.image, path)
                            article.push({image:url, ...(block.alt && {alt:block.alt}), ...(block.caption && {caption:block.caption})})
                        }else{
                            article.push(block)
                        }
                    }
                    const payload ={
                        slug:ins.slug, title:ins.title, topic:ins.topic, type:ins.type, date:ins.date,
                        authors:ins.authors, cover_url:coverUrl, summary:ins.summary, article, published:true,
                    }
                    const {error} = await supabase.from("insights").upsert(payload, {onConflict:"slug"})
                    if(error) throw error
                    push({kind:"ok", text:`✓ insight: ${ins.title}`})
                }catch(err){
                    push({kind:"err", text:`✗ insight ${ins.slug}: ${err instanceof Error ? err.message : String(err)}`})
                }
            }

            push({kind:"info", text:`Migrating ${staticCaseStudies.length} case studies…`})
            for(const cs of staticCaseStudies){
                try{
                    const coverUrl = cs.path ? await uploadFromBundleUrl(cs.path, `migrated/case-studies/${cs.slug}/cover.${extFromUrl(cs.path)}`) : null
                    const logoUrl = cs.logo ? await uploadFromBundleUrl(cs.logo, `migrated/case-studies/${cs.slug}/logo.${extFromUrl(cs.logo)}`) : null
                    const thumbUrl = cs.thumb ? await uploadFromBundleUrl(cs.thumb, `migrated/case-studies/${cs.slug}/thumb.${extFromUrl(cs.thumb)}`) : null
                    const payload ={
                        slug:cs.slug, name:cs.name, logo_url:logoUrl, cover_url:coverUrl, thumb_url:thumbUrl,
                        title:cs.title, heading:cs.heading ?? null, blurb:cs.blurb, service:cs.service,
                        article:cs.article, published:true,
                    }
                    const {error} = await supabase.from("case_studies").upsert(payload, {onConflict:"slug"})
                    if(error) throw error
                    push({kind:"ok", text:`✓ case study: ${cs.title}`})
                }catch(err){
                    push({kind:"err", text:`✗ case study ${cs.slug}: ${err instanceof Error ? err.message : String(err)}`})
                }
            }

            push({kind:"info", text:`Migrating ${staticJobs.length} jobs…`})
            for(const job of staticJobs){
                try{
                    const payload ={
                        slug:job.slug, title:job.title, tags:job.tags, link:job.link ?? null,
                        location:job.location, details:job.details, article:job.article,
                        is_open:true, published:true,
                    }
                    const {error} = await supabase.from("jobs").upsert(payload, {onConflict:"slug"})
                    if(error) throw error
                    push({kind:"ok", text:`✓ job: ${job.title}`})
                }catch(err){
                    push({kind:"err", text:`✗ job ${job.slug}: ${err instanceof Error ? err.message : String(err)}`})
                }
            }

            push({kind:"info", text:"Done."})
            setDone(true)
        }finally{
            setRunning(false)
        }
    }

    return <>
        <div className="page-head">
            <h1>Migrate content</h1>
            <button type="button" className="btn orange" onClick={run} disabled={running}>
                {running ? "Migrating…" : done ? "Run again" : "Run migration"}
            </button>
        </div>
        <div className="card" style={{padding:20, background:"#ffffff", borderRadius:8}}>
            <p className="hint">
                Pushes every insight, case study and job currently in <code>src/js/*.ts</code> into Supabase.
                Covers and body images are uploaded to the <code>content</code> bucket.
                Safe to re-run: rows are upserted on slug, images on path.
                Delete this page from the sidebar once the migration has run once on production.
            </p>
            {log.length > 0 && <pre className="migrate-log">
                {log.map((entry, i) => <div key={i} className={`log-${entry.kind}`}>{entry.text}</div>)}
            </pre>}
        </div>
    </>
}
