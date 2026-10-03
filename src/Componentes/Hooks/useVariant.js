import { useState } from 'react';

export const useVariant = () => {
    const [variant] = useState(() => {
        let v = localStorage.getItem('ab_infoBanner');
        if (!v) {
            v = Math.random() < 0.5 ? 'A' : 'B';
            localStorage.setItem('ab_infoBanner', v);
        }
        return v;
    });
    return variant;
};