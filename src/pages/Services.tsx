import NavBar from "../components/NavBar.tsx";
import "../css/Services.css"
import {CheckCircle} from "@mui/icons-material";
import Button from "../components/Button.tsx";
import ServiceCard from "../components/ServiceCard.tsx";
import heroBackground from "../images/Frame 2147223898.png"
import Philosophy from "../images/philosophy-visual.png"
import Leadership from "../images/Consulting team.png"
import Why from "../images/new images /why choose us .png"
import {categories, inCategory, philosophy, reasons, toLinks} from "../js/services.ts";
function Services(){
    return <div>
        <NavBar/>
        <section className="services-hero">
            <div className="sec-1" style={{backgroundImage: `url(${heroBackground})`}}>
                <span className="label">WHAT WE DO</span>
                <h1>
                    Product Strategy, <br/> Execution, and Growth
                </h1>
                <span className="blurb">
                    We help organisations move from idea to launch to scale with a connected approach that ties strategy, delivery, and growth together.
                </span>
            </div>
        </section>
        <section className="services-philosophy">
            <div className="sec-1">
                <h2>Our Philosophy</h2>
                {philosophy.map((paragraph, i) =>(
                    <span key={i}>{paragraph}</span>
                ))}
            </div>
            <img className="sec-2" src={Philosophy} alt=""/>
        </section>
        <section className="services-categories">
            <h2>Core Service Categories</h2>
            {categories.map((category, i) =>(
                <ServiceCard key={i} title={category.title} path={category.path} content={category.content}
                             links={toLinks(inCategory(category.slug))}
                             more={`/services/${category.slug}`}/>
            ))}
        </section>
        <section className="services-leadership">
            <h2>Leadership Coaching & Capacity Development</h2>
            <div className="intro">
                <h3>Build the leaders your organization needs to scale.</h3>
                <span className="blurb">
                    We provide tailored coaching and capability development programs designed to equip your leadership team with the strategic and operational skills required to drive sustainable growth.
                </span>
            </div>
            <div className="sec-2">
                <img src={Leadership} alt=""/>
                <i className="circle"></i>
            </div>
            <div className="action">
                <Button to="">Learn more</Button>
            </div>
        </section>
        <section className="services-why">
            <div className="sec-1">
                <h2>Why Choose Produqtedge</h2>
                <span className="blurb">
                    We are a product studio and consultancy built to help organisations reduce risk, execute with clarity, and achieve measurable outcomes across every stage of the product and innovation journey.
                </span>
                <div className="list">
                    {reasons.map((reason, i) =>(
                        <span key={i}><CheckCircle className="check"/> {reason}</span>
                    ))}
                </div>
                <div>
                    <Button to="" variant="outline">Contact Us</Button>
                </div>
            </div>
            <img className="sec-2" src={Why} alt=""/>
        </section>
    </div>
}

export default Services;
