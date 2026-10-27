import NavBar from "../components/NavBar.tsx";
import "../css/ServiceCategory.css"
import {Link, Navigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {ArrowForward, ImageOutlined} from "@mui/icons-material";
import Button from "../components/Button.tsx";
import SectionHeader from "../components/SectionHeader.tsx";
import CallToAction from "../components/CallToAction.tsx";
import {capability, categories, inCategory, servicePath, services} from "../js/services.ts";

function ServiceCategory(){
    const {category: slug} = useParams();
    const category = categories.find((item) => item.slug === slug);

    // start at the top whenever a different category is opened
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!category) return <Navigate to="/services" replace/>

    const fit = category.fit
    // the other categories, then leadership
    const others =[
        ...categories.filter((item) => item.slug !== category.slug).map((item) => ({title:item.heading ?? item.title, content:item.other, to:`/services/${item.slug}`})),
        capability,
    ]

    return <div>
        <NavBar/>
        <section className="category-head">
            <div className="sec-1">
                <h1>{category.heading ?? category.title}</h1>
                <span>{category.tagline}</span>
            </div>
            <div className="sec-2">
                <span>{category.intro}</span>
                <div>
                    <Button to="/contact" variant="outline">Start a Conversation</Button>
                </div>
            </div>
        </section>
        <section className="category-services">
            <SectionHeader>The Services</SectionHeader>
            <div className="cards">
                {inCategory(category.slug).map((service, i) =>(
                    <Link to={servicePath(service)} className="card" key={i}>
                        <span className="num">{String(i + 1).padStart(2, "0")}</span>
                        <h3>{service.title}</h3>
                        <span>{service.summary}</span>
                        <span className="more">Learn more <ArrowForward/></span>
                    </Link>
                ))}
            </div>
        </section>
        <section className="category-start">
            <SectionHeader>{category.start.title}</SectionHeader>
            <span className="blurb">{category.start.content}</span>
            <div className="rows">
                {category.start.rows.map((row, i) => {
                    const service = services.find((item) => item.slug === row.service)
                    return service !== undefined && <Link to={servicePath(service)} className="row" key={i}>
                        <span className="situation">{row.situation}</span>
                        <span className="pick">Start with <b>{service.title}</b></span>
                        <ArrowForward className="arrow"/>
                    </Link>
                })}
            </div>
        </section>
        <section className="category-fit">
            <SectionHeader>{fit.title}</SectionHeader>
            <div className="body">
                {/* stays a grey box until the photo for it is supplied */}
                <div className="placeholder">
                    <ImageOutlined/>
                    <span>Image placeholder: {fit.caption}</span>
                </div>
                <div className="sec-2">
                    {fit.steps !== undefined && <ol className="steps">
                        {fit.steps.map((step, i) =>(
                            <li key={i}>
                                <i className="num">{i + 1}</i>
                                <div>
                                    <h3>{step.title}</h3>
                                    <span>{step.content}</span>
                                </div>
                            </li>
                        ))}
                    </ol>}
                    {fit.content !== undefined && <span className="blurb">{fit.content}</span>}
                    {fit.tags !== undefined && <div className="uses">
                        <h3>What We Use</h3>
                        <div className="tags">
                            {fit.tags.map((tag, i) =>(
                                <span key={i}>{tag}</span>
                            ))}
                        </div>
                    </div>}
                </div>
            </div>
        </section>
        <section className="category-other">
            <div className="sec-1">
                <SectionHeader>Other Service Areas</SectionHeader>
                <Link to="/services">All services</Link>
            </div>
            <div className="cards">
                {others.map((area, i) =>(
                    <Link to={area.to} className="card" key={i}>
                        <h3>{area.title}</h3>
                        <span>{area.content}</span>
                        <span className="more">View <ArrowForward/></span>
                    </Link>
                ))}
            </div>
        </section>
        <CallToAction/>
    </div>
}

export default ServiceCategory;
