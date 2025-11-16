import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton.jsx'

function DynamicStarfield() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.02
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05
  })
  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  )
}

export default function Hero3D(){
  const heroRef = useRef()
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const heroHeight = window.innerHeight
        const progress = Math.min(scrollY / (heroHeight * 0.5), 1)
        
        heroRef.current.style.opacity = Math.max(1 - progress * 0.3, 0.7)
        heroRef.current.style.transform = `scale(${1 - progress * 0.05}) translateY(${progress * 30}px)`
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <section className="hero" ref={heroRef} style={{ transition: 'all 0.1s ease-out' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/hero_section.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
        animation: 'subtle-zoom 20s ease-in-out infinite'
      }}></div>
      <div className="hero-overlay" style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.6), rgba(0,0,0,0.45))',
        zIndex: 1.5,
        pointerEvents: 'none',
        animation: 'fade-pulse 4s ease-in-out infinite'
      }}></div>
      <div className="canvas-wrap" style={{ display: 'none' }}>
        <Canvas camera={{ position:[0,0,4] }} style={{ display: 'none' }}>
          <ambientLight intensity={0.8} />
          <DynamicStarfield />
        </Canvas>
      </div>
      <div className="hero-content" style={{ zIndex: 3, textAlign: 'center', position: 'relative' }}>
        <motion.h1 className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          whileHover={{ y: -5 }}
          style={{
            textShadow: '0 8px 32px rgba(0,0,0,0.95), 0 4px 16px rgba(0,0,0,0.85), 0 2px 8px rgba(0,0,0,0.8)',
            color: '#ffffff',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            transition: 'all 0.3s ease'
          }}
        >
          Shathyanaraynan Balashanmugam
        </motion.h1>
        <motion.div className="hero-roles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          {['Aerospace Engineer','Systems Engineer','MBSE Practitioner','SysML Modeling Specialist'].map((r, i) => (
            <motion.span key={r} className="role" 
              whileHover={{ scale: 1.05, color: '#64B5F6' }}
              animate={{ y: [0, -3, 0] }}
              transition={{ delay: i * 0.1, duration: 3, repeat: Infinity }}
              style={{
                textShadow: '0 4px 16px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)',
                color: '#ffffff',
                letterSpacing: '0.5px',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
            >{r}</motion.span>
          ))}
        </motion.div>
        <motion.div className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
        >
          <MagneticButton className="button" href="#projects">View Projects</MagneticButton>
          <MagneticButton className="button secondary" href="/cv.pdf">Download CV</MagneticButton>
          <MagneticButton className="button ghost" href="#contact">Contact Me</MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
