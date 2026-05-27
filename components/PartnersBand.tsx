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

export default function PartnersBand() {
  return (
    <section style={{ padding: '72px 0', background: 'linear-gradient(135deg,#E8600A 0%,#F97316 100%)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 36px', textAlign: 'center' }}>
        <div className="accent-line-white" style={{ margin: '0 auto 14px' }} />
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '10px' }}>
          Technologies & Marques
        </div>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px,4vw,48px)', color: '#FFFFFF', letterSpacing: '0.04em' }}>
          NOS PARTENAIRES MONDIAUX
        </h2>
      </div>

      {/* DESKTOP — marquee animée */}
      <div className="partners-marquee" style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(90deg,#E8600A,transparent)', zIndex: 2 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(270deg,#F97316,transparent)', zIndex: 2 }} />
        <div style={{ display: 'flex', width: 'max-content' }} className="marquee-track">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '210px', height: '90px', margin: '0 14px',
              background: 'white', borderRadius: '8px', padding: '14px 22px',
              flexShrink: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            }}>
              <Image src={p.src} alt={p.name} width={165} height={62} style={{ objectFit: 'contain', maxHeight: '58px' }} />
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE — grille statique 3x2 (les 6 logos sur la même page sans scroll) */}
      <div className="partners-mobile-grid" style={{ display: 'none', maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {partners.map((p) => (
            <div key={p.name} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              height: '70px',
              background: 'white', borderRadius: '6px', padding: '8px 10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}>
              <Image src={p.src} alt={p.name} width={110} height={42} style={{ objectFit: 'contain', maxHeight: '50px', width: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
