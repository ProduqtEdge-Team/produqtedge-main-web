import NavBar from "../components/NavBar.tsx";
import "../css/Careers.css"
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {ArrowOutward, CheckCircle, Search} from "@mui/icons-material";
import SectionHeader from "../components/SectionHeader.tsx";
import CoreValues from "../components/CoreValues.tsx";
import {jobs, perks} from "../js/careers.ts";
import heroBackground from "../images/careers-hero.jpg"
import Place from "../images/con image.png"
import Join from "../images/Frame 2147223838.png"

function Careers(){
    const [search, setSearch] = useState("");
    const {hash} = useLocation();

    // "Job openings" links to /careers#positions, scroll down to it once the page renders
    useEffect(() => {
        if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    }, [hash]);

    // matches the job title or any of its tags
    const found = jobs.filter((job) => [job.title, ...job.tags].some((text) => text.toLowerCase().includes(search.trim().toLowerCase())))

    return <div>
        <NavBar/>
        <section className="careers-hero reveal">
            <div className="sec-1" style={{backgroundImage: `url(${heroBackground})`}}>
                <h1>Make a Difference with ProduqtEdge</h1>
                <Link to="#positions">View Open Roles</Link>
            </div>
        </section>
        <section className="careers-join reveal">
            <SectionHeader>Join Us in Removing Barriers to Product Success</SectionHeader>
            <span>
                At ProduqtEdge, we are driven by a single ambition: to help visionary teams build, launch, and scale exceptional products. Our people are the lifeblood of this mission. We value curiosity, collaboration, innovation, and an unrelenting commitment to quality. If you are passionate about solving real problems, thriving in dynamic environments, and making tangible impact you belong here.
            </span>
        </section>
        <section className="careers-place reveal">
            <img className="sec-1" src={Place} alt=""/>
            <div className="sec-2">
                <SectionHeader>A Great Place to Work, a Great Way to Help</SectionHeader>
                <div className="list">
                    {perks.map((perk, i) =>(
                        <span key={i}><CheckCircle className="check"/> {perk}</span>
                    ))}
                </div>
            </div>
        </section>
        <section className="careers-positions reveal" id="positions">
            <SectionHeader>Open Positions</SectionHeader>
            <span className="blurb">We are always looking for talented individuals to join our growing team. Below are current opportunities:</span>
            <label className="search">
                <Search/>
                <input type="text" placeholder="Find your next opportunity" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </label>
            <div className="jobs stagger">
                {found.map((job, i) => {
                    const body = <>
                        <h3>{job.title}</h3>
                        <div className="end">
                            <span className="tags">
                                {job.tags.map((tag, j) => <span key={j} className="tag">{tag}</span>)}
                            </span>
                            <i className="arrow"><ArrowOutward/></i>
                        </div>
                    </>
                    return job.link !== undefined
                        ? <a key={i} className="job" href={job.link} target="_blank" rel="noopener noreferrer">{body}</a>
                        : <Link key={i} to={`/careers/${job.slug}`} className="job">{body}</Link>
                })}
                {found.length === 0 && <span className="none">No open roles match “{search}”.</span>}
            </div>
        </section>
        <CoreValues/>
        <section className="careers-cta reveal">
            <div className="sec-1" style={{backgroundImage: `linear-gradient(90deg, rgba(5, 20, 35, 0.85), rgba(5, 20, 35, 0.3)), url(${Join})`}}>
                <h3>Join the Team</h3>
                <SectionHeader>There’s a Place for You at ProduqtEdge</SectionHeader>
                <span>
                    At ProduqtEdge, we want you to excel. Our mission is to attract, empower, and reward a high-performing team of builders, thinkers, and innovators who are passionate about shaping the future of products and startups. We are committed to excellence, transparency, and impact for the founders and organisations we serve, and within our own team
                </span>
            </div>
        </section>
    </div>
}

export default Careers;
