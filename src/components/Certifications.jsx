import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Certifications(){
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredCard, setHoveredCard] = useState(null)

  const certifications = [
    {
      title: 'System Architecting & MBSE',
      organization: 'MIT xPRO',
      category: 'MBSE',
      icon: '🏗️',
      color: 'rgba(59, 130, 246, 0.8)' // Blue
    },
    {
      title: 'MBSE: Model-Based Systems Engineering',
      organization: 'Professional Certification',
      category: 'MBSE',
      icon: '📊',
      color: 'rgba(139, 92, 246, 0.8)' // Purple
    },
    {
      title: 'Google Project Management',
      organization: 'Google (In Progress)',
      category: 'PM',
      icon: '💼',
      color: 'rgba(16, 185, 129, 0.8)' // Green
    }
  ]

  const filters = ['All', 'MBSE', 'Systems', 'PM']

  const filteredCerts = activeFilter === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          marginBottom: 40
        }}
      >
        <h2 style={{
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: '#ffffff',
          margin: '0 0 12px 0'
        }}>
          Certifications
        </h2>
        <p style={{
          fontSize: 15,
          color: 'var(--text-secondary)',
          margin: 0
        }}>
          Professional credentials in Systems Engineering & Project Management
        </p>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          display: 'flex',
          gap: 10,
          marginBottom: 40,
          flexWrap: 'wrap'
        }}
      >
        {filters.map((filter, idx) => (
          <motion.button
            key={filter}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: activeFilter === filter 
                ? '0 0 20px rgba(59,130,246,0.5), 0 4px 12px rgba(0,0,0,0.3)'
                : '0 0 15px rgba(59,130,246,0.3), 0 4px 12px rgba(0,0,0,0.2)'
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveFilter(filter)}
            style={{
              padding: '10px 20px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.5px',
              border: activeFilter === filter 
                ? '1px solid rgba(59,130,246,0.6)'
                : '1px solid rgba(255,255,255,0.15)',
              background: activeFilter === filter
                ? 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))'
                : 'rgba(255,255,255,0.05)',
              color: activeFilter === filter ? '#60a5fa' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              boxShadow: activeFilter === filter
                ? '0 0 20px rgba(59,130,246,0.4)'
                : '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Certification Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
          position: 'relative'
        }}
      >
        {filteredCerts.map((cert, idx) => (
          <motion.div
            key={cert.title}
            variants={cardVariants}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ 
              y: -6,
              transition: { duration: 0.3 }
            }}
            style={{
              position: 'relative',
              padding: '32px 28px',
              borderRadius: 20,
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(12px)',
              border: hoveredCard === idx
                ? '1px solid rgba(59,130,246,0.5)'
                : '1px solid rgba(255,255,255,0.1)',
              boxShadow: hoveredCard === idx
                ? '0 12px 40px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.2)'
                : '0 8px 24px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              cursor: 'default',
              overflow: 'hidden'
            }}
          >
            {/* Background Particle Dots */}
            <div style={{
              position: 'absolute',
              top: -20,
              right: -20,
              width: 100,
              height: 100,
              opacity: 0.15,
              pointerEvents: 'none',
              background: `radial-gradient(circle, ${cert.color} 1px, transparent 1px)`,
              backgroundSize: '15px 15px'
            }}></div>

            {/* Glow Effect on Hover */}
            {hoveredCard === idx && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  inset: -1,
                  borderRadius: 20,
                  background: `linear-gradient(135deg, ${cert.color}, transparent)`,
                  opacity: 0.1,
                  pointerEvents: 'none'
                }}
              />
            )}

            {/* Icon Badge */}
            <motion.div
              animate={hoveredCard === idx ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                background: `linear-gradient(135deg, ${cert.color}, rgba(255,255,255,0.1))`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                marginBottom: 20,
                boxShadow: hoveredCard === idx
                  ? `0 8px 20px ${cert.color}`
                  : '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              {cert.icon}
            </motion.div>

            {/* Category Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: 12,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                background: `${cert.color}`,
                color: '#ffffff',
                marginBottom: 16,
                boxShadow: `0 2px 8px ${cert.color}`
              }}
            >
              {cert.category}
            </motion.div>

            {/* Title */}
            <h3 style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: '-0.01em',
              lineHeight: 1.3,
              color: '#ffffff',
              margin: '0 0 12px 0'
            }}>
              {cert.title}
            </h3>

            {/* Organization */}
            <p style={{
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--text-secondary)',
              margin: 0,
              lineHeight: 1.5
            }}>
              {cert.organization}
            </p>

            {/* Bottom Accent Line */}
            <motion.div
              animate={hoveredCard === idx ? { width: '100%' } : { width: '40%' }}
              transition={{ duration: 0.4 }}
              style={{
                height: 2,
                background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                marginTop: 20,
                borderRadius: 2
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
