import NavBar from "../components/NavBar.tsx";
import heroBackground from "../images/Hero.jpg";
import "../css/Home.css"
import CA from "../images/Consultancy_agency_team.png"
import {Link} from "react-router-dom";
import {ArrowBack, ArrowForward, Check} from "@mui/icons-material";
import Card1 from "../images/Card1Image.png"
import Card2 from "../images/Card2Image.png"
import DiaHeader from "../components/DiaHeader.tsx";
import Photo1 from "../images/Photo1.png"
import {useState} from "react";
import {CTA1} from "../components/HPM.tsx";
function Home(){
    const [Slide, setSlide] = useState(0);
    const services =[
        {title:'Product Strategy & Growth', content:'Set product direction, build it properly and grow it on evidence.'},
        {title:'Operations & Technology', content:'Fix how work moves, then decide where technology adds value.'},
        {title:'Market & Investment Intelligence', content:'Test the market before you enter it, and the product before you fund it.'},
        {title:'Leadership Coaching', content:'Build the product capability your teams keep after we leave.'},]

    const reProjects =[
        {title:"Lendsqr", path:Card2, content:"Supporting Lendsqr’s launch with Due Diligence and Market Intelligence"},
        {title:"eBango", path:Card2, content:"Boosting eBanqo's Product Management and Productivity with Agile Transformation"},
        {title:"One Card", path:Card1, content:"Optimising OneCard's Product and Process Efficiency"},
    ]

    const testimonials =[
        {title:"Startup Incubation for Lendsqr", path:Photo1, content:"Working with produqtedge brought a new level of clarity to our business. Their strategic approach helped us make better decisions and move forward with confidence.", name:"Rahim Ahmed", role:"Founder, Lendsqr"},
    ]
    const testimonial = testimonials[Slide]

    const insights =[
        {title:"Research in Product Management – User Research", path:Card1, content:"Defined clear roadmap for sustainable growth"},
        {title:"Research in Product Management – User Research", path:Card1, content:"Defined clear roadmap for sustainable growth"},
        {title:"Research in Product Management – User Research", path:Card1, content:"Defined clear roadmap for sustainable growth"},
    ]
    return <div>
        <NavBar/>
        <section className="hero" style={{backgroundImage: `url(${heroBackground})`}} >

            <div className="hero-body">
                <div className="sec-1">
                    <span></span>
                    <h1 className="">
                        We Transform <br/> Product and Businesses for Sustainable Growth
                    </h1>
                </div>
                <div className="sec-2">
                    <p>
                        From transformation strategy and product innovation to operational excellence and growth execution, we help organisations build resilient, high-performing businesses that are ready for the future
                    </p>
                </div>
            </div>
        </section>
        <section className="home-services">
            <div className="p-1">
                <div className="sec-1">
                    <DiaHeader content="What we do"/>
                    <h2>
                        Our services
                    </h2>
                </div>
                <p className="sec-2">
                    <span>
                        We partner with teams to solve complex challenges, delivering strategies and solutions that create real impact. Each project reflects our focus on clarity, performance, and growth.
                    </span>
                    <Link to="/services">View Our Services</Link>
                </p>
            </div>
            <div className="p-2">
                <div className="sec-1" style={{backgroundImage: `url(${CA})`}} >
                </div>
                <div className="sec-2">
                    {services.map((service, i) =>(
                        <Link to="/" key={i}>
                            <div>
                                <h3>{service.title}</h3>
                                <span>{service.content}</span>
                            </div>

                            <ArrowForward className="arrow"/>

                        </Link>
                    ))}
                </div>
            </div>
        </section>
        <section className="home-projects">
            <div className="sec-1">
                <div style={{display:'flex', alignItems:'start'}}>
                    <DiaHeader content="Selected work"/>

                </div>
                <h2>
                    Some of our recent projects
                </h2>
                <div className="end">
                    <Link to="">
                       <span>Learn More</span> <ArrowForward/>
                    </Link>
                </div>
            </div>
            <div className="sec-2">
                {
                    reProjects.map((reProject, i) =>(
                        <div key={i}>
                            <DiaHeader content={reProject.title}/>
                            <img src={reProject.path} alt=""/>
                            <h3>{reProject.content}</h3>
                        </div>
                    ))
                }
            </div>

            <span className="end">We combine strategic thinking with practical execution to help businesses move forward with confidence and long-term impact.</span>
        </section>
        <section className="home-testimonials">
            <div className="sec-1">
                <div>
                    <DiaHeader content="Client Stories"/>
                    <h2>
                        Real Impact, Real <br/> Feedback
                    </h2>
                </div>
                <span>
                    We partner with businesses to deliver clear strategies and measurable results. Hear what our clients say about working with produqtedge.
                </span>
            </div>
            <div className="sec-2">
                <img src={testimonial.path} alt={testimonial.name}/>
                <div className="testimonial">
                    <span className="title">{testimonial.title}</span>
                    <h3>"{testimonial.content}"</h3>
                    <div className="end">
                        <p>
                            <span className="name">&mdash; {testimonial.name}</span>
                            <span className="role">{testimonial.role}</span>
                        </p>
                        <div className="controls">
                            <button type="button" onClick={() => setSlide((Slide - 1 + testimonials.length) % testimonials.length)}><ArrowBack/></button>
                            <button type="button" onClick={() => setSlide((Slide + 1) % testimonials.length)}><ArrowForward/></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-unique">
            <div className="sec-1">
                <DiaHeader content="What makes us unique"/>
                <h2>
                    Strategy is easy. We're <br/> here for the rest.
                </h2>
                <span className="body">
                    At <b>ProduqtEdge</b>, we believe sustainable growth happens when strategy, products, operations, and technology work together. Sitting at the intersection of people, product and process, we incorporate our market and industry experience, technical know-how through tested and trusted delivery methods and strategies to help organisations successfully deliver value, find product-market fit, grow their products while ensuring the corresponding scale is achieved for internal processes.
                </span>
                <span className="sub">
                    We combine product-led thinking, digital transformation, operational excellence, and growth strategy to help businesses unlock performance, scale sustainably, and create lasting competitive advantage.
                </span>
                <div>
                    <Link to="">
                        <span>Meet our Team</span> <ArrowForward/>
                    </Link>
                </div>
            </div>
            <img className="sec-2" src={Photo1} alt=""/>
        </section>
        <section className="home-insights">
            <div className="sec-1">
                <div>
                    <DiaHeader content="Featured insights"/>
                    <h2>
                        What the work <br/> teaches us.
                    </h2>
                </div>
                <span>
                    Explore our research, insights, and examples of real client impact, designed to help you embrace the key forces of change and get to value faster.
                </span>
            </div>
            <div className="sec-2">
                {insights.map((insight, i) =>(
                    <Link to="" key={i}>
                        <img src={insight.path} alt=""/>
                        <h3>{insight.title}</h3>
                        <span><Check className="check"/> {insight.content}</span>
                    </Link>
                ))}
            </div>
            <div className="end">
                <Link to="">
                    <span>See all Works</span> <ArrowForward/>
                </Link>
            </div>
        </section>
        <CTA1/>
    </div>
}

export default Home;
