import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import Hero3D from './components/Hero3D.jsx'
import BackgroundStars from './components/BackgroundStars.jsx'
import Section from './components/Section.jsx'
import MagneticButton from './components/MagneticButton.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'

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

      <Section id="about" title="About Me" subtitle="Systems Engineering • MBSE • SysML">
        <About />
      </Section>
      
      <Section id="education" title="Education" subtitle="ISAE-SUPAERO • SRM">
        <Education />
      </Section>

      <Section id="skills" title="Core Skills" subtitle="Technical • Tools • Soft Skills • Languages">
        <Skills />
      </Section>

      <Section id="projects" title="Projects" subtitle="Aerospace • MBSE • Systems">
        <Projects />
      </Section>

      <Section id="experience" title="Experience" subtitle="Engineering • Leadership">
        <Experience />
      </Section>

      <Section id="certifications" title="Certifications" subtitle="MBSE • System Architecting • Google PM">
        <Certifications />
      </Section>

      <Section id="contact" title="Contact" subtitle="Let's build the future">
        <Contact />
      </Section>

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
