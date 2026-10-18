// text wrapped in **double stars** in the data comes out bold
export const bold = (paragraph: string) => paragraph.split("**").map((part, i) => i % 2 === 1 ? <b key={i}>{part}</b> : part)
