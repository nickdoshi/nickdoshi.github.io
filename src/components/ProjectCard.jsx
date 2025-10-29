jsx
import React from 'react';
import './ProjectCard.css';


export default function ProjectCard({ title, desc }) {
const handleMove = (e) => {
const card = e.currentTarget;
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
card.style.transform = `translateY(-8px) rotateX(${(y-rect.height/2)/30}deg) rotateY(${-(x-rect.width/2)/30}deg)`;
};


const reset = (e) => {
e.currentTarget.style.transform = 'translateY(0) rotate(0)';
};


return (
<div className="card" onMouseMove={handleMove} onMouseLeave={reset}>
<h2>{title}</h2>
<p>{desc}</p>
</div>
);
}