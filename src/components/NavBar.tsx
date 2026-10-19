import {useIsMobile} from "../js/scripts.ts";
import {Link} from "react-router-dom";
import Logo from "../images/long-logo.png";
import "../css/navbar.css"
import {useState} from "react";
import {ArrowForward} from "@mui/icons-material";
import {categories, inCategory, leadership, toLinks} from "../js/services.ts";
function NavBar() {
    const mobile = useIsMobile()
    const [Hovered, setHovered] = useState(false);
    const navLinks = [{title:"About us", route:"/about"},
        {title:"Services", route:"/services"},
        {title:"Case studies", route:"/case-studies"},
        {title:"Insights", route:"/insights"},
        {title:"Careers", route:"/careers"}]

    // every service in services.ts
    const servHover =[
        ...categories.map((category) => ({title:category.title, content:toLinks(inCategory(category.slug))})),
        {title:leadership.title, content:[leadership]},
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

    {/*    services hover*/}

        <div className="service-hover" style={{display: Hovered ? "block" : "none"}}>
            <div className="service-title">
                <div>
                    <h3>Services</h3>
                    <span>Find your starting point</span>
                </div>
            </div>
            <div className="service-links-container">
                {
                    servHover.map((item, i) =>(

                        <div key={i}>
                            <h2>{item.title}</h2>
                            <ul>
                                {item.content.map((link, j) =>(
                                    <li key={j}><Link to={link.to} onClick={() => setHovered(false)}> <span>{link.title}</span> <ArrowForward className="arrow"/> </Link></li>
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