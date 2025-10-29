jsx
import React from 'react';
import { motion } from 'framer-motion';


export default function AnimatedSection({ children, delay = 0 }) {
const variants = {
hidden: { opacity: 0, y: 40 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.8, delay }
}
};


return (
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={variants}
>
{children}
</motion.div>
);
}