import React from 'react'
import { motion } from 'framer-motion'

export default function Education(){
  const items = [
    {
      title: 'MSc Aerospace Engineering (2024–2026)',
      detail: 'ISAE-SUPAERO, Toulouse, France — Focus: Systems Engineering Pathway',
    },
    {
      title: 'B.Tech Aerospace Engineering (2019–2023)',
      detail: 'SRM Institute of Science and Technology, Chennai, India',
    },
  ]

  return (
    <div style={{ display:'grid', gap:20 }}>
      {items.map((it) => (
        <motion.div key={it.title} className="card" initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}>
          <h3 style={{ marginBottom:8, fontSize:18 }}>{it.title}</h3>
          <div style={{ color:'var(--text-secondary)' }}>{it.detail}</div>
        </motion.div>
      ))}
    </div>
  )
}
