import NavBar from "../components/NavBar.tsx";
import "../css/Service.css"
import {Link, Navigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {CheckCircle, RadioButtonUnchecked} from "@mui/icons-material";
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

    return <div>
        <NavBar/>
        <section className="service-head">
            <h1>{service.title}</h1>
            {service.intro.length > 0 && <div className="sec-2">
                {service.intro.map((paragraph, i) =>(
                    <span key={i}>{paragraph}</span>
                ))}
                {service.questions !== undefined && <div className="questions">
                    {service.questions.map((question, i) =>(
                        <span key={i}><RadioButtonUnchecked className="circle"/> {question}</span>
                    ))}
                </div>}
            </div>}
        </section>
        {service.help !== undefined && <section className="service-help">
            <div className="sec-1">
                <h2>Questions we help you answer:</h2>
                <div className="list">
                    {service.help.points.map((point, i) =>(
                        <span key={i}><CheckCircle className="check"/> {point}</span>
                    ))}
                </div>
                <div>
                    <Link to="" className="btn-outline">Book a discovery call</Link>
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
        {service.different !== undefined && <section className="service-different">
            <div className="panel">
                <div className="sec-1">
                    <h3>What makes us different</h3>
                    <span>{service.different}</span>
                </div>
                {service.result !== undefined && <div className="sec-2">
                    <h3>The result</h3>
                    <span>{service.result}</span>
                </div>}
            </div>
        </section>}
        {service.cases.length > 0 && <section className="service-cases">
            <h2>Case Study</h2>
            <span className="blurb">
                Success doesn’t happen by accident. We combine market intelligence, industry experience, and technical expertise into a proven methodology that delivers results.
            </span>
            <CaseStudyCards slugs={service.cases}/>
            <div>
                <Link to="/case-studies" className="btn-dark">View more</Link>
            </div>
        </section>}
        {more.length > 0 && <section className="service-more">
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
                            <Link to={servicePath(item)} className="btn-dark">Learn More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>}
        <CTA2/>
    </div>
}

export default Service;
