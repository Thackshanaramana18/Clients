import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import clsx from 'classnames'

export default function MagneticButton({ children, className, href, onClick }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useTransform(x, [ -50, 50 ], [ -8, 8 ])
  const ry = useTransform(y, [ -50, 50 ], [ 8, -8 ])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.2)
    y.set(dy * 0.2)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  const content = (
    <motion.button
      ref={ref}
      className={clsx('button magnetic', className)}
      style={{ x, y, rotateX: rx, rotateY: ry }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <a href={href} className="magnetic" onMouseMove={handleMouseMove} onMouseLeave={handleLeave}>
        {content}
      </a>
    )
  }
  return content
}
