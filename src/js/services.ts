import Advisory from "../images/new-images/Collaborative Strategy Meeting.png"
import Operational from "../images/new-images/20620.jpg"
import Market from "../images/new-images/119111.jpg"

// per-service images from the "services-images" folder; one image per Questions/Approach/Work slot
import PaaQuestions from "../images/new-images/services-images/Product Audit & Advisory questions image .jpg"
import PaaApproach from "../images/new-images/services-images/Product Audit & Advisory our approach image .jpg"
import PsaQuestions from "../images/new-images/services-images/Product Strategy Advisory questions image.jpg"
import PsaApproach from "../images/new-images/services-images/Product Strategy Advisory our approach image .jpg"
import PsaScope from "../images/new-images/services-images/Product Strategy Advisory scope image .jpg"
import PmaasApproach from "../images/new-images/services-images/Product Development & PMaaS approach image  .jpg"
import PmaasWork from "../images/new-images/services-images/Product Development & PMaaS our work .jpg"
import PlgQuestions from "../images/new-images/services-images/Product-Led Growth questions.jpg"
import PlgApproach from "../images/new-images/services-images/Product-Led Growth  2nd.jpg"
import BpoApproach from "../images/new-images/services-images/Business Process Optimisation .jpg"
import DtQuestions from "../images/new-images/services-images/Digital Transformation questions.jpg"
import DtApproach from "../images/new-images/services-images/Digital Transformation approach.jpg"
import DtAdoption from "../images/new-images/services-images/Digital Transformation for adoption.jpg"
import MiQuestions from "../images/new-images/services-images/Market Intelligence & Market Entry Support questions.jpg"
import MiApproach from "../images/new-images/services-images/Market Intelligence & Market Entry Support approach.jpg"
import DueDiligenceQuestions from "../images/new-images/services-images/due deligence questions.jpg"
// pool picks for services without a named image
import CjoApproach from "../images/new-images/services-images/nick-fewings-EkyuhD7uwSM-unsplash.jpg"
import PltApproach from "../images/new-images/services-images/isaac-smith-AT77Q0Njnt0-unsplash.jpg"
import DueDiligenceApproach from "../images/new-images/services-images/towfiqu-barbhuiya-nApaSgkzaxg-unsplash.jpg"
import LeadershipApproach from "../images/new-images/services-images/christina-wocintechchat-com-m-ioGkluYGy38-unsplash.jpg"

// Services page, "Our Philosophy" paragraphs
export const philosophy =[
    "At ProduqtEdge, we believe sustainable growth happens when strategy, products, operations, and technology work together. Sitting at the intersection of people, product and process, we incorporate our market and industry experience, technical know-how through tested and trusted delivery methods and strategies to help organisations successfully deliver value, find product-market fit, grow their products while ensuring the corresponding scale is achieved for internal processes.",
    "We combine product-led thinking, digital transformation, operational excellence, and growth strategy to help businesses unlock performance, scale sustainably, and create lasting competitive advantage.",
    "By combining deep advisory expertise with practical execution, we partner with leaders across financial services, oil & gas, construction, manufacturing, and telecommunications to turn strategy into measurable outcomes through advisory, execution, and capability development.",
]

export type Step = {title:string, content:string}

// each category gets its own page at /services/:category
//   path, content - its card on the Services page
//   heading  - page title when it differs from the card title
//   tagline, intro - under the title and beside it
//   other    - its line under "Other Service Areas" on the other category pages
//   start    - "Where to Start", each row names the slug of the service it points to
//   fit      - grey image placeholder (caption) beside numbered steps, or beside text and "What we use" tags
export type Category = {slug:string, title:string, path:string, content:string,
    heading?:string, tagline:string, intro:string, other:string,
    start:{title:string, content:string, rows:{situation:string, service:string}[]},
    fit:{title:string, caption:string, steps?:Step[], content?:string, tags?:string[]}}

export const categories: Category[] =[
    {slug:"advisory-transformation-growth", title:"Advisory, Transformation & Growth", path:Advisory,
        content:"We help product leaders set direction, build and improve products grounded in real customer needs, and anchor transformation and growth to measurable product and business outcomes. Most engagements start in one of these six services and widen from there.",
        tagline:"Build the right product, the right way.",
        intro:"We help product leaders set direction, build and improve products grounded in real customer needs, and anchor transformation and growth to measurable product and business outcomes. Most engagements start in one of these six services and widen from there.",
        other:"Build the right product, the right way.",
        start:{title:"Where to Start", content:"Most clients arrive with a situation, not a service name. Find yours.", rows:[
            {situation:"We don’t have an honest picture of where our products stand.", service:"product-audit-advisory"},
            {situation:"Product decisions are reactive and nobody agrees on priorities.", service:"product-strategy-advisory"},
            {situation:"Customers drop off partway through onboarding or renewals.", service:"customer-journey-optimisation"},
            {situation:"We know what to build but don’t have the product capacity.", service:"product-development-pmaas"},
            {situation:"Our transformation programme has drifted from its outcomes.", service:"product-led-transformation"},
            {situation:"Acquisition works, but growth stalls after sign-up.", service:"product-led-growth"},
        ]},
        fit:{title:"How They Fit Together", caption:"product team working through a wall of findings", steps:[
            {title:"Understand", content:"An audit establishes where products stand today, against customer evidence rather than internal assumption."},
            {title:"Decide", content:"Strategy turns those findings into direction: where to compete, what to prioritise and where investment goes."},
            {title:"Build", content:"Product development and journey work carry the direction into delivery, with clear ownership and operating discipline."},
            {title:"Grow", content:"Growth and transformation work keep the product compounding value once it is live."},
        ]}},
    {slug:"operational-excellence-digital-transformation", title:"Operational Excellence & Digital Transformation", path:Operational,
        content:"We partner with investors and venture builders to reduce risk, accelerate validation, and unlock value at every stage of the innovation funnel — from early diligence to incubation support.",
        heading:"Operations & Technology",
        tagline:"Fix how work moves before you automate it.",
        intro:"Operational inefficiency rarely shows up as one obvious failure. It is rework, duplicated effort, unclear ownership, manual workarounds and disconnected tools, adding up across teams. We redesign how work moves across people, teams and systems, then decide where workflow tools, automation, integrations or AI create real value.",
        other:"Fix how work moves, then decide where technology adds value.",
        start:{title:"Where To Start", content:"Most clients arrive with a situation, not a service name. Find yours.", rows:[
            {situation:"Teams spend more time chasing information than doing the work.", service:"business-process-optimisation"},
            {situation:"Nobody is clear on who owns a process or who approves what.", service:"business-process-optimisation"},
            {situation:"We’ve invested in new systems, but the work hasn’t changed.", service:"digital-transformation"},
            {situation:"We want to apply AI but aren’t sure the foundations are there.", service:"digital-transformation"},
        ]},
        fit:{title:"How They Fit Together", caption:"operations team mapping a workflow", steps:[
            {title:"Trace", content:"We follow critical processes as they operate in practice, not as they are documented, from initiation to completion."},
            {title:"Redesign", content:"Ownership, handoffs, approvals and procedures are simplified and standardised before any tool is selected."},
            {title:"Enable", content:"Only then do we decide where workflow tools, automation, integrations or AI create meaningful operational value."},
        ]}},
    {slug:"market-investment-intelligence", title:"Market & Investment Intelligence", path:Market,
        content:"We help founders and growth teams bridge strategy and execution — from building investor confidence to launching products and expanding market reach.",
        tagline:"Decide on evidence, not assumption.",
        intro:"Two decisions carry the most risk: entering a market you don’t yet understand, and backing a product whose traction you can’t verify. We test both against primary research and market evidence rather than pitch decks and industry reports.",
        other:"Test the market before you enter it, and the product before you fund it.",
        start:{title:"Where To Start", content:"Two different decisions, two different services. Find yours.", rows:[
            {situation:"We’re taking a product into a market we don’t know well.", service:"market-intelligence-market-entry"},
            {situation:"The product works elsewhere, but we can’t assume it works here.", service:"market-intelligence-market-entry"},
            {situation:"We’re evaluating a company and the pitch deck isn’t enough.", service:"investor-validation-due-diligence"},
            {situation:"Growth looks strong, but we can’t tell whether it’s sustainable.", service:"investor-validation-due-diligence"},
        ]},
        fit:{title:"The Same Evidence Base", caption:"analyst reviewing market research with a client",
            content:"Both services answer a different question, but they draw on the same work: primary research with real customers and stakeholders, rather than secondary reports. One asks whether a market will take a product. The other asks whether a product’s traction will hold.",
            tags:["Primary customer & stakeholder research","Market sizing","Customer segmentation","Competitor benchmarking","Product & proposition validation","Regulatory assessment","Channel analysis","Commercial evaluation"]}},
]

// each service gets its own page at /services/:category/:slug
//   summary   - its card under "The Services" on its category page
//   intro     - paragraphs beside the title
//   questions - circle list with a photo and Contact Us
//   approach  - photo beside the approach text, method shows as tags
//   work      - grey box under the approach (Our work, Scope ...), with a photo beside it, or gets beside it instead
//   gets      - dark checklist card beside work
//   steps     - numbered 01-04 cards, the last one dark
//   different, result - the dark panel, result points show as an arrow list under the result
//   cases     - slugs of the case studies under "Related Case Studies"
// a service with no intro opens with its title only, until its content comes in
export type Service = {slug:string, category:string, title:string, summary:string,
    intro:string[], questions?:{points:string[], path:string},
    approach?:{title:string, content:string[], method?:string[], path:string},
    work?:{title:string, lead?:string, content?:string[], points?:string[], method?:string[], path?:string},
    gets?:{title:string, points:string[]},
    steps?:{title:string, items:Step[]},
    different?:string, result?:string, resultPoints?:string[], cases:string[]}

// repeated across several of the designs
const workCovers = "We work with you to refine product strategy, co-design new features and transformation initiatives, implement governance and operating models, coach product and business leaders, and support cross-functional alignment between Product, Engineering, Data, Risk, and Business units to ensure that the “what” is tightly connected to the “how”, thereby achieving overall transformation geared towards success."
const cases =["lendsqr","ebanqo","onecard"]

export const services: Service[] =[
    {slug:"product-audit-advisory", category:"advisory-transformation-growth", title:"Product Audit & Advisory",
        summary:"A clear blueprint for improvement, built on real customer evidence.",
        intro:["For digitally forward organisations, our Product Audit & Advisory creates the bridge between strategic vision and practical execution; designed to help the client answer important questions such as"],
        questions:{path:PaaQuestions, points:[
            "Are our digital products delivering the right value to customers?",
            "Where are the gaps in usability, conversion, engagement, or retention?",
            "How well are our internal processes and systems supporting product performance?",
            "Do we have the right product operating model, governance, and team capabilities?",
            "How aligned are product decisions with our broader commercial priorities?",
        ]},
        approach:{title:"Our Approach", path:PaaApproach, content:[
            "Our Product Audit goes beyond surface-level evaluation. It brings together UI/UX research, data and behavioural analytics, process diagnostics, risk and compliance alignment, product performance analysis, and most importantly, real customer feedback through primary research; all culminating in a clear blueprint for improvement.",
        ]},
        different:workCovers,
        cases},
    {slug:"product-strategy-advisory", category:"advisory-transformation-growth", title:"Product Strategy Advisory",
        summary:"Product strategy as an actionable decision-making framework.",
        intro:["In fast-moving markets, where user needs shift as quickly as the regulations shaping them, product leaders are under constant pressure to keep product decisions from becoming reactive, fragmented, assumption-driven or outdated."],
        questions:{path:PsaQuestions, points:[
            "Where should we compete?",
            "Which customer needs should we prioritise?",
            "How should we allocate investment?",
        ]},
        approach:{title:"Our Approach", path:PsaApproach, content:[
            "We work with CEOs, Product Leads and leadership teams to define or refine the strategic direction of their digital products and portfolios. Drawing on customer insight, market intelligence, product performance, commercial priorities and organisational context, we clarify the role each product should play, the value it should create and the opportunities the organisation should focus on.",
            "We facilitate alignment across Product, Engineering, Design, Data, Risk, Operations and Business teams, so product priorities stay tied to broader organisational goals.",
        ]},
        work:{title:"Scope", path:PsaScope, lead:"What our work covers, depending on your organisation and product stage", points:[
            "Product vision and strategic objectives",
            "Ideal customer profiles and priority customer segments",
            "Value proposition, market positioning and messaging",
        ]},
        different:"We develop product strategy as an actionable decision-making framework, connecting strategic choices to investment decisions, product governance, roadmap priorities, and practical execution.",
        result:"The result is a clear and evidence-informed product direction that enables better decision-making, strengthens cross-functional alignment, and drives resources to the customer and commercial opportunities that matter most.",
        cases},
    {slug:"customer-journey-optimisation", category:"advisory-transformation-growth", title:"Customer Journey Optimisation",
        summary:"Product design and process efficiency, treated as one.",
        intro:["As product footprints grow, complexity increases across customer journeys, technology dependencies, internal processes and third-party relationships. Left unchecked, that complexity quietly undermines reliability, trust and commercial outcomes."],
        approach:{title:"Our Approach", path:CjoApproach, content:[
            "Product Audit & Advisory gives product leadership a clear, shared understanding of how products perform today. Customer Journey Optimisation makes sure those products adopt the best flows and processes, for both customer-facing journeys and internal operations, to reduce churn while increasing adoption and retention.",
            "We review existing digital products and their end-to-end processes, from awareness and onboarding through to renewals and claims. We identify where complexity, manual intervention or misaligned rules dilute the customer experience.",
        ]},
        different:"We treat product design and process efficiency as inseparable parts of user-centred design.",
        result:"Redesigned products and streamlined processes that serve customers better, attract new adopters, grow retention, drive advocacy and hold up at scale.",
        cases},
    {slug:"product-development-pmaas", category:"advisory-transformation-growth", title:"Product Development & PMaaS",
        summary:"An integrated product partner, from Validate to Grow.",
        intro:["For organisations developing new digital products or strengthening existing ones, progress is often constrained by unclear product direction, capability gaps, fragmented ownership or limited product management capacity. Successful products need clear ownership, continuous customer discovery, disciplined prioritisation and close coordination across Product, Engineering, Design, Data, Risk, Operations and Business teams."],
        approach:{title:"Our Approach", path:PmaasApproach, content:[
            "Our Product Development & PMaaS covers the full spectrum of Validate, Build, Launch and Grow. It provides the strategic product leadership and hands-on management support needed to develop new products, improve existing ones and strengthen execution across the product lifecycle.",
            "Our approach goes beyond writing product requirements, managing backlogs or coordinating delivery teams. We make sure products are grounded in real customer needs and aligned with clear commercial objectives.",
        ]},
        work:{title:"Our work", path:PmaasWork, content:[
            "Whether we’re developing a new product, improving an existing one or strengthening delivery across a portfolio, we integrate directly with your organisation. We establish clear ownership structures and embed the operating discipline needed to move confidently from discovery through development, launch and continuous improvement.",
        ], method:["Customer & market research","Product strategy","Delivery governance","Performance measurement","User-centred design","Experimentation & validation"]},
        different:"We don’t simply supply Product Managers or hand over a roadmap for internal teams to execute. We work as an integrated product partner, combining strategic direction with hands-on delivery support while transferring knowledge and strengthening internal capability. You get experienced product leadership without first having to build or expand your internal product practice.",
        result:"Not only a better product, but a stronger, more sustainable product management practice that keeps delivering value long after the engagement ends.",
        cases},
    {slug:"product-led-transformation", category:"advisory-transformation-growth", title:"Product-Led Transformation",
        summary:"Transformation anchored to product and business outcomes, not technical milestones.",
        intro:["In large organisations, company-wide transformation programmes typically stall and drift from their intended product and business outcomes, usually because they become system-led, vendor-driven or project-focused."],
        approach:{title:"Our approach", path:PltApproach,
            content:["Our Product-Led Transformation advisory is designed to avoid motion without outcomes. We anchor transformation efforts to your key goals and business objectives. We integrate product strategy, modular delivery design, governance and hands-on execution support to minimise delivery risk, delayed ROI and stakeholder fatigue."],
            method:["Product strategy","Hands-on execution support","Modular delivery design","Governance"]},
        different:"We walk the journey with you as an integrated transformation partner. We don’t hand you an implementation manual, or assign Project Managers and walk away at go-live.",
        result:"The organisation realises the value of its transformation investment, supported by governance, ownership and execution efficiency.",
        cases},
    {slug:"product-led-growth", category:"advisory-transformation-growth", title:"Product-Led Growth",
        summary:"Repeatable growth mechanisms, built into the product.",
        intro:["For organisations seeking sustainable growth, acquiring more customers is only part of the challenge. Lasting growth depends on how effectively the product helps customers recognise value, adopt key features, deepen usage and stay engaged over time."],
        questions:{path:PlgQuestions, points:[
            "Where are customers dropping off across the acquisition, onboarding, activation, and retention journey?",
            "Are users reaching the product’s core value (aha! moment) quickly and consistently?",
            "What product, pricing, process, or experience barriers are limiting growth?",
            "How can customer and product data be used to identify and prioritise the most valuable growth opportunities?",
        ]},
        approach:{title:"Our approach", path:PlgApproach, content:[
            "Our Product-Led Growth approach goes beyond marketing-led acquisition or isolated conversion initiatives. We combine customer research, behavioural and product analytics, journey diagnostics, experimentation, and commercial performance analysis to understand what drives or constrains growth across the full customer lifecycle. We work with your teams across product, growth, marketing, data, technology, operations, business and support to identify high-impact opportunities for improving the customer journey from acquisition to activation and adoption, strengthening user engagement to increase retention, reduce churn, and grow customer lifetime value.",
        ]},
        different:"We don’t treat growth as a series of disconnected campaigns or short-term incentives. We help you build repeatable growth mechanisms into the product and its surrounding customer experience, so growth is driven by genuine value, supported by data and strengthened through continuous learning.",
        result:"Higher retention, lower churn and greater customer lifetime value, with customer value connected to commercial outcomes.",
        cases},
    {slug:"business-process-optimisation", category:"operational-excellence-digital-transformation", title:"Business Process Optimisation",
        summary:"Fix the process before you automate it. We trace workflows from initiation to completion and redesign ownership, handoffs and approvals.",
        intro:["Operational inefficiency rarely shows up as one obvious failure. More often it’s a collection of everyday frustrations: rework, duplicated effort, unclear ownership, manual workarounds, disconnected tools, inconsistent procedures and little visibility into where work stands. Across teams and processes these add up, which is why organisations engage us to improve how work moves across people, teams and systems."],
        approach:{title:"Our Approach", path:BpoApproach, content:[
            "We examine critical internal and customer-facing processes as they operate in practice, not as they’re documented. We trace each workflow from initiation to completion to find where time, effort, information and accountability are lost. Working with COOs, operational leaders, process owners and the teams responsible for day-to-day execution, we translate findings into practical improvements.",
        ]},
        work:{title:"Scope", lead:"What we evaluate", points:[
            "Process ownership, roles and decision rights",
            "Handoffs and dependencies between teams",
            "Approval and escalation pathways",
            "Manual activities, duplication, rework and avoidable delays",
            "Standard operating procedures and actual adherence",
            "Task assignment, tracking and performance visibility",
            "The tools and channels through which work is coordinated",
            "Opportunities for simplification, standardisation and targeted automation",
        ]},
        gets:{title:"What you get", points:[
            "To-be process states with simplified workflows",
            "Redesigned approval paths",
            "Better-integrated tools",
            "Management dashboards for performance visibility",
            "Clearer ownership structures",
            "Embedded operating procedures",
            "Measurable service levels",
        ]},
        different:"Our work doesn’t begin with selecting new technology. We first establish whether the underlying process is fit for purpose, because automating a fragmented or poorly designed workflow only makes the same inefficiencies move faster. We redesign the process before deciding where workflow tools, automation, integrations or AI create meaningful operational value.",
        result:"Not simply a cleaner process map, but an operating environment where:",
        resultPoints:[
            "work moves with less friction",
            "teams spend less time chasing information",
            "leaders have better visibility and oversight",
            "the organisation delivers more consistently without complexity growing at the same rate as the business.",
        ],
        cases},
    {slug:"digital-transformation", category:"operational-excellence-digital-transformation", title:"Digital Transformation",
        summary:"Technology investment that pays back. We connect fragmented systems, workflows and data, and address the governance and capability that make it stick.",
        intro:["Technology investments should improve how an organisation operates, makes decisions, serves customers and creates value. For many organisations, the challenge isn’t a lack of investment. Systems are disconnected, data is hard to access, manual work persists alongside digital tools, and new solutions never become part of how work actually happens."],
        questions:{path:DtQuestions, points:[
            "Are our technology investments delivering measurable operational and commercial value?",
            "Where can workflow automation reduce manual coordination, delays, errors and administrative effort?",
            "How well are our internal processes and systems supporting product performance?",
            "Do we have the right product operating model, governance, and team capabilities?",
            "How aligned are product decisions with our broader commercial priorities?",
            "What governance, controls, capabilities and change interventions will ensure adoption and sustainable value?",
        ]},
        approach:{title:"Our Approach", path:DtApproach, content:[
            "We help organisations translate business priorities and operational needs into a practical, value-led digital transformation agenda. We work with executive sponsors, transformation leaders, technology teams, operational functions and process owners to decide where digital capabilities create the greatest impact and how to introduce them.",
            "We start with deep-dive discovery to assess your digital maturity and identify gaps. We then define transformation strategy and investment priorities to modernise legacy systems and fragmented technology environments, integrating platforms, workflows and data across business functions.",
        ]},
        work:{title:"Built For Adoption", path:DtAdoption, content:[
            "Technology selection is only one part of the work. We account for operating models, data readiness, governance, workforce capability, customer impact, regulatory constraints and change management. Where AI is relevant, we make sure the underlying data, processes, controls and accountability structures are mature enough to support it responsibly and at scale.",
        ]},
        different:"We connect technology decisions directly to business outcomes. Rather than digitising existing inefficiencies or introducing tools in search of a problem, we identify the right transformation opportunities, establish the foundations for success, and support implementation and adoption.",
        result:"A connected, governed digital environment where teams work with less friction, leaders see performance in real time, customers receive better service, and technology investment produces measurable operational and commercial value.",
        cases},
    {slug:"market-intelligence-market-entry", category:"market-investment-intelligence", title:"Market Intelligence & Market Entry Support",
        summary:"Enter new markets on evidence, not assumption. We test whether your product fits a market before you commit to it.",
        intro:["Whether you're taking a new product to market or launching a proven product in a new one, viability has to be validated. Assumptions that worked elsewhere may not hold. Customer expectations differ, established competitors may control critical channels, regulation may change the operating model, and the product itself may need adapting."],
        questions:{path:MiQuestions, points:[
            "Is there a sufficiently attractive and addressable market for the proposed product?",
            "How well does the product fit the realities of the target market?",
            "What competitive, legal, regulatory, operational and commercial factors could affect entry or growth?",
            "What pricing, positioning, distribution, partnership and go-to-market approaches fit best?",
            "What investment will market entry require, and what outcomes can reasonably be expected?",
            "Should we enter independently, partner with an established player, acquire local capability or take a phased approach?",
        ]},
        approach:{title:"Our Approach", path:MiApproach,
            content:["Our approach goes beyond high-level market reports or generic industry research. We build a grounded view of the opportunity and identify the conditions that may enable or constrain success. We assess the product's readiness and relevance and determine where localisation, partnership, repositioning or further validation is needed before entry. We then translate this into a clear market entry strategy."],
            method:["Primary customer & stakeholder research","Market sizing","Customer segmentation","Competitor benchmarking","Channel analysis","Commercial evaluation","Product & proposition validation"]},
        result:"A market entry approach grounded in local realities, informed by customer evidence, and designed to reduce risk while improving the likelihood of adoption and sustainable growth.",
        cases},
    {slug:"investor-validation-due-diligence", category:"market-investment-intelligence", title:"Investor Validation & Startup Due Diligence",
        summary:"See past the pitch deck. An independent view of product viability and growth potential before capital is deployed.",
        intro:["Our Investor Validation & Startup Due Diligence service helps investors answer critical questions before deploying capital."],
        questions:{path:DueDiligenceQuestions, points:[
            "Is the product solving a real, validated customer problem?",
            "Has the product achieved genuine product-market fit, or is growth being driven by unsustainable factors?",
            "Does the company have meaningful competitive advantages beyond pricing, incentives or first-mover positioning?",
            "How defensible is the business against incumbent fintechs, banks, telecoms and emerging challengers?",
            "Is the market large and underserved enough to support venture-scale returns?",
            "Are there credible expansion opportunities across customer segments, products, verticals or geographies?",
            "What product, execution, technology, operational and regulatory risks could most affect growth?",
        ]},
        approach:{title:"Our Approach", path:DueDiligenceApproach,
            content:["Our approach goes beyond reviewing pitch decks, financial projections or high-level market reports. We give investors an independent view of product viability and growth potential. We assess problem-solution fit, validate product-market fit signals, identify market and execution risks, evaluate competitive positioning and uncover opportunities for accelerated growth."],
            method:["Product assessment","Customer & user research","Market analysis","Competitor benchmarking","Growth diagnostics","Operating model evaluation"]},
        result:"A practical investment perspective that helps investors make better-informed decisions and build a clearer post-investment value creation strategy.",
        cases},
]

// Leadership has no category, it opens at /services/leadership-coaching on the same service page
export const leadershipService: Service = {slug:"leadership-coaching", category:"", title:"Leadership Coaching & Capacity Development",
    summary:"Practical programmes that build product capability inside your environment.",
    intro:["Sustained product performance depends as much on people and operating discipline as it does on strategy or technology."],
    approach:{title:"Our Approach", path:LeadershipApproach, content:[
        "Our capacity development is deeply practical and context-specific. Rather than generic product training, we enable teams to operate confidently within your environment, with programmes tailored to your products, systems, governance structures and risk constraints.",
    ]},
    steps:{title:"Scope", items:[
        {title:"Continuous Discovery", content:"Build a steady rhythm of customer learning and evidence-led decisions."},
        {title:"Ownership", content:"Clarify accountabilities, decision rights and durable product leadership."},
        {title:"Experimentation", content:"Turn assumptions into testable hypotheses and measurable learning."},
        {title:"Governance", content:"Embed proportionate controls that support pace, confidence and risk discipline."},
    ]},
    cases:[]}

export const leadership = {title:"Leadership Coaching & Capacity Development", to:"/services/leadership-coaching"}

// leadership's card under "Other Service Areas"
export const capability = {title:"Capability Building", content:leadershipService.summary, to:leadership.to}

export const servicePath = (service: Service) => `/services/${service.category}/${service.slug}`

export const inCategory = (slug: string) => services.filter((service) => service.category === slug)

// turns services into the links on a card
export const toLinks = (list: Service[]) => list.map((service) => ({title:service.title, to:servicePath(service)}))

// "Why Choose Produqtedge" checklist
export const reasons =["Product-First Thinking","Strategy with Hands-On Execution","Support at Every Stage","Reduced Risk, Faster Progress"]
