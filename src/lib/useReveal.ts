import {useEffect} from "react";
import {useLocation} from "react-router-dom";

// finds every .reveal element on the current page and toggles .in-view when
// it scrolls into view. runs again on route change so the next page's elements
// are observed from scratch
export function useReveal(){
    const {pathname} = useLocation();
    useEffect(() => {
        let io: IntersectionObserver | null = null;
        // defer to the next frame so the new page has mounted its DOM
        const t = window.setTimeout(() => {
            const nodes = document.querySelectorAll<HTMLElement>(".reveal:not(.in-view), .stagger:not(.in-view)");
            if (nodes.length === 0) return;
            io = new IntersectionObserver((entries, observer) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                }
            }, {threshold: 0.12, rootMargin: "0px 0px -40px 0px"});
            nodes.forEach((node) => io!.observe(node));
        }, 0);
        return () => {
            window.clearTimeout(t);
            io?.disconnect();
        };
    }, [pathname]);
}
