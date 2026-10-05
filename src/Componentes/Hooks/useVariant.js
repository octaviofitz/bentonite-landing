import { useState } from 'react';

const KEY = 'ab_infoBanner';
const VARIANTES = ['A', 'B'];

const obtenerVariante = () => {
    try {
        let v = localStorage.getItem(KEY);
        if (!VARIANTES.includes(v)) {
            v = Math.random() < 0.5 ? 'A' : 'B';
            localStorage.setItem(KEY, v);
        }
        return v;
    } catch (e) {
        // Sin acceso a localStorage: mostramos el control
        return 'A';
    }
};

export const useVariant = () => {
    const [variant] = useState(obtenerVariante);
    return variant;
};