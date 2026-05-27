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
          <input
            type="text" name="nom" value={form.nom} onChange={handleChange} required placeholder="Papa Ousmane Diop"
            style={inputStyle}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }}
          />
        </div>
        <div>
          <label style={labelStyle}>Entreprise</label>
          <input
            type="text" name="entreprise" value={form.entreprise} onChange={handleChange} placeholder="Votre entreprise"
            style={inputStyle}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={labelStyle}>Téléphone *</label>
          <input
            type="tel" name="telephone" value={form.telephone} onChange={handleChange} required placeholder="+221 XX XXX XX XX"
            style={inputStyle}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }}
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com"
            style={inputStyle}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Objet de la demande *</label>
        <input
          type="text" name="service" value={form.service} onChange={handleChange} required
          placeholder="Ex: Demande de devis pour Caméra Hikvision"
          style={{ ...inputStyle, borderColor: form.service ? 'rgba(232,96,10,0.5)' : 'rgba(232,96,10,0.2)' }}
          onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
          onBlur={(e) => { (e.target as HTMLElement).style.borderColor = form.service ? 'rgba(232,96,10,0.5)' : 'rgba(232,96,10,0.2)' }}
        />
        {form.service && (
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#22A050', letterSpacing: '0.1em', marginTop: '6px' }}>
            ✓ Objet pré-rempli automatiquement
          </div>
        )}
      </div>

      <div>
        <label style={labelStyle}>Message *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} required rows={5}
          placeholder="Décrivez votre projet, vos besoins, le site d'installation..."
          style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
          onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#E8600A' }}
          onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(232,96,10,0.2)' }}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="btn-primary"
        style={{
          padding: '16px 32px', fontSize: '13px', borderRadius: '2px',
          border: 'none', cursor: sending ? 'wait' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          letterSpacing: '0.12em', opacity: sending ? 0.8 : 1,
        }}
      >
        {sending ? 'Envoi en cours...' : <><Send size={16} /> Envoyer la Demande</>}
      </button>
    </form>
  )
}

export default function ContactPage() {
  return (
    <div style={{ background: '#0A0A0A', paddingTop: '80px' }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '80px 24px 100px', overflow: 'hidden' }}>
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: '50%', left: '30%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,96,10,0.06) 0%, transparent 70%)', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#E8600A', textTransform: 'uppercase', marginBottom: '16px' }}>— Contact</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(52px, 8vw, 100px)', letterSpacing: '0.03em', lineHeight: 0.95, marginBottom: '24px' }}>
            <span style={{ color: '#F5F5F0' }}>PARLONS</span><br />
            <span style={{ color: '#E8600A' }}>DE VOTRE</span><br />
            <span style={{ color: '#F5F5F0' }}>PROJET</span>
          </h1>
          <p style={{ fontFamily: 'Rajdhani', fontSize: '18px', color: 'rgba(245,245,240,0.6)', maxWidth: '520px', lineHeight: 1.7, letterSpacing: '0.04em' }}>
            Devis gratuit, réponse rapide. Nos ingénieurs analysent votre besoin et vous proposent la solution optimale.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '0 0 100px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '64px', alignItems: 'start' }}>

            {/* Left — Contact info */}
            <FadeIn>
              <div>
                <div style={{ marginBottom: '48px' }}>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#E8600A', textTransform: 'uppercase', marginBottom: '16px' }}>— Coordonnées</div>
                  <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '48px', color: '#F5F5F0', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '32px' }}>
                    NOS<br /><span style={{ color: '#E8600A' }}>CONTACTS</span>
                  </h2>

                  {[
                    { icon: <Phone size={18} />, label: 'Téléphone', lines: ['+221 33 877 50 78', '+221 77 651 19 85'], href: 'tel:+221338775078' },
                    { icon: <Mail size={18} />, label: 'Email', lines: ['contact@dabakhglobalservices.com', 'dabakhglobalservices@yahoo.com'], href: 'mailto:contact@dabakhglobalservices.com' },
                    { icon: <MapPin size={18} />, label: 'Adresse', lines: ['K14 Hamo 1 en Face Cité Aliou Sow', 'BP 32119, Dakar — Sénégal'], href: '#' },
                  ].map((item) => (
                    <a key={item.label} href={item.href} style={{ display: 'flex', gap: '16px', marginBottom: '28px', textDecoration: 'none', cursor: item.href === '#' ? 'default' : 'pointer' }}>
                      <div style={{ width: '44px', height: '44px', border: '1px solid rgba(232,96,10,0.25)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8600A', flexShrink: 0, transition: 'all 0.3s ease' }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8600A', marginBottom: '4px' }}>{item.label}</div>
                        {item.lines.map((line) => (
                          <div key={line} style={{ fontFamily: 'Rajdhani', fontSize: '14px', color: 'rgba(245,245,240,0.7)', letterSpacing: '0.03em' }}>{line}</div>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>

                {/* Hours */}
                <div style={{ padding: '24px', border: '1px solid rgba(232,96,10,0.15)', borderRadius: '4px', background: 'rgba(16,16,16,0.6)', marginBottom: '24px' }}>
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: '18px', letterSpacing: '0.08em', color: '#F5F5F0', marginBottom: '16px' }}>HORAIRES</div>
                  {[
                    { j: 'Lundi — Vendredi', h: '08h00 — 18h00' },
                    { j: 'Samedi', h: '09h00 — 14h00' },
                    { j: 'Urgences 24/7', h: '+221 77 651 19 85' },
                  ].map((h) => (
                    <div key={h.j} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(245,245,240,0.05)' }}>
                      <span style={{ fontFamily: 'Rajdhani', fontSize: '13px', color: 'rgba(245,245,240,0.5)', letterSpacing: '0.03em' }}>{h.j}</span>
                      <span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#E8600A', letterSpacing: '0.05em' }}>{h.h}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp direct */}
                <a
                  href="https://wa.me/221711617421?text=Bonjour%20Dabakh%20Global%20Services%2C%20je%20souhaite%20un%20devis."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    padding: '16px 24px', borderRadius: '4px',
                    textDecoration: 'none', transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(37,211,102,0.4)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white' }}>WhatsApp Direct</div>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em' }}>+221 71 161 74 21</div>
                  </div>
                </a>
              </div>
            </FadeIn>

            {/* Right — Form */}
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(14,14,14,0.9)', border: '1px solid rgba(232,96,10,0.15)', borderRadius: '4px', padding: '48px' }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#E8600A', textTransform: 'uppercase', marginBottom: '12px' }}>— Formulaire de contact</div>
                <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '36px', color: '#F5F5F0', letterSpacing: '0.05em', marginBottom: '8px' }}>DEMANDE DE DEVIS</h2>
                <p style={{ fontFamily: 'Rajdhani', fontSize: '14px', color: 'rgba(245,245,240,0.4)', letterSpacing: '0.03em', marginBottom: '32px' }}>
                  Réponse garantie sous 24h ouvrables
                </p>
                <Suspense fallback={<div style={{ color: 'rgba(245,245,240,0.4)', fontFamily: 'Rajdhani', fontSize: '14px' }}>Chargement...</div>}>
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

