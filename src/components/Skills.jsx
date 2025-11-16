import React from 'react'
import { motion } from 'framer-motion'

const IconWrapper = ({ children, color }) => (
  <motion.div
    whileHover={{ scale: 1.15, rotate: 5 }}
    transition={{ duration: 0.3 }}
    style={{
      width: 50,
      height: 50,
      borderRadius: 14,
      background: `linear-gradient(135deg, rgba(${color}, 0.25) 0%, rgba(${color}, 0.12) 100%)`,
      border: `2px solid rgba(${color}, 0.4)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
      marginBottom: 16,
      boxShadow: `0 8px 24px rgba(${color}, 0.15), inset 0 1px 0 rgba(255,255,255,0.2)`,
      backdropFilter: 'blur(8px)',
      transition: 'all 0.3s ease'
    }}
  >
    {children}
  </motion.div>
)

const SkillCard = ({ title, items, icon, iconColor, delay }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  
  return (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: 'easeOut', type: 'spring', stiffness: 80 }}
    viewport={{ once: true }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    whileHover={{ y: -12 }}
    style={{
      padding: 32,
      borderRadius: 20,
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1.5px solid rgba(255,255,255,0.2)',
      boxShadow: isHovered 
        ? '0 32px 64px rgba(0,0,0,0.3), 0 0 60px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.15)'
        : '0 12px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    {/* Multi-layer premium glow effect */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at 30% 30%, rgba(59,130,246,0.25) 0%, transparent 50%)`,
        pointerEvents: 'none',
        borderRadius: 20,
        transition: 'opacity 0.3s ease'
      }}
    />
    <motion.div
      animate={{ opacity: isHovered ? 1 : 0 }}
      style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at 70% 70%, rgba(168,85,247,0.15) 0%, transparent 50%)`,
        pointerEvents: 'none',
        borderRadius: 20,
        transition: 'opacity 0.4s ease'
      }}
    />
    {/* Icon with enhanced glow */}
    <motion.div
      animate={{ scale: isHovered ? 1.08 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <IconWrapper color={iconColor}>{icon}</IconWrapper>
    </motion.div>
    {/* Title with text depth */}
    <motion.h3 
      animate={{ color: isHovered ? 'rgba(59,130,246,0.95)' : '#ffffff' }}
      style={{
        fontSize: 18,
        fontWeight: 800,
        letterSpacing: '0.8px',
        margin: '0 0 24px 0',
        textTransform: 'uppercase',
        textShadow: isHovered
          ? '0 0 20px rgba(59,130,246,0.5), 0 4px 12px rgba(0,0,0,0.3)'
          : '0 2px 8px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        background: `linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: isHovered ? 'transparent' : 'transparent'
      }}
    >
      {title}
    </motion.h3>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
      gap: 12,
      flex: 1
    }}>
      {items.map((skill, idx) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: delay + idx * 0.06, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ 
            y: -6, 
            scale: 1.1,
            boxShadow: '0 12px 30px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
          style={{
            padding: '12px 14px',
            borderRadius: 10,
            background: isHovered && idx % 2 === 0 
              ? 'rgba(59,130,246,0.2)'
              : 'rgba(255,255,255,0.08)',
            border: isHovered && idx % 2 === 0
              ? '1.5px solid rgba(59,130,246,0.5)'
              : '1.5px solid rgba(59,130,246,0.2)',
            color: 'var(--text-secondary)',
            fontSize: 13,
            fontWeight: 600,
            textAlign: 'center',
            cursor: 'default',
            transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: 1.4,
            backdropFilter: 'blur(8px)',
            boxShadow: isHovered && idx % 2 === 0
              ? '0 4px 12px rgba(59,130,246,0.2)'
              : 'none'
          }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.div>
  )
}

export default function Skills(){
  const skills = [
    {
      title: 'Technical Skills',
      items: ['SysML','MBSE','System Architecture','Requirements Engineering','Functional Modeling','Model Verification'],
      icon: '⚙️',
      iconColor: '59, 130, 246',
      delay: 0
    },
    {
      title: 'MBSE & Modeling',
      items: ['Cameo Systems Modeler','Eclipse Papyrus','TTool','Rodin','SysML Modeling','Architecture'],
      icon: '🔧',
      iconColor: '34, 197, 94',
      delay: 0.1
    },
    {
      title: 'Programming',
      items: ['MATLAB / Simulink','Python','Java','C++','Advanced Computing','Algorithms'],
      icon: '💻',
      iconColor: '168, 85, 247',
      delay: 0.2
    },
    {
      title: 'Software Tools',
      items: ['LaTeX','AutoCAD','MS Office','Git','Version Control','Documentation'],
      icon: '📊',
      iconColor: '236, 72, 153',
      delay: 0.3
    },
    {
      title: 'Soft Skills',
      items: ['Critical Thinking','Communication','Leadership','Team Collaboration','Problem Solving','Strategy'],
      icon: '🎯',
      iconColor: '249, 115, 22',
      delay: 0.4
    },
    {
      title: 'Languages',
      items: ['English','French','Tamil','Hindi','Professional','Fluent'],
      icon: '🌐',
      iconColor: '14, 165, 233',
      delay: 0.5
    }
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 28,
      maxWidth: '1200px'
    }}>
      {skills.map((skill) => (
        <SkillCard
          key={skill.title}
          title={skill.title}
          items={skill.items}
          icon={skill.icon}
          iconColor={skill.iconColor}
          delay={skill.delay}
        />
      ))}
    </div>
  )
}
