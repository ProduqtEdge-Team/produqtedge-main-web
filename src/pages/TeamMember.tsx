import NavBar from "../components/NavBar.tsx";
import "../css/TeamMember.css"
import {Navigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {FormatQuote} from "@mui/icons-material";
import Button from "../components/Button.tsx";
import CallToAction from "../components/CallToAction.tsx";
import {team} from "../js/team.ts";

function TeamMember(){
    const {slug} = useParams();
    const member = team.find((item) => item.slug === slug);

    // start at the top whenever a different member is opened
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!member) return <Navigate to="/about" replace/>

    return <div>
        <NavBar/>
        <section className="member-hero">
            <h1>{member.name}</h1>
            <div className="sec-2">
                <img src={member.path} alt={member.name}/>
                <div className="quote">
                    <FormatQuote className="mark"/>
                    <h2>{member.quote}</h2>
                </div>
            </div>
        </section>
        <section className="member-bio">
            <h3>Biography</h3>
            {member.bio.map((paragraph, i) =>(
                <p key={i}>{paragraph}</p>
            ))}
            <div className="end">
                <Button to="/about#team">Back to team</Button>
                <Button to={member.linkedin} variant="outline" external>LinkedIn</Button>
            </div>
        </section>
        <CallToAction/>
    </div>
}

export default TeamMember;
