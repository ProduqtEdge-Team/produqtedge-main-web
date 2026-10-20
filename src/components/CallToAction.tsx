import {Link} from "react-router-dom";
import "../css/CallToAction.css"
import {ctas} from "../js/cta.ts";
import ArrowRight from "../images/arrow-right.svg"

// shared two-panel CTA with the Figma dark button, shown at the bottom of About, Service, ServiceCategory and TeamMember
function CallToAction(){
    return <section className="cta">
        {ctas.map((cta, i) =>(
            <div className={`p-${i + 1}`} key={i}>
                <h2>{cta.title}</h2>
                <span>{cta.content}</span>
                <div>
                    <Link to={cta.path} className="fig-btn">
                        <span>{cta.button}</span>
                        <img src={ArrowRight} alt=""/>
                    </Link>
                </div>
            </div>
        ))}
    </section>
}

export default CallToAction;
