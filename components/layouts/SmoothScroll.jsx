import { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScroll = ({ children, style }) => {
    const ref = useRef(null);

    useEffect(() => {
        const scrollbar = Scrollbar.init(ref.current, {
            damping: 0.02,
        });

        return () => {
            // Cleanup function (optional, e.g., to destroy the scrollbar)
            scrollbar.destroy();
        };
    }, []);

    return (
        <div ref={ref} style={style}>
            {children}
        </div>
    );
};

export default SmoothScroll;
