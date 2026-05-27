'use client'
import { useEffect, useRef, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } }, { threshold: 0.05 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  )
}

function ContactForm() {
  const searchParams = useSearchParams()
  const [form, setForm] = useState({ nom: '', entreprise: '', telephone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam) setForm(f => ({ ...f, service: decodeURIComponent(serviceParam) }))
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          phone: form.telephone,
          message: `Entreprise: ${form.entreprise}\nService: ${form.service}\n\n${form.message}`
        })
      })
    } catch (e) {}
    setSending(false)
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(20,20,20,0.8)',
    border: '1px solid rgba(232,96,10,0.2)',
    borderRadius: '2px',
    color: '#F5F5F0',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '15px',
    letterSpacing: '0.03em',
    padding: '14px 16px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  const labelStyle = {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'rgba(245,245,240,0.45)',
    display: 'block',
    marginBottom: '8px',
  }

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 40px', border: '1px solid rgba(34,160,80,0.3)', borderRadius: '4px', background: 'rgba(34,160,80,0.05)' }}>
        <CheckCircle size={56} color="#22A050" style={{ margin: '0 auto 24px' }} />
        <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '36px', color: '#F5F5F0', letterSpacing: '0.05em', marginBottom: '16px' }}>MESSAGE ENVOYÉ !</h3>
        <p style={{ fontFamily: 'Rajdhani', fontSize: '16px', color: 'rgba(245,245,240,0.55)', lineHeight: 1.7, letterSpacing: '0.03em' }}>
          Notre équipe vous contactera dans les plus brefs délais.<br />
          En cas d'urgence, appelez directement le <strong style={{ color: '#E8600A' }}>+221 33 877 50 78</strong>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={labelStyle}>Nom complet *</label>
          <input type="text" name="nom" value={form.nom} onChange={handleChange} required placeholder="Papa Ousmane Diop" style={inputStyle} onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }} onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }} />
        </div>
        <div>
          <label style={labelStyle}>Entreprise</label>
          <input type="text" name="entreprise" value={form.entreprise} onChange={handleChange} placeholder="Votre entreprise" style={inputStyle} onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }} onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={labelStyle}>Téléphone *</label>
          <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} required placeholder="+221 XX XXX XX XX" style={inputStyle} onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }} onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" style={inputStyle} onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }} onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Objet de la demande *</label>
        <input type="text" name="service" value={form.service} onChange={handleChange} required placeholder="Ex: Demande de devis pour Caméra Hikvision" style={{ ...inputStyle, borderColor: form.service ? 'rgba(232,96,10,0.5)' : 'rgba(232,96,10,0.2)' }} onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }} onBlur={(e) => { (e.target as HTMLElement).style.borderColor = form.service ? 'rgba(232,96,10,0.5)' : 'rgba(232,96,10,0.2)' }} />
        {form.service && (<div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#22A050', letterSpacing: '0.1em', marginTop: '6px' }}>✓ Objet pré-rempli automatiquement</div>)}
      </div>
      <div>
        <label style={labelStyle}>Message *</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Décrivez votre projet, vos besoins, le site d'installation..." style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }} onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }} onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }} />
      </div>
      <button type="submit" disabled={sending} className="btn-primary" style={{ padding: '16px 32px', fontSize: '13px', borderRadius: '2px', border: 'none', cursor: sending ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', letterSpacing: '0.12em', opacity: sending ? 0.8 : 1 }}>
        {sending ? 'Envoi en cours...' : <><Send size={16} /> Envoyer la Demande</>}
      </button>
    </form>
  )
}

export default function ContactPage() {
  return (
    <div style={{ background: '#0A0A0A', paddingTop: '80px' }}>
      <section style={{ position: 'relative', padding: '80px 24px 100px', overflow: 'hidden' }}>
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#E8600A', textTransform: 'uppercase', marginBottom: '16px' }}>— Contact</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(52px, 8vw, 100px)', letterSpacing: '0.03em', lineHeight: 0.95, marginBottom: '24px' }}>
            <span style={{ color: '#F5F5F0' }}>PARLONS</span><br /><span style={{ color: '#E8600A' }}>DE VOTRE</span><br /><span style={{ color: '#F5F5F0' }}>PROJET</span>
          </h1>
        </div>
      </section>
      <section style={{ padding: '0 0 100px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '64px', alignItems: 'start' }}>
            <FadeIn>
              <div>
                {[
                  { icon: <Phone size={18} />, label: 'Téléphone', lines: ['+221 33 877 50 78', '+221 77 651 19 85'], href: 'tel:+221338775078' },
                  { icon: <Mail size={18} />, label: 'Email', lines: ['contact@dabakhglobalservices.com', 'dabakhglobalservices@yahoo.com'], href: 'mailto:contact@dabakhglobalservices.com' },
                  { icon: <MapPin size={18} />, label: 'Adresse', lines: ['K14 Hamo 1 en Face Cité Aliou Sow', 'BP 32119, Dakar — Sénégal'], href: '#' },
                ].map((item) => (
                  <a key={item.label} href={item.href} style={{ display: 'flex', gap: '16px', marginBottom: '28px', textDecoration: 'none' }}>
                    <div style={{ width: '44px', height: '44px', border: '1px solid rgba(232,96,10,0.25)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8600A', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8600A', marginBottom: '4px' }}>{item.label}</div>
                      {item.lines.map((line) => (<div key={line} style={{ fontFamily: 'Rajdhani', fontSize: '14px', color: 'rgba(245,245,240,0.7)' }}>{line}</div>))}
                    </div>
                  </a>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(14,14,14,0.9)', border: '1px solid rgba(232,96,10,0.15)', borderRadius: '4px', padding: '48px' }}>
                <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '36px', color: '#F5F5F0', letterSpacing: '0.05em', marginBottom: '32px' }}>DEMANDE DE DEVIS</h2>
                <Suspense fallback={<div>Chargement...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
