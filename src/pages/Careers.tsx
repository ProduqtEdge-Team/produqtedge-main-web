import NavBar from "../components/NavBar.tsx";
import "../css/Careers.css"
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {ArrowOutward, CheckCircle, Search} from "@mui/icons-material";
import CoreValues from "../components/CoreValues.tsx";
import {jobs, perks} from "../js/careers.ts";
// stand-in photos until the careers images are added
import heroBackground from "../images/banner.png"
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
        <section className="careers-hero">
            <div className="sec-1" style={{backgroundImage: `url(${heroBackground})`}}>
                <h1>Make a Difference with Produqtedge</h1>
                <Link to="#positions">View Open Role</Link>
            </div>
        </section>
        <section className="careers-join">
            <h2>Join Us in Removing Barriers to Product & Startup Success</h2>
            <span>
                At Produqtedge, we are driven by a single ambition: to help visionary teams build, launch, and scale exceptional products. Our people are the lifeblood of this mission. We value curiosity, collaboration, innovation, and an unrelenting commitment to quality. If you are passionate about solving real problems, thriving in dynamic environments, and making tangible impact you belong here.
            </span>
        </section>
        <section className="careers-place">
            <img className="sec-1" src={Place} alt=""/>
            <div className="sec-2">
                <h2>A Great Place to Work, A Great Way to Help</h2>
                <div className="list">
                    {perks.map((perk, i) =>(
                        <span key={i}><CheckCircle className="check"/> {perk}</span>
                    ))}
                </div>
            </div>
        </section>
        <section className="careers-positions" id="positions">
            <h2>Open Positions</h2>
            <span className="blurb">We are always looking for talented individuals to join our growing team. Below are current opportunities:</span>
            <label className="search">
                <Search/>
                <input type="text" placeholder="Find your next opportunity" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </label>
            <div className="jobs">
                {found.map((job, i) =>(
                    <Link to={`/careers/${job.slug}`} className="job" key={i}>
                        <h3>{job.title}</h3>
                        <div className="end">
                            <span>{job.tags.join(" | ")}</span>
                            <i className="arrow"><ArrowOutward/></i>
                        </div>
                    </Link>
                ))}
                {found.length === 0 && <span className="none">No open roles match “{search}”.</span>}
            </div>
        </section>
        <CoreValues/>
        <section className="careers-cta">
            <div className="sec-1" style={{backgroundImage: `linear-gradient(90deg, rgba(5, 20, 35, 0.85), rgba(5, 20, 35, 0.3)), url(${Join})`}}>
                <h3>Join the team</h3>
                <h2>There’s a place for you at ProduqtEdge</h2>
                <span>
                    At Produqtedge, we want you to excel. Our mission is to attract, empower, and reward a high-performing team of builders, thinkers, and innovators who are passionate about shaping the future of products and startups. We are committed to excellence, transparency, and impact for the founders and organisations we serve, and within our own team
                </span>
            </div>
        </section>
    </div>
}

export default Careers;
