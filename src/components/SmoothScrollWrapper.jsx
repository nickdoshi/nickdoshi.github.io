jsx
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';


export default function SmoothScrollWrapper({ children }) {
useEffect(() => {
const lenis = new Lenis({
smooth: true,
lerp: 0.08,
wheelMultiplier: 0.9,
});


function raf(time) {
lenis.raf(time);
requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
return () => lenis.destroy();
}, []);


return <>{children}</>;
}