import NavBar from "../components/NavBar.tsx";
import "../css/Service.css"
import {Link, Navigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {CheckCircle, RadioButtonUnchecked} from "@mui/icons-material";
import Button from "../components/Button.tsx";
import CaseStudyCards from "../components/CaseStudyCards.tsx";
import {CTA2} from "../components/HPM.tsx";
import {categories, inCategory, servicePath, services} from "../js/services.ts";

function Service(){
    const {category: categorySlug, slug} = useParams();
    const category = categories.find((item) => item.slug === categorySlug);
    const service = services.find((item) => item.slug === slug && item.category === categorySlug);

    // start at the top whenever a different service is opened
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!category || !service) return <Navigate to="/services" replace/>

    // the other services in its category, for the cards at the bottom
    const more = inCategory(category.slug).filter((item) => item.slug !== service.slug).slice(0, 3)
    // services from the newer designs end on the closing panel and restyle a few sections
    const closing = service.closing

    return <div className={closing !== undefined ? "service-new" : ""}>
        <NavBar/>
        <section className="service-head">
            <div className="sec-1">
                {service.label !== undefined && <span className="label">{service.label}</span>}
                <h1>{service.heading ?? service.title}</h1>
            </div>
            {service.intro.length > 0 && <div className="sec-2">
                {service.lead !== undefined && <span className="lead">{service.lead}</span>}
                {service.intro.map((paragraph, i) =>(
                    <span key={i}>{paragraph}</span>
                ))}
            </div>}
        </section>
        {service.questions !== undefined && <section className="service-questions">
            <div className="sec-1">
                <h2>Questions we help you answer{closing === undefined && ":"}</h2>
                <ul className="questions">
                    {service.questions.map((question, i) =>(
                        <li key={i}>{closing !== undefined ? <i className="dot"></i> : <RadioButtonUnchecked className="circle"/>} {question}</li>
                    ))}
                </ul>
                {closing === undefined && <Button to="/contact" variant="outline">Contact Us</Button>}
            </div>
            <img className="sec-2" src={service.questionPath ?? service.path} alt=""/>
        </section>}
        {service.help !== undefined && <section className="service-help">
            <div className="sec-1">
                <h2>Questions we help you answer:</h2>
                <div className="list">
                    {service.help.points.map((point, i) =>(
                        <span key={i}><CheckCircle className="check"/> {point}</span>
                    ))}
                </div>
                <div>
                    <Button to="/contact" variant="outline">Book a discovery call</Button>
                </div>
            </div>
            <img className="sec-2" src={service.help.path} alt=""/>
        </section>}
        {service.approach !== undefined && <section className="service-approach">
            <div className="sec-1">
                <img src={service.approach.path} alt=""/>
            </div>
            <div className="sec-2">
                <h2>{service.approach.title}</h2>
                {service.approach.content.map((paragraph, i) =>(
                    <span key={i}>{paragraph}</span>
                ))}
                {service.approach.method !== undefined && <div className="method">
                    <h3>Method</h3>
                    <div className="tags">
                        {service.approach.method.map((tag, i) =>(
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                </div>}
                {service.approach.tags !== undefined && <div className="pills">
                    {service.approach.tags.map((tag, i) =>(
                        <span key={i}>{tag}</span>
                    ))}
                </div>}
            </div>
        </section>}
        {service.highlights !== undefined && <section className="service-highlights">
            {service.highlights.map((highlight, i) =>(
                <div className="card" key={i}>
                    <span className="label">{highlight.label}</span>
                    <h2>{highlight.title}</h2>
                    <span>{highlight.content}</span>
                </div>
            ))}
        </section>}
        {service.steps !== undefined && <section className="service-steps">
            <div className="sec-1">
                {service.steps.label !== undefined && <span className="label">{service.steps.label}</span>}
                <h2>{service.steps.title}</h2>
                {service.steps.content !== undefined && <span className="blurb">{service.steps.content}</span>}
            </div>
            <div className="steps">
                {service.steps.items.map((step, i) =>(
                    <div className="step" key={i}>
                        <span className="num">{String(i + 1).padStart(2, "0")}</span>
                        <h3>{step.title}</h3>
                        {step.content !== undefined && <span>{step.content}</span>}
                    </div>
                ))}
            </div>
        </section>}
        {service.work !== undefined && <section className="service-work">
            <div className="sec-1">
                <h2>{service.work.title}</h2>
                {service.work.content.map((paragraph, i) =>(
                    <span key={i}>{paragraph}</span>
                ))}
            </div>
            <div className="sec-2">
                <img src={service.work.path} alt=""/>
            </div>
        </section>}
        {(service.different !== undefined || service.result !== undefined) && <section className="service-different">
            <div className="panel">
                {service.different !== undefined
                    ? <>
                        <div className="sec-1">
                            <h3>{service.differentLabel ?? "What makes us different"}</h3>
                            <span>{service.different}</span>
                        </div>
                        {service.result !== undefined && <div className="sec-2">
                            <h3>The result</h3>
                            <span>{service.result}</span>
                        </div>}
                    </>
                    : <div className="sec-1 result-only">
                        <h3>The result</h3>
                        <span>{service.result}</span>
                    </div>}
            </div>
        </section>}
        {closing === undefined && service.cases.length > 0 && <section className="service-cases">
            <h2>Related Case Studies</h2>
            <span className="blurb">
                Success doesn’t happen by accident. We combine market intelligence, industry experience, and technical expertise into a proven methodology that delivers results.
            </span>
            <CaseStudyCards slugs={service.cases}/>
            <div>
                <Button to="/case-studies">View more</Button>
            </div>
        </section>}
        {closing === undefined && more.length > 0 && <section className="service-more">
            <div className="sec-1">
                <h2>More in {category.title}</h2>
                <Link to={`/services/${category.slug}`}>View More</Link>
            </div>
            <div className="cards">
                {more.map((item, i) =>(
                    <div className="card" key={i}>
                        <h3>{item.title}</h3>
                        <span>{item.summary}</span>
                        <div>
                            <Button to={servicePath(item)}>Learn More</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>}
        {closing === undefined && <CTA2/>}
        {closing !== undefined && <section className="service-closing">
            {service.audience !== undefined && <div className="audience">
                <div>
                    <span className="label">Who we work with</span>
                    <h2>{service.audience.title}</h2>
                </div>
                <div className="tags">
                    {service.audience.tags.map((tag, i) =>(
                        <span key={i}>{tag}</span>
                    ))}
                </div>
            </div>}
            <div className="end">
                {/* a service's own work line has no button, the default one links to the case studies */}
                <div className="sec-1">
                    <h2>{closing.work?.title ?? "See the work we do."}</h2>
                    <span>{closing.work?.content ?? "Explore the case studies that showcase our commitment to the craft."}</span>
                    {closing.work === undefined && <div>
                        <Button to="/case-studies">View more</Button>
                    </div>}
                </div>
                <div className="sec-2">
                    <h2>{closing.title}</h2>
                    {closing.content !== undefined && <span>{closing.content}</span>}
                    <div>
                        <Button to="">Book a discovery call</Button>
                    </div>
                </div>
            </div>
        </section>}
    </div>
}

export default Service;
