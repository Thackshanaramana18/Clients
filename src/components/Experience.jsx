import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Experience(){
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const experiences = [
    {
      title: 'Engineer Intern',
      company: 'Ziegler Aerospace Pvt Ltd',
      location: 'Bangalore, India',
      period: '2023 - 2024',
      bullets: [
        'Supported EASA Part 21 modifications and regulatory compliance.',
        'Led structural and electrical systems integration on aerospace platforms.',
        'Ensured design traceability and comprehensive documentation for certification.'
      ]
    },
    {
      title: 'UAV Project Lead',
      company: 'Aerosky UAV Team',
      location: 'SRM University',
      period: '2021 - 2023',
      bullets: [
        'Led aerodynamic design, analysis, and fabrication of micro and nano UAVs.',
        'Managed team of 8+ engineers across mechanical, electrical, and control systems.',
        'Won 1st Prize for Innovation (split-control surface design) in national competition.'
      ]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <div style={{
      position: 'relative',
      maxWidth: '900px',
      margin: '0 auto',
      paddingLeft: 60
    }}>
      {/* Timeline Spine - Vertical Line */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '3px',
        background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(59,130,246,0.2), rgba(59,130,246,0))',
        borderRadius: '2px',
        zIndex: 1
      }}></div>

      {/* Timeline Dots Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 80,
          position: 'relative',
          zIndex: 2
        }}
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              display: 'flex',
              gap: 28,
              alignItems: 'flex-start',
              position: 'relative'
            }}
          >
            {/* Timeline Dot */}
            <motion.div
              animate={hoveredIndex === idx ? {
                boxShadow: [
                  '0 0 0 4px rgba(59,130,246,0.4)',
                  '0 0 0 12px rgba(59,130,246,0.2)',
                  '0 0 0 4px rgba(59,130,246,0.4)'
                ]
              } : { boxShadow: '0 0 0 4px rgba(59,130,246,0.2)' }}
              transition={{ duration: 1, repeat: hoveredIndex === idx ? Infinity : 0 }}
              style={{
                position: 'absolute',
                left: -60,
                top: 4,
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'rgba(59,130,246,0.8)',
                border: '2px solid var(--bg)',
                boxShadow: '0 0 0 4px rgba(59,130,246,0.2)',
                zIndex: 10
              }}
            />

            {/* Experience Card */}
            <motion.div
              animate={hoveredIndex === idx ? { y: -4 } : { y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                flex: 1,
                padding: '28px 32px',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: hoveredIndex === idx 
                  ? '0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(59,130,246,0.1)'
                  : '0 8px 24px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
            >
              {/* Time Period */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  color: 'rgba(59,130,246,0.8)',
                  marginBottom: 8
                }}
              >
                {exp.period}
              </motion.div>

              {/* Job Title */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                  color: '#ffffff',
                  margin: '0 0 6px 0',
                  lineHeight: 1.2
                }}
              >
                {exp.title}
              </motion.h3>

              {/* Company & Location */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginBottom: 18,
                  lineHeight: 1.4
                }}
              >
                {exp.company}<br />
                <span style={{ fontSize: 13, opacity: 0.8 }}>{exp.location}</span>
              </motion.div>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: 'linear-gradient(to right, rgba(59,130,246,0.3), transparent)',
                marginBottom: 16
              }}></div>

              {/* Bullets */}
              <ul style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 10
              }}>
                {exp.bullets.map((bullet, bIdx) => (
                  <motion.li
                    key={bullet}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + bIdx * 0.08, duration: 0.4 }}
                    viewport={{ once: true }}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      paddingLeft: 18,
                      position: 'relative'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: 6,
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: 'rgba(59,130,246,0.6)',
                      flexShrink: 0
                    }}></span>
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
