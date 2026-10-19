export function Footer(){

    return <section className="footer">
        <div className="sec-1">
            <div>
                <h3>WHAT WE DO</h3>
                <ul>
                    <li>Product Strategy & Growth</li>
                    <li>Operations & Technology</li>
                    <li>Market & Investment Intelligence</li>
                    <li>Leadership Coaching</li>
                </ul>
            </div>
            <div>
                <h3>COMPANY</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Insights</li>
                    <li>Case Study</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <h3>CONTACT</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>info@produqtedge.com</li>
                    <li>+001 329-356465</li>
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