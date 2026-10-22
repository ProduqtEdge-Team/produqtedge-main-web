import {Link} from "react-router-dom";
import "../css/InsightCard.css"
import type {Insight} from "../lib/content.ts";

// image, topic, title, summary and "type • date", used on /insights and under each article
function InsightCard({insight}: {insight:Insight}){
    return <Link to={`/insights/${insight.slug}`} className="insight-card">
        <img src={insight.cover} alt=""/>
        <span className="topic">{insight.topic}</span>
        <h3>{insight.title}</h3>
        <span className="summary">{insight.summary}</span>
        <span className="meta">{insight.type} <i>•</i> {insight.date}</span>
    </Link>
}

export default InsightCard;
