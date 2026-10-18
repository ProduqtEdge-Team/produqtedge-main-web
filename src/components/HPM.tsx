import {Diamond} from "./Diamond.tsx";
import {Link} from "react-router-dom";
import {ArrowForward} from "@mui/icons-material";
import "../css/HPM.css"

function V1(){
    return <div className="hpm-v-container">
        <div>

        </div>

        <Diamond/>
    </div>
}

function V2(){


    return <div className="hpm-v-container">

        <div>

        </div>

        <Diamond/>
    </div>
}
function CTA1(){


    return <section className="cta-1">
        <div className="sec-1">
            <h2>Have a project in mind?</h2>
            <span>Let's build the right strategy together.</span>
            <div>
                <Link to="">
                    <span>Start a Conversation</span> <ArrowForward/>
                </Link>
            </div>
        </div>

        <Diamond/>
    </section>
}
function CTA2(){
    const ctas =[
        {title:"See the work we do.", content:"Explore the casestudies that showcase our commitment to the craft.", button:"View more", path:"/case-studies"},
        {title:"Let's make it exceptional.", content:"Let's create something truly exceptional together.", button:"Start a Conversation", path:""},
    ]

    return <section className="cta-2">
        {ctas.map((cta, i) =>(
            <div className={`p-${i + 1}`} key={i}>
                <h2>{cta.title}</h2>
                <span>{cta.content}</span>
                <div>
                    <Link to={cta.path} className="btn-dark">{cta.button}</Link>
                </div>
            </div>
        ))}
    </section>
}

export {V1, V2, CTA1, CTA2}