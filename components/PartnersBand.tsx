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
      <div style={{ overflow: 'hidden', position: 'relative' }}>
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
    </section>
  )
}
