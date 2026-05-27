'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#111111', borderTop: '4px solid #E8600A' }}>
      {/* Top CTA */}
      <div style={{ background: 'linear-gradient(90deg, #1A7A3C, #22A050)', padding: '40px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(24px,4vw,42px)', color: '#FFFFFF', letterSpacing: '0.06em', marginBottom: '12px' }}>
            PRÊT À DÉMARRER VOTRE PROJET ?
          </h3>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
            Consultation gratuite — Réponse sous 24h
          </p>
          <Link href="/contact" style={{
            display: 'inline-block', padding: '12px 32px',
            background: '#E8600A', color: 'white', textDecoration: 'none',
            fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px',
            letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '2px',
          }}>Demander un Devis Gratuit</Link>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '48px', marginBottom: '48px' }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', position: 'relative', background: 'white', borderRadius: '4px', padding: '4px' }}>
                <Image src="/images/logo-large.png" alt="Dabakh" fill style={{ objectFit: 'contain', padding: '4px' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '0.1em', color: '#E8600A' }}>DABAKH</div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '9px', letterSpacing: '0.2em', color: '#22A050', textTransform: 'uppercase', fontWeight: 700 }}>Global Services SARL</div>
              </div>
            </div>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '16px' }}>
              Leader en ingénierie industrielle et sécurité au Sénégal.
            </p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22A050', boxShadow: '0 0 6px rgba(34,160,80,0.7)' }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>OPÉRATIONNEL 24/7</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', letterSpacing: '0.1em', color: '#E8600A', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid rgba(232,96,10,0.25)' }}>Services</div>
            {['Instrumentation industrielle', 'Télésurveillance', 'Sécurité incendie', 'PID & Régulation', 'Métrologie', 'Télégestion'].map(s => (
              <Link key={s} href="/services" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', padding: '4px 0' }}>
                <span style={{ color: '#E8600A', fontSize: '8px' }}>▸</span> {s}
              </Link>
            ))}
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', letterSpacing: '0.1em', color: '#E8600A', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid rgba(232,96,10,0.25)' }}>Navigation</div>
            {[{ href: '/', label: 'Accueil' }, { href: '/about', label: 'À Propos' }, { href: '/services', label: 'Services' }, { href: '/products', label: 'Produits' }, { href: '/realisations', label: 'Réalisations' }, { href: '/contact', label: 'Contact' }].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', padding: '4px 0' }}>
                <span style={{ color: '#E8600A', fontSize: '8px' }}>▸</span> {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', letterSpacing: '0.1em', color: '#E8600A', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid rgba(232,96,10,0.25)' }}>Contact</div>
            {[
              { icon: <Phone size={13} />, text: '+221 33 877 50 78', href: 'tel:+221338775078' },
              { icon: <Phone size={13} />, text: '+221 77 651 19 85', href: 'tel:+221776511985' },
              { icon: <Mail size={13} />, text: 'contact@dabakhglobalservices.com', href: 'mailto:contact@dabakhglobalservices.com' },
              { icon: <MapPin size={13} />, text: '105 Golf Sud, Derrière Hopital Dalal Jam', href: '#' },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontFamily: 'Rajdhani, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', padding: '5px 0' }}>
                <span style={{ color: '#E8600A', marginTop: '1px', flexShrink: 0 }}>{item.icon}</span>{item.text}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Dabakh Global Services SARL — Tous droits réservés
          </span>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E8600A' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1A7A3C' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFFFFF' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.2)', marginLeft: '6px', letterSpacing: '0.1em' }}>DAKAR — SÉNÉGAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
