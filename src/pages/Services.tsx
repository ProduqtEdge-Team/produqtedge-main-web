import NavBar from "../components/NavBar.tsx";
import "../css/Services.css"
import {CheckCircle} from "@mui/icons-material";
import Button from "../components/Button.tsx";
import SectionHeader from "../components/SectionHeader.tsx";
import ServiceCard from "../components/ServiceCard.tsx";
import TrustedBy from "../components/TrustedBy.tsx";
import heroBackground from "../images/Frame 2147223898.png"
import Philosophy from "../images/philosophy-visual.png"
import Leadership from "../images/Consulting team.png"
import Why from "../images/new-images/why-choose-us.png"
import {categories, inCategory, leadership, philosophy, reasons, toLinks} from "../js/services.ts";
function Services(){
    return <div>
        <NavBar/>
        <section className="services-hero reveal">
            <div className="sec-1" style={{backgroundImage: `url(${heroBackground})`}}>
                <span className="label">WHAT WE DO</span>
                <h1>
                    Product, Strategy, <br/> Execution, and Growth
                </h1>
                <span className="blurb">
                    We help organisations improve product performance, optimise operations, and unlock new growth opportunities through strategic advisory, product-led innovation, and operational excellence.
                </span>
            </div>
        </section>
        <section className="services-philosophy reveal">
            <div className="sec-1">
                <SectionHeader>Our Philosophy</SectionHeader>
                {philosophy.map((paragraph, i) =>(
                    <span key={i}>{paragraph}</span>
                ))}
            </div>
            <img className="sec-2" src={Philosophy} alt=""/>
        </section>
        <section className="services-categories reveal">
            <SectionHeader>Core Service Categories</SectionHeader>
            {categories.map((category, i) =>(
                <ServiceCard key={i} title={category.title} path={category.path} content={category.content}
                             links={toLinks(inCategory(category.slug))}
                             more={`/services/${category.slug}`}/>
            ))}
        </section>
        <section className="services-leadership reveal">
            <SectionHeader>Leadership Coaching & Capacity Development</SectionHeader>
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
                <Button to={leadership.to}>Learn more</Button>
            </div>
        </section>
        <TrustedBy/>
        <section className="services-why reveal">
            <div className="sec-1">
                <SectionHeader>Why Choose ProduqtEdge</SectionHeader>
                <span className="blurb">
                    We are a product studio and consultancy built to help organisations reduce risk, execute with clarity, and achieve measurable outcomes across every stage of the product and innovation journey.
                </span>
                <div className="list stagger">
                    {reasons.map((reason, i) =>(
                        <span key={i}><CheckCircle className="check"/> {reason}</span>
                    ))}
                </div>
                <div>
                    <Button to="/contact" variant="outline">Contact Us</Button>
                </div>
            </div>
            <img className="sec-2" src={Why} alt=""/>
        </section>
    </div>
}

export default Services;
