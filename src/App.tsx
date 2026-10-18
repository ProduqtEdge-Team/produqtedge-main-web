import './css/misc.css'
import Home from "../src/pages/Home.tsx"
import Services from "../src/pages/Services.tsx"
import About from "../src/pages/About.tsx"
import TeamMember from "../src/pages/TeamMember.tsx"
import CaseStudy from "../src/pages/CaseStudy.tsx"
import CaseStudyArticle from "../src/pages/CaseStudyArticle.tsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {path:"/", Component:Home},
    {path:"/services", Component:Services},
    {path:"/about", Component:About},
    {path:"/about/:slug", Component:TeamMember},
    {path:"/case-studies", Component:CaseStudy},
    {path:"/case-studies/:slug", Component:CaseStudyArticle},
  ])
  return <RouterProvider router={router}/>
}

export default App
