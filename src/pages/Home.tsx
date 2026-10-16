import NavBar from "../components/NavBar.tsx";
import heroBackground from "../images/Hero.jpg";
import "../css/Home.css"
import {smoll} from "../components/Diamond.tsx";
import CA from "../images/Consultancy_agency_team.png"
import {Link} from "react-router-dom";
import {ArrowForward} from "@mui/icons-material";

function Home(){
    const services =[
        {title:'Product Strategy & Growth', content:'Set product direction, build it properly and grow it on evidence.'},
        {title:'Operations & Technology', content:'Fix how work moves, then decide where technology adds value.'},
        {title:'Market & Investment Intelligence', content:'Test the market before you enter it, and the product before you fund it.'},
        {title:'Leadership Coaching', content:'Build the product capability your teams keep after we leave.'},]

    const reProjects =[
        {title:"", path:"", content:""},
        {title:"", path:"", content:""},
        {title:"", path:"", content:""},
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
                <p className="sec-1">
                    <span>
                        {smoll()} What we do
                    </span>
                    <h1>
                        Our services
                    </h1>
                </p>
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
                            <p>
                                <h1>{service.title}</h1>
                                <span>{service.content}</span>
                            </p>

                            <ArrowForward className="arrow"/>

                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </div>
}

export default Home;