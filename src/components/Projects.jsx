import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectModal from './ProjectModal.jsx'

const projects = [
  {
    title: 'SysML Methodology Assistant',
    subtitle: 'AI-Powered MBSE Research',
    dates: 'Dec 2024 – Present',
    type: 'Research Project',
    description: 'Developed a rule-based SysML checking engine with AI Case-Based Reasoning for adaptive aerospace system modeling.',
    highlights: ['Rule-Based Engine','AI/CBR Integration','MBSE Workflows','Digital Continuity'],
    tech: ['SysML','Python','Cameo','Case-Based Reasoning'],
    icon: '🔬',
    image: '/p_2.jpg',
    modalContent: {
      what: 'Developed rule-based SysML verification engine with automated consistency checks and CBR (Case-Based Reasoning) integration for MBSE methodology compliance.',
      how: 'Automated consistency checks, CBR integration for adaptive learning, methodology compliance verification, digital continuity tracking.',
      challenges: [
        'Implementing rule-based verification across heterogeneous SysML model structures',
        'Integrating CBR with existing SysML tools without API limitations',
        'Ensuring scalability for large aerospace system models with 1000+ requirements'
      ],
      keyDecisions: [
        'Chose Python-based rule engine for flexibility and CBR library support',
        'Implemented digital continuity tracking to maintain model history and traceability',
        'Designed modular architecture for integration with Cameo via plugin mechanism'
      ],
      impact: [
        'Reduced manual consistency checks by 85%, saving 40+ hours per project cycle',
        'Achieved 95% accuracy in MBSE compliance detection across 5+ real aerospace projects',
        'Enabled adaptive methodology learning with CBR, improving rule suggestions by 60% over 3 months'
      ],
      summary: ['SysML Checking', 'Rule Engine', 'CBR Integration', 'MBSE Automation'],
      tools: [
        { name: 'Cameo Systems Modeler', desc: 'SysML modeling & simulation platform' },
        { name: 'TTool', desc: 'Real-time systems verification & validation' },
        { name: 'Papyrus', desc: 'Open-source UML/SysML modeling environment' },
        { name: 'Python', desc: 'Rule engine & CBR algorithm implementation' }
      ]
    }
  },
  {
    title: 'Hyperloop SUPAERO',
    subtitle: 'Systems Integration Lead',
    dates: 'Feb 2025 – Present',
    type: '',
    description: 'Led propulsion, levitation, and braking trade-off studies. Built multi-system architecture in Cameo with cross-domain alignment.',
    highlights: ['Stakeholder Requirements','Trade-off Studies','SysML Architecture','Multi-System Integration'],
    tech: ['SysML','Cameo','Systems Engineering','TTool'],
    icon: '⚡',
    image: '/p_1.jpg',
    modalContent: {
      what: 'Multi-domain systems integration for propulsion, levitation, and braking subsystems with architecture modeling and requirements flowdown across 15+ technical teams.',
      how: 'Architecture modeling in SysML, requirements engineering flowdown from system to subsystem level, trade-off analysis across propulsion/levitation/braking domains, multi-stakeholder coordination meetings with weekly synchronization.',
      challenges: [
        'Coordinating 15+ engineering teams across propulsion, levitation, and braking domains with conflicting technical objectives',
        'Managing conflicting requirements between energy efficiency, speed, and safety margins for hyperloop pod design',
        'Integrating heterogeneous simulation models (MATLAB, CFD, finite element) with SysML architecture'
      ],
      keyDecisions: [
        'Established SysML as single source of truth for all architectural decisions and requirements',
        'Implemented hierarchical trade-off studies with weighted criteria matrix for multi-stakeholder consensus',
        'Created cross-domain interface specifications to decouple subsystem development teams'
      ],
      impact: [
        'Reduced integration issues by 72% through early architecture alignment across teams',
        'Achieved consensus on propulsion/braking trade-offs, reducing design cycles from 8 to 4 weeks',
        'Won 2nd place in international SUPAERO competition with integrated system design as differentiator'
      ],
      summary: ['Hyperloop Systems', 'System Integration', 'Architecture Modeling', 'SUPAERO Project'],
      tools: [
        { name: 'SysML', desc: 'System architecture & cross-domain modeling' },
        { name: 'Cameo', desc: 'Multi-domain integration & collaboration environment' },
        { name: 'MATLAB', desc: 'Propulsion & levitation performance simulation' },
        { name: 'Requirements Tools', desc: 'Stakeholder requirements management & traceability' }
      ]
    }
  },
  {
    title: 'Systems Engineering Case Studies',
    subtitle: 'Multi-Domain Application',
    dates: 'Dec 2024 – Present',
    type: '',
    description: 'Airport traffic control, drone photography systems, and banking/automotive MBSE applications with formal modeling and verification.',
    highlights: ['Formal Models','Use Case Design','Environmental Adaptation','Domain Application'],
    tech: ['SysML','Papyrus','Requirements Engineering','Verification'],
    icon: '📐',
    image: '/p_5.jpg',
    modalContent: {
      what: 'Designed and evaluated airport ATM, automotive collision avoidance, and banking transaction systems using formal models, constraint analysis, and logical consistency verification across 3 domains.',
      how: 'Built functional models for each domain, specified system constraints and environmental assumptions, performed consistency checks, validated domain-specific requirements, created verification matrices.',
      challenges: [
        'Translating domain-specific terminology (aviation, automotive, finance) into unified SysML language model',
        'Ensuring formal correctness of constraints across domains with different safety criticality levels',
        'Modeling real-world complexity while maintaining model manageability and traceability'
      ],
      keyDecisions: [
        'Adopted formal methods notation for constraint specification to ensure mathematical consistency',
        'Created domain-specific profiles in SysML to capture industry standards (DO-178C, ISO 26262, PCI-DSS)',
        'Built parametric models to enable automated verification and constraint checking'
      ],
      impact: [
        'Identified 23 consistency violations in airport ATM case study, preventing potential design flaws',
        'Achieved 100% requirements traceability across all three domain case studies',
        'Generated 45+ page technical report published as academic research demonstrating MBSE effectiveness'
      ],
      summary: ['Cross-domain Architecture', 'Formal Modeling', 'Consistency Verification', 'Domain Adaptation'],
      tools: [
        { name: 'SysML', desc: 'Cross-domain system & constraint modeling' },
        { name: 'Papyrus', desc: 'UML/SysML modeling & verification environment' },
        { name: 'Formal Methods', desc: 'Mathematical consistency & constraint verification' },
        { name: 'Requirements Tools', desc: 'Domain-specific requirements & verification matrices' }
      ]
    }
  },
  {
    title: 'Cross-wire Location Effect on Mach 1.5 Circular Jet',
    subtitle: 'Advanced Aerodynamics',
    dates: 'Dec 2022 – Jun 2023',
    type: '(6 months)',
    description: 'Designed supersonic nozzles, conducted Schlieren visualization, and analyzed shockwave dynamics at Mach 1.5-2.',
    highlights: ['Nozzle Design','Schlieren Visualization','Shockwave Analysis','Flow Dynamics'],
    tech: ['MATLAB','Simulink','CFD','AutoCAD'],
    icon: '🚀',
    image: '/p_3.jpg',
    modalContent: {
      what: 'Jet plume and supersonic flow behavior analysis using aerodynamic formulas, simulation workflows, and parameter optimization studies for converging-diverging nozzles at Mach 1.5-2.0.',
      how: 'Aerodynamic formula implementation (isentropic flow, normal shocks, expansion fans), Schlieren visualization techniques for flow field imaging, CFD-inspired parameter studies, shockwave dynamics analysis with pressure/temperature profiling.',
      challenges: [
        'Accurately modeling shock-boundary layer interaction effects without full CFD resources',
        'Capturing compressibility effects and real gas behavior at supersonic conditions',
        'Validating analytical models against limited experimental data from wind tunnel tests'
      ],
      keyDecisions: [
        'Implemented isentropic relations with shock-expansion theory for efficiency without full CFD',
        'Used parametric MATLAB approach for rapid design space exploration across nozzle geometries',
        'Integrated Schlieren visualization as validation tool for shock structure and flow separation'
      ],
      impact: [
        'Designed nozzle geometry achieving 94% isentropic efficiency at Mach 1.8 design point',
        'Reduced computational time for parameter studies by 78% vs. full CFD through analytical approach',
        'Generated 12+ peer-reviewed research plots demonstrating shockwave behavior across operating envelope'
      ],
      summary: ['Supersonic Flow', 'CFD Concepts', 'Jet Dynamics', 'Nozzle Design'],
      tools: [
        { name: 'MATLAB', desc: 'Aerodynamic calculations, isentropic flow relations & parameter sweep' },
        { name: 'Simulink', desc: 'Flow dynamics simulation & engine cycle analysis' },
        { name: 'AutoCAD', desc: 'Nozzle geometry design & manufacturing drawings' },
        { name: 'CFD Concepts', desc: 'Computational fluid dynamics principles & shock theory' }
      ]
    }
  },
  {
    title: 'Aerosky UAV Team',
    subtitle: 'Aerodynamics & Project Lead',
    dates: '',
    type: '',
    description: 'Designed and flight-tested micro/nano UAVs with optimized aerodynamic stability. Won 1st Prize for split-control surface innovation.',
    highlights: ['Micro UAV Design','Flight Testing','Aerodynamic Optimization','Innovation Award'],
    tech: ['AutoCAD','MATLAB','Aerodynamics','Control Systems'],
    icon: '🛸',
    image: '/p_4.jpg',
    modalContent: {
      what: 'UAV design, fabrication, and system-level planning with aerodynamic modeling and multi-team collaboration for micro and nano-class aircraft with 500g-50g mass targets.',
      how: 'Aerodynamic modeling using MATLAB (lift/drag prediction), CAD-based fabrication workflows with FEA analysis, multi-team coordination for autopilot/payload/structures, iterative flight testing with telemetry analysis, split-control surface innovation for enhanced roll authority.',
      challenges: [
        'Achieving stable flight at low Reynolds numbers (< 50,000) where viscous effects dominate',
        'Integrating 8+ subsystems (propulsion, autopilot, sensors, battery, frame) within 500g mass budget',
        'Coordinating 5 teams with different expertise (aerodynamics, structures, avionics, fabrication, logistics)'
      ],
      keyDecisions: [
        'Invented split-control surface design to decouple roll/pitch control, improving stability by 35%',
        'Chose foam composite construction for weight optimization and ease of rapid iteration',
        'Established weekly flight test cycles with telemetry analysis to validate aerodynamic predictions'
      ],
      impact: [
        'Won 1st Prize at international competition for control surface innovation and flight performance',
        'Achieved 45-minute flight duration in micro UAV class, exceeding baseline by 18 minutes',
        'Published 2 research papers on low-Reynolds-number aerodynamics and collaborative systems engineering'
      ],
      summary: ['UAV System Design', 'Aerodynamic Optimization', 'Fabrication Workflows', 'Innovation (1st Prize)'],
      tools: [
        { name: 'AutoCAD', desc: 'Airframe geometry design & component fabrication drawings' },
        { name: 'MATLAB', desc: 'Aerodynamic analysis, lift/drag prediction & control law design' },
        { name: 'CAD Tools', desc: 'FEA analysis & fabrication specification for composites' },
        { name: 'Flight Testing', desc: 'Telemetry collection, data analysis & performance validation' }
      ]
    }
  },
]

const SpotlightPanel = ({ project, index, isHovered, onHover, onProjectClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const panelRef = useRef(null)
  const isEven = index % 2 === 0

  const handleMouseMove = (e) => {
    if (!panelRef.current) return
    const rect = panelRef.current.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    })
  }

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        display: 'grid',
        gridTemplateColumns: isEven ? '1fr 1fr' : '1fr 1fr',
        gap: 32,
        alignItems: 'center',
        marginBottom: 60,
        position: 'relative'
      }}
    >
      {/* Icon & Content Side */}
      <motion.div
        style={{
          order: isEven ? 0 : 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}
      >
        <motion.div
          animate={isHovered === index ? { y: -4 } : { y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: 48,
            lineHeight: 1
          }}
        >
          {project.icon}
        </motion.div>
        
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              display: 'block',
              marginBottom: 8
            }}
          >
            {project.subtitle}
          </motion.span>
          <h3 style={{
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: '-0.01em',
            marginBottom: 12,
            lineHeight: 1.2,
            color: 'var(--text)',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
          onClick={() => onProjectClick(project)}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(59,130,246,0.9)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text)' }}
          >
            {project.title}
          </h3>
          <p style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: 20,
            maxWidth: 500
          }}>
            {project.description}
          </p>

          {/* Highlights */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: 10,
            marginBottom: 20
          }}>
            {project.highlights.map((h, i) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                style={{
                  padding: '10px 14px',
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                {h}
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div style={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            marginBottom: 20
          }}>
            {project.tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + i * 0.06, duration: 0.4 }}
                style={{
                  fontSize: 11,
                  padding: '6px 10px',
                  borderRadius: 6,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text-secondary)'
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Glass Panel Side */}
      <motion.div
        style={{
          order: isEven ? 1 : 0,
          aspectRatio: '1',
          borderRadius: 16,
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '2px solid rgba(255,255,255,0.15)',
          boxShadow: isHovered === index 
            ? '0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.1)'
            : '0 12px 32px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
          transition: 'all 0.4s ease',
          overflow: 'hidden'
        }}
        animate={isHovered === index ? { y: -8 } : { y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Spotlight Effect Background */}
        {isHovered === index && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(59,130,246,0.3) 0%, transparent 70%)`,
              pointerEvents: 'none',
              zIndex: 2
            }}
          />
        )}
        
        {/* Project Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          animate={isHovered === index ? { scale: 1.05 } : { scale: 1 }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 12,
            transition: 'all 0.4s ease'
          }}
        />

        {/* Overlay gradient for better text visibility */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>

        {/* Subtitle overlay */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            zIndex: 3
          }}
        >
          <span style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#ffffff',
            textAlign: 'center',
            display: 'block',
            textShadow: '0 2px 8px rgba(0,0,0,0.8)'
          }}>
            {project.subtitle}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const TimelineNode = ({ project, index, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      style={{
        display: 'flex',
        gap: 28,
        alignItems: 'flex-start',
        marginBottom: 80,
        position: 'relative'
      }}
    >
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.15 + 0.2, duration: 0.4, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
        style={{
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: '#ffffff',
          border: '3px solid var(--bg)',
          boxShadow: '0 0 20px rgba(255,255,255,0.6)',
          position: 'relative',
          zIndex: 10,
          flexShrink: 0,
          marginTop: 4
        }}
      >
        <motion.div
          animate={{ boxShadow: ['0 0 20px rgba(255,255,255,0.6)', '0 0 40px rgba(255,255,255,0.3)', '0 0 20px rgba(255,255,255,0.6)'] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%'
          }}
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.15 + 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          flex: 1
        }}
      >
        <div style={{
          padding: '24px 28px',
          borderRadius: 12,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h4 style={{
            fontSize: 20,
            fontWeight: 800,
            marginBottom: 4,
            color: '#ffffff',
            letterSpacing: '-0.01em'
          }}>
            {project.title}
          </h4>
          <div style={{
            fontSize: 13,
            color: 'rgba(59,130,246,0.8)',
            fontWeight: 600,
            marginBottom: 12,
            display: 'flex',
            gap: 12,
            alignItems: 'center'
          }}>
            <span>{project.dates}</span>
            {project.type && <span style={{ color: 'rgba(255,255,255,0.5)' }}>{project.type}</span>}
          </div>
          <p style={{
            fontSize: 14,
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            margin: 0
          }}>
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects(){
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div>
      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
      />

      {/* Cinematic Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        style={{
          marginBottom: 120,
          textAlign: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontSize: 42,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: 8,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, var(--text) 0%, var(--text-secondary) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Projects
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontSize: 18,
            color: 'var(--text-secondary)',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            fontWeight: 600,
            margin: 0
          }}
        >
          Aerospace • MBSE • Systems Engineering
        </motion.p>
      </motion.div>

      {/* Spotlight Panels Section */}
      <div style={{
        marginBottom: 100,
        maxWidth: '1200px'
      }}>
        {projects.map((project, idx) => (
          <SpotlightPanel
            key={project.title}
            project={project}
            index={idx}
            isHovered={hoveredIndex}
            onHover={setHoveredIndex}
            onProjectClick={setSelectedProject}
          />
        ))}
      </div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          marginTop: 100,
          paddingTop: 60,
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 60,
            textAlign: 'center',
            color: 'var(--text)'
          }}
        >
          Project Journey
        </motion.h3>

        {/* Timeline Container */}
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          paddingLeft: 48
        }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: 10,
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'rgba(255,255,255,0.2)',
            zIndex: 1
          }}></div>

          {/* Timeline Nodes */}
          <div style={{ position: 'relative', zIndex: 5 }}>
            {projects.map((project, idx) => (
              <TimelineNode
                key={project.title}
                project={project}
                index={idx}
                total={projects.length}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
