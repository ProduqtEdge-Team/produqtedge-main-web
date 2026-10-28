import NavBar from "../components/NavBar.tsx";
import heroBackground from "../images/Hero.jpg";
import "../css/Home.css"
import CA from "../images/Consultancy_agency_team.png"
import {Link} from "react-router-dom";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import Button from "../components/Button.tsx";
import Photo1 from "../images/new-images/who-we-are.jpg"
import {useState} from "react";
import {CTA1} from "../components/HPM.tsx";
import {recentProjects, testimonials} from "../js/home.ts";
import {insights} from "../js/insights.ts";
import {caseStudies} from "../js/caseStudies.ts";
import {categories, leadership} from "../js/services.ts";
function Home(){
    const [Slide, setSlide] = useState(0);

    // each category opens its own page, then leadership
    const serviceLinks = [...categories.map((category) => ({title:category.title, to:`/services/${category.slug}`})), leadership]
    const projects = caseStudies.filter((study) => recentProjects.includes(study.slug))
        .sort((a, b) => recentProjects.indexOf(a.slug) - recentProjects.indexOf(b.slug))

    // one feature piece, then four secondary pieces alternating insight ↔ project
    const feature = {
        kind: "project" as const, to:`/case-studies/${projects[0].slug}`,
        img: projects[0].thumb ?? projects[0].path,
        label: "Project Story", title: projects[0].title, blurb: projects[0].blurb,
    }
    const secondary = [
        {kind:"insight" as const, to:`/insights/${insights[0].slug}`, img:insights[0].cover,
            label:"Market Insight", title:insights[0].title},
        {kind:"project" as const, to:`/case-studies/${projects[1].slug}`, img:projects[1].thumb ?? projects[1].path,
            label:"Project Story", title:projects[1].title},
        {kind:"insight" as const, to:`/insights/${insights[1].slug}`, img:insights[1].cover,
            label:"Market Insight", title:insights[1].title},
        {kind:"project" as const, to:`/case-studies/${projects[2].slug}`, img:projects[2].thumb ?? projects[2].path,
            label:"Project Story", title:projects[2].title},
    ]

    return <div>
        <NavBar/>
        <section className="hero reveal" style={{backgroundImage: `url(${heroBackground})`}} >

            <div className="hero-body">
                <div className="sec-1">
                    <span className="steps">
                        Strategy <ArrowForward className="arrow"/> Execution <ArrowForward className="arrow"/> Growth
                    </span>
                    <h1>
                        We Transform <br/> Products and Businesses <br/> for Sustainable Growth
                    </h1>
                </div>
                <div className="sec-2">
                    <p>
                        From transformation strategy and <br/>
                        product innovation to operational excellence <br/>
                        and growth execution, we help organisations build <br/>
                        resilient, high-performing businesses ready for the future
                    </p>
                </div>
            </div>
        </section>
        <section className="home-services reveal">
            <div className="sec-1">
                <h2>Our Services</h2>
                <span className="blurb">
                    We partner with teams and organisations to solve complex challenges, delivering strategies and solutions that create real impact. Each project reflects our focus on uniqueness, clarity, performance transformation, and growth.
                </span>
                <div className="list stagger">
                    {serviceLinks.map((link, i) =>(
                        <Link to={link.to} key={i}>
                            <span>{link.title}</span> <ArrowForward className="arrow"/>
                        </Link>
                    ))}
                </div>
                <div>
                    <Button to="/services" variant="orange">View More</Button>
                </div>
            </div>
            <img className="sec-2" src={CA} alt=""/>
        </section>
        <section className="home-testimonials reveal">
            <h2>Some Clients We Have Helped Transform</h2>
            {/* every slide sits in one row, moving the row slides between them */}
            <div className="slides">
                <div className="track" style={{transform: `translateX(calc(${Slide} * (-100% - var(--gap))))`}}>
                    {testimonials.map((testimonial, i) =>(
                        <div className="sec-2" key={i} aria-hidden={i !== Slide}>
                            <img src={testimonial.path} alt={testimonial.name}/>
                            <div className="testimonial">
                                <span className="title">{testimonial.title}</span>
                                <span className="quote">{testimonial.content}</span>
                                <span className="name">&mdash; {testimonial.name}</span>
                                <span className="role">{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="controls">
                {/* stops at the first and last slide instead of looping */}
                <button type="button" aria-label="Previous" disabled={Slide === 0} onClick={() => setSlide(Math.max(Slide - 1, 0))}><ArrowBack/></button>
                <button type="button" aria-label="Next" disabled={Slide === testimonials.length - 1} onClick={() => setSlide(Math.min(Slide + 1, testimonials.length - 1))}><ArrowForward/></button>
            </div>
        </section>
        <section className="home-learnings reveal">
            <h2>Some Learnings from Our Projects and Markets</h2>
            <div className="layout">
                <Link to={feature.to} className="feature">
                    <img src={feature.img} alt=""/>
                    <div className="meta">
                        <span className={`chip ${feature.kind}`}>{feature.label}</span>
                        <h3>{feature.title}</h3>
                        <span className="feature-blurb">{feature.blurb}</span>
                    </div>
                </Link>
                <div className="list stagger">
                    {secondary.map((item, i) =>(
                        <Link to={item.to} className="row" key={i}>
                            <img src={item.img} alt=""/>
                            <div className="meta">
                                <span className={`chip ${item.kind}`}>{item.label}</span>
                                <h3>{item.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="actions">
                <Button to="/case-studies">View all Project Stories</Button>
                <Button to="/insights" variant="outline">View all Market Insights</Button>
            </div>
        </section>
        <section className="home-about reveal">
            <div className="sec-1">
                <h2>Meet Our Team</h2>
                <span>
                    At <b>ProduqtEdge</b>, we believe that sustainable growth happens when strategy, products, operations, and technology work together. Sitting at the intersection of people, product and process, we incorporate our market and industry experience, technical know-how through tested and trusted delivery methods and strategies to help organisations successfully deliver value, find product-market fit, grow their products while ensuring the corresponding scale is achieved for internal processes.
                </span>
                <span>
                    We combine product-led thinking, digital transformation, operational excellence, and growth strategy to help businesses unlock performance, scale sustainably, and create lasting competitive advantage.
                </span>
                <div>
                    <Button to="/about#team">Meet Our Team</Button>
                </div>
            </div>
            <img className="sec-2" src={Photo1} alt=""/>
        </section>
        <CTA1/>
    </div>
}

export default Home;
