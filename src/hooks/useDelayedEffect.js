import { useEffect, useRef } from "react";

export const useDelayedEffect = (callback, delay, deps = []) => {
    const delayRef = useRef();

    useEffect(() => {
        delayRef.current = setTimeout(callback, delay);

        return () => clearTimeout(delayRef.current);
    }, [callback, delay, ...deps]);

    const resetTimer = () => {
        clearTimeout(delayRef.current);
        delayRef.current = setTimeout(callback, delay);
    };

    return resetTimer;
};
