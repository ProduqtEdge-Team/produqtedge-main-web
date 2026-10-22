import NavBar from "../components/NavBar.tsx";
import "../css/Job.css"
import {Link, Navigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ArrowBack, ArrowForward, ContentCopy} from "@mui/icons-material";
import {useJob, type Point} from "../lib/content.ts";
import {bold} from "../js/text.tsx";

const email = "info@produqtedge.com"

// a point with sub points gets its own nested list
const point = (item: Point, i: number) => typeof item === "string"
    ? <li key={i}>{bold(item)}</li>
    : <li key={i}>{bold(item.text)}<ul>{item.points.map((sub, j) => <li key={j}>{bold(sub)}</li>)}</ul></li>

function Job(){
    const {slug} = useParams();
    const {job, loading, notFound} = useJob(slug);
    // slug of the job whose link was copied, so the label resets on another job
    const [copied, setCopied] = useState("");

    // start at the top whenever a different job is opened
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return <div className="job-loading">Loading…</div>
    if (notFound || !job) return <Navigate to="/careers" replace/>

    const copyLink = () => {
        // browsers can refuse clipboard access, the label just stays as it is then
        navigator.clipboard.writeText(window.location.href).then(() => setCopied(job.slug)).catch(() => {});
    }

    return <div>
        <NavBar/>
        <section className="job-head">
            <Link to="/careers#positions" className="back"><ArrowBack/> Job openings</Link>
            <div className="sec-1">
                <div>
                    <h1>{job.title}</h1>
                    {job.location !== "" && <span>{job.location}</span>}
                </div>
                <div className="buttons">
                    <button className="copy" onClick={copyLink}><ContentCopy/> {copied === job.slug ? "Link copied" : "Copy link"}</button>
                    <a className="apply" href={`mailto:${email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}>Apply <ArrowForward/></a>
                </div>
            </div>
        </section>
        {job.article.length > 0 && <section className="job-body">
            <div className="article">
                {job.article.map((section, i) =>(
                    <div key={i} className={section.sub ? "sub" : ""}>
                        {section.sub ? <h3>{section.title}</h3> : <h2>{section.title}</h2>}
                        {section.content?.map((paragraph, j) =>(
                            <p key={j}>{bold(paragraph)}</p>
                        ))}
                        {section.points !== undefined && (section.ordered
                            ? <ol>{section.points.map(point)}</ol>
                            : <ul>{section.points.map(point)}</ul>)}
                    </div>
                ))}
                <p className="questions"><b>Questions?</b> Please contact <a href={`mailto:${email}`}>{email}</a></p>
            </div>
            <aside>
                {job.details.map((detail, i) =>(
                    <div key={i}>
                        <span>{detail.title}</span>
                        <b>{detail.content}</b>
                    </div>
                ))}
            </aside>
        </section>}
    </div>
}

export default Job;
