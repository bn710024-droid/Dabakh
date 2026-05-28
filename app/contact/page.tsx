'use client'
import { useEffect, useRef, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

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
  const [errorMsg, setErrorMsg] = useState('')
  const [prefilledFromUrl, setPrefilledFromUrl] = useState(false)

  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam) {
      setForm(f => ({ ...f, service: decodeURIComponent(serviceParam) }))
      setPrefilledFromUrl(true)
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errorMsg) setErrorMsg('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    // Validation côté client (UX uniquement — le serveur revalide)
    if (!form.nom.trim() || form.nom.trim().length < 2) {
      setErrorMsg('Le nom complet est requis (minimum 2 caractères).')
      return
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg("Veuillez entrer une adresse email valide.")
      return
    }
    if (!form.telephone.trim()) {
      setErrorMsg("Le numéro de téléphone est requis.")
      return
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      setErrorMsg("Votre message est trop court (minimum 10 caractères).")
      return
    }

    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          phone: form.telephone,
          subject: form.service,
          message: `${form.entreprise ? `Entreprise: ${form.entreprise}\n` : ''}${form.message}`
        })
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error || "Une erreur est survenue. Veuillez réessayer.")
        setSending(false)
        return
      }
    } catch {
      setErrorMsg("Erreur réseau. Vérifiez votre connexion et réessayez.")
      setSending(false)
      return
    }
    setSending(false)
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid rgba(232,96,10,0.2)',
    borderRadius: '4px',
    color: '#111111',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '15px',
    letterSpacing: '0.03em',
    padding: '14px 16px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box' as const,
  }

  const labelStyle = {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: '#555555',
    display: 'block',
    marginBottom: '8px',
  }

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 24px', border: '1px solid rgba(34,160,80,0.3)', borderRadius: '6px', background: 'rgba(34,160,80,0.05)' }}>
        <CheckCircle size={56} color="#22A050" style={{ margin: '0 auto 24px' }} />
        <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '32px', color: '#111111', letterSpacing: '0.05em', marginBottom: '16px' }}>MESSAGE ENVOYÉ !</h3>
        <p style={{ fontFamily: 'Rajdhani', fontSize: '15px', color: '#666', lineHeight: 1.7, letterSpacing: '0.03em' }}>
          Notre équipe vous contactera dans les plus brefs délais.<br />
          En cas d&apos;urgence, appelez directement le <strong style={{ color: '#E8600A' }}>+221 33 877 50 78</strong>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }} noValidate>

      {/* Message d'erreur global */}
      {errorMsg && (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: '#FFF5F5', border: '1px solid rgba(220,38,38,0.25)', borderRadius: '4px', padding: '12px 16px' }}>
          <AlertCircle size={16} color="#DC2626" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ margin: 0, fontFamily: 'Rajdhani', fontSize: '14px', color: '#DC2626', letterSpacing: '0.02em' }}>{errorMsg}</p>
        </div>
      )}

      <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label style={labelStyle}>Nom complet *</label>
          <input type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Papa Ousmane Diop" style={inputStyle}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }} />
        </div>
        <div>
          <label style={labelStyle}>Entreprise</label>
          <input type="text" name="entreprise" value={form.entreprise} onChange={handleChange} placeholder="Votre entreprise" style={inputStyle}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }} />
        </div>
      </div>

      <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label style={labelStyle}>Téléphone *</label>
          <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+221 XX XXX XX XX" style={inputStyle}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }} />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" style={inputStyle}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }} />
        </div>
      </div>

      <div>
        {/* Objet facultatif — généré automatiquement si vide */}
        <label style={labelStyle}>
          Objet de la demande
          <span style={{ fontWeight: 400, color: '#999', marginLeft: '6px', fontSize: '10px', letterSpacing: '0.1em' }}>(optionnel)</span>
        </label>
        <input
          type="text"
          name="service"
          value={form.service}
          onChange={(e) => { handleChange(e); if (prefilledFromUrl) setPrefilledFromUrl(false) }}
          placeholder="Ex: Demande de devis pour Caméra Hikvision"
          style={inputStyle}
          onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
          onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }}
        />
        {/* Indicateur seulement si pré-rempli depuis l'URL (pas si l'utilisateur tape) */}
        {prefilledFromUrl && form.service && (
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#1A7A3C', letterSpacing: '0.1em', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle size={10} /> Pré-rempli depuis la page Services
          </div>
        )}
      </div>

      <div>
        <label style={labelStyle}>Message *</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
          placeholder="Décrivez votre projet, vos besoins, le site d'installation..."
          style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
          onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
          onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }} />
      </div>

      <button
        type="submit"
        disabled={sending}
        style={{ padding: '16px 32px', fontSize: '13px', borderRadius: '4px', border: 'none', cursor: sending ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', letterSpacing: '0.12em', opacity: sending ? 0.8 : 1, background: '#E8600A', color: '#FFFFFF', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, width: '100%', transition: 'background 0.2s ease' }}
        onMouseEnter={(e) => { if (!sending) (e.target as HTMLElement).style.background = '#C94E00' }}
        onMouseLeave={(e) => { (e.target as HTMLElement).style.background = '#E8600A' }}
      >
        {sending ? 'Envoi en cours...' : <><Send size={16} /> Envoyer la Demande</>}
      </button>

      <p style={{ margin: 0, fontFamily: 'Rajdhani', fontSize: '12px', color: '#999', letterSpacing: '0.05em', textAlign: 'center' }}>
        * Champs obligatoires. Vos données ne sont jamais partagées.
      </p>
    </form>
  )
}

export default function ContactPage() {
  return (
    <div style={{ background: '#FFFFFF', paddingTop: '80px' }}>
      {/* Hero vert */}
      <section style={{ position: 'relative', padding: '60px 20px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 55%,#1A5C10 100%)' }}>
        <div className="bg-grid-green" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#F97316', textTransform: 'uppercase', marginBottom: '16px' }}>— Contact</div>
          <h1 className="contact-hero-title" style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(42px, 8vw, 100px)', letterSpacing: '0.03em', lineHeight: 0.95, marginBottom: '24px' }}>
            <span style={{ color: '#FFFFFF' }}>PARLONS</span><br /><span style={{ color: '#F97316' }}>DE VOTRE</span><br /><span style={{ color: '#FFFFFF' }}>PROJET</span>
          </h1>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: '60px 0 80px', background: '#F8F8F6' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div className="contact-main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '48px', alignItems: 'start' }}>
            <FadeIn>
              <div>
                {[
                  { icon: <Phone size={18} />, label: 'Téléphone', lines: ['+221 33 877 50 78', '+221 77 651 19 85'], href: 'tel:+221338775078' },
                  { icon: <Mail size={18} />, label: 'Email', lines: ['contact@dabakhglobalservices.com', 'dabakhglobalservices@yahoo.com'], href: 'mailto:contact@dabakhglobalservices.com' },
                  { icon: <MapPin size={18} />, label: 'Adresse', lines: ['105 Golf Sud, Derrière Hopital Dalal Jam', 'Dakar — Sénégal'], href: '#' },
                ].map((item) => (
                  <a key={item.label} href={item.href} style={{ display: 'flex', gap: '16px', marginBottom: '24px', textDecoration: 'none' }}>
                    <div style={{ width: '44px', height: '44px', border: '1px solid rgba(232,96,10,0.25)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8600A', flexShrink: 0, background: '#FFFFFF' }}>{item.icon}</div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8600A', marginBottom: '4px' }}>{item.label}</div>
                      {item.lines.map((line) => (<div key={line} style={{ fontFamily: 'Rajdhani', fontSize: '14px', color: '#555', wordBreak: 'break-word' }}>{line}</div>))}
                    </div>
                  </a>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="contact-form-card" style={{ background: '#FFFFFF', border: '1px solid rgba(232,96,10,0.15)', borderRadius: '6px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(26px, 4vw, 36px)', color: '#111111', letterSpacing: '0.05em', marginBottom: '24px' }}>DEMANDE DE DEVIS</h2>
                <Suspense fallback={<div style={{color:'#888'}}>Chargement...</div>}>
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
