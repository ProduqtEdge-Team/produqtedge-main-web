import {Diamond} from "./Diamond.tsx";
import Button from "./Button.tsx";
import "../css/HPM.css"
import {ctas} from "../js/cta.ts";

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
                <Button to="" variant="orange">Start a Conversation</Button>
            </div>
        </div>

        <Diamond/>
    </section>
}
function CTA2(){
    return <section className="cta-2">
        {ctas.map((cta, i) =>(
            <div className={`p-${i + 1}`} key={i}>
                <h2>{cta.title}</h2>
                <span>{cta.content}</span>
                <div>
                    <Button to={cta.path}>{cta.button}</Button>
                </div>
            </div>
        ))}
    </section>
}

export {V1, V2, CTA1, CTA2}