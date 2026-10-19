import {Link} from "react-router-dom";
import {ArrowForward} from "@mui/icons-material";
import type {ReactNode} from "react";
import "../css/misc.css";

type Variant = "dark" | "orange" | "outline" | "text";

// shared action button, matches the home page pattern: label + forward arrow
// variant picks the colour, external renders an <a> with target=_blank
function Button({to, variant = "dark", external = false, children}:
    {to: string; variant?: Variant; external?: boolean; children: ReactNode}){
    const className = `btn-${variant}`;
    const content = <><span>{children}</span><ArrowForward className="arrow"/></>;

    if (external){
        return <a href={to} target="_blank" rel="noreferrer" className={className}>{content}</a>
    }
    return <Link to={to} className={className}>{content}</Link>
}

export default Button;
