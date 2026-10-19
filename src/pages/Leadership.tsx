import NavBar from "../components/NavBar.tsx";
import "../css/Leadership.css"
import Approach from "../images/leadership.jpg"
import {CTA2} from "../components/HPM.tsx";

const scope =[
    {num:"01", title:"Continuous Discovery", content:"Build a steady rhythm of customer learning and evidence-led decisions."},
    {num:"02", title:"Ownership", content:"Clarify accountabilities, decision rights and durable product leadership."},
    {num:"03", title:"Experimentation", content:"Turn assumptions into testable hypotheses and measurable learning."},
    {num:"04", title:"Governance", content:"Embed proportionate controls that support pace, confidence and risk discipline."},
]

function Leadership(){
    return <div>
        <NavBar/>
        <section className="leadership-head">
            <h1>Leadership Coaching & Capacity Development</h1>
            <p>Sustained product performance depends as much on people and operating discipline as it does on strategy or technology.</p>
        </section>
        <section className="leadership-approach">
            <div className="sec-1">
                <img src={Approach} alt=""/>
            </div>
            <div className="sec-2">
                <h2>Our Approach</h2>
                <p>Our capacity development is deeply practical and context-specific. Rather than generic product training, we enable teams to operate confidently within your environment, with programmes tailored to your products, systems, governance structures and risk constraints.</p>
            </div>
        </section>
        <section className="leadership-scope">
            <h2>Scope</h2>
            <div className="steps">
                {scope.map((step, i) =>(
                    // last card uses the dark variant
                    <div className={`step ${i === scope.length - 1 ? "dark" : ""}`} key={i}>
                        <span className="num">{step.num}</span>
                        <h3>{step.title}</h3>
                        <p>{step.content}</p>
                    </div>
                ))}
            </div>
        </section>
        <CTA2/>
    </div>
}

export default Leadership;
