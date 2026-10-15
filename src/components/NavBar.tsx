import {useIsMobile} from "../js/scripts.ts";
import {Link} from "react-router-dom";
import Logo from "../images/long-logo.png";
import "../css/navbar.css"
function NavBar() {
    const mobile = useIsMobile()

    const navLinks = [{title:"About us", route:"/about"},
        {title:"Services", route:"/services"},
        {title:"Case studies", route:"/case-studies"},
        {title:"Insights", route:"/insights"},
        {title:"Careers", route:"/careers"}]
    const mobileNav = <div>
        Mobile
    </div>

    const webNav = <nav className="web-nav">
        <div className="nav-logo">
            <img src={Logo} alt="not working"/>
        </div>

        <div className="nav-links">
            {
                navLinks.map((item, index) =>(

                            <Link key={index} to={item.route}>
                                {item.title}
                            </Link>
                ))
            }
        </div>

       <div className="nav-a">
           <Link to="" >Book a discovery call</Link>
       </div>
    </nav>

    return mobile ? mobileNav : webNav
}

export default NavBar;