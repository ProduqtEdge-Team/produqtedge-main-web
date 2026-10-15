import NavBar from "../components/NavBar.tsx";
import heroBackground from "../images/Hero.jpg";
import "../css/Home.css"
function Home(){

    return <div>
        <NavBar/>
        <section className="hero" style={{backgroundImage: `url(${heroBackground})`}} >

            <div className="hero-body">
                <div className="sec-1">
                    <span></span>
                    <h1 className="">
                        We Transform Product and Businesses for Sustainable Growth
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

        </section>
    </div>
}

export default Home;