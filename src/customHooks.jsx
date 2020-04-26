import { useState, useEffect } from 'react';

export function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const onResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return width;
}

export function useScrollPosition() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const scrollHandler = () => {
            setScroll(window.scrollY);
        }
        
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        };

    }, [scroll, setScroll])

    return scroll;
}