import {useState, type FormEvent} from "react";
import NavBar from "../components/NavBar.tsx";
import {Email, LocationOn, Phone} from "@mui/icons-material";
import "../css/Contact.css"

type Status = "idle" | "sending" | "success" | "error";

function Contact(){
    const [Name, setName] = useState("");
    const [EmailInput, setEmailInput] = useState("");
    const [Phone_, setPhone] = useState("");
    const [Message, setMessage] = useState("");
    const [Status_, setStatus] = useState<Status>("idle");

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!Name.trim() || !EmailInput.trim() || !Message.trim()) return;
        setStatus("sending");
        // no backend yet, pretend success so the form reads correctly
        setTimeout(() => {
            setStatus("success");
            setName(""); setEmailInput(""); setPhone(""); setMessage("");
        }, 600);
    }

    return <div>
        <NavBar/>
        <section className="contact-hero reveal">
            <h1>Get in Touch</h1>
            <p>Our friendly team would love to hear from you.</p>
        </section>
        <section className="contact-body reveal">
            <aside className="info">
                <h2>Reach Us Directly</h2>
                <p>We respond to most enquiries within one working day.</p>
                <ul>
                    <li><Email className="icon"/> <a href="mailto:info@produqtedge.com">info@produqtedge.com</a></li>
                    <li><Phone className="icon"/> <a href="tel:+2347045000540">0704 500 0540</a></li>
                    <li><LocationOn className="icon"/> Lagos, Abuja</li>
                </ul>
            </aside>
            <form className="form" onSubmit={onSubmit} noValidate>
                <label>
                    <span>Full Name</span>
                    <input type="text" required value={Name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe"/>
                </label>
                <label>
                    <span>Email Address</span>
                    <input type="email" required value={EmailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="you@company.com"/>
                </label>
                <label>
                    <span>Phone Number</span>
                    <input type="tel" value={Phone_} onChange={(e) => setPhone(e.target.value)} placeholder="+234 800 000 0000"/>
                </label>
                <label>
                    <span>Message</span>
                    <textarea required value={Message} onChange={(e) => setMessage(e.target.value)} rows={6} placeholder="Tell us about your project or challenge"/>
                </label>
                <button type="submit" className="submit" disabled={Status_ === "sending"}>
                    {Status_ === "sending" ? "Sending…" : "Send message"}
                </button>
                {Status_ === "success" && <p className="feedback success">
                    Thank you! Your submission has been received — our team will review your message and get back to you.
                </p>}
                {Status_ === "error" && <p className="feedback error">
                    Oops! Something went wrong while submitting the form.
                </p>}
            </form>
        </section>
    </div>
}

export default Contact;
