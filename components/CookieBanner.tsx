'use client'
import { useState, useEffect } from 'react'
import Script from 'next/script'

const GA_ID = 'G-NHTLJS7GGS'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)
  const [gaLoaded, setGaLoaded] = useState(false)
  const [prefs, setPrefs] = useState({
    analytics: true,
    marketing: false,
    functional: true,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted') {
      setGaLoaded(true)
    } else if (!consent) {
      setTimeout(() => {
        setVisible(true)
        setTimeout(() => setAnimate(true), 10)
      }, 1000)
    }
  }, [])

  const close = (loadGA: boolean) => {
    setAnimate(false)
    setTimeout(() => setVisible(false), 400)
    if (loadGA) setGaLoaded(true)
  }

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-prefs', JSON.stringify({ analytics: true, marketing: true, functional: true }))
    close(true)
  }

  const savePrefs = () => {
    localStorage.setItem('cookie-consent', prefs.analytics ? 'accepted' : 'partial')
    localStorage.setItem('cookie-prefs', JSON.stringify(prefs))
    close(prefs.analytics)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    localStorage.setItem('cookie-prefs', JSON.stringify({ analytics: false, marketing: false, functional: false }))
    close(false)
  }

  if (!visible) return (
    <>
      {gaLoaded && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}
    </>
  )

  return (
    <>
      {gaLoaded && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}

      {/* Overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: animate ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)',
        backdropFilter: animate ? 'blur(3px)' : 'none',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}>
        {/* Modal */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          maxWidth: '580px',
          width: '100%',
          boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
          overflow: 'hidden',
          opacity: animate ? 1 : 0,
          transform: animate ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(20px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}>
          {/* Header orange */}
          <div style={{ background: '#E8600A', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '24px' }}>🍪</span>
            <div>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '0.08em', color: 'white' }}>
                GESTION DES COOKIES
              </div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>
                Dabakh Global Services — dabakhglobalservices.com
              </div>
            </div>
          </div>

          {/* Corps */}
          <div style={{ padding: '24px 28px' }}>
            {!showPrefs ? (
              <>
                <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>
                  Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu de notre site. Vous pouvez choisir les cookies que vous acceptez.
                </p>
                <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button onClick={acceptAll} style={{
                      flex: 1, minWidth: '140px', padding: '13px 20px',
                      background: '#E8600A', color: 'white', border: 'none', borderRadius: '6px',
                      fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px',
                      letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
                      transition: 'all 0.3s ease', boxShadow: '0 4px 14px rgba(232,96,10,0.35)',
                    }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background='#FF7A1A'; el.style.transform='scale(1.03)' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background='#E8600A'; el.style.transform='scale(1)' }}
                    >✓ Tout accepter</button>

                    <button onClick={() => setShowPrefs(true)} style={{
                      flex: 1, minWidth: '140px', padding: '13px 20px',
                      background: '#1A7A3C', color: 'white', border: 'none', borderRadius: '6px',
                      fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px',
                      letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
                      transition: 'all 0.3s ease', boxShadow: '0 4px 14px rgba(26,122,60,0.25)',
                    }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background='#22A050'; el.style.transform='scale(1.03)' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background='#1A7A3C'; el.style.transform='scale(1)' }}
                    >⚙ Préférences</button>

                    <button onClick={decline} style={{
                      flex: 1, minWidth: '140px', padding: '13px 20px',
                      background: 'white', color: '#666', border: '1px solid #ddd', borderRadius: '6px',
                      fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px',
                      letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='#999'; el.style.color='#333' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='#ddd'; el.style.color='#666' }}
                    >✕ Refuser</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', letterSpacing: '0.06em', color: '#111', marginBottom: '16px' }}>
                  PARAMÈTRES DE PRÉFÉRENCES
                </div>

                {[
                  { key: 'functional', label: 'Cookies fonctionnels', desc: 'Nécessaires au bon fonctionnement du site. Toujours actifs.', locked: true },
                  { key: 'analytics', label: 'Cookies analytiques', desc: 'Nous aident à comprendre comment vous utilisez le site (Google Analytics).', locked: false },
                  { key: 'marketing', label: 'Cookies marketing', desc: 'Utilisés pour vous proposer des publicités pertinentes sur nos services.', locked: false },
                ].map(item => (
                  <div key={item.key} style={{
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                    gap: '16px', padding: '14px 0',
                    borderBottom: '1px solid #f0f0f0',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', color: '#111', marginBottom: '3px' }}>{item.label}</div>
                      <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '12px', color: '#888', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                    {/* Toggle */}
                    <div
                      onClick={() => { if (!item.locked) setPrefs(p => ({ ...p, [item.key]: !p[item.key as keyof typeof p] })) }}
                      style={{
                        width: '44px', height: '24px', borderRadius: '12px', flexShrink: 0,
                        background: item.locked || prefs[item.key as keyof typeof prefs] ? '#E8600A' : '#ddd',
                        cursor: item.locked ? 'not-allowed' : 'pointer',
                        position: 'relative', transition: 'background 0.3s ease',
                        opacity: item.locked ? 0.6 : 1,
                      }}
                    >
                      <div style={{
                        position: 'absolute', top: '3px',
                        left: (item.locked || prefs[item.key as keyof typeof prefs]) ? '23px' : '3px',
                        width: '18px', height: '18px', borderRadius: '50%',
                        background: 'white', transition: 'left 0.3s ease',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                      }}/>
                    </div>
                  </div>
                ))}

                <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
                  <button onClick={savePrefs} style={{
                    flex: 1, padding: '12px 20px',
                    background: '#E8600A', color: 'white', border: 'none', borderRadius: '6px',
                    fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px',
                    letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='#FF7A1A' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='#E8600A' }}
                  >Enregistrer mes choix</button>
                  <button onClick={() => setShowPrefs(false)} style={{
                    padding: '12px 20px',
                    background: 'white', color: '#666', border: '1px solid #ddd', borderRadius: '6px',
                    fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px',
                    letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
                  }}>← Retour</button>
                </div>
              </>
            )}

            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '11px', color: '#bbb', marginTop: '16px', textAlign: 'center' }}>
              En continuant sans choisir, seuls les cookies fonctionnels sont actifs.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
