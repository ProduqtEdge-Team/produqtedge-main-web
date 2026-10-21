import "../css/TrustedBy.css"
import ringkas from "../images/trusted-by/ringkas.png"
import oss from "../images/trusted-by/oss.png"
import access from "../images/trusted-by/access.png"
import kickAvenue from "../images/trusted-by/kick-avenue.png"
import projectHope from "../images/trusted-by/project-hope.png"
import sisindokom from "../images/trusted-by/sisindokom.png"
import netraPermana from "../images/trusted-by/netra-permana.png"
import siapKerja from "../images/trusted-by/siap-kerja.png"
import acs from "../images/trusted-by/acs.png"
import infinite from "../images/trusted-by/infinite.png"
import ibimbing from "../images/trusted-by/ibimbing.png"
import onecard from "../images/trusted-by/onecard.png"
import ebanqo from "../images/trusted-by/ebanqo.png"
import lendsqr from "../images/trusted-by/lendsqr.png"
import purwadhika from "../images/trusted-by/purwadhika.png"
import talenta from "../images/trusted-by/talenta.png"

// 16 client logos from the Figma frame (node 507:23196), displayed as a
// seamless left-scrolling marquee. the track is rendered twice so the
// translate-50% loop never shows a gap.
const logos =[
    {src:ringkas, alt:"Ringkas"},
    {src:oss, alt:"OSS"},
    {src:access, alt:"Access"},
    {src:kickAvenue, alt:"Kick Avenue"},
    {src:projectHope, alt:"Project Hope"},
    {src:sisindokom, alt:"Sisindokom"},
    {src:netraPermana, alt:"Perkumpulan Netra Permana"},
    {src:siapKerja, alt:"Siap Kerja"},
    {src:acs, alt:"ACS"},
    {src:infinite, alt:"Infinite"},
    {src:ibimbing, alt:"ibimbing"},
    {src:onecard, alt:"OneCard"},
    {src:ebanqo, alt:"eBanqo"},
    {src:lendsqr, alt:"Lendsqr"},
    {src:purwadhika, alt:"Purwadhika"},
    {src:talenta, alt:"Talenta"},
]

export default function TrustedBy(){
    return <section className="trusted-by">
        <h3 className="trusted-by-heading">TRUSTED BY</h3>
        <div className="trusted-by-marquee" aria-label="Trusted by">
            <div className="trusted-by-track">
                {[...logos, ...logos].map((logo, i) =>(
                    <div key={i} className="trusted-by-logo">
                        <img src={logo.src} alt={i < logos.length ? logo.alt : ""} aria-hidden={i >= logos.length}/>
                    </div>
                ))}
            </div>
        </div>
    </section>
}
