import { useSyncExternalStore } from "react";

export function useIsMobile(breakpoint = 768) {
    const query = `(max-width: ${breakpoint - 1}px)`;

    const subscribe = (callback) => {
        const mql = window.matchMedia(query);
        if (mql.addEventListener) {
            mql.addEventListener("change", callback);
            return () => mql.removeEventListener("change", callback);
        }
        mql.addListener(callback); // old Safari
        return () => mql.removeListener(callback);
    };

    const getSnapshot = () => window.matchMedia(query).matches;
    const getServerSnapshot = () => false; // for SSR (Next.js, etc.)

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}