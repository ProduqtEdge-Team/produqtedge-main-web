import {Link} from "react-router-dom";

export function Footer(){

    return <section className="footer">
        <div className="sec-1">
            <div>
                <h3>WHAT WE DO</h3>
                <ul>
                    <li><Link to="/services/advisory-transformation-growth">Product Strategy & Growth</Link></li>
                    <li><Link to="/services/operational-excellence-digital-transformation">Operations & Technology</Link></li>
                    <li><Link to="/services/market-investment-intelligence">Market & Investment Intelligence</Link></li>
                    <li><Link to="/services">Leadership Coaching</Link></li>
                </ul>
            </div>
            <div>
                <h3>COMPANY</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/insights">Insights</Link></li>
                    <li><Link to="/case-studies">Case Study</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
            </div>
            <div>
                <h3>CONTACT</h3>
                <ul>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><a href="mailto:info@produqtedge.com">info@produqtedge.com</a></li>
                    <li><a href="tel:+001329356465">+001 329-356465</a></li>
                </ul>
            </div>
            <div>
                <h3>STAY UPDATED</h3>
                <div className="newsletter">
                    <span>Get insights on strategy, growth, and business thinking delivered to your inbox.</span>
                    <form>
                        <input type="text" placeholder="Enter your email"/>
                        <button type="button">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="sec-2">
            <div>
                <h3>SOCIALS</h3>
                <span>

                </span>
            </div>

            <div>
                <h3>LOCATION</h3>
                <span>Lagos, Abuja</span>
            </div>
        </div>
        <div className="sec-3">
            <span className="left">All rights reserved &copy; ProduqtEdge Studio {new Date().getFullYear()} </span>
            <span className="center">Terms & Conditions</span>
            <span className="right">ProduqtEdge</span>
        </div>
    </section>
}
