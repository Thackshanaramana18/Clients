import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

export default function ProjectModal({ project, isOpen, onClose }) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!project) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(4px)',
              zIndex: 999
            }}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: 40,
              left: 0,
              right: 0,
              maxWidth: '1200px',
              width: '90%',
              maxHeight: '85vh',
              margin: '0 auto',
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(59,130,246,0.4)',
              borderRadius: 20,
              boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(59,130,246,0.2)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Close Button - Fixed at Top */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#ffffff',
                fontSize: 24,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
            >
              ×
            </motion.button>

            {/* Scrollable Content Area */}
            <div style={{
              overflowY: 'auto',
              overflowX: 'hidden',
              flex: 1,
              paddingLeft: '48px',
              paddingRight: '48px',
              paddingBottom: '40px'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {/* Title */}
                <h2 style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: 8,
                  marginTop: 40,
                  letterSpacing: '-0.01em'
                }}>
                  {project.title}
                </h2>
                
                {/* Subtitle */}
                <p style={{
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.6)',
                  margin: '0 0 32px 0'
                }}>
                  {project.subtitle}
                </p>

                {/* Two Column Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 40,
                  marginBottom: 40
                }}>
                  {/* Left Column */}
                  <div>
                    {/* What */}
                    <div style={{ marginBottom: 32 }}>
                      <h3 style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: 'rgba(59,130,246,0.9)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: 12
                      }}>What</h3>
                      <p style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)',
                        margin: 0
                      }}>
                        {project.modalContent.what}
                      </p>
                    </div>

                    {/* How */}
                    <div style={{ marginBottom: 32 }}>
                      <h3 style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: 'rgba(59,130,246,0.9)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: 12
                      }}>How</h3>
                      <p style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)',
                        margin: 0
                      }}>
                        {project.modalContent.how}
                      </p>
                    </div>

                    {/* Challenges */}
                    <div style={{ marginBottom: 32 }}>
                      <h3 style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: 'rgba(59,130,246,0.9)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: 12
                      }}>Challenges</h3>
                      <ul style={{
                        margin: 0,
                        paddingLeft: 20,
                        listStyle: 'disc'
                      }}>
                        {project.modalContent.challenges.map((challenge, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + idx * 0.05, duration: 0.3 }}
                            style={{
                              fontSize: 14,
                              lineHeight: 1.7,
                              color: 'var(--text-secondary)',
                              marginBottom: 8
                            }}
                          >
                            {challenge}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* Key Decisions */}
                    <div style={{ marginBottom: 32 }}>
                      <h3 style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: 'rgba(59,130,246,0.9)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: 12
                      }}>Key Decisions</h3>
                      <ul style={{
                        margin: 0,
                        paddingLeft: 20,
                        listStyle: 'disc'
                      }}>
                        {project.modalContent.keyDecisions.map((decision, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + idx * 0.05, duration: 0.3 }}
                            style={{
                              fontSize: 14,
                              lineHeight: 1.7,
                              color: 'var(--text-secondary)',
                              marginBottom: 8
                            }}
                          >
                            {decision}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div style={{ marginBottom: 32 }}>
                      <h3 style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: 'rgba(59,130,246,0.9)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: 12
                      }}>Impact</h3>
                      <ul style={{
                        margin: 0,
                        paddingLeft: 20,
                        listStyle: 'disc'
                      }}>
                        {project.modalContent.impact.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + idx * 0.05, duration: 0.3 }}
                            style={{
                              fontSize: 14,
                              lineHeight: 1.7,
                              color: 'var(--text-secondary)',
                              marginBottom: 8
                            }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Summary Tags */}
                <div style={{ marginBottom: 32 }}>
                  <h3 style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: 'rgba(59,130,246,0.9)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: 12
                  }}>Summary</h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 10
                  }}>
                    {project.modalContent.summary.map((item, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 + idx * 0.05, duration: 0.3 }}
                        style={{
                          padding: '8px 14px',
                          borderRadius: 8,
                          background: 'rgba(59,130,246,0.15)',
                          border: '1px solid rgba(59,130,246,0.3)',
                          fontSize: 13,
                          fontWeight: 600,
                          color: 'rgba(59,130,246,0.9)'
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Tools Used */}
                <div style={{ marginBottom: 40 }}>
                  <h3 style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: 'rgba(59,130,246,0.9)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: 12
                  }}>Tools Used</h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 16
                  }}>
                    {project.modalContent.tools.map((tool, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + idx * 0.05, duration: 0.3 }}
                        whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(59,130,246,0.2)' }}
                        style={{
                          padding: '16px 14px',
                          borderRadius: 12,
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(59,130,246,0.3)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: 6
                        }}>
                          {tool.name}
                        </div>
                        <div style={{
                          fontSize: 12,
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5
                        }}>
                          {tool.desc}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* View Full Report Button */}
                <div style={{
                  display: 'flex',
                  gap: 16,
                  paddingTop: 24,
                  borderTop: '1px solid rgba(59,130,246,0.2)'
                }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('#', '_blank')}
                    style={{
                      flex: 1,
                      padding: '14px 24px',
                      borderRadius: 10,
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0.6) 100%)',
                      border: '1px solid rgba(59,130,246,0.5)',
                      color: '#ffffff',
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      letterSpacing: '0.5px'
                    }}
                  >
                    📄 View Full Report
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}
