import NavBar from "../components/NavBar.tsx";
import "../css/Insight.css"
import {Link, Navigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {ArrowBack, AccessTime} from "@mui/icons-material";
import InsightCard from "../components/InsightCard.tsx";
import SectionHeader from "../components/SectionHeader.tsx";
import {insights} from "../js/insights.ts";
import type {InsightBlock} from "../js/insights.ts";
import {rich} from "../js/text.tsx";
import type {Point} from "../js/text.tsx";

// a point with sub points gets its own nested list
const point = (item: Point, i: number) => typeof item === "string"
    ? <li key={i}>{rich(item)}</li>
    : <li key={i}>{rich(item.text)}<ul>{item.points.map((sub, j) => <li key={j}>{rich(sub)}</li>)}</ul></li>

const block = (item: InsightBlock, i: number) => {
    if (typeof item === "string") return <p key={i}>{rich(item)}</p>
    if ("heading" in item) return item.sub ? <h3 key={i}>{rich(item.heading)}</h3> : <h2 key={i}>{rich(item.heading)}</h2>
    if ("points" in item) return item.ordered ? <ol key={i}>{item.points.map(point)}</ol> : <ul key={i}>{item.points.map(point)}</ul>
    if ("image" in item) return <figure key={i}>
        <img src={item.image} alt={item.alt ?? ""}/>
        {item.caption !== undefined && <figcaption>{rich(item.caption)}</figcaption>}
    </figure>
    if ("video" in item) return <figure key={i}>
        <iframe src={item.video} title={item.caption ?? "Video"} allowFullScreen/>
        {item.caption !== undefined && <figcaption>{rich(item.caption)}</figcaption>}
    </figure>
    return <blockquote key={i}>{rich(item.quote)}</blockquote>
}

// every piece of text in a block, for the reading time
const words = (item: InsightBlock): string[] => {
    if (typeof item === "string") return [item]
    if ("heading" in item) return [item.heading]
    if ("points" in item) return item.points.flatMap((p) => typeof p === "string" ? [p] : [p.text, ...p.points])
    if ("quote" in item) return [item.quote]
    return item.caption !== undefined ? [item.caption] : []
}

function Insight(){
    const {slug} = useParams();
    const insight = insights.find((item) => item.slug === slug);

    // start at the top whenever a different article is opened
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!insight) return <Navigate to="/insights" replace/>

    // about 200 words a minute
    const minutes = Math.max(1, Math.round(insight.article.flatMap(words).join(" ").split(/\s+/).length / 200))
    // same topic first, then the newest of the rest
    const others = insights.filter((item) => item.slug !== insight.slug)
    const more = [...others.filter((item) => item.topic === insight.topic), ...others.filter((item) => item.topic !== insight.topic)].slice(0, 4)

    return <div>
        <NavBar/>
        <section className="insight-head">
            <div className="sec-1">
                <Link to="/insights" className="back"><ArrowBack/> ProduqtEdge Blog</Link>
                <span className="topic">{insight.topic}</span>
                <h1>{insight.title}</h1>
                <span className="summary">{insight.summary}</span>
                <div className="meta">
                    <span>By {insight.authors.join(", ")}</span>
                    <span>{insight.date}</span>
                </div>
            </div>
            <img className="sec-2" src={insight.cover} alt=""/>
        </section>
        <section className="insight-body">
            <span className="read"><AccessTime/> {minutes} min read</span>
            <div className="article">
                {insight.article.map(block)}
            </div>
        </section>
        <section className="insight-more">
            <SectionHeader>Keep Reading</SectionHeader>
            <div className="cards">
                {more.map((item, i) =>(
                    <InsightCard insight={item} key={i}/>
                ))}
            </div>
        </section>
    </div>
}

export default Insight;
