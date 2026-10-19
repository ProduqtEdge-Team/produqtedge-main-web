import Advisory from "../images/new-images/Collaborative Strategy Meeting.png"
import Operational from "../images/new-images/20620.jpg"
import Market from "../images/new-images/119111.jpg"
import Meeting from "../images/Frame 2147223898.png"
import Notes from "../images/Frame 2147223899.png"
import Reality from "../images/Frame 2147223899_2.png"
import Talk from "../images/Frame 2147223761_28.png"
// stand-ins for the photos in the newer service designs
import Whiteboard from "../images/Frame 2147223761_2.png"
import Team from "../images/Consulting team.png"
import Table from "../images/Frame 2147223761.png"

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
    {slug:"operational-excellence-digital-transformation", title:"Operational Excellence & Digital Transformation", path:Operational, hero:Meeting,
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
//
// the newer designs (any service with a closing) add these, and end on the closing instead of
// the case studies, "More in ..." and the CTA panels
//   label, heading, lead - orange label over the title, a longer page title, and the line above the intro
//   questionPath  - photo beside the questions
//   approach.tags - pills under the approach text
//   highlights    - two cards under the approach, the second one dark
//   steps         - numbered 01-04 cards, the last one dark
//   differentLabel - replaces "What makes us different"
//   audience      - "Who we work with" title and tags
//   closing       - "See the work we do" (or work, in its place) beside the orange call to action
export type Step = {title:string, content?:string}
export type Service = {slug:string, category:string, title:string, path:string, content:string, links:string[], summary:string,
    intro:string[], questions?:string[], help?:{points:string[], path:string},
    approach?:{title:string, content:string[], method?:string[], tags?:string[], path:string}, work?:{title:string, content:string[], path:string},
    different?:string, result?:string, cases:string[],
    label?:string, heading?:string, lead?:string, questionPath?:string,
    highlights?:{label:string, title:string, content:string}[],
    steps?:{label?:string, title:string, content?:string, items:Step[]},
    differentLabel?:string, audience?:{title:string, tags:string[]},
    closing?:{title:string, content?:string, work?:{title:string, content:string}}}

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
        label:"Journey Optimisation", lead:"Product design and process efficiency, treated as one.",
        intro:["As product footprints grow, complexity increases across customer journeys, technology dependencies, internal processes and third-party relationships. Left unchecked, that complexity quietly undermines reliability, trust and commercial outcomes."],
        approach:{title:"Our approach", path:Notes, content:[
            "Product Audit & Advisory gives product leadership a clear, shared understanding of how products perform today. Customer Journey Optimisation makes sure those products adopt the best flows and processes, for both customer-facing journeys and internal operations, to reduce churn while increasing adoption and retention.",
            "We review existing digital products and their end-to-end processes, from awareness and onboarding through to renewals and claims. We identify where complexity, manual intervention or misaligned rules dilute the customer experience.",
        ]},
        steps:{label:"End-to-end scope", title:"Every moment that shapes the relationship", content:"We connect customer-facing journeys with the internal operations that make them work.",
            items:[{title:"Awareness"},{title:"Onboarding"},{title:"Renewals"},{title:"Claims"}]},
        different:designDifferent, result:designResult,
        closing:{title:"Let’s make every journey work better."},
        cases:["onecard","ebanqo"]},
    {slug:"product-development-pmaas", category:"advisory-transformation-growth", title:"Product Development & PMaaS",
        path:Market, content:marketContent, links:market, summary,
        label:"Product Development & PMaaS", heading:"Product Development & Product Management as a Service", lead:"An integrated product partner, from Validate to Grow.",
        intro:["For organisations developing new digital products or strengthening existing ones, progress is often constrained by unclear product direction, capability gaps, fragmented ownership or limited product management capacity. Successful products need clear ownership, continuous customer discovery, disciplined prioritisation and close coordination across Product, Engineering, Design, Data, Risk, Operations and Business teams."],
        approach:{title:"Our approach", path:Notes, content:[
            "Our Product Development & PMaaS covers the full spectrum of Validate, Build, Launch and Grow. It provides the strategic product leadership and hands-on management support needed to develop new products, improve existing ones and strengthen execution across the product lifecycle.",
            "Our approach goes beyond writing product requirements, managing backlogs or coordinating delivery teams. We make sure products are grounded in real customer needs and aligned with clear commercial objectives.",
            "Whether we’re developing a new product, improving an existing one or strengthening delivery across a portfolio, we integrate directly with your organisation. We establish clear ownership structures and embed the operating discipline needed to move confidently from discovery through development, launch and continuous improvement.",
        ], tags:["Customer & market research","Product strategy","User-centred design","Experimentation & validation","Delivery governance","Performance measurement"]},
        steps:{label:"Full product lifecycle", title:"From evidence to enduring value", items:[
            {title:"Validate", content:"Test the problem, customer need and commercial case."},
            {title:"Build", content:"Shape, design and deliver the right product."},
            {title:"Launch", content:"Coordinate readiness, adoption and market entry."},
            {title:"Grow", content:"Measure value and continuously improve performance."},
        ]},
        different:"We don’t simply supply Product Managers or hand over a roadmap for internal teams to execute. We work as an integrated product partner, combining strategic direction with hands-on delivery support while transferring knowledge and strengthening internal capability. You get experienced product leadership without first having to build or expand your internal product practice.",
        result:"Not only a better product, but a stronger, more sustainable product management practice that keeps delivering value long after the engagement ends.",
        closing:{title:"Let’s build products that keep creating value.",
            work:{title:"Strengthen the product. Build the practice.", content:"Bring strategy, ownership and execution together across the full product lifecycle."}},
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
    {slug:"digital-transformation", category:"operational-excellence-digital-transformation", title:"Digital Transformation",
        path:Advisory, content:categories[1].content, links:operational, summary,
        label:"Transformation", lead:"Technology decisions connected directly to business outcomes.",
        intro:["Technology investments should improve how an organisation operates, makes decisions, serves customers and creates value. For many organisations, the challenge isn’t a lack of investment. Systems are disconnected, data is hard to access, manual work persists alongside digital tools, and new solutions never become part of how work actually happens."],
        questionPath:Team, questions:[
            "Are our technology investments delivering measurable operational and commercial value?",
            "Where can workflow automation reduce manual coordination, delays, errors and administrative effort?",
            "How can our systems, platforms and data be better connected across teams and business functions?",
            "Which applications of AI can improve decision-making, service delivery, employee productivity or customer experience?",
            "How can we get real-time visibility into workflow performance, service levels, exceptions and business outcomes?",
            "What governance, controls, capabilities and change interventions will ensure adoption and sustainable value?",
        ],
        approach:{title:"Our approach", path:Whiteboard, content:[
            "We help organisations translate business priorities and operational needs into a practical, value-led digital transformation agenda. We work with executive sponsors, transformation leaders, technology teams, operational functions and process owners to decide where digital capabilities create the greatest impact and how to introduce them.",
            "We start with deep-dive discovery to assess your digital maturity and identify gaps. We then define transformation strategy and investment priorities to modernise legacy systems and fragmented technology environments, integrating platforms, workflows and data across business functions.",
        ]},
        highlights:[
            {label:"Built for adoption", title:"Technology is only one part of the work.", content:"We account for operating models, data readiness, governance, workforce capability, customer impact, regulatory constraints and change management."},
            {label:"Responsible AI", title:"Ready to scale", content:"Where AI is relevant, we make sure the underlying data, processes, controls and accountability structures are mature enough to support it responsibly and at scale."},
        ],
        steps:{title:"From maturity to measurable value", items:[
            {title:"Digital maturity assessment"},{title:"Strategy & investment priorities"},{title:"Modernisation & integration"},{title:"Implementation & adoption"},
        ]},
        different:"We connect technology decisions directly to business outcomes. Rather than digitising existing inefficiencies or introducing tools in search of a problem, we identify the right transformation opportunities, establish the foundations for success, and support implementation and adoption.",
        result:"A connected, governed digital environment where teams work with less friction, leaders see performance in real time, customers receive better service, and technology investment produces measurable operational and commercial value.",
        audience:{title:"Leaders who own change and outcomes.", tags:["Executive sponsors","Transformation leaders","Technology teams","Operational functions","Process owners"]},
        closing:{title:"Let’s transform what technology makes possible.", content:"Start with the business outcome that matters most."},
        cases:[]},
    // title only until its content comes in
    {slug:"market-intelligence-market-entry", category:"market-investment-intelligence", title:"Market Intelligence & Market Entry Support",
        path:Market, content:categories[2].content, links:market, summary,
        intro:["Whether you're taking a new product to market or launching a proven product in a new one, viability has to be validated. Assumptions that worked elsewhere may not hold. Customer expectations differ, established competitors may control critical channels, regulation may change the operating model, and the product itself may need adapting."],
        questions:[
            "Is there a sufficiently attractive and addressable market for the proposed product?",
            "How well does the product fit the realities of the target market?",
            "What competitive, legal, regulatory, operational and commercial factors could affect entry or growth?",
            "What pricing, positioning, distribution, partnership and go-to-market approaches fit best?",
            "What investment will market entry require, and what outcomes can reasonably be expected?",
            "Should we enter independently, partner with an established player, acquire local capability or take a phased approach?",
        ],
        approach:{title:"Our Approach", path:Notes,
            content:["Our approach goes beyond high-level market reports or generic industry research. We build a grounded view of the opportunity and identify the conditions that may enable or constrain success. We assess the product's readiness and relevance and determine where localisation, partnership, repositioning or further validation is needed before entry. We then translate this into a clear market entry strategy."],
            method:["Primary customer & stakeholder research","Market sizing","Customer segmentation","Competitor benchmarking","Channel analysis","Commercial evaluation","Product & proposition validation"]},
        result:"A market entry approach grounded in local realities, informed by customer evidence, and designed to reduce risk while improving the likelihood of adoption and sustainable growth.",
        cases:["lendsqr","ebanqo","onecard"]},
    {slug:"investor-validation-due-diligence", category:"market-investment-intelligence", title:"Investor Validation & Startup Due Diligence",
        path:Market, content:categories[2].content, links:market, summary,
        label:"Investment Validation", heading:"Investor Due Diligence", lead:"An independent view of product viability before you deploy capital.",
        intro:["Our Investor Validation & Startup Due Diligence service helps investors answer critical questions before deploying capital."],
        questionPath:Meeting, questions:[
            "Is the product solving a real, validated customer problem?",
            "Has the product achieved genuine product-market fit, or is growth being driven by unsustainable factors?",
            "Does the company have meaningful competitive advantages beyond pricing, incentives or first-mover positioning?",
            "How defensible is the business against incumbent fintechs, banks, telecoms and emerging challengers?",
            "Is the market large and underserved enough to support venture-scale returns?",
            "Are there credible expansion opportunities across customer segments, products, verticals or geographies?",
            "What product, execution, technology, operational and regulatory risks could most affect growth?",
        ],
        approach:{title:"Our approach", path:Table, content:[
            "Our approach goes beyond reviewing pitch decks, financial projections or high-level market reports. We give investors an independent view of product viability and growth potential. We assess problem-solution fit, validate product-market fit signals, identify market and execution risks, evaluate competitive positioning and uncover opportunities for accelerated growth.",
        ], tags:["Product assessment","Customer & user research","Market analysis","Competitor benchmarking","Growth diagnostics","Operating model evaluation"]},
        differentLabel:"An independent perspective",
        different:"We test the product story against customer evidence, market realities, operating capability and the competitive landscape, so conviction is grounded in what can be validated, not only what has been presented.",
        result:"A practical investment perspective that helps investors make better-informed decisions and build a clearer post-investment value creation strategy.",
        audience:{title:"Decision-makers deploying growth capital.", tags:["Investors"]},
        closing:{title:"Deploy capital with clearer conviction.", content:"Start with an independent view of product viability."},
        cases:[]},
]

// dedicated page at /services/leadership-coaching
export const leadership = {title:"Leadership Coaching & Capacity Development", to:"/services/leadership-coaching"}

export const servicePath = (service: Service) => `/services/${service.category}/${service.slug}`

export const inCategory = (slug: string) => services.filter((service) => service.category === slug)

// turns services into the links on a card
export const toLinks = (list: Service[]) => list.map((service) => ({title:service.title, to:servicePath(service)}))

// "Why Choose Produqtedge" checklist
export const reasons =["Product-First Thinking","Strategy with Hands-On Execution","Support at Every Stage","Reduced Risk, Faster Progress"]
