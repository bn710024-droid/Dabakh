'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Eye, Shield, Gauge, Zap, Settings, Radio, Wrench, Cpu, Network } from 'lucide-react'
import { useRouter } from 'next/navigation'

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

const services = [
  {
    icon: <Eye size={36} />,
    title: 'Télésurveillance',
    subtitle: 'Hikvision · Dahua',
    img: '/images/site-camera.png',
    color: '#E8600A',
    desc: 'Installation et configuration de systèmes CCTV professionnels pour la surveillance de vos sites industriels, entrepôts, bureaux et espaces commerciaux. Caméras HD, IP, PTZ avec stockage local ou cloud.',
    features: ['Caméras HD & 4K', 'Surveillance IP réseau', 'Stockage NVR/DVR', 'Accès à distance', 'Analyse vidéo IA', 'Intervention 24/7'],
  },
  {
    icon: <Shield size={36} />,
    title: 'Sécurité Incendie',
    subtitle: 'DETNOV',
    img: '/images/fire-action.png',
    color: '#1A7A3C',
    desc: 'Systèmes de détection et d\'alarme incendie certifiés pour la protection de vos installations. Détecteurs de fumée, centrales d\'alarme, extincteurs, sprinklers et équipements de lutte contre l\'incendie.',
    features: ['Détecteurs de fumée', 'Centrales alarme', 'Extincteurs', 'Alarmes sonores/visuelles', 'Sprinklers', 'Certification aux normes', 'Maintenance préventive'],
  },
  {
    icon: <Gauge size={36} />,
    title: 'Instrumentation',
    subtitle: 'Fuji Electric · NIVUS · Bossard',
    img: '/images/instrumentation.png',
    color: '#E8600A',
    desc: 'Équipements de mesure et de contrôle pour les processus industriels. Capteurs de pression, température, débit, niveau. Solutions pour l\'industrie pétrolière, chimique et agroalimentaire.',
    features: ['Capteurs de pression', 'Débitmètres', 'Analyseurs de gaz', 'Transmetteurs', 'Métrologie légale', 'Étalonnage certifié'],
  },
  {
    icon: <Zap size={36} />,
    title: 'Contrôle d\'Accès',
    subtitle: 'Hikvision',
    img: '/images/access-control.png',
    color: '#1A7A3C',
    desc: 'Systèmes de contrôle d\'accès biométriques et électroniques pour sécuriser vos espaces sensibles. Lecteurs d\'empreintes, reconnaissance faciale, badges RFID et interphones vidéo.',
    features: ['Biométrie empreintes', 'Reconnaissance faciale', 'Badges RFID', 'Interphones vidéo', 'Gestion des accès', 'Journalisation complète'],
  },
  {
    icon: <Settings size={36} />,
    title: 'PID & Régulation',
    subtitle: 'Fuji Electric · Lacroix',
    img: '/images/manometer.png',
    color: '#E8600A',
    desc: 'Conception et mise en œuvre de boucles de régulation PID pour le contrôle des procédés industriels. Vannes de régulation, actionneurs et systèmes de contrôle-commande.',
    features: ['Régulateurs PID', 'Vannes de régulation', 'Actionneurs pneumatiques', 'Automates programmables', 'Supervision SCADA', 'Mise en service'],
  },
  {
    icon: <Radio size={36} />,
    title: 'Télégestion',
    subtitle: 'Lacroix · Nivus',
    img: '/images/refinery.png',
    color: '#1A7A3C',
    desc: 'Solutions de télégestion et de supervision à distance pour vos installations industrielles dispersées. Monitoring en temps réel, alertes automatiques et tableaux de bord centralisés.',
    features: ['Supervision à distance', 'Alertes temps réel', 'Tableaux de bord', 'Acquisition de données', 'Protocoles industriels', 'Archivage historique'],
  },
  {
    icon: <Network size={36} />,
    title: 'Réseau & Câblage Structuré',
    subtitle: 'Multi-marques',
    img: '/images/Réseau-câblage structuré-png.webp',
    color: '#E8600A',
    desc: 'Conception, installation et maintenance de réseaux informatiques et de câblage structuré pour les sites industriels et tertiaires. Solutions fiables et conformes aux normes pour vos infrastructures de communication.',
    features: ['Câblage RJ45 Cat6/Cat7', 'Fibre optique', 'Armoires de brassage', 'Switch réseau', 'Wi-Fi industriel', 'Certification réseau'],
  },
  {
    icon: <Wrench size={36} />,
    title: 'Maintenance Industrielle',
    subtitle: 'Multi-marques',
    img: '/images/tech-install.png',
    color: '#E8600A',
    desc: 'Service de maintenance préventive et curative pour tous vos équipements industriels. Contrats de maintenance annuels, interventions d\'urgence, pièces de rechange et formations.',
    features: ['Maintenance préventive', 'Interventions urgentes', 'Contrats annuels', 'Pièces de rechange', 'Diagnostic avancé', 'Formation opérateurs'],
  },
  {
    icon: <Cpu size={36} />,
    title: 'Systèmes Intelligents',
    subtitle: 'IoT · SCADA · BMS',
    img: '/images/iot-industrial.png',
    color: '#1A7A3C',
    desc: 'Intégration de systèmes industriels intelligents : IoT, BMS (Building Management System), SCADA et solutions d\'automatisation pour optimiser vos processus et réduire vos coûts.',
    features: ['IoT industriel', 'BMS bâtiment', 'Automatisation', 'Intégration SCADA', 'Analyse de données', 'Optimisation énergie'],
  },
]

export default function ServicesPage() {
  const router = useRouter()

  const requestQuote = (serviceName: string) => {
    router.push(`/contact?service=${encodeURIComponent(serviceName)}`)
  }

  return (
    <div style={{ background: '#FFFFFF', paddingTop: '80px' }}>

      {/* ══ HERO — fond vert comme le reste du site ══ */}
      <section style={{ position: 'relative', padding: '80px 24px 100px', overflow: 'hidden', background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 55%,#1A5C10 100%)' }}>
        <div className="bg-grid-green" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', top: '50%', right: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#F97316', textTransform: 'uppercase', marginBottom: '16px' }}>— Nos Services</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(52px, 8vw, 100px)', letterSpacing: '0.03em', lineHeight: 0.95, marginBottom: '24px' }}>
            <span style={{ color: '#FFFFFF' }}>SOLUTIONS</span><br />
            <span style={{ color: '#F97316' }}>TECHNIQUES</span><br />
            <span style={{ color: '#FFFFFF' }}>COMPLÈTES</span>
          </h1>
          <p style={{ fontFamily: 'Rajdhani', fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '560px', lineHeight: 1.7, letterSpacing: '0.04em' }}>
            De l&apos;étude technique à l&apos;installation et à la maintenance, Dabakh Global Services couvre l&apos;ensemble de vos besoins en ingénierie industrielle.
          </p>
        </div>
      </section>

      {/* ══ Services grid ══ */}
      <section style={{ padding: '80px 0', background: '#F8F8F6' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.05}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0',
                  border: `1px solid rgba(${service.color === '#E8600A' ? '232,96,10' : '26,122,60'},0.18)`,
                  borderRadius: '6px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = '0 8px 40px rgba(0,0,0,0.12)'
                  el.style.borderColor = service.color
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)'
                  el.style.borderColor = `rgba(${service.color === '#E8600A' ? '232,96,10' : '26,122,60'},0.18)`
                }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', minHeight: '280px', order: i % 2 === 0 ? 0 : 1 }}>
                    <Image src={service.img} alt={service.title} fill style={{ objectFit: 'cover', filter: 'brightness(0.85) saturate(0.9)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: i % 2 === 0 ? 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.15) 100%)' : 'linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.15) 100%)' }} />
                    <div style={{ position: 'absolute', top: '24px', left: '24px', background: service.color, color: 'white', width: '52px', height: '52px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>{service.icon}</div>
                    <div style={{ position: 'absolute', top: 0, left: i % 2 === 0 ? 'auto' : 0, right: i % 2 === 0 ? 0 : 'auto', width: '4px', height: '100%', background: `linear-gradient(180deg, ${service.color}, transparent)` }} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '40px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: i % 2 === 0 ? 1 : 0 }}>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.2em', color: service.color, textTransform: 'uppercase', marginBottom: '8px' }}>{service.subtitle}</div>
                    <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '36px', letterSpacing: '0.05em', color: '#111111', marginBottom: '16px' }}>{service.title}</h2>
                    <p style={{ fontFamily: 'Rajdhani', fontSize: '14px', color: '#666', lineHeight: 1.8, letterSpacing: '0.02em', marginBottom: '24px' }}>{service.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                      {service.features.map((f) => (
                        <span key={f} style={{
                          fontFamily: 'Rajdhani', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em',
                          color: service.color,
                          border: `1px solid rgba(${service.color === '#E8600A' ? '232,96,10' : '26,122,60'},0.3)`,
                          background: `rgba(${service.color === '#E8600A' ? '232,96,10' : '26,122,60'},0.06)`,
                          padding: '4px 10px', borderRadius: '2px', textTransform: 'uppercase',
                        }}>
                          {f}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => requestQuote(`Demande de devis — ${service.title}`)}
                      style={{
                        padding: '12px 24px', fontSize: '12px', borderRadius: '4px', border: 'none',
                        cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px',
                        letterSpacing: '0.1em', background: service.color, color: '#FFFFFF',
                        fontFamily: 'Rajdhani', fontWeight: 700, textTransform: 'uppercase',
                        alignSelf: 'flex-start', transition: 'opacity 0.2s ease',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                    >
                      Demander un Devis <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: '100px 24px', textAlign: 'center', background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-grid-green" style={{ position: 'absolute', inset: 0 }} />
        <FadeIn>
          <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '40px', height: '3px', background: '#F97316', margin: '0 auto 24px', borderRadius: '2px' }} />
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(40px, 6vw, 72px)', color: '#FFFFFF', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '20px' }}>
              UN PROJET EN TÊTE ?
            </h2>
            <p style={{ fontFamily: 'Rajdhani', fontSize: '16px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '36px', letterSpacing: '0.04em' }}>
              Nos ingénieurs étudient votre projet gratuitement et vous proposent la solution la plus adaptée.
            </p>
            <Link href="/contact" className="btn-orange" style={{ padding: '16px 40px', fontSize: '13px', borderRadius: '4px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Consultation Gratuite <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
