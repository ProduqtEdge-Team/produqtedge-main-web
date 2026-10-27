import NavBar from "../components/NavBar.tsx";
import "../css/Service.css"
import {Navigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {ArrowForward, CheckCircle, RadioButtonUnchecked} from "@mui/icons-material";
import Button from "../components/Button.tsx";
import SectionHeader from "../components/SectionHeader.tsx";
import CaseStudyCards from "../components/CaseStudyCards.tsx";
import CallToAction from "../components/CallToAction.tsx";
import {categories, services} from "../js/services.ts";
import type {Service as Item} from "../js/services.ts";

// a page with no category (Leadership) passes its service in, the rest come from the url
function Service({service: fixed}: {service?: Item}){
    const {category: categorySlug, slug} = useParams();
    const category = categories.find((item) => item.slug === categorySlug);
    const service = fixed ?? services.find((item) => item.slug === slug && item.category === categorySlug);

    // start at the top whenever a different service is opened
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service || (!fixed && !category)) return <Navigate to="/services" replace/>

    const work = service.work

    return <div>
        <NavBar/>
        <section className="service-head">
            <h1>{service.title}</h1>
            {service.intro.length > 0 && <div className="sec-2">
                {service.intro.map((paragraph, i) =>(
                    <span key={i}>{paragraph}</span>
                ))}
            </div>}
        </section>
        {service.questions !== undefined && <section className="service-questions">
            <div className="sec-1">
                <SectionHeader>Questions We Help You Answer:</SectionHeader>
                <ul className="questions">
                    {service.questions.points.map((question, i) =>(
                        <li key={i}><RadioButtonUnchecked className="circle"/> {question}</li>
                    ))}
                </ul>
                <Button to="/contact" variant="outline">Contact Us</Button>
            </div>
            <img className="sec-2" src={service.questions.path} alt=""/>
        </section>}
        {service.approach !== undefined && <section className="service-approach">
            <div className="sec-1">
                <img src={service.approach.path} alt=""/>
            </div>
            <div className="sec-2">
                <SectionHeader>{service.approach.title}</SectionHeader>
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
        {work !== undefined && <section className="service-work">
            <div className="sec-1">
                <SectionHeader>{work.title}</SectionHeader>
                {work.lead !== undefined && <h3>{work.lead}</h3>}
                {work.content?.map((paragraph, i) =>(
                    <span key={i}>{paragraph}</span>
                ))}
                {work.points !== undefined && <ul className="points">
                    {work.points.map((point, i) =>(
                        <li key={i}><CheckCircle className="check"/> {point}</li>
                    ))}
                </ul>}
                {work.method !== undefined && <div className="method">
                    <h3>Method</h3>
                    <div className="tags">
                        {work.method.map((tag, i) =>(
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                </div>}
            </div>
            {/* the photo, or the dark "What you get" card in its place */}
            {service.gets !== undefined
                ? <div className="sec-2 gets">
                    <SectionHeader>{service.gets.title}</SectionHeader>
                    <ul className="points">
                        {service.gets.points.map((point, i) =>(
                            <li key={i}><CheckCircle className="check"/> {point}</li>
                        ))}
                    </ul>
                </div>
                : work.path !== undefined && <div className="sec-2">
                    <img src={work.path} alt=""/>
                </div>}
        </section>}
        {service.steps !== undefined && <section className="service-steps">
            <SectionHeader>{service.steps.title}</SectionHeader>
            <div className="steps">
                {service.steps.items.map((step, i) =>(
                    <div className="step" key={i}>
                        <span className="num">{String(i + 1).padStart(2, "0")}</span>
                        <h3>{step.title}</h3>
                        <span>{step.content}</span>
                    </div>
                ))}
            </div>
        </section>}
        {(service.different !== undefined || service.result !== undefined) && <section className="service-different">
            <div className="panel">
                {service.different !== undefined && <div className="sec-1">
                    <h3>What Makes Us Different</h3>
                    <span>{service.different}</span>
                </div>}
                {service.result !== undefined && <div className={service.different !== undefined ? "sec-2" : "sec-1 result-only"}>
                    <h3>The Result</h3>
                    <span>{service.result}</span>
                    {service.resultPoints !== undefined && <ul className="points">
                        {service.resultPoints.map((point, i) =>(
                            <li key={i}><ArrowForward className="arrow"/> {point}</li>
                        ))}
                    </ul>}
                </div>}
            </div>
        </section>}
        {service.cases.length > 0 && <section className="service-cases">
            <SectionHeader>Related Case Studies</SectionHeader>
            <span className="blurb">
                Success doesn’t happen by accident. We combine market intelligence, industry experience, and technical expertise into a proven methodology that delivers results.
            </span>
            <CaseStudyCards slugs={service.cases}/>
        </section>}
        <CallToAction/>
    </div>
}

export default Service;
