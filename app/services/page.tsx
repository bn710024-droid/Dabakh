'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Eye, Shield, Gauge, Zap, Settings, Radio, Wrench, Cpu } from 'lucide-react'
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
    color: '#22A050',
    desc: 'Systèmes de détection et d\'alarme incendie certifiés pour la protection de vos installations. Détecteurs de fumée, centrales d\'alarme, sprinklers et équipements de lutte contre l\'incendie.',
    features: ['Détecteurs de fumée', 'Centrales alarme', 'Alarmes sonores/visuelles', 'Sprinklers', 'Certification aux normes', 'Maintenance préventive'],
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
    color: '#22A050',
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
    subtitle: 'IGEL · Lacroix',
    img: '/images/refinery.png',
    color: '#22A050',
    desc: 'Solutions de télégestion et de supervision à distance pour vos installations industrielles dispersées. Monitoring en temps réel, alertes automatiques et tableaux de bord centralisés.',
    features: ['Supervision à distance', 'Alertes temps réel', 'Tableaux de bord', 'Acquisition de données', 'Protocoles industriels', 'Archivage historique'],
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
    img: '/images/cctv-kit.png',
    color: '#22A050',
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
    <div style={{ background: '#0A0A0A', paddingTop: '80px' }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '80px 24px 100px', overflow: 'hidden' }}>
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: '50%', right: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,96,10,0.07) 0%, transparent 70%)', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#E8600A', textTransform: 'uppercase', marginBottom: '16px' }}>— Nos Services</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(52px, 8vw, 100px)', letterSpacing: '0.03em', lineHeight: 0.95, marginBottom: '24px' }}>
            <span style={{ color: '#F5F5F0' }}>SOLUTIONS</span><br />
            <span style={{ color: '#E8600A' }}>TECHNIQUES</span><br />
            <span style={{ color: '#F5F5F0' }}>COMPLÈTES</span>
          </h1>
          <p style={{ fontFamily: 'Rajdhani', fontSize: '18px', color: 'rgba(245,245,240,0.6)', maxWidth: '560px', lineHeight: 1.7, letterSpacing: '0.04em' }}>
            De l'étude technique à l'installation et à la maintenance, Dabakh Global Services couvre l'ensemble de vos besoins en ingénierie industrielle.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.05}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0',
                  border: '1px solid rgba(232,96,10,0.12)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  background: 'rgba(14,14,14,0.9)',
                  transition: 'border-color 0.4s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,96,10,0.35)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,96,10,0.12)' }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', minHeight: '280px', order: i % 2 === 0 ? 0 : 1 }}>
                    <Image src={service.img} alt={service.title} fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.75)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: i % 2 === 0 ? 'linear-gradient(90deg, rgba(10,10,10,0) 0%, rgba(14,14,14,0.7) 100%)' : 'linear-gradient(270deg, rgba(10,10,10,0) 0%, rgba(14,14,14,0.7) 100%)' }} />
                    <div style={{ position: 'absolute', top: '24px', left: '24px', color: service.color }}>{service.icon}</div>
                    <div style={{ position: 'absolute', top: 0, left: i % 2 === 0 ? 'auto' : 0, right: i % 2 === 0 ? 0 : 'auto', width: '3px', height: '100%', background: `linear-gradient(180deg, ${service.color}, transparent)` }} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '40px', order: i % 2 === 0 ? 1 : 0 }}>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '0.2em', color: service.color, textTransform: 'uppercase', marginBottom: '8px' }}>{service.subtitle}</div>
                    <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '36px', letterSpacing: '0.05em', color: '#F5F5F0', marginBottom: '16px' }}>{service.title}</h2>
                    <p style={{ fontFamily: 'Rajdhani', fontSize: '14px', color: 'rgba(245,245,240,0.55)', lineHeight: 1.8, letterSpacing: '0.02em', marginBottom: '24px' }}>{service.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                      {service.features.map((f) => (
                        <span key={f} style={{
                          fontFamily: 'Rajdhani', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em',
                          color: 'rgba(245,245,240,0.6)', border: `1px solid rgba(${service.color === '#E8600A' ? '232,96,10' : '34,160,80'},0.2)`,
                          padding: '4px 10px', borderRadius: '2px', textTransform: 'uppercase',
                        }}>
                          {f}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => requestQuote(`Demande de devis — ${service.title}`)}
                      className="btn-primary"
                      style={{ padding: '12px 24px', fontSize: '12px', borderRadius: '2px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', letterSpacing: '0.1em' }}
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

      {/* CTA */}
      <section style={{ padding: '100px 24px', textAlign: 'center', borderTop: '1px solid rgba(232,96,10,0.1)', background: 'linear-gradient(135deg, rgba(232,96,10,0.05) 0%, rgba(26,122,60,0.03) 100%)' }}>
        <FadeIn>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(40px, 6vw, 72px)', color: '#F5F5F0', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '20px' }}>
              UN PROJET EN TÊTE ?
            </h2>
            <p style={{ fontFamily: 'Rajdhani', fontSize: '16px', color: 'rgba(245,245,240,0.55)', lineHeight: 1.7, marginBottom: '36px', letterSpacing: '0.04em' }}>
              Nos ingénieurs étudient votre projet gratuitement et vous proposent la solution la plus adaptée.
            </p>
            <Link href="/contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: '13px', borderRadius: '2px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Consultation Gratuite <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
