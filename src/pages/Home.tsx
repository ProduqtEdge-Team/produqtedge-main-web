import NavBar from "../components/NavBar.tsx";
import heroBackground from "../images/Hero.jpg";
import "../css/Home.css"
import CA from "../images/Consultancy_agency_team.png"
import {Link} from "react-router-dom";
import {ArrowForward} from "@mui/icons-material";
import Card1 from "../images/Card1Image.png"
import Card2 from "../images/Card2Image.png"
import DiaHeader from "../components/DiaHeader.tsx";
function Home(){
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
    </div>
}

export default Home;
