import "../css/CoreValues.css"
import {values} from "../js/about.ts";

// "Our Core Values" grid, shown on About and Careers
function CoreValues(){
    return <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="sec-2">
            {values.map((value, i) =>(
                <div key={i}>
                    <value.icon/>
                    <h3>{value.title}</h3>
                    <span>{value.content}</span>
                </div>
            ))}
        </div>
    </section>
}

export default CoreValues;
