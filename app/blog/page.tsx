'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } }, { threshold: 0.05 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  )
}

const articles = [
  {
    slug: '#',
    category: 'Télésurveillance',
    categoryColor: '#E8600A',
    title: 'Comment choisir le bon système CCTV pour votre site industriel ?',
    excerpt: 'Caméras fixes, PTZ, thermiques… Le choix du système de vidéosurveillance dépend de votre secteur, de la superficie et du niveau de risque. Notre guide complet pour les industries sénégalaises.',
    date: '15 Mai 2026',
    readTime: '6 min',
    image: '/images/real-sococim-cctv.jpg',
  },
  {
    slug: '#',
    category: 'Sécurité Incendie',
    categoryColor: '#1A7A3C',
    title: 'Normes de sécurité incendie au Sénégal : ce que dit la réglementation',
    excerpt: 'Toute installation industrielle est soumise à des obligations légales en matière de détection et protection incendie. Voici ce qu'il faut savoir pour être en conformité.',
    date: '2 Mai 2026',
    readTime: '8 min',
    image: '/images/real-detecteur-install.png',
  },
  {
    slug: '#',
    category: 'Instrumentation',
    categoryColor: '#E8600A',
    title: 'Les capteurs essentiels pour l\'industrie pétrolière et chimique',
    excerpt: 'Débitmètres, capteurs de pression, transmetteurs de niveau… Découvrez les équipements d\'instrumentation incontournables pour les process industriels critiques.',
    date: '18 Avril 2026',
    readTime: '7 min',
    image: '/images/real-debitmetre.png',
  },
  {
    slug: '#',
    category: 'Maintenance',
    categoryColor: '#1A7A3C',
    title: 'Maintenance préventive vs curative : quel plan pour vos équipements de sécurité ?',
    excerpt: 'Un système de sécurité non maintenu est un système qui ne protège plus. Comparaison des approches préventive et curative, et nos recommandations pour les sites industriels.',
    date: '5 Avril 2026',
    readTime: '5 min',
    image: '/images/real-armoire.png',
  },
  {
    slug: '#',
    category: 'Produits',
    categoryColor: '#E8600A',
    title: 'Hikvision vs Dahua 2026 : quel système CCTV pour l\'Afrique de l\'Ouest ?',
    excerpt: 'Les deux géants de la vidéosurveillance ont chacun leurs points forts. Comparatif technique, prix, support et adaptation aux conditions climatiques locales.',
    date: '20 Mars 2026',
    readTime: '9 min',
    image: '/images/real-nvr-screen.jpg',
  },
  {
    slug: '#',
    category: 'Télégestion',
    categoryColor: '#1A7A3C',
    title: 'Smart Building : comment la télégestion transforme la gestion des infrastructures',
    excerpt: 'Contrôle à distance, alertes automatiques, tableaux de bord temps réel… La télégestion révolutionne la gestion des sites industriels et des bâtiments intelligents au Sénégal.',
    date: '8 Mars 2026',
    readTime: '6 min',
    image: '/images/real-supervision.png',
  },
]

export default function BlogPage() {
  const [featured, ...rest] = articles

  return (
    <div style={{ background: '#FFFFFF', paddingTop: '80px' }}>

      {/* ══ HERO ══ */}
      <section style={{ position: 'relative', padding: '60px 20px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 55%,#1A5C10 100%)' }}>
        <div className="bg-grid-green" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', letterSpacing: '0.3em', color: '#F97316', textTransform: 'uppercase', marginBottom: '16px' }}>— Blog & Actualités</div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(42px,8vw,96px)', letterSpacing: '0.03em', lineHeight: 0.95, marginBottom: '20px' }}>
            <span style={{ color: '#FFFFFF' }}>EXPERTISE</span><br />
            <span style={{ color: '#F97316' }}>&amp; CONSEILS</span><br />
            <span style={{ color: '#FFFFFF' }}>TECHNIQUES</span>
          </h1>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '520px', lineHeight: 1.7, letterSpacing: '0.03em' }}>
            Guides pratiques, comparatifs produits et actualités sur la sécurité industrielle, la télésurveillance et l&apos;instrumentation au Sénégal.
          </p>
        </div>
      </section>

      {/* ══ ARTICLE À LA UNE ══ */}
      <section style={{ background: '#F8F8F6', padding: '64px 20px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.3em', color: '#E8600A', textTransform: 'uppercase', marginBottom: '24px' }}>
              — Article à la une
            </div>
            <Link href={featured.slug} style={{ textDecoration: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.1)', background: '#FFFFFF' }} className="blog-featured">
              {/* Image */}
              <div style={{ position: 'relative', minHeight: '360px', background: '#111' }}>
                <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))' }} />
                <div style={{ position: 'absolute', top: '20px', left: '20px', background: featured.categoryColor, color: 'white', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '2px' }}>
                  {featured.category}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#999', letterSpacing: '0.05em' }}>
                    <Calendar size={12} /> {featured.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#999', letterSpacing: '0.05em' }}>
                    <Clock size={12} /> {featured.readTime} de lecture
                  </span>
                </div>
                <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(24px,3vw,38px)', letterSpacing: '0.04em', color: '#111111', lineHeight: 1.05, marginBottom: '18px' }}>
                  {featured.title}
                </h2>
                <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#666', lineHeight: 1.75, marginBottom: '28px', letterSpacing: '0.02em' }}>
                  {featured.excerpt}
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: featured.categoryColor }}>
                  Lire l&apos;article <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ══ GRILLE ARTICLES ══ */}
      <section style={{ background: '#F8F8F6', padding: '56px 20px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.3em', color: '#555', textTransform: 'uppercase', marginBottom: '32px' }}>
              — Tous les articles
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
            {rest.map((article, i) => (
              <FadeIn key={article.title} delay={i * 0.08}>
                <Link href={article.slug} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#FFFFFF', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.05)', height: '100%', transition: 'box-shadow 0.3s ease, transform 0.3s ease' }} className="blog-card">
                  {/* Image */}
                  <div style={{ position: 'relative', height: '200px', background: '#111', flexShrink: 0 }}>
                    <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5) 100%)' }} />
                    <div style={{ position: 'absolute', top: '14px', left: '14px', background: article.categoryColor, color: 'white', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Tag size={9} /> {article.category}
                    </div>
                  </div>
                  {/* Content */}
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '14px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#AAA', letterSpacing: '0.05em' }}>
                        <Calendar size={10} /> {article.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#AAA', letterSpacing: '0.05em' }}>
                        <Clock size={10} /> {article.readTime}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '20px', letterSpacing: '0.05em', color: '#111111', lineHeight: 1.1, marginBottom: '12px' }}>
                      {article.title}
                    </h3>
                    <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', color: '#777', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>
                      {article.excerpt}
                    </p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: article.categoryColor }}>
                      Lire la suite <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)', padding: '64px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-grid-green" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(28px,5vw,52px)', color: '#FFFFFF', letterSpacing: '0.05em', marginBottom: '14px' }}>
            UN PROJET EN TÊTE ?
          </div>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.75)', marginBottom: '28px', lineHeight: 1.7 }}>
            Nos ingénieurs répondent à vos questions et vous proposent une étude gratuite.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E8600A', color: 'white', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}>
            Demander un Devis Gratuit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style jsx global>{`
        .blog-featured { transition: box-shadow 0.3s ease; }
        .blog-featured:hover { box-shadow: 0 16px 56px rgba(0,0,0,0.15) !important; }
        .blog-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.12) !important; transform: translateY(-3px) !important; }
        @media (max-width: 768px) {
          .blog-featured { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
