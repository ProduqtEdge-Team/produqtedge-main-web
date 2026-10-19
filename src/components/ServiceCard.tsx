import {Link} from "react-router-dom";
import {ArrowForward} from "@mui/icons-material";
import "../css/ServiceCard.css"

// grey card with a photo, blurb and list of links, used on /services and each category page
function ServiceCard({title, path, content, links, more}: {title:string, path:string, content:string, links:{title:string, to:string}[], more:string}){
    return <div className="service-card">
        <h3>{title}</h3>
        <div className="body">
            <img src={path} alt=""/>
            <div className="content">
                <span className="blurb">{content}</span>
                <div className="list">
                    {links.map((link, i) =>(
                        <Link to={link.to} key={i}>
                            <span>{link.title}</span> <ArrowForward className="arrow"/>
                        </Link>
                    ))}
                </div>
                <div>
                    <Link to={more} className="btn-outline">View more</Link>
                </div>
            </div>
        </div>
    </div>
}

export default ServiceCard;
