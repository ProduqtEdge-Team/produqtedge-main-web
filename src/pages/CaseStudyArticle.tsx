import NavBar from "../components/NavBar.tsx";
import "../css/CaseStudyArticle.css"
import {Link, Navigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import CaseStudyCards from "../components/CaseStudyCards.tsx";
import {caseStudies} from "../js/caseStudies.ts";
import {bold} from "../js/text.tsx";

function CaseStudyArticle(){
    const {slug} = useParams();
    const study = caseStudies.find((item) => item.slug === slug);

    // start at the top whenever a different study is opened
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!study) return <Navigate to="/case-studies" replace/>

    // about 200 words a minute
    const words = study.article.flatMap((section) => section.content)
        .flatMap((block) => typeof block === "string" ? block : block.points).join(" ").split(/\s+/).length
    const minutes = Math.max(1, Math.round(words / 200))

    return <div>
        <NavBar/>
        <section className="study-hero">
            <img className="sec-2" src={study.path} alt=""/>
            <div className="sec-1">
                <img className="logo" src={study.logo} alt={study.name}/>
                <h1>{study.heading ?? study.title}</h1>
                {study.blurb !== "" && <span className="blurb">{study.blurb}</span>}
                {study.article.length > 0 && <span className="read">{minutes} mins read</span>}
            </div>
        </section>
        {study.article.length > 0 && <section className="study-body">
            <div className="article">
                {study.article.map((section, i) =>(
                    <div key={i}>
                        <h2>{section.title}</h2>
                        {section.content.map((block, j) => typeof block === "string"
                            ? <p key={j}>{bold(block)}</p>
                            : block.ordered
                                ? <ol key={j}>{block.points.map((point, k) => <li key={k}>{bold(point)}</li>)}</ol>
                                : <ul key={j}>{block.points.map((point, k) => <li key={k}>{bold(point)}</li>)}</ul>
                        )}
                    </div>
                ))}
            </div>
            {study.service !== "" && <aside>
                <h3>Related Consulting service</h3>
                <Link to="/services">{study.service}</Link>
            </aside>}
        </section>}
        <section className="study-more">
            <h2>How we’ve helped clients</h2>
            <CaseStudyCards/>
        </section>
    </div>
}

export default CaseStudyArticle;
