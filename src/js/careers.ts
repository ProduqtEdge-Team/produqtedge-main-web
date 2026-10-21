import type {Point} from "./text.tsx";

// Careers page, "A Great Place to Work" checklist
export const perks =["Hybrid opportunities with a headquarters in Lagos","Collaborative team culture with a focus on creativity and innovation",
    "Opportunities for growth and development","Ability to contribute to our mission of helping people"]


// sub sections sit under the section heading in a smaller heading, ordered lists come out numbered
export type JobSection = {title:string, sub?:boolean, content?:string[], points?:Point[], ordered?:boolean}

// link, when set, sends the card to that external URL instead of the internal /careers/:slug page
// a job with an empty article opens with its header only, text wrapped in **double stars** comes out bold
export type Job = {slug:string, title:string, tags:string[], link?:string, location:string, details:{title:string, content:string}[], article:JobSection[]}

export const jobs: Job[] =[
    {slug:"backend-engineer-c-net-aws-ai", title:"Backend Engineer (C#/.NET, AWS & AI)", tags:["Delivery","Lagos Hybrid","Fulltime"],
        link:"https://www.produqtedge.com/careers/backend-engineer-c-net-aws-ai",
        location:"", details:[], article:[]},
    {slug:"project-manager", title:"Project Manager", tags:["Delivery","Lagos Hybrid","Fulltime"],
        link:"https://www.produqtedge.com/careers/project-manager",
        location:"", details:[], article:[]},
    {slug:"growth-associate-business-development-and-sales", title:"Growth Associate", tags:["Growth","Lagos Hybrid","Fulltime"],
        link:"https://www.produqtedge.com/careers/growth-associate-business-development-and-sales",
        location:"", details:[], article:[]},
]
