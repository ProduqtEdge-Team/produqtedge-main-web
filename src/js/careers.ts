// Careers page, "A Great Place to Work" checklist
export const perks =["Hybrid opportunities with a headquarters in Lagos","Collaborative team culture with a focus on creativity and innovation",
    "Opportunities for growth and development","Ability to contribute to our mission of helping people"]

// a point is a plain line, or a line with its own sub points under it
export type Point = string | {text:string, points:string[]}

// sub sections sit under the section heading in a smaller heading, ordered lists come out numbered
export type JobSection = {title:string, sub?:boolean, content?:string[], points?:Point[], ordered?:boolean}

// a job with an empty article opens with its header only, text wrapped in **double stars** comes out bold
export type Job = {slug:string, title:string, tags:string[], location:string, details:{title:string, content:string}[], article:JobSection[]}

export const jobs: Job[] =[
    {slug:"product-consultant", title:"Product Consultant", tags:["Delivery","Hybrid","Full time"],
        location:"", details:[], article:[]},
    {slug:"operations-administrative-assistant", title:"Operations & Administrative Assistant", tags:["Operations","Hybrid","Full time"],
        location:"", details:[], article:[]},
    {slug:"analyst-senior-associate", title:"Analyst Senior Associate", tags:["Delivery","Hybrid","Full time"],
        location:"Lagos (On site, Remote flexible) – Company / Client Locations",
        details:[
            {title:"Department/Division/Unit", content:"Delivery and Advisory"},
            {title:"Report to", content:"Delivery Team Leads"},
            {title:"Direct reports", content:"Analysts (where applicable)"},
            {title:"Internally interfaces with", content:"All Teams"},
            {title:"Externally interfaces with", content:"Clients, Partners, Stakeholders"},
        ],
        article:[
            {title:"About Analyst Senior Associate role", content:["We are looking to fill roles of Delivery Manager across a range of grades (from Junior Analysts to Senior Associates). Our structure mimics the Big 4 model. Our Delivery Team handles execution from market research through product development, all the way to growth while our Advisory Team provides strategy consulting and advisory services to our clients and inhouse teams."]},
            {title:"Job function", content:["They are responsible for the end-to-end delivery of products and projects as part of client engagements and/or our startup studio. They will coordinate and engage with clients, partners, and relevant stakeholders."]},
            {title:"Key responsibilities"},
            {title:"Product and Project Management", sub:true, points:[
                "Responsible for delivery of products and services for new and existing clients leveraging best practices and company frameworks and policies by driving engagements from ideation to success and taking charge of activities across the product lifecycle.",
                "Conducts research and analysis including industry, competitor and user research and analysis for new products and services.",
                "Coordinates internal teams to ensure delivery with optimal use of resources.",
                "Maintains current knowledge of industry trends, opportunities, channels, products, and competitors and optimise growth efforts.",
            ]},
            {title:"Account Management", sub:true, points:[
                {text:"Provides excellent customer-focused business management activities for designated customers and products including but not limited to:", points:[
                    "Developing and maintaining strong relationships with assigned clients.",
                    "Proactively engaging with clients for feedback and incorporating feedback into service delivery and future engagements.",
                    "Regularly reviewing client and engagement portfolios and driving internal and external stakeholders to ensure maximum lifetime value for all clients and the company.",
                    "Drafts and reviews business and documentation as required.",
                ]},
                "Keeps abreast of trends and developments in all industries relevant to the business that may affect product/service delivery.",
                "Other duties as assigned in relation to achieving defined goals.",
            ]},
            {title:"Requirements", points:[
                "First Degree in Communications, Business Management, Computer Science or other relevant field",
                "Business Analysis, Product Management, Project Management",
                "Associate – minimum 3 years' experience in relevant role",
                "Senior Associate – minimum 6 years' experience in relevant role",
                "Business Analysis, Product Management, Project Management",
                "Product Management",
                "Project Management",
                "Business Analysis",
                "Product Sense",
                "Understanding of risk, compliance and process management",
                "Strategic thinking and problem solving skills",
                "Strong verbal and written communication and presentation skills",
                "Prior operating experience at a fast-paced environment or start-up",
                "Exceptionally analytical",
                "Highly resourceful",
                "Painstakingly detail-oriented",
                "Highly productive with effective use of time",
                "Highly emotionally intelligent",
                "Customer-first thought process",
                "Personable personality",
                "Great interpersonal and people skills",
            ]},
            {title:"Working hours", sub:true, points:[
                "Minimum **40 hours** per week",
                "Regular working hours (9AM - 5PM) on business days - More hours may be required depending on business demands",
            ]},
            {title:"Travel", sub:true, points:["Possible travel"]},
            {title:"Key performance indicator", points:[
                "Time to market for assigned projects",
                "Client Satisfaction and Retention",
                "Competitive Advantage",
                "Revenue per client/member (RPC)",
                "Net Promoter Score (NPS)",
                "Customer Lifetime Value (LTV)",
                "Product Specific Metrics",
            ]},
            {title:"Benefits", points:[
                "Competitive salary commensurate with experience (Annual income cap: Associate = N6m, Senior Associate = N8m)",
                "20 days Annual leave",
                "Health Insurance",
                "Company sponsored professional trainings",
                "Paid industry events and conferences and professional memberships",
                "Opportunity to grow and advance within a rapidly expanding environment",
                "Collaborative team culture with a focus on creativity and innovation",
                "Laptop (BYOD, Transition to Company-issued)",
            ]},
            {title:"Application Instructions - Read carefully!", ordered:true, points:[
                "To apply, click the \"Apply\" button",
                "Complete all the required questions",
            ]},
        ]},
]
