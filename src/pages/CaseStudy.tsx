import NavBar from "../components/NavBar.tsx";
import "../css/CaseStudy.css"
import CaseStudyCards from "../components/CaseStudyCards.tsx";
import heroBackground from "../images/case-study-header.jpg"

function CaseStudy(){

    return <div>
        <NavBar/>
        <section className="case-hero">
            <div className="sec-1" style={{backgroundImage: `url(${heroBackground})`}}>
                <h1>What We’ve Done and How We’ve Done It</h1>
            </div>
        </section>
        <section className="case-list">
            <CaseStudyCards/>
        </section>
    </div>
}

export default CaseStudy;
