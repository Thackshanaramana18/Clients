import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 48, alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img 
          src="/profile_image.jpg" 
          alt="Shathyanaraynan Balashanmugam"
          style={{
            width: 320,
            height: 320,
            borderRadius: 20,
            objectFit: 'cover',
            border: '2px solid rgba(255,255,255,0.2)',
            boxShadow: '0 12px 48px rgba(0,0,0,0.4)'
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="lead" style={{ margin: 0 }}>
          "I am a passionate aerospace engineering professional pursuing my MSc at ISAE-SUPAERO, specializing in Systems Engineering and MBSE. I have strong experience in SysML, system architecture modeling, digital MBSE workflows, stakeholder requirements capture, and multi-level system integration. I enjoy solving complex engineering problems through structured methodologies, analytical thinking, and model-based reasoning."
        </p>
      </motion.div>
    </div>
  )
}
