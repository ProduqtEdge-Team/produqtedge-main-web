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
export type CaseStudy = {slug:string, name:string, logo:string, path:string, thumb?:string, title:string, heading?:string,
    blurb:string, service:string, article:{title:string, content:string[]}[]}

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
    // header only until their article text comes in
    {slug:"ebanqo", name:"eBanqo", logo:Ebanqo, path:Waves, thumb:Card2,
        title:"Boosting eBanqo's Product Management and Productivity with Agile Transformation",
        blurb:"", service:"", article:[]},
    {slug:"onecard", name:"OneCard", logo:OneCard, path:Waves, thumb:Card1,
        title:"Optimising OneCard's Product and Process Efficiency",
        blurb:"", service:"", article:[]},
    {slug:"factorex", name:"FACTOReX", logo:Factorex, path:Waves,
        title:"Driving FACTOReX Product Development and Launch",
        blurb:"", service:"", article:[]},
]
