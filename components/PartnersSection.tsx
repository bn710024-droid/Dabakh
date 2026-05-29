'use client'
import Image from 'next/image'

const partners = [
  { src: '/images/logo-hikvision.png', name: 'Hikvision' },
  { src: '/images/logo-dahua.png',     name: 'Dahua' },
  { src: '/images/logo-detnov.png',    name: 'DETNOV' },
  { src: '/images/logo-fuji.png',      name: 'Fuji Electric' },
  { src: '/images/logo-nivus.png',     name: 'NIVUS' },
  { src: '/images/logo-lacroix.png',   name: 'Lacroix Sofrel' },
]

const clients = [
  { src: '/images/client-seneau.png',  name: "Sen'Eau" },
  { src: '/images/client-css.png',     name: 'CSS' },
  { src: '/images/client-sococim.png', name: 'SOCOCIM' },
  { src: '/images/client-ics.png',     name: 'ICS' },
  { src: '/images/client-cde.png',     name: 'CDE' },
  { src: '/images/client-ofor.png',    name: 'OFOR' },
  { src: '/images/client-ussein.png',  name: 'USSEIN' },
]

export default function PartnersSection() {
  return (
    <>
      {/* ══ PARTENAIRES ══ */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg,#E8600A 0%,#F97316 100%)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 40px', textAlign: 'center' }}>
          <div className="accent-line-white" style={{ margin: '0 auto 16px' }} />
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '12px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '12px' }}>
            Technologies & Marques
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(30px,5vw,52px)', color: '#FFFFFF', letterSpacing: '0.04em' }}>
            NOS PARTENAIRES MONDIAUX
          </h2>
        </div>

        <div style={{ overflow: 'hidden', position: 'relative', padding: '8px 0' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(90deg,#E8600A,transparent)', zIndex: 2 }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(270deg,#F97316,transparent)', zIndex: 2 }} />
          <div style={{ display: 'flex', width: 'max-content' }} className="marquee-track">
            {[...partners, ...partners, ...partners].map((p, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '220px', height: '96px', margin: '0 16px',
                background: 'white', borderRadius: '8px',
                padding: '14px 24px', flexShrink: 0,
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                transition: 'transform 0.3s ease',
              }}>
                <Image src={p.src} alt={p.name} width={170} height={65} style={{ objectFit: 'contain', maxHeight: '60px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ILS NOUS FONT CONFIANCE — bandeau uniquement ══ */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 40px', textAlign: 'center' }}>
          <div className="accent-line-white" style={{ margin: '0 auto 16px' }} />
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '12px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '12px' }}>
            Références clients
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(30px,5vw,52px)', color: '#FFFFFF', letterSpacing: '0.04em' }}>
            ILS NOUS FONT <span style={{ color: '#F97316' }}>CONFIANCE</span>
          </h2>
        </div>

        <div style={{ overflow: 'hidden', position: 'relative', padding: '8px 0' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(90deg,#1A7A3C,transparent)', zIndex: 2 }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(270deg,#0F5A2A,transparent)', zIndex: 2 }} />
          <div style={{ display: 'flex', width: 'max-content' }} className="marquee-track-reverse">
            {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '240px', height: '104px', margin: '0 20px',
                background: 'white', borderRadius: '8px',
                padding: '16px 28px', flexShrink: 0,
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}>
                <Image src={c.src} alt={c.name} width={190} height={72} style={{ objectFit: 'contain', maxHeight: '68px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
