'use client'
import Image from 'next/image'

const clients = [
  { src: '/images/client-seneau.png',  name: "Sen'Eau" },
  { src: '/images/client-css.png',     name: 'CSS' },
  { src: '/images/client-sococim.png', name: 'SOCOCIM' },
  { src: '/images/client-ics.png',     name: 'ICS' },
]

export default function ClientsBand() {
  return (
    <section style={{ padding: '72px 0', background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 36px', textAlign: 'center' }}>
        <div className="accent-line-white" style={{ margin: '0 auto 14px' }} />
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '10px' }}>
          Références clients
        </div>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px,4vw,48px)', color: '#FFFFFF', letterSpacing: '0.04em' }}>
          ILS NOUS FONT <span style={{ color: '#F97316' }}>CONFIANCE</span>
        </h2>
      </div>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(90deg,#1A7A3C,transparent)', zIndex: 2 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(270deg,#0F5A2A,transparent)', zIndex: 2 }} />
        <div style={{ display: 'flex', width: 'max-content' }} className="marquee-track-reverse">
          {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '230px', height: '100px', margin: '0 18px',
              background: 'white', borderRadius: '8px', padding: '16px 26px',
              flexShrink: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}>
              <Image src={c.src} alt={c.name} width={185} height={70} style={{ objectFit: 'contain', maxHeight: '66px' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
