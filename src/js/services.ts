import Advisory from "../images/Frame 2147223761.png"
import Market from "../images/Frame 2147223761_2.png"
import Meeting from "../images/Frame 2147223898.png"
import Notes from "../images/Frame 2147223899.png"
import Reality from "../images/Frame 2147223899_2.png"
import Talk from "../images/Frame 2147223761_28.png"

// Services page, "Our Philosophy" paragraphs
export const philosophy =[
    "At ProduqtEdge, we believe sustainable growth happens when strategy, products, operations, and technology work together. Sitting at the intersection of people, product and process, we incorporate our market and industry experience, technical know-how through tested and trusted delivery methods and strategies to help organisations successfully deliver value, find product-market fit, grow their products while ensuring the corresponding scale is achieved for internal processes.",
    "We combine product-led thinking, digital transformation, operational excellence, and growth strategy to help businesses unlock performance, scale sustainably, and create lasting competitive advantage.",
    "By combining deep advisory expertise with practical execution, we partner with leaders across financial services, oil & gas, construction, manufacturing, and telecommunications to turn strategy into measurable outcomes through advisory, execution, and capability development.",
]

// each category gets its own page at /services/:category
//   path - card image on the Services page
//   hero - header image on the category page
export type Category = {slug:string, title:string, path:string, hero:string, content:string}

export const categories: Category[] =[
    {slug:"advisory-transformation-growth", title:"Advisory, Transformation & Growth", path:Advisory, hero:Meeting,
        content:"We partner with investors and venture builders to reduce risk, accelerate validation, and unlock value at every stage of the innovation funnel — from early diligence to incubation support."},
    {slug:"operational-excellence-digital-transformation", title:"Operational Excellence & Digital Transformation", path:Advisory, hero:Meeting,
        content:"We partner with investors and venture builders to reduce risk, accelerate validation, and unlock value at every stage of the innovation funnel — from early diligence to incubation support."},
    {slug:"market-investment-intelligence", title:"Market & Investment Intelligence", path:Market, hero:Meeting,
        content:"We help founders and growth teams bridge strategy and execution — from building investor confidence to launching products and expanding market reach."},
]

// each service gets its own page at /services/:category/:slug
//   path, content, links - its card on the category page, links are the slugs of the services listed on it
//   summary   - its card under "More in ..." on the other services in its category
//   intro     - paragraphs beside the title
//   questions - circle list under the intro
//   help      - "Questions we help you answer" checklist with a photo
//   approach, work - grey boxes with a photo, method shows as tags under the approach
//   different, result - the dark "What makes us different" panel, result is the column beside it
//   cases     - slugs of the case studies shown under it
// a service with no intro opens with its title only, until its content comes in
export type Service = {slug:string, category:string, title:string, path:string, content:string, links:string[], summary:string,
    intro:string[], questions?:string[], help?:{points:string[], path:string},
    approach?:{title:string, content:string[], method?:string[], path:string}, work?:{title:string, content:string[], path:string},
    different?:string, result?:string, cases:string[]}

const advisory =["product-audit-advisory","product-strategy-advisory","customer-journey-optimisation","product-development-pmaas","product-led-transformation","product-led-growth"]
const operational =["business-process-optimisation","digital-transformation"]
const market =["market-intelligence-market-entry","investor-validation-due-diligence"]

const summary = "A clear blueprint for improvement, built on real customer evidence"
const marketContent = "We help founders and growth teams bridge strategy and execution — from building investor confidence to launching products and expanding market reach."

// repeated across several of the designs
const workCovers = "We work with you to refine product strategy, co-design new features and transformation initiatives, implement governance and operating models, coach product and business leaders, and support cross-functional alignment between Product, Engineering, Data, Risk, and Business units to ensure that the “what” is tightly connected to the “how”, thereby achieving overall transformation geared towards success."
const growthApproach = "Our Product-Led Growth approach goes beyond marketing-led acquisition or isolated conversion initiatives. We combine customer research, behavioural and product analytics, journey diagnostics, experimentation, and commercial performance analysis to understand what drives or constrains growth across the full customer lifecycle. We work with your teams across product, growth, marketing, data, technology, operations, business and support to identify high-impact opportunities for improving the customer journey from acquisition to activation and adoption, strengthening user engagement to increase retention, reduce churn, and grow customer lifetime value."
const growthDifferent = "We don’t treat growth as a series of disconnected campaigns or short-term incentives. We help you build repeatable growth mechanisms into the product and its surrounding customer experience, so growth is driven by genuine value, supported by data and strengthened through continuous learning."
const growthResult = "Higher retention, lower churn and greater customer lifetime value, with customer value connected to commercial outcomes."
const designDifferent = "We treat product design and process efficiency as inseparable parts of user-centred design."
const designResult = "Redesigned products and streamlined processes that serve customers better, attract new adopters, grow retention, drive advocacy and hold up at scale."

export const services: Service[] =[
    {slug:"product-audit-advisory", category:"advisory-transformation-growth", title:"Product Audit & Advisory",
        path:Advisory, content:categories[0].content, links:advisory, summary,
        intro:["For digitally forward organisations, our Product Audit & Advisory creates the bridge between strategic vision and practical execution; designed to help the client answer important questions such as"],
        questions:[
            "Are our digital products delivering the right value to customers?",
            "Where are the gaps in usability, conversion, engagement, or retention?",
            "How well are our internal processes and systems supporting product performance?",
            "Do we have the right product operating model, governance, and team capabilities?",
            "How aligned are product decisions with our broader commercial priorities?",
        ],
        approach:{title:"Our Approach", path:Notes, content:[
            "Our Product Audit goes beyond surface-level evaluation. It brings together UI/UX research, data and behavioural analytics, process diagnostics, risk and compliance alignment, product performance analysis, and most importantly, real customer feedback through primary research; all culminating in a clear blueprint for improvement.",
        ]},
        different:workCovers,
        cases:["lendsqr","onecard"]},
    {slug:"product-strategy-advisory", category:"advisory-transformation-growth", title:"Product Strategy Advisory",
        path:Advisory, content:categories[0].content, links:operational, summary,
        intro:["In fast moving and dynamic environments where user values and needs are as dynamic as the regulatory policies driving the markets, product leaders are constantly inundated with ensuring that product decisions do not become reactive, fragmented, assumptions-driven or even archaic."],
        approach:{title:"Our Approach", path:Notes, content:[
            "We work with CEOs, Product Leads and leadership teams to define or refine the strategic direction of their digital products and portfolios. Drawing on customer insight, market intelligence, product performance, commercial priorities and organisational context, we clarify the role each product should play, the value it should create and the opportunities the organisation should focus on.",
            "We facilitate alignment across Product, Engineering, Design, Data, Risk, Operations and Business teams, so product priorities stay tied to broader organisational goals.",
        ]},
        work:{title:"What our work covers", path:Reality, content:[
            workCovers,
            "We facilitate alignment across Product, Engineering, Design, Data, Risk, Operations, and Business teams to build shared understanding and ensure that product priorities are aligned with broader organisational goals.",
        ]},
        different:"We develop product strategy as an actionable decision-making framework, connecting strategic choices to investment decisions, product governance, roadmap priorities, and practical execution.",
        result:"The result is a clear and evidence-informed product direction that enables better decision-making, strengthens cross-functional alignment, and drives resources to the customer and commercial opportunities that matter most.",
        cases:["lendsqr","ebanqo"]},
    {slug:"customer-journey-optimisation", category:"advisory-transformation-growth", title:"Customer Journey Optimisation",
        path:Market, content:marketContent, links:market, summary,
        intro:[
            "As product footprints grow, complexity inevitably increases across customer journeys, technology dependencies, internal processes, and third-party relationships, complexity can quietly undermine reliability, trust, and commercial outcomes.",
            "While our Product Audit & Advisory is designed to help product leadership gain clear, shared understanding of how products are performing today, our Customer Journey Optimisation helps to ensure that products adopt the most optimal flows and processes for both customer facing processes and internal operations to minimise churn, while increasing adoption and retention. To achieve this, we treat product design and process efficiency as inseparable peas in the pod of user-centred design.",
        ],
        approach:{title:"Our Approach", path:Notes, content:[
            "Product Audit & Advisory gives product leadership a clear, shared understanding of how products perform today. Customer Journey Optimisation makes sure those products adopt the best flows and processes, for both customer-facing journeys and internal operations, to reduce churn while increasing adoption and retention.",
            "We review existing digital products and their end-to-end processes, from awareness and onboarding through to renewals and claims. We identify where complexity, manual intervention or misaligned rules dilute the customer experience.",
        ]},
        work:{title:"Our work", path:Reality, content:[workCovers]},
        different:designDifferent, result:designResult,
        cases:["onecard","ebanqo"]},
    {slug:"product-development-pmaas", category:"advisory-transformation-growth", title:"Product Development & PMaaS",
        path:Market, content:marketContent, links:market, summary,
        intro:["For organisations developing new digital products or strengthening existing ones, progress is often constrained by unclear product direction, capability gaps, fragmented ownership or limited product management capacity. Successful products need clear ownership, continuous customer discovery, disciplined prioritisation and close coordination across Product, Engineering, Design, Data, Risk, Operations and Business teams."],
        approach:{title:"Our Approach", path:Notes, content:[
            "Our Product Development & PMaaS covers the full spectrum of Validate, Build, Launch and Grow. It provides the strategic product leadership and hands-on management support needed to develop new products, improve existing ones and strengthen execution across the product lifecycle.",
            "Our approach goes beyond writing product requirements, managing backlogs or coordinating delivery teams. We make sure products are grounded in real customer needs and aligned with clear commercial objectives.",
        ]},
        work:{title:"Our work", path:Reality, content:[workCovers]},
        different:designDifferent, result:designResult,
        cases:["factorex","lendsqr","onecard"]},
    {slug:"product-led-transformation", category:"advisory-transformation-growth", title:"Product-Led Transformation",
        path:Market, content:marketContent, links:market, summary,
        intro:["In large organisations, company-wide transformation programmes typically stall and drift from their intended product and business outcomes, usually because they become system-led, vendor-driven or project-focused."],
        approach:{title:"Our approach", path:Notes,
            content:["Our Product-Led Transformation advisory is designed to avoid motion without outcomes. We anchor transformation efforts to your key goals and business objectives. We integrate product strategy, modular delivery design, governance and hands-on execution support to minimise delivery risk, delayed ROI and stakeholder fatigue."],
            method:["Product strategy","Hands-on execution support","Modular delivery design","Governance"]},
        different:"We walk the journey with you as an integrated transformation partner. We don’t hand you an implementation manual, or assign Project Managers and walk away at go-live.",
        result:"The organisation realises the value of its transformation investment, supported by governance, ownership and execution efficiency.",
        cases:["ebanqo","factorex"]},
    {slug:"product-led-growth", category:"advisory-transformation-growth", title:"Product-Led Growth",
        path:Market, content:marketContent, links:market, summary,
        intro:["For organisations seeking sustainable growth, acquiring more customers is only part of the challenge. Lasting growth depends on how effectively the product helps customers recognise value, adopt key features, deepen usage and stay engaged over time."],
        help:{path:Talk, points:[
            "Where are customers dropping off across the acquisition, onboarding, activation, and retention journey?",
            "Are users reaching the product’s core value (aha! moment) quickly and consistently?",
            "What product, pricing, process, or experience barriers are limiting growth?",
            "How can customer and product data be used to identify and prioritise the most valuable growth opportunities?",
        ]},
        approach:{title:"Our approach", path:Notes, content:[growthApproach]},
        different:growthDifferent, result:growthResult,
        cases:["ebanqo","onecard"]},
    {slug:"business-process-optimisation", category:"operational-excellence-digital-transformation", title:"Business Process Optimisation",
        path:Advisory, content:categories[1].content, links:operational, summary,
        intro:["Operational inefficiency rarely shows up as one obvious failure. More often it’s a collection of everyday frustrations: rework, duplicated effort, unclear ownership, manual workarounds, disconnected tools, inconsistent procedures and little visibility into where work stands. Across teams and processes these add up, which is why organisations engage us to improve how work moves across people, teams and systems."],
        approach:{title:"Our approach", path:Notes, content:[growthApproach]},
        different:growthDifferent, result:growthResult,
        cases:["onecard","ebanqo"]},
    // title only until their content comes in
    {slug:"digital-transformation", category:"operational-excellence-digital-transformation", title:"Digital Transformation",
        path:Advisory, content:categories[1].content, links:operational, summary, intro:[], cases:[]},
    {slug:"market-intelligence-market-entry", category:"market-investment-intelligence", title:"Market Intelligence & Market Entry Support",
        path:Market, content:categories[2].content, links:market, summary, intro:[], cases:[]},
    {slug:"investor-validation-due-diligence", category:"market-investment-intelligence", title:"Investor Validation & Startup Due Diligence",
        path:Market, content:categories[2].content, links:market, summary, intro:[], cases:[]},
]

// leadership has no page of its own yet, so its links open /services
export const leadership = {title:"Leadership Coaching & Capacity Development", to:"/services"}

export const servicePath = (service: Service) => `/services/${service.category}/${service.slug}`

export const inCategory = (slug: string) => services.filter((service) => service.category === slug)

// turns services into the links on a card
export const toLinks = (list: Service[]) => list.map((service) => ({title:service.title, to:servicePath(service)}))

// "Why Choose Produqtedge" checklist
export const reasons =["Product-First Thinking","Strategy with Hands-On Execution","Support at Every Stage","Reduced Risk, Faster Progress"]
