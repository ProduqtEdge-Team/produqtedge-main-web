import {useIsMobile} from "../js/scripts.ts";
import {Link} from "react-router-dom";
import Logo from "../images/long-logo.png";
import "../css/navbar.css"
import {useEffect, useState} from "react";
import {ArrowBack, ArrowForward, ChevronRight, Close, Menu} from "@mui/icons-material";
import {categories, inCategory, leadership, toLinks} from "../js/services.ts";
function NavBar() {
    const mobile = useIsMobile()
    const [Hovered, setHovered] = useState(false);
    // phone menu, and the services panel that slides over it
    const [Open, setOpen] = useState(false);
    const [ServOpen, setServOpen] = useState(false);
    const close = () => {
        setOpen(false);
        setServOpen(false);
    }

    // while the phone menu is open the page behind can't scroll, Escape closes it
    const locked = mobile && Open
    useEffect(() => {
        if (!locked) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                setServOpen(false);
            }
        }
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        }
    }, [locked]);

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
    const mobileNav = <nav className="mobile-nav">
        <div className="bar">
            <Link to="/" className="nav-logo" onClick={close}>
                <img src={Logo} alt="Produqtedge home"/>
            </Link>
            <button type="button" className="toggle" aria-label={Open ? "Close menu" : "Open menu"} aria-expanded={Open} onClick={() => Open ? close() : setOpen(true)}>
                {Open ? <Close/> : <Menu/>}
            </button>
        </div>

        <div className={`backdrop ${Open ? "show" : ""}`} onClick={close}/>

        <div className={`menu ${Open ? "open" : ""}`} inert={!Open}>
            {navLinks.map((item, i) => item.title === "Services"
                ? <button type="button" key={i} onClick={() => setServOpen(true)}>{item.title} <ChevronRight/></button>
                : <Link key={i} to={item.route} onClick={close}>{item.title}</Link>
            )}
        </div>

    {/*    services, slides in from the right*/}

        <div className={`services ${ServOpen ? "open" : ""}`} inert={!ServOpen}>
            <button type="button" className="back" onClick={() => setServOpen(false)}><ArrowBack/> Services</button>
            <span className="sub">Find your starting point</span>
            {servHover.map((item, i) =>(
                <div className="group" key={i}>
                    <h2>{item.title}</h2>
                    <ul>
                        {item.content.map((link, j) =>(
                            <li key={j}><Link to={link.to} onClick={close}> <span>{link.title}</span> <ArrowForward className="arrow"/> </Link></li>
                        ))}
                    </ul>
                </div>
            ))}
            <Link to="/services" className="btn-orange" onClick={close}>
                <span>View all services</span> <ArrowForward/>
            </Link>
        </div>
    </nav>

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