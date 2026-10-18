import {Link} from "react-router-dom";
import "../css/CaseStudyCards.css"
import {caseStudies} from "../js/caseStudies.ts";

// grid of case study cards, used on /case-studies and under each article
function CaseStudyCards(){
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
