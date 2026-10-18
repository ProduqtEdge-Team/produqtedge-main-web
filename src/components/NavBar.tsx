import {useIsMobile} from "../js/scripts.ts";
import {Link} from "react-router-dom";
import Logo from "../images/long-logo.png";
import "../css/navbar.css"
import {useState} from "react";
import {ArrowForward} from "@mui/icons-material";
function NavBar() {
    const mobile = useIsMobile()
    const [Hovered, setHovered] = useState(false);
    const navLinks = [{title:"About us", route:"/about"},
        {title:"Services", route:"/services"},
        {title:"Case studies", route:"/case-studies"},
        {title:"Insights", route:"/insights"},
        {title:"Careers", route:"/careers"}]

    const servHover =[
        {title:"Advisory, Transformation & Growth",
            content:["Product Audit & Advisory","Product Strategy Advisory","Customer Journey Optimization","Product Development & PMaas","Product Led transformation","Product Led Growth"]},
        {title:"Operational Excellence & Digital Transformation",
            content:["Business Process Optimization","Digital Transformation"]},
        {title:"Market & Investment Intelligence",
            content:["Market Intelligence & Market Entry Support","Investor Validation & Startup Due Diligence"]},
        {title:"Leadership Coaching & Capacity Development",
            content:["Leadership Coaching & Capacity Development"]},

    ]
    const mobileNav = <div>
        Mobile
    </div>

    const webNav = <nav className="web-nav" onMouseLeave={() => setHovered(false)}>
        <Link to="/" className="nav-logo">
            <img src={Logo} alt="Produqtedge home"/>
        </Link>

        <div className="nav-links">
            {
                navLinks.map((item, index) =>(

                            <Link key={index} to={item.route}
                                  onMouseEnter={() => setHovered(item.title === "Services")} style={{color:`${item.title === "Services" && Hovered ? '#F68E1E':'#FFFFFF'}`}}>
                                {item.title}
                            </Link>
                ))
            }
        </div>

       <div className="nav-a">
           <Link to="" >Book a discovery call</Link>
       </div>

    {/*    services hover*/}

        <div className="service-hover" style={{display: Hovered ? "block" : "none"}}>
            <div className="service-title">
                <p>
                    <h3>Services</h3>
                    <span>Find your starting point</span>
                </p>
            </div>
            <div className="service-links-container">
                {
                    servHover.map((item, i) =>(

                        <div key={i}>
                            <h2>{item.title}</h2>
                            <ul>
                                {item.content.map((link, j) =>(
                                    <li key={j}><Link to="/services"> <span>{link}</span> <ArrowForward className="arrow"/> </Link></li>
                                ))}
                            </ul>
                        </div>
                    ))
                }


            </div>
        </div>
    </nav>

    return mobile ? mobileNav : webNav
}

export default NavBar;