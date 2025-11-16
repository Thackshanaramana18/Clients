import React, { useState } from 'react'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton.jsx'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if(!form.name) e.name = 'Required'
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if(!form.message || form.message.length < 10) e.message = 'Min 10 chars'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (evt) => {
    evt.preventDefault()
    if(!validate()) return
    const mailto = `mailto:shathya2001@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nReply to: ' + form.email)}`
    window.location.href = mailto
  }

  return (
    <form className="form" onSubmit={submit}>
      <motion.input className="input" placeholder="Your name" value={form.name} onChange={e=>setForm({ ...form, name:e.target.value })} whileFocus={{ scale:1.02 }} />
      {errors.name && <div style={{ color:'#ff9f9f' }}>{errors.name}</div>}
      <motion.input className="input" placeholder="Your email" value={form.email} onChange={e=>setForm({ ...form, email:e.target.value })} whileFocus={{ scale:1.02 }} />
      {errors.email && <div style={{ color:'#ff9f9f' }}>{errors.email}</div>}
      <motion.textarea className="input" placeholder="Your message" value={form.message} onChange={e=>setForm({ ...form, message:e.target.value })} whileFocus={{ scale:1.01 }} />
      {errors.message && <div style={{ color:'#ff9f9f' }}>{errors.message}</div>}
      <div className="cta-row">
        <MagneticButton className="button" onClick={submit}>Send Message</MagneticButton>
        <MagneticButton className="button secondary" href="/cv.pdf">Download CV</MagneticButton>
      </div>
      <div style={{ marginTop:12, color:'var(--muted)' }}>
        Email: shathya2001@gmail.com · Phone: +33 7 49 58 23 99 · LinkedIn: linkedin.com/in/shathyanaraynanan-b-91037b18a · Location: Toulouse, France
      </div>
    </form>
  )
}
