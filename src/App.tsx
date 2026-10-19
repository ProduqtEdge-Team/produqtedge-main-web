import './css/misc.css'
import Home from "../src/pages/Home.tsx"
import Services from "../src/pages/Services.tsx"
import ServiceCategory from "../src/pages/ServiceCategory.tsx"
import Service from "../src/pages/Service.tsx"
import About from "../src/pages/About.tsx"
import TeamMember from "../src/pages/TeamMember.tsx"
import CaseStudy from "../src/pages/CaseStudy.tsx"
import CaseStudyArticle from "../src/pages/CaseStudyArticle.tsx"
import Careers from "../src/pages/Careers.tsx"
import Job from "../src/pages/Job.tsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {path:"/", Component:Home},
    {path:"/services", Component:Services},
    {path:"/services/:category", Component:ServiceCategory},
    {path:"/services/:category/:slug", Component:Service},
    {path:"/about", Component:About},
    {path:"/about/:slug", Component:TeamMember},
    {path:"/case-studies", Component:CaseStudy},
    {path:"/case-studies/:slug", Component:CaseStudyArticle},
    {path:"/careers", Component:Careers},
    {path:"/careers/:slug", Component:Job},
  ])
  return <RouterProvider router={router}/>
}

export default App
