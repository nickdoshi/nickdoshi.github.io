import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';
import AnimatedSection from './components/AnimatedSection';
import './App.css';

export default function App() {
  const projects = [
    { title: 'Stellar UI', desc: 'Immersive web design with interactive hover magic.' },
    { title: 'Flow Engine', desc: 'Minimal motion system using GSAP for delightful fluidity.' },
    { title: 'Penguin Studio', desc: 'A brand identity blending fun, softness, and clarity.' }
  ];

  return (
    <SmoothScrollWrapper>
      <Navbar />
      <AnimatedSection delay={0.1}>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <section id="work" className="projects">
          {projects.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.2}>
              <ProjectCard title={p.title} desc={p.desc} />
            </AnimatedSection>
          ))}
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <Footer />
      </AnimatedSection>
    </SmoothScrollWrapper>
  );
}
