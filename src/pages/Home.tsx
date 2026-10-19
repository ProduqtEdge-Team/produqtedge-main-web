import NavBar from "../components/NavBar.tsx";
import heroBackground from "../images/Hero.jpg";
import "../css/Home.css"
import CA from "../images/Consultancy_agency_team.png"
import {Link} from "react-router-dom";
import {ArrowBack, ArrowForward, Check} from "@mui/icons-material";
import Button from "../components/Button.tsx";
import DiaHeader from "../components/DiaHeader.tsx";
import Photo1 from "../images/Photo1.png"
import {useState} from "react";
import {CTA1} from "../components/HPM.tsx";
import {recentProjects, testimonials} from "../js/home.ts";
import {insights} from "../js/insights.ts";
import {caseStudies} from "../js/caseStudies.ts";
import {categories, leadership} from "../js/services.ts";
function Home(){
    const [Slide, setSlide] = useState(0);

    // each category opens its own page, leadership goes to /services
    const serviceLinks = [...categories.map((category) => ({title:category.title, to:`/services/${category.slug}`})), leadership]
    const projects = caseStudies.filter((study) => recentProjects.includes(study.slug))
        .sort((a, b) => recentProjects.indexOf(a.slug) - recentProjects.indexOf(b.slug))

    return <div>
        <NavBar/>
        <section className="hero" style={{backgroundImage: `url(${heroBackground})`}} >

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
                        From transformation strategy and product innovation to operational excellence and growth execution, we help organisations build resilient, high-performing businesses that are ready for the future
                    </p>
                </div>
            </div>
        </section>
        <section className="home-services">
            <div className="sec-1">
                <h2>Our Services</h2>
                <span className="blurb">
                    We partner with teams and organisations to solve complex challenges, delivering strategies and solutions that create real impact. Each project reflects our focus on uniqueness, clarity, performance transformation, and growth.
                </span>
                <div className="list">
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
        <section className="home-projects">
            <h2>Some of Our Recent Projects</h2>
            <div className="sec-2">
                {projects.map((study, i) =>(
                    <Link to={`/case-studies/${study.slug}`} key={i}>
                        <DiaHeader content={study.name}/>
                        <img src={study.thumb ?? study.path} alt=""/>
                        <h3>{study.title}</h3>
                    </Link>
                ))}
            </div>
            <div className="end">
                <Button to="/case-studies">View Past Projects</Button>
            </div>
        </section>
        <section className="home-testimonials">
            <h2>Some Feedback from Our Clients</h2>
            {/* every slide sits in one row, so the row is as tall as the longest one and moving it slides between them */}
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
        <section className="home-about">
            <div className="sec-1">
                <h2>Who We Are</h2>
                <span>
                    At <b>ProduqtEdge</b>, we believe that sustainable growth happens when strategy, products, operations, and technology work together. Sitting at the intersection of people, product and process, we incorporate our market and industry experience, technical know-how through tested and trusted delivery methods and strategies to help organisations successfully deliver value, find product-market fit, grow their products while ensuring the corresponding scale is achieved for internal processes.
                </span>
                <span>
                    We combine product-led thinking, digital transformation, operational excellence, and growth strategy to help businesses unlock performance, scale sustainably, and create lasting competitive advantage.
                </span>
                <div>
                    <Button to="/about#team">Meet our Team</Button>
                </div>
            </div>
            <img className="sec-2" src={Photo1} alt=""/>
        </section>
        <section className="home-insights">
            <h2>Featured Insights</h2>
            <span className="blurb">Some curated articles and lessons from our project experience.</span>
            <div className="sec-2">
                {insights.slice(0, 3).map((insight, i) =>(
                    <Link to={`/insights/${insight.slug}`} key={i}>
                        <img src={insight.cover} alt=""/>
                        <h3>{insight.title}</h3>
                        <span><Check className="check"/> {insight.topic}</span>
                    </Link>
                ))}
            </div>
            <div className="end">
                <Button to="/insights">Visit our Insights Page</Button>
            </div>
        </section>
        <CTA1/>
    </div>
}

export default Home;
