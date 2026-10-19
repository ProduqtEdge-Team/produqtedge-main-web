import NavBar from "../components/NavBar.tsx";
import "../css/ServiceCategory.css"
import {Navigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import ServiceCard from "../components/ServiceCard.tsx";
import {categories, inCategory, servicePath, services, toLinks} from "../js/services.ts";

function ServiceCategory(){
    const {category: slug} = useParams();
    const category = categories.find((item) => item.slug === slug);

    // start at the top whenever a different category is opened
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!category) return <Navigate to="/services" replace/>

    return <div>
        <NavBar/>
        <section className="category-hero">
            <div className="sec-1" style={{backgroundImage: `url(${category.hero})`}}>
                <h1>{category.title}</h1>
            </div>
        </section>
        <section className="category-services">
            {inCategory(category.slug).map((service, i) =>(
                <ServiceCard key={i} title={service.title} path={service.path} content={service.content}
                             links={toLinks(services.filter((item) => service.links.includes(item.slug)))}
                             more={servicePath(service)}/>
            ))}
        </section>
    </div>
}

export default ServiceCategory;
