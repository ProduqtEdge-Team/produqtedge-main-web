import NavBar from "../components/NavBar.tsx";
import "../css/Services.css"
import {Link} from "react-router-dom";
import {ArrowForward, CheckCircle} from "@mui/icons-material";
import heroBackground from "../images/Frame 2147223898.png"
import Philosophy from "../images/philosophy-visual.png"
import Advisory from "../images/Frame 2147223761.png"
import Market from "../images/Frame 2147223761_2.png"
import Leadership from "../images/Consulting team.png"
import Why from "../images/Frame 2147223761_3.png"
function Services(){
    const philosophy =[
        "At ProduqtEdge, we believe sustainable growth happens when strategy, products, operations, and technology work together. Sitting at the intersection of people, product and process, we incorporate our market and industry experience, technical know-how through tested and trusted delivery methods and strategies to help organisations successfully deliver value, find product-market fit, grow their products while ensuring the corresponding scale is achieved for internal processes.",
        "We combine product-led thinking, digital transformation, operational excellence, and growth strategy to help businesses unlock performance, scale sustainably, and create lasting competitive advantage.",
        "By combining deep advisory expertise with practical execution, we partner with leaders across financial services, oil & gas, construction, manufacturing, and telecommunications to turn strategy into measurable outcomes through advisory, execution, and capability development.",
    ]

    const categories =[
        {title:"Advisory, Transformation & Growth", path:Advisory, content:"We partner with investors and venture builders to reduce risk, accelerate validation, and unlock value at every stage of the innovation funnel — from early diligence to incubation support.",
            services:["Product Audit & Advisory","Product Strategy Advisory","Customer Journey Optimization","Product Development & PMaaS","Product-Led Transformation","Product-Led Growth"]},
        {title:"Operational Excellence & Digital Transformation", path:Advisory, content:"We partner with investors and venture builders to reduce risk, accelerate validation, and unlock value at every stage of the innovation funnel — from early diligence to incubation support.",
            services:["Business Process Optimization","Digital Transformation"]},
        {title:"Market & Investment Intelligence", path:Market, content:"We help founders and growth teams bridge strategy and execution — from building investor confidence to launching products and expanding market reach.",
            services:["Market Intelligence & Market Entry Support","Investor Validation & Startup Due Diligence"]},
    ]

    const reasons =["Product-First Thinking","Strategy with Hands-On Execution","Support at Every Stage","Reduced Risk, Faster Progress"]

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
                <div className="category" key={i}>
                    <h3>{category.title}</h3>
                    <div className="body">
                        <img src={category.path} alt=""/>
                        <div className="content">
                            <span className="blurb">{category.content}</span>
                            <div className="list">
                                {category.services.map((service, j) =>(
                                    <Link to="" key={j}>
                                        <span>{service}</span> <ArrowForward className="arrow"/>
                                    </Link>
                                ))}
                            </div>
                            <div>
                                <Link to="" className="btn-outline">View more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
        <section className="services-leadership">
            <div className="sec-1">
                <h2>
                    Leadership Coaching & <br/> Capacity Development
                </h2>
                <Link to="" className="btn-dark">Learn more</Link>
            </div>
            <h3>Build the leaders your organization needs to scale.</h3>
            <span className="blurb">
                We provide tailored coaching and capability development programs designed to equip your leadership team with the strategic and operational skills required to drive sustainable growth.
            </span>
            <div className="sec-2">
                <img src={Leadership} alt=""/>
                <i className="circle"></i>
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
                    <Link to="" className="btn-outline">Contact Us</Link>
                </div>
            </div>
            <img className="sec-2" src={Why} alt=""/>
        </section>
    </div>
}

export default Services;
