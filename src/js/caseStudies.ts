import Waves from "../images/image.png"
import Card1 from "../images/Card1Image.png"
import Card2 from "../images/Card2Image.png"
import Lendsqr from "../images/lendsqr-logo.png"
import Ebanqo from "../images/ebanqo-logo.svg"
import OneCard from "../images/onecard-logo.png"
import Factorex from "../images/factorex-logo.png"

// shared by the Case Studies list (/case-studies), each article (/case-studies/:slug)
// and the recent projects on Home. add a new study here and all three pick it up
//   title   - card text, also the article heading unless heading is set
//   path    - card and article header image
//   thumb   - image on the Home cards, falls back to path
//   service - "Related Consulting service" in the article sidebar
//   article - sections of the article, wrap text in **double stars** to make it bold
//             content is paragraphs, a {points} block in between comes out as a bullet list, numbered when ordered is set
export type Block = string | {points:string[], ordered?:boolean}
export type CaseStudy = {slug:string, name:string, logo:string, path:string, thumb?:string, title:string, heading?:string,
    blurb:string, service:string, article:{title:string, content:Block[]}[]}

export const caseStudies: CaseStudy[] =[
    {slug:"lendsqr", name:"Lendsqr", logo:Lendsqr, path:Waves, thumb:Card2,
        title:"Supporting Lendsqr’s launch with Due Diligence and Market Intelligence",
        heading:"Supporting Lendsqr’s launch with Due Diligence and Market Validation",
        blurb:"ProduqtEdge helps Lendsqr establish key frameworks for growth, including market validation, product governance, and scaling strategies.",
        service:"Due Diligence & Market Validation",
        article:[
            {title:"Overview", content:[
                "Lendsqr is a fintech startup that offers a comprehensive Lending-as-a-Service platform designed to streamline the lending process for both lenders and borrowers. With its end-to-end digital lending solution, Lendsqr enables lenders to manage the entire lending cycle—from loan decisioning to disbursement and collection—through a scalable and user-friendly platform. The company identified a significant gap in Nigeria's digital lending space and aimed to enter the market by offering innovative solutions tailored to meet the unique needs of small and medium-sized lenders.",
                "In order to effectively launch in the highly competitive and regulated fintech environment, Lendsqr sought the expertise of ProduqtEdge for due diligence and market entry support. The goal was to ensure that Lendsqr's entry strategy was well-informed, compliant, and positioned for long-term success.",
            ]},
            {title:"Opportunity", content:[
                "Nigeria's fintech industry, especially the lending space, was evolving rapidly, creating a perfect opportunity for Lendsqr to establish itself as a key player by offering a solution that addressed inefficiencies in the traditional lending process. Lendsqr aimed to provide a digital platform that simplified lending operations and allowed lenders to manage loans efficiently through automated workflows, comprehensive decisioning tools, and advanced data analytics. However, entering the market presented several challenges, including navigating Nigeria's regulatory landscape, understanding the competitive environment, and identifying the specific needs of their target market.",
                "Given these factors, Lendsqr required a thorough evaluation of the market to ensure that their product offerings were aligned with customer expectations, compliant with regulations, and well-positioned to outpace competitors. The opportunity to fill gaps left by traditional lenders was clear, but it needed careful planning, strategic foresight, and an actionable go-to-market strategy.",
            ]},
            {title:"Challenge", content:[
                "Despite the promising opportunity, Lendsqr faced a number of challenges in entering Nigeria's highly dynamic fintech space. The Nigerian financial services sector is heavily regulated, and fintech companies are expected to meet stringent legal and compliance requirements. Lendsqr needed to navigate this regulatory environment carefully while ensuring that its platform could meet both industry standards and customer expectations.",
                "Additionally, as a startup, Lendsqr needed to build a high-performing founding team and establish internal processes that would allow them to operate efficiently and scale rapidly. This included hiring the right talent, setting up product and project management practices, and creating a governance framework to manage resources effectively.",
            ]},
            {title:"Solution", content:[
                "To support Lendsqr in overcoming these challenges, ProduqtEdge conducted a comprehensive market entry and due diligence exercise that focused on validating the startup's market opportunity, assessing the competitive landscape, and ensuring regulatory compliance. The approach was designed to provide Lendsqr with the insights and tools needed to make informed decisions about their market strategy, resource allocation, and product development.",
                "ProduqtEdge's engagement with Lendsqr began with extensive market research that involved both quantitative and qualitative methods. The research focused on understanding the market need for a digital lending platform, evaluating the viability of Lendsqr's value proposition, and identifying the specific pain points and preferences of their target market. Through interviews with potential customers and stakeholders, as well as observations of existing lending practices, ProduqtEdge gathered critical data that informed Lendsqr's go-to-market strategy.",
                "Another key element of the solution was an evaluation of infrastructure investments and regulatory requirements. Leveraging ProduqtEdge's industry relationships and access, the team conducted a detailed review of the infrastructure and compliance landscape for similar fintech companies in Nigeria. This helped Lendsqr determine the ideal runway for their operations, including long-term financial planning and the resources required to meet regulatory standards.",
                "In addition to market validation and compliance support, ProduqtEdge also conducted a competitive analysis to evaluate Lendsqr's unique selling proposition (USP) in the context of existing competitors. By analyzing the value propositions of both traditional lenders and fintech startups, ProduqtEdge helped Lendsqr refine their messaging and identify key strategies for customer acquisition and product adoption. This involved identifying areas where incumbents had failed and defining mitigants to avoid similar pitfalls.",
                "Finally, ProduqtEdge supported Lendsqr in building and training their founding team. The team hired key personnel, including product managers and developers, and provided coaching on agile product management practices. ProduqtEdge's project management expertise was instrumental in guiding the development of Lendsqr's minimum viable product (MVP), ensuring that the product was built efficiently while incorporating best practices learned from the due diligence exercise. Additionally, ProduqtEdge helped establish documentation and standard operating procedures (SOPs) to foster a culture of agility and leanness within the team.",
            ]},
            {title:"Impact", content:[
                "As a result of ProduqtEdge's strategic guidance, Lendsqr was able to enter the Nigerian market with a well-validated product and a robust plan for long-term success. The market research conducted by ProduqtEdge culminated in a comprehensive Market Intelligence Report, which provided valuable insights into industry trends, customer preferences, and the competitive landscape. This report was crucial in shaping Lendsqr's product roadmap and go-to-market strategy.",
                "In 2018, Lendsqr experienced remarkable growth. One major milestone was the introduction of a **₦1 billion** capital pool in 2024, which has significantly expanded its reach. By 2024, personal loans in Nigeria surged by **329.28%**, reaching **₦7.52 trillion**, while the number of approved digital lenders grew by **79.77%** since 2023. These figures underscore Lendsqr's success in providing end-to-end digital lending solutions, helping thousands of lenders reach millions of clients, with technology-driven loan decisioning and collections.",
                "ProduqtEdge's involvement in Lendsqr's development played a key role in setting up the frameworks that enabled this growth trajectory, including market validation, product governance, and scaling strategies.",
            ]},
        ]},
    {slug:"ebanqo", name:"eBanqo", logo:Ebanqo, path:Waves, thumb:Card2,
        title:"Boosting eBanqo's Product Management and Productivity with Agile Transformation",
        blurb:"ProduqtEdge’s transformation of eBanqo drove a 40% boost in productivity and enhanced product adoption, fueling an impressive 300% year-over-year revenue growth.",
        service:"Growth", article:[
            {title:"Overview", content:["eBanqo is a forward-thinking technology company specializing in customer engagement through its omni-channel digital platform. Their services allow businesses to integrate customer touchpoints such as social media chat platforms (Facebook Messenger, WhatsApp, Twitter), in-app chat, and other customer interaction channels. By enabling seamless and consistent customer engagement across multiple platforms, eBanqo helps organizations lower overheads, improve customer service, and increase user satisfaction."]},
            {title:"The Opportunity", content:[
                "The company needed to maximise the productivity of their lean team by introducing standardised product management processes to help them ship better products and respond to the market faster. Some of the key needs they had identified included a better way to develop and manage products, improve team performance, boost overall productivity, achieve better time to market and customer satisfaction. Despite the company’s vastly experienced technology team, the company’s leadership identified key issues that hindered their ability to scale effectively including:",
                {points:[
                    "the absence of a structured product management framework,",
                    "miscommunication and delays due to the product and development teams often working in silos,",
                    "delays and rework in product development cycles due to gaps in product discovery,",
                    "inefficient use of resources resulting in low productivity and slow delivery,",
                    "slow and debilitating onboarding which had started extending to sales and pipeline conversion.",
                ]},
                "Naturally, without clearly defined processes and expectations, it was difficult to measure and manage performance of the product and technology teams which also impacted the company’s ability to scale as quickly as was required to keep ahead of the market.",
            ]},
            {title:"The Solution", content:[
                "ProduqtEdge was well suited to work with the company’s leadership to develop a product management practice governed by well-defined processes to help the company achieve team efficiency and scalability. We defined strategic goals and expected outcomes from the engagement.",
                {ordered:true, points:[
                    "Increase productivity by reducing process wastes leading to defects, rework and overprocessing by at least 50%",
                    "Improve discovery process and reduce onboarding timelines by at least 50%",
                    "Reduce time to market for new features",
                    "Improve standardization across products and features by improving discovery processes, documentation and templates",
                    "Improve product operations and customer success",
                ]},
                "As always, we started with an in-depth discovery phase that involved engaging and observing employees and customers to identify key pain points and opportunities for improvement. Leveraging the insights from the discovery phase, we were able to identify the gaps and root causes. A key part of the discovery process involved conducting secondary research to analyse customer personas, competitive landscape and other key aspects of the market to identify underlying issues around customer satisfaction, product adoption, and market share. This assessment helped us tailor our recommendations and execution to meet the specific needs of the organization in line with the agreed upon strategic goals.",
                "Key outputs from the engagement included:",
                {points:[
                    "Definition of processes (SOPs) and handshakes required for key actions such as new feature development, customer discovery, onboarding etc",
                    "Definition of documentation requirements and templates for key events such as feature specification, release documentation etc",
                    "Introduction of a product governance framework defining processes and rituals to guide the product team, manage delivery and guide performance management",
                ]},
                "We also introduced a comprehensive governance framework that provided clear guidance on how to build products that created value for eBanqo’s customers. This framework was designed to ensure that product development aligned with customer needs, while also providing the structure necessary to manage resources effectively and optimize team collaboration.",
                "A critical component of the solution was coaching eBanqo’s product and development teams on the defined structures and processes. By focusing on continuous discovery and iterative development, the teams were able to become more efficient in delivering high-quality products that met customer expectations.",
            ]},
            {title:"The Impact", content:[
                "The transformation led by ProduqtEdge had a profound impact on eBanqo’s operations. By introducing agile practices and implementing a structured product management framework, we were able to achieve a **40%** increase in sprint productivity across both its product and development teams. The new governance framework provided the clarity and direction needed to build products that created tangible value for customers, resulting in higher product adoption rates and improved customer satisfaction.",
                "eBanqo has emerged as a significant player in the customer engagement solutions sector, demonstrating impressive growth and a strong market presence. The company's remarkable revenue growth of approximately **300%** year-over-year highlights the increasing demand for effective customer engagement solutions in today's digital era. Businesses are continually seeking innovative ways to connect with their customers, and eBanqo has risen to meet this challenge.",
                "eBanqo continues to improve and grow, and with a successful raise of **$1 million** in seed funding, the company continues to actively explore opportunities in international markets, positioning itself for continued expansion and influence in the customer engagement landscape. Their investment in streamlining internal processes to drive product leadership and improve customer success has helped them scale their operations very quickly to support the growth.",
            ]},
        ]},
    {slug:"onecard", name:"OneCard", logo:OneCard, path:Waves, thumb:Card1,
        title:"Optimising OneCard's Product and Process Efficiency",
        blurb:"ProduqtEdge partnered with OneCard to transform its operations into a more efficient, data-driven, and collaborative environment.", service:"Growth", article:[
            {title:"Overview", content:[
                "OneCard Nigeria, a leading technology company founded in 2012, provides innovative solutions for topping up essential services like mobile airtime, pay-TV, toll passes, and electricity. Known for its products such as the One1Card and MyTopUp Business, OneCard has helped simplify recharges for both individuals and businesses. However, despite these advancements, the company struggled with operational inefficiencies and cultural challenges that limited its ability to scale and consistently deliver the high level of service its customers deserved.",
            ]},
            {title:"The Opportunity", content:[
                "OneCard sought to optimize its operations to achieve better efficiency, improve customer satisfaction, and enhance its competitive advantage. The company faced several challenges, including:",
                {ordered:true, points:[
                    "**Poor Process Automation:** Many processes were manual, leading to delays, errors, and inefficiencies.",
                    "**Lack of Ownership and Accountability:** Employees often lacked urgency, with limited engagement across teams.",
                    "**Data Deficiencies:** Insufficient data collection and analysis made it difficult to track transaction trends, predict customer behavior, and address system failures effectively.",
                    "**Poor Collaboration and Communication:** Teams operated in silos, often shifting blame, which hindered cross-functional alignment.",
                    "**Product Delivery Issues:** Delays and defects in product requests slowed time-to-market and reduced quality.",
                    "**Documentation Gaps:** Weak documentation practices posed risks to business continuity and increased dependency on specific individuals.",
                ]},
                "These issues created an opportunity to revamp processes, align teams, and leverage technology to enhance OneCard's operational efficiency and customer-centric focus.",
            ]},
            {title:"The Solution", content:[
                "ProduqtEdge partnered with OneCard to transform its operations into a more efficient, data-driven, and collaborative environment. The journey began with a deep dive into OneCard’s existing processes to uncover inefficiencies and areas for improvement.",
                "To tackle these challenges, ProduqtEdge redesigned workflows and introduced automation, cutting down errors and speeding up delivery times. Leveraging data was a key component of the strategies we deployed to help OneCard achieve operational efficiency through improved KPI definition and performance management, improve customer acquisition and retention, and manage product and technology issues, amongst others.",
                "Team collaboration saw a major boost with frameworks designed to break down silos and promote open communication. Clear performance indicators and a recognition system were introduced to build accountability and keep employees motivated.",
                "For product and feature development, governance frameworks were implemented to reduce defects and enable faster, high-quality releases. To ensure knowledge continuity and reduce dependency on key individuals, knowledge-sharing sessions and a shared repository were established, fostering a culture of learning and growth across teams.",
            ]},
            {title:"The Impact", content:[
                "The transformation brought noticeable improvements to how OneCard operates. Automating key processes made the company more efficient, cutting down delays and saving costs. With a better data strategy in place, OneCard could now make smarter decisions, anticipate customer needs, and fix system issues before they became bigger problems.",
                "Employees became more engaged and responsible, thanks to clear goals and a reward system that recognized their hard work. Product development also got a boost, with faster delivery times and better quality, showing customers that OneCard is serious about meeting their expectations.",
                "Teamwork across the company improved as communication barriers were broken down, creating a more collaborative and connected work environment. By introducing knowledge-sharing practices, OneCard reduced its dependence on specific individuals, ensuring smooth operations even when there were personnel changes.",
                "With ProduqtEdge’s support, OneCard tackled its challenges head-on, laying a solid foundation for future growth. Aligning its processes, people, and technology allowed the company to improve customer satisfaction, work more efficiently, and strengthen its position as a top recharge and payment solutions provider in Nigeria.",
            ]},
        ]},
    // header only until its article text comes in
    {slug:"factorex", name:"FACTOReX", logo:Factorex, path:Waves,
        title:"Driving FACTOReX Product Development and Launch",
        blurb:"", service:"", article:[]},
]
