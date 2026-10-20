import {Diamond} from "./Diamond.tsx";
import Button from "./Button.tsx";
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
                <Button to="/contact" variant="orange">Start a Conversation</Button>
            </div>
        </div>

        <Diamond/>
    </section>
}
export {V1, V2, CTA1}