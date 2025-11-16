import React, { useEffect, Suspense, lazy } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import Hero3D from './components/Hero3D.jsx'
import BackgroundStars from './components/BackgroundStars.jsx'
import Section from './components/Section.jsx'
import MagneticButton from './components/MagneticButton.jsx'

// Lazy load components for better performance
const About = lazy(() => import('./components/About.jsx'))
const Skills = lazy(() => import('./components/Skills.jsx'))
const Projects = lazy(() => import('./components/Projects.jsx'))
const Experience = lazy(() => import('./components/Experience.jsx'))
const Education = lazy(() => import('./components/Education.jsx'))
const Certifications = lazy(() => import('./components/Certifications.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className="app">
      <BackgroundStars />
      <header className="topbar">
        <div className="brand">SB</div>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <Hero3D />

      <Suspense fallback={<div style={{ height: '400px' }} />}>
        <Section id="about" title="About Me" subtitle="Systems Engineering • MBSE • SysML">
          <About />
        </Section>
      </Suspense>
      
      <Suspense fallback={<div style={{ height: '400px' }} />}>
        <Section id="education" title="Education" subtitle="ISAE-SUPAERO • SRM">
          <Education />
        </Section>
      </Suspense>

      <Suspense fallback={<div style={{ height: '400px' }} />}>
        <Section id="skills" title="Core Skills" subtitle="Technical • Tools • Soft Skills • Languages">
          <Skills />
        </Section>
      </Suspense>

      <Suspense fallback={<div style={{ height: '400px' }} />}>
        <Section id="projects" title="Projects" subtitle="Aerospace • MBSE • Systems">
          <Projects />
        </Section>
      </Suspense>

      <Suspense fallback={<div style={{ height: '400px' }} />}>
        <Section id="experience" title="Experience" subtitle="Engineering • Leadership">
          <Experience />
        </Section>
      </Suspense>

      <Suspense fallback={<div style={{ height: '400px' }} />}>
        <Section id="certifications" title="Certifications" subtitle="MBSE • System Architecting • Google PM">
          <Certifications />
        </Section>
      </Suspense>

      <Suspense fallback={<div style={{ height: '400px' }} />}>
        <Section id="contact" title="Contact" subtitle="Let's build the future">
          <Contact />
        </Section>
      </Suspense>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Shathyanaraynan Balashanmugam</div>
        <div className="footer-links">
          <a href="https://linkedin.com/in/shathyanaraynanan-b-91037b18a" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:shathya2001@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  )
}
