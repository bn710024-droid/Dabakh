'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowRight, ShoppingCart, Search } from 'lucide-react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  )
}

const categories = [
  {
    id: 'surveillance',
    label: 'Télésurveillance',
    color: '#E8600A',
    brand: 'Hikvision · Dahua',
    products: [
      { name: 'Caméra Bullet Hikvision', img: '/images/camera-bullet.png', desc: 'Caméra IP extérieure HD 4MP, vision nocturne 50m, résistante aux intempéries IP67' },
      { name: 'Caméra Dôme Hikvision', img: '/images/camera-dome.png', desc: 'Caméra dôme intérieure/extérieure 4MP, anti-vandalisme, objectif varifocal 2.8–12mm' },
      { name: 'Caméra PTZ Speed Dome', img: '/images/camera-ptz.png', desc: 'Caméra PTZ zoom optique 36x, suivi automatique, surveillance longue portée 200m' },
      { name: 'Kit CCTV Complet', img: '/images/cctv-kit.png', desc: 'Kit de surveillance complet : NVR 8 voies + 4 caméras HD + câbles + alimentation' },
    ],
  },
  {
    id: 'access',
    label: 'Contrôle d\'Accès',
    color: '#1A7A3C',
    brand: 'Hikvision',
    products: [
      { name: 'Terminal Biométrique DS-K1T804', img: '/images/access-control.png', desc: 'Terminal de contrôle d\'accès biométrique — empreintes digitales + RFID + clavier, écran couleur TFT' },
    ],
  },
  {
    id: 'fire',
    label: 'Sécurité Incendie',
    color: '#E8600A',
    brand: 'DETNOV',
    products: [
      { name: 'Détecteur de Fumée DETNOV', img: '/images/detnov-detector.png', desc: 'Détecteur de fumée optique certifié EN54, alarme 85dB, alimentation 9V' },
      { name: 'Détecteur Ionique Standard', img: '/images/smoke-detector.png', desc: 'Détecteur incendie ionique standard, installation plafond, LED d\'état intégré' },
      { name: 'Système Alarme Incendie', img: '/images/fire-action.png', desc: 'Détecteur de fumée avec centrale d\'alarme, idéal pour sites industriels et tertiaires' },
    ],
  },
  {
    id: 'instrumentation',
    label: 'Instrumentation',
    color: '#1A7A3C',
    brand: 'Fuji Electric · NIVUS · Bossard',
    products: [
      { name: 'Capteurs & Transmetteurs', img: '/images/instrumentation.png', desc: 'Capteurs de pression, température et débit pour procédés industriels — Fuji Electric' },
      { name: 'Systèmes de Tuyauterie', img: '/images/refinery.png', desc: 'Solutions complètes de tuyauterie industrielle et raccordements pour raffineries et usines' },
      { name: 'Manomètres & Métrologie', img: '/images/manometer.png', desc: 'Instruments de mesure certifiés : manomètres, débitmètres, étalonnage en laboratoire' },
    ],
  },
]

export default function ProductsPage() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('surveillance')

  const requestQuote = (productName: string) => {
    router.push(`/contact?service=${encodeURIComponent(`Demande de devis pour : ${productName}`)}`)
  }

  const activeData = categories.find(c => c.id === activeCategory)!

  return (
    <div style={{ background: '#FFFFFF', paddingTop: '80px' }}>

      {/* ══ HERO — fond vert ══ */}
      <section style={{ position: 'relative', padding: '80px 24px 100px', overflow: 'hidden', background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 55%,#1A5C10 100%)' }}>
        <div className="bg-grid-green" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#F97316', textTransform: 'uppercase', marginBottom: '16px' }}>— Catalogue Produits</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(52px, 8vw, 100px)', letterSpacing: '0.03em', lineHeight: 0.95, marginBottom: '24px' }}>
            <span style={{ color: '#FFFFFF' }}>NOS</span><br />
            <span style={{ color: '#F97316' }}>ÉQUIPEMENTS</span><br />
            <span style={{ color: '#FFFFFF' }}>PREMIUM</span>
          </h1>
          <p style={{ fontFamily: 'Rajdhani', fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '560px', lineHeight: 1.7, letterSpacing: '0.04em' }}>
            Distributeur agréé des grandes marques mondiales. Chaque produit est soigneusement sélectionné pour ses performances en environnement industriel africain.
          </p>
        </div>
      </section>

      {/* ══ Category Tabs ══ */}
      <section style={{ position: 'sticky', top: '70px', zIndex: 100, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(232,96,10,0.18)', padding: '0 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '0', overflowX: 'auto' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                fontFamily: 'Rajdhani', fontWeight: 600, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '18px 24px', background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
                color: activeCategory === cat.id ? cat.color : '#666',
                borderBottom: activeCategory === cat.id ? `3px solid ${cat.color}` : '3px solid transparent',
                transition: 'all 0.3s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ══ Products ══ */}
      <section style={{ padding: '80px 0', background: '#F8F8F6' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <FadeIn>
            <div style={{ marginBottom: '48px' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.25em', color: activeData.color, textTransform: 'uppercase', marginBottom: '8px' }}>{activeData.brand}</div>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 5vw, 60px)', color: '#111111', letterSpacing: '0.04em' }}>
                {activeData.label} <span style={{ color: activeData.color }}>({activeData.products.length} produits)</span>
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {activeData.products.map((product, i) => (
              <FadeIn key={product.name} delay={i * 0.08}>
                <div style={{
                  background: '#FFFFFF',
                  border: `1px solid rgba(${activeData.color === '#E8600A' ? '232,96,10' : '26,122,60'},0.15)`,
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                  transition: 'all 0.4s ease',
                  height: '100%',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = activeData.color
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = `0 12px 36px rgba(0,0,0,0.12)`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `rgba(${activeData.color === '#E8600A' ? '232,96,10' : '26,122,60'},0.15)`
                  el.style.transform = 'none'
                  el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
                }}
                >
                  {/* Product image */}
                  <div style={{ position: 'relative', height: '220px', background: '#F8F8F6' }}>
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'contain', padding: '16px' }}
                    />
                    <div style={{ position: 'absolute', top: '12px', right: '12px', background: activeData.color, width: '3px', height: '24px' }} />
                  </div>

                  {/* Info */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.2em', color: activeData.color, textTransform: 'uppercase', marginBottom: '8px' }}>{activeData.brand.split('·')[0].trim()}</div>
                    <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.06em', color: '#111111', marginBottom: '12px', lineHeight: 1.1 }}>{product.name}</h3>
                    <p style={{ fontFamily: 'Rajdhani', fontSize: '13px', color: '#666', lineHeight: 1.75, letterSpacing: '0.02em', marginBottom: '24px', flex: 1 }}>{product.desc}</p>
                    <button
                      onClick={() => requestQuote(product.name)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        background: activeData.color,
                        color: 'white', border: 'none', cursor: 'pointer',
                        fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
                        padding: '12px 20px', borderRadius: '4px',
                        transition: 'opacity 0.3s ease',
                        width: '100%',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                    >
                      <ShoppingCart size={14} /> Demander un Devis
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          {/* Carte produit spécifique */}
          <FadeIn delay={0.3}>
            <div
              onClick={() => requestQuote('Demande de produit spécifique')}
              style={{
                borderRadius:'6px',border:'2px dashed rgba(232,96,10,0.4)',
                background:'rgba(232,96,10,0.04)',cursor:'pointer',
                display:'flex',flexDirection:'column',alignItems:'center',
                justifyContent:'center',minHeight:'260px',padding:'32px 20px',
                transition:'all 0.3s ease',textAlign:'center',
              }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background='rgba(232,96,10,0.09)';el.style.borderColor='#E8600A'}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background='rgba(232,96,10,0.04)';el.style.borderColor='rgba(232,96,10,0.4)'}}
            >
              <div style={{width:'60px',height:'60px',borderRadius:'50%',background:'rgba(232,96,10,0.12)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'16px'}}>
                <Search size={26} color="#E8600A"/>
              </div>
              <div style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'20px',letterSpacing:'0.08em',color:'#E8600A',marginBottom:'10px'}}>PRODUIT SPÉCIFIQUE ?</div>
              <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'13px',color:'#666',lineHeight:1.65,marginBottom:'20px'}}>
                Vous cherchez un équipement précis que vous ne trouvez pas ici ? Contactez-nous, nous le trouvons pour vous.
              </p>
              <div style={{fontFamily:'Rajdhani, sans-serif',fontWeight:700,fontSize:'12px',letterSpacing:'0.1em',textTransform:'uppercase',color:'#E8600A',display:'flex',alignItems:'center',gap:'6px'}}>
                Nous Contacter <ArrowRight size={14}/>
              </div>
            </div>
          </FadeIn>

          </div>
        </div>
      </section>

      {/* ══ Catalogue complet ══ */}
      <section style={{ padding: '80px 0', background: '#FFFFFF', borderTop: '1px solid rgba(232,96,10,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#E8600A', textTransform: 'uppercase', marginBottom: '12px' }}>— Toutes catégories</div>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(36px, 5vw, 60px)', color: '#111111', letterSpacing: '0.04em' }}>
                CATALOGUE <span style={{ color: '#E8600A' }}>COMPLET</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {categories.map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 0.1}>
                <button
                  onClick={() => { setActiveCategory(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px',
                    padding: '28px', border: `1px solid rgba(${cat.color === '#E8600A' ? '232,96,10' : '26,122,60'},0.2)`,
                    borderRadius: '6px', background: '#FFFFFF', cursor: 'pointer',
                    textAlign: 'left', width: '100%', transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = cat.color
                    el.style.transform = 'translateY(-3px)'
                    el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = `rgba(${cat.color === '#E8600A' ? '232,96,10' : '26,122,60'},0.2)`
                    el.style.transform = 'none'
                    el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)'
                  }}
                >
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.06em', color: cat.color }}>{cat.label}</div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase' }}>{cat.brand}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px', color: cat.color, fontFamily: 'Rajdhani', fontSize: '12px', letterSpacing: '0.1em', fontWeight: 700, textTransform: 'uppercase' }}>
                    {cat.products.length} produits <ArrowRight size={12} />
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
