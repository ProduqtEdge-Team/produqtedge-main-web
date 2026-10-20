import type {ReactNode} from "react";
import "../css/SectionHeader.css"

// shared section heading, matches the home page spec: 46/500/#2A2A2A on desktop, 30/500 on phones
function SectionHeader({children}: {children: ReactNode}){
    return <h2 className="section-header">{children}</h2>
}

export default SectionHeader;
