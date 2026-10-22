import {Link} from "react-router-dom";
import "../css/CaseStudyCards.css"
import {useCaseStudies} from "../lib/content.ts";

// grid of case study cards, used on /case-studies, under each article and on each service page
// slugs picks which studies show, all of them when it's left out
function CaseStudyCards({slugs}: {slugs?:string[]}){
    const {caseStudies} = useCaseStudies(slugs);
    return <div className="case-cards">
        {caseStudies.map((study, i) =>(
            <Link to={`/case-studies/${study.slug}`} className="case-card" key={i}>
                <img className="cover" src={study.path} alt=""/>
                <img className="logo" src={study.logo} alt={study.name}/>
                <h3>{study.title}</h3>
            </Link>
        ))}
    </div>
}

export default CaseStudyCards;
