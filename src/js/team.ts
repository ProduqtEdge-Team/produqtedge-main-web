import Yewande from "../images/Yewande.png"
import Chike from "../images/Chike.png"
import Gloria from "../images/Gloria.png"
import Olaniyi from "../images/Olaniyi.png"
import Collins from "../images/Collins.png"
import Femi from "../images/Femi-Omotayo.png"

// shared by the About page cards and the TeamMember page (/about/:slug)
// add a new member here and both pages pick them up
export type TeamMember = {slug:string, name:string, role:string, path:string, quote:string, bio:string[], linkedin:string}

const quote = "We are driven by curiosity and guided by impact. Every product we build is an opportunity to challenge assumptions and raise the standard."

export const team: TeamMember[] =[
    {slug:"yewande-sulaiman", name:"Yewande Sulaiman", role:"Managing Partner", path:Yewande, quote:quote, linkedin:"",
        bio:[
            "Yewande is a recognised expert in product strategy, digital transformation, and operational optimisation. With over 17 years of experience spanning product management, technology strategy, process engineering, business productivity, and stakeholder value realisation, she now helps product leaders and organisations to solve the problems that hinder product success, helping them achieve problem-solution fit, product-market fit and repeatable growth through effective product strategies and optimised processes, and driving growth and expansions across the private and public sectors of Nigeria and Sub-Saharan Africa.",
            "Her career journey has evolved from designing and implementing business productivity solutions to building and shipping B2B and B2C technology products that have stood the test of time. Yewande is an avid believer that the right combination of research, data-driven strategy and technology alongside a goal-oriented delivery process are the key ingredients to solving real problems, creating impact and driving economic growth in Africa. Her focus on measurable results and customer-focused problem solving and value realization for all stakeholders has made her a trusted coach and advisor to entrepreneurs and executives seeking to scale their businesses sustainably.",
        ]},
    {slug:"chike-ikeora", name:"Chike Ikeora", role:"Partner & Lead Consultant, Technology", path:Chike, quote:quote, linkedin:"",
        bio:[
            "Chike is a seasoned technology leader with over 15 years of experience in software architecture, cloud computing, systems integration, continuous deployment, and engineering management, driving successful product launches across Africa and Europe.",
            "Chike brings a strong design thinking approach to his work and is adept at balancing user needs with technical feasibility and long-term scalability. Chike has led technology delivery teams across diverse industries, and companies of multiple sizes contributing to their success and growth. He brings his passion for the technology, wealth of experience and a proven ability to navigate and solve complex challenges.",
        ]},
    {slug:"gloria-gowal", name:"Gloria Gowal", role:"Partner & Lead Consultant, Delivery", path:Gloria, quote:quote, linkedin:"",
        bio:[
            "Gloria Gowal is an experienced digital transformation expert with over 16 years of professional experience, skilled in leading high-complexity institutional reform and operational restructuring projects. She has consulted on several projects including a Youth Enterprise Accelerator Program (YouthADAPT), World Bank initiative.",
            "She has a strong track record in operational restructuring, performance design, and change management. She has supported multiple organisations in adopting digital operating models and optimising service delivery across logistics and supply chain functions.\nShe was highly instrumental in driving change management of OANDO following the merger between Oando Marketing & OVH Energy.",
            "She is aptly positioned to evaluate business processes, systems, and technology to help organisations evolve into more optimal versions of themselves, driving improvements across the entire business while positioning for growth.",
        ]},
]

// advisory board on the About page, no individual pages yet
export type BoardMember = {name:string, role:string, path:string}

export const board: BoardMember[] =[
    {name:"Olaniyi Yusuf", role:"M.D., Andersen Consulting", path:Olaniyi},
    {name:"Collins Onuegbu", role:"The Chairman, SATH", path:Collins},
    {name:"Femi Omotayo", role:"M.D., AOS Orwell Limited", path:Femi},
]
