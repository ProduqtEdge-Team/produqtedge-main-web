import NavBar from "../components/NavBar.tsx";
import "../css/Insights.css"
import {Link} from "react-router-dom";
import {useState} from "react";
import {KeyboardArrowDown} from "@mui/icons-material";
import InsightCard from "../components/InsightCard.tsx";
import {contentTypes, insights, topics} from "../js/insights.ts";

// how many cards show under the featured one, Load more adds the same again
const pageSize = 12

function Insights(){
    const [topic, setTopic] = useState("");
    const [type, setType] = useState("");
    const [open, setOpen] = useState("");
    const [shown, setShown] = useState(pageSize);

    const filters =[
        {title:"Topics", options:topics, value:topic, set:setTopic},
        {title:"Content type", options:contentTypes, value:type, set:setType},
    ]

    // the newest match is featured at the top, the rest fill the grid
    const found = insights.filter((insight) => (topic === "" || insight.topic === topic) && (type === "" || insight.type === type))
    const [featured, ...rest] = found

    const choose = (set: (value: string) => void, value: string) => {
        set(value);
        setOpen("");
        setShown(pageSize);
    }

    return <div>
        <NavBar/>
        <section className="insights-head reveal">
            <h1>Featured Insights</h1>
            <span>
                Explore our research, insights, and examples of real client impact, designed to help you embrace the key forces of change and get to value faster.
            </span>
        </section>
        <section className="insights-filters reveal">
            <div className="bar">
                {filters.map((filter, i) =>(
                    <div className="filter" key={i} onMouseLeave={() => setOpen("")}>
                        <button type="button" onClick={() => setOpen(open === filter.title ? "" : filter.title)}>
                            {filter.value === "" ? filter.title : filter.value} <KeyboardArrowDown className="arrow"/>
                        </button>
                        {open === filter.title && <div className="menu">
                            <button type="button" className={filter.value === "" ? "active" : ""} onClick={() => choose(filter.set, "")}>All</button>
                            {filter.options.map((option, j) =>(
                                <button type="button" key={j} className={filter.value === option ? "active" : ""} onClick={() => choose(filter.set, option)}>{option}</button>
                            ))}
                        </div>}
                    </div>
                ))}
            </div>
        </section>
        {featured === undefined && <section className="insights-none reveal">
            <span>No insights match these filters yet.</span>
        </section>}
        {featured !== undefined && <section className="insights-featured reveal">
            <Link to={`/insights/${featured.slug}`} className="sec-1">
                <img src={featured.cover} alt=""/>
                <div className="content">
                    <span className="topic">{featured.topic}</span>
                    <h2>{featured.title}</h2>
                    <span className="summary">{featured.summary}</span>
                    <span className="meta">{featured.type} <i>•</i> {featured.date}</span>
                </div>
            </Link>
        </section>}
        {rest.length > 0 && <section className="insights-grid reveal">
            <div className="cards stagger">
                {rest.slice(0, shown).map((insight, i) =>(
                    <InsightCard insight={insight} key={i}/>
                ))}
            </div>
            {rest.length > shown && <div className="end">
                <button type="button" onClick={() => setShown(shown + pageSize)}>Load more</button>
            </div>}
        </section>}
    </div>
}

export default Insights;
