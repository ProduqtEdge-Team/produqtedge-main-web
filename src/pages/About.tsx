import NavBar from "../components/NavBar.tsx";
import "../css/About.css"
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {ArrowOutward, CheckCircle, PeopleOutlineOutlined, SpaOutlined, TroubleshootOutlined, VolunteerActivismOutlined} from "@mui/icons-material";
import {CTA2} from "../components/HPM.tsx";
import {team} from "../js/team.ts";
import Offer from "../images/con image.png"
import Mission from "../images/mission image.png"
import Olaniyi from "../images/Olaniyi.png"
import Collins from "../images/Collins.png"
import Femi from "../images/Femi-Omotayo.png"

type Member = {name:string, role:string, path:string, link?:string}

function About(){
    const {hash} = useLocation();

    // "Back to team" links to /about#team, scroll down to it once the page renders
    useEffect(() => {
        if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    }, [hash]);

    const offers =["Product Advisory","Technology and Innovation Advisory","Due Diligence","Product Development","Business Process Optimisation",
        "Go-To-Market Support","Startup Incubation","Product Led Growth","Digital Transformation"]

    const missions =[
        {title:"Vision", content:"To become Africa's most trusted partner for product-led growth and digital transformation"},
        {title:"Mission", content:"Bridging the gap between ideation and success"},
    ]

    const teamCards: Member[] = team.map((member) => ({name:member.name, role:member.role, path:member.path, link:`/about/${member.slug}`}))

    const board: Member[] =[
        {name:"Olaniyi Yusuf", role:"M.D., Andersen Consulting", path:Olaniyi},
        {name:"Collins Onuegbu", role:"The Chairman, SATH", path:Collins},
        {name:"Femi Omotayo", role:"M.D., AOS Orwell Limited", path:Femi},
    ]

    const values =[
        {title:"Empathy for Real Problems", icon:<VolunteerActivismOutlined/>, content:"We start with people and context, not features. We obsess over customer pains, stakeholder constraints, and operational realities so solutions are useful, used, and usable."},
        {title:"Data-Driven Diligence", icon:<TroubleshootOutlined/>, content:"We make decisions with evidence and measure outcomes rigorously. From investment validation to growth experiments, we prefer signals over opinions. We validate before we build, we validate while building, we validate while using. We measure what matters. We hold ourselves accountable to results, not activity."},
        {title:"Growth Ownership", icon:<SpaOutlined/>, content:"Everyone owns growth. We design for adoption, activation, retention, and expansion treating growth as a product, not a department."},
        {title:"Execution Excellence", icon:<PeopleOutlineOutlined/>, content:"We keep promises. We ship on time, communicate transparently, and hold a high bar for quality balancing speed with craftsmanship. We move fast without breaking trust. We maintain standards of clarity, accountability, and delivery at scale."},
    ]

    // team and advisory board share the same card, only cards with a link get the arrow
    const memberCards = (members: Member[]) => <div className="members">
        {members.map((member, i) =>(
            <div className="member" key={i}>
                {member.link !== undefined
                    ? <Link to={member.link}><img src={member.path} alt={member.name}/></Link>
                    : <img src={member.path} alt={member.name}/>}
                <div className="end">
                    <span>
                        <b>{member.name}</b> <i className="dot"></i> {member.role}
                    </span>
                    {member.link !== undefined && <Link to={member.link}><ArrowOutward/></Link>}
                </div>
            </div>
        ))}
    </div>

    return <div>
        <NavBar/>
        <section className="about-who">
            <h1>Who We Are</h1>
            <span>
                We are a Lagos-headquartered product-as-a-service (PaaS) consultancy on a mission to remove all barriers to startup and product success. At Produqtedge, we believe that ideas are just the beginning. What transforms an idea into a successful, scalable product is disciplined process, domain insight, and hands-on execution. To help organisations achieve exponential growth at a fraction of the cost, we operate a model that democratises access to world class experience, helping product teams and organisations solve for problem-solution fit and product-market fit, gaining market share and achieving multiple X growth.
            </span>
        </section>
        <section className="about-offer">
            <img className="sec-1" src={Offer} alt=""/>
            <div className="sec-2">
                <h2>What We Offer</h2>
                <span className="blurb">
                    Our services cut across the broad spectrum of product development, management and growth engineering for organisations across all stages of growth. Sitting at the intersection of people, product and process, we help organisations successfully deliver value, find product-market fit, grow their products by incorporating our extensive market and industry experience, technical know-how, employing tested and trusted delivery methods and strategies, while optimising internal processes for scalability and exponential growth.
                </span>
                <div className="list">
                    {offers.map((offer, i) =>(
                        <span key={i}><CheckCircle className="check"/> {offer}</span>
                    ))}
                </div>
            </div>
        </section>
        <section className="about-mission">
            <div className="sec-1">
                <h2>Mission & Vision</h2>
                {missions.map((mission, i) =>(
                    <div key={i}>
                        <h3>{mission.title}</h3>
                        <span>{mission.content}</span>
                    </div>
                ))}
            </div>
            <img className="sec-2" src={Mission} alt=""/>
        </section>
        <section className="about-team" id="team">
            <h2>Our Team</h2>
            {memberCards(teamCards)}
            <h2 className="board">Advisory Board</h2>
            {memberCards(board)}
        </section>
        <section className="about-values">
            <h2>Our Core Values</h2>
            <div className="sec-2">
                {values.map((value, i) =>(
                    <div key={i}>
                        {value.icon}
                        <h3>{value.title}</h3>
                        <span>{value.content}</span>
                    </div>
                ))}
            </div>
        </section>
        <CTA2/>
    </div>
}

export default About;
