'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => {
        setVisible(true)
        setTimeout(() => setAnimate(true), 10)
      }, 1500)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setAnimate(false)
    setTimeout(() => setVisible(false), 400)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setAnimate(false)
    setTimeout(() => setVisible(false), 400)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      transform: animate ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
    }}>
      <div style={{
        background: '#111111',
        borderTop: '3px solid #E8600A',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        flexWrap: 'wrap',
        boxShadow: '0 -8px 32px rgba(0,0,0,0.3)',
      }}>
        {/* Icône + texte */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '260px' }}>
          <div style={{ fontSize: '28px', flexShrink: 0 }}>🍪</div>
          <div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', letterSpacing: '0.08em', color: '#FFFFFF', marginBottom: '4px' }}>
              CE SITE UTILISE DES COOKIES
            </div>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, margin: 0 }}>
              Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. En continuant, vous acceptez notre politique de confidentialité.
            </p>
          </div>
        </div>

        {/* Boutons */}
        <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '12px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '10px 20px', borderRadius: '4px',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'transparent', color: 'rgba(255,255,255,0.6)',
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.5)'; el.style.color = 'white' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.2)'; el.style.color = 'rgba(255,255,255,0.6)' }}
          >
            Refuser
          </button>
          <button
            onClick={accept}
            style={{
              fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '12px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '10px 24px', borderRadius: '4px',
              border: 'none', background: '#E8600A', color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.2s ease',
              boxShadow: '0 4px 15px rgba(232,96,10,0.4)',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1.05)'; el.style.background = '#FF7A1A'; el.style.boxShadow = '0 6px 20px rgba(232,96,10,0.6)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1)'; el.style.background = '#E8600A'; el.style.boxShadow = '0 4px 15px rgba(232,96,10,0.4)' }}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
