import type {ReactNode} from "react";
import {Link} from "react-router-dom";

// a point is a plain line, or a line with its own sub points under it
export type Point = string | {text:string, points:string[]}

// text wrapped in **double stars** in the data comes out bold
export const bold = (paragraph: string) => paragraph.split("**").map((part, i) => i % 2 === 1 ? <b key={i}>{part}</b> : part)

// like bold, but also *italics* and [links](https://...), links starting with / stay on this site
const marks = /(\*\*[^*]+?\*\*|\*[^*\s][^*]*?\*|\[[^\]]+?\]\([^)\s]+?\))/
export const rich = (text: string): ReactNode[] => text.split(marks).map((part, i) => {
    if (part.length > 4 && part.startsWith("**") && part.endsWith("**")) return <b key={i}>{rich(part.slice(2, -2))}</b>
    if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) return <i key={i}>{rich(part.slice(1, -1))}</i>
    const link = part.match(/^\[(.+)\]\((\S+)\)$/)
    if (link) return link[2].startsWith("/")
        ? <Link key={i} to={link[2]}>{rich(link[1])}</Link>
        : <a key={i} href={link[2]} target="_blank" rel="noreferrer">{rich(link[1])}</a>
    return part
})
