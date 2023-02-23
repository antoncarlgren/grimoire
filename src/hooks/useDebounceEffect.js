import { useEffect } from "react";

export const useDebounceEffect = (callback, delay, deps) => {
    const lastCallback = useRef();
    const lastTimeout = useRef();

    useEffect(() => {
        const handler = setTimeout(() => callback, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [deps, delay]);
};
