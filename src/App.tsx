import './css/misc.css'
import Home from "../src/pages/Home.tsx"
import Services from "../src/pages/Services.tsx"
import ServiceCategory from "../src/pages/ServiceCategory.tsx"
import Service from "../src/pages/Service.tsx"
import Contact from "../src/pages/Contact.tsx"
import About from "../src/pages/About.tsx"
import TeamMember from "../src/pages/TeamMember.tsx"
import CaseStudy from "../src/pages/CaseStudy.tsx"
import CaseStudyArticle from "../src/pages/CaseStudyArticle.tsx"
import Careers from "../src/pages/Careers.tsx"
import Job from "../src/pages/Job.tsx"
import Insights from "../src/pages/Insights.tsx"
import Insight from "../src/pages/Insight.tsx"
import AdminLayout from "./pages/admin/AdminLayout.tsx"
import AdminLogin from "./pages/admin/AdminLogin.tsx"
import AdminInsights from "./pages/admin/AdminInsights.tsx"
import AdminInsightEdit from "./pages/admin/AdminInsightEdit.tsx"
import AdminCaseStudies from "./pages/admin/AdminCaseStudies.tsx"
import AdminCaseStudyEdit from "./pages/admin/AdminCaseStudyEdit.tsx"
import AdminJobs from "./pages/admin/AdminJobs.tsx"
import AdminJobEdit from "./pages/admin/AdminJobEdit.tsx"
import AdminMigrate from "./pages/admin/AdminMigrate.tsx"
import {AuthProvider, RequireAuth} from "./lib/auth.tsx"
import {Footer} from "./components/Footer.tsx"
import {leadershipService} from "./js/services.ts"
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";

// layout wrapper so Footer sits inside the router context (its <Link>s need it)
function Layout(){
  return <>
    <Outlet/>
    <Footer/>
  </>
}

function App() {

  const router = createBrowserRouter([
    {Component: Layout, children: [
      {path:"/", Component:Home},
      {path:"/services", Component:Services},
      {path:"/services/leadership-coaching", element:<Service service={leadershipService}/>},
      {path:"/services/:category", Component:ServiceCategory},
      {path:"/services/:category/:slug", Component:Service},
      {path:"/about", Component:About},
      {path:"/about/:slug", Component:TeamMember},
      {path:"/case-studies", Component:CaseStudy},
      {path:"/case-studies/:slug", Component:CaseStudyArticle},
      {path:"/careers", Component:Careers},
      {path:"/careers/:slug", Component:Job},
      {path:"/insights", Component:Insights},
      {path:"/insights/:slug", Component:Insight},
      {path:"/contact", Component:Contact},
    ]},
    {path:"/admin/login", Component:AdminLogin},
    {path:"/admin", element:<RequireAuth><AdminLayout/></RequireAuth>, children:[
      {index:true, element:<Navigate to="/admin/insights" replace/>},
      {path:"insights", Component:AdminInsights},
      {path:"insights/new", Component:AdminInsightEdit},
      {path:"insights/:id", Component:AdminInsightEdit},
      {path:"case-studies", Component:AdminCaseStudies},
      {path:"case-studies/new", Component:AdminCaseStudyEdit},
      {path:"case-studies/:id", Component:AdminCaseStudyEdit},
      {path:"jobs", Component:AdminJobs},
      {path:"jobs/new", Component:AdminJobEdit},
      {path:"jobs/:id", Component:AdminJobEdit},
      {path:"migrate", Component:AdminMigrate},
    ]},
  ])
  return <AuthProvider><RouterProvider router={router}/></AuthProvider>
}

export default App
