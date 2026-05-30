'use client'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight, Check, X } from 'lucide-react'

export default function ArticleHikvisionDahua() {
  return (
    <div style={{ background: '#FFFFFF', paddingTop: '80px' }}>

      {/* ══ HERO ══ */}
      <section style={{ position: 'relative', padding: '56px 20px 64px', background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 55%,#1A5C10 100%)', overflow: 'hidden' }}>
        <div className="bg-grid-green" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', marginBottom: '24px' }}>
            <ArrowLeft size={14} /> Retour au Blog
          </Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E8600A', color: 'white', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '2px', marginBottom: '20px' }}>
            <Tag size={10} /> Produits
          </div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(28px,5vw,62px)', letterSpacing: '0.03em', lineHeight: 0.95, color: '#FFFFFF', marginBottom: '20px' }}>
            HIKVISION VS DAHUA 2026 : QUEL SYSTÈME CCTV POUR L&apos;AFRIQUE DE L&apos;OUEST ?
          </h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}><Calendar size={12} /> 20 Mars 2026</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}><Clock size={12} /> 9 min de lecture</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>Par Dabakh Global Services</span>
          </div>
        </div>
      </section>

      {/* ══ IMAGE ══ */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ position: 'relative', height: '400px', borderRadius: '0 0 8px 8px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
          <img src="/images/real-nvr-screen.jpg" alt="Hikvision vs Dahua" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '16px', left: '20px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
            Supervision CCTV multi-caméras — Sénégal
          </div>
        </div>
      </div>

      {/* ══ CONTENU ══ */}
      <article style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 20px 80px' }}>

        {/* Intro */}
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '18px', color: '#333', lineHeight: 1.85, fontWeight: 500, borderLeft: '4px solid #E8600A', background: '#FFF8F5', padding: '20px 20px 20px 24px', borderRadius: '0 6px 6px 0', marginBottom: '32px' }}>
          Le marché de la vidéosurveillance en Afrique de l&apos;Ouest connaît une croissance rapide. Deux fabricants dominent largement ce secteur : <strong>Hikvision</strong> et <strong>Dahua</strong>. Présents dans plus de 150 pays, ces deux géants proposent des solutions adaptées à pratiquement tous les besoins.
        </div>

        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Mais lequel choisir pour un projet au Sénégal, en Côte d&apos;Ivoire, au Mali ou dans la sous-région ?
        </p>

        {/* Présentation des 2 marques */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Présentation des deux leaders</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
          <div style={{ border: '2px solid #E8600A', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: '#E8600A', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/images/logo-hikvision.png" alt="Hikvision" style={{ height: '28px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.1em', color: '#FFFFFF' }}>HIKVISION</span>
            </div>
            <div style={{ padding: '20px' }}>
              <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                {["Innovation technologique","Intelligence artificielle avancée","Large catalogue de produits","Excellente qualité d'image","Présence : industries, ports, aéroports"].map((i,k)=>(
                  <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', color: '#444', lineHeight: 1.8 }}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ border: '2px solid #1A7A3C', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: '#1A7A3C', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/images/logo-dahua.png" alt="Dahua" style={{ height: '28px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.1em', color: '#FFFFFF' }}>DAHUA</span>
            </div>
            <div style={{ padding: '20px' }}>
              <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                {["Excellent rapport qualité-prix","Simplicité de déploiement","Performances en environnement difficile","Large gamme PME & industries","Solution accessible et fiable"].map((i,k)=>(
                  <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', color: '#444', lineHeight: 1.8 }}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tableau comparatif */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Comparatif détaillé</h2>
        <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Rajdhani, sans-serif', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#111' }}>
                <th style={{ padding: '14px 16px', textAlign: 'left', color: '#FFF', fontWeight: 700, letterSpacing: '0.08em' }}>CRITÈRE</th>
                <th style={{ padding: '14px 16px', textAlign: 'center', color: '#E8600A', fontWeight: 700, letterSpacing: '0.08em' }}>HIKVISION</th>
                <th style={{ padding: '14px 16px', textAlign: 'center', color: '#4ADE80', fontWeight: 700, letterSpacing: '0.08em' }}>DAHUA</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Qualité d'image", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"],
                ["Intelligence artificielle", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Rapport qualité-prix", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Résistance climatique", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Facilité d'installation", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Disponibilité pièces Sénégal", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                ["Gamme professionnelle", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"],
              ].map(([critere, hik, dah], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#F8F8F6' : '#FFFFFF', borderBottom: '1px solid #F0F0F0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600, color: '#333' }}>{critere}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center' }}>{hik}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center' }}>{dah}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section climat */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Adaptation au climat africain</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          L&apos;Afrique de l&apos;Ouest impose des contraintes particulières : chaleur élevée, poussière, humidité, fortes pluies et variations électriques. Les deux marques disposent de gammes industrielles certifiées <strong>IP66</strong> et <strong>IP67</strong> capables de résister à ces conditions.
        </p>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Toutefois, le choix du matériel et surtout la qualité de l&apos;installation restent plus importants que la marque elle-même.
        </p>

        {/* Quel choix */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Quel choix pour votre projet ?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
          <div style={{ background: '#FFF8F5', border: '2px solid #E8600A', borderRadius: '8px', padding: '24px' }}>
            <div style={{ fontFamily: 'Bebas Neue', fontSize: '18px', letterSpacing: '0.06em', color: '#E8600A', marginBottom: '14px' }}>CHOISISSEZ HIKVISION SI…</div>
            {["vous recherchez la meilleure qualité d'image","vous souhaitez des fonctionnalités IA avancées","vous gérez un site sensible ou stratégique","votre budget est plus flexible"].map((i,k)=>(
              <div key={k} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                <Check size={14} color="#E8600A" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', color: '#444', lineHeight: 1.6 }}>{i}</span>
              </div>
            ))}
          </div>
          <div style={{ background: '#F5FFF8', border: '2px solid #1A7A3C', borderRadius: '8px', padding: '24px' }}>
            <div style={{ fontFamily: 'Bebas Neue', fontSize: '18px', letterSpacing: '0.06em', color: '#1A7A3C', marginBottom: '14px' }}>CHOISISSEZ DAHUA SI…</div>
            {["vous recherchez un excellent rapport qualité-prix","vous souhaitez équiper plusieurs sites","vous avez un budget optimisé","vous privilégiez la simplicité de gestion"].map((i,k)=>(
              <div key={k} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                <Check size={14} color="#1A7A3C" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', color: '#444', lineHeight: 1.6 }}>{i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div style={{ background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)', borderRadius: '8px', padding: '32px', marginBottom: '48px' }}>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.06em', color: '#F97316', marginBottom: '12px' }}>CONCLUSION</div>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, margin: '0 0 16px' }}>
            En 2026, Hikvision et Dahua restent les deux références majeures de la vidéosurveillance professionnelle en Afrique de l&apos;Ouest. Les deux solutions offrent des performances élevées, une bonne résistance aux conditions climatiques locales et une intégration complète avec les systèmes modernes de sécurité.
          </p>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, margin: '0 0 20px' }}>
            Le choix final dépendra principalement du niveau de sécurité recherché, du budget disponible et des objectifs à long terme de votre projet.
          </p>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '18px', letterSpacing: '0.06em', color: '#F97316', marginBottom: '10px' }}>DABAKH — DISTRIBUTEUR AGRÉÉ HIKVISION & DAHUA AU SÉNÉGAL</div>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E8600A', color: 'white', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none' }}>
            Demander un Devis Gratuit <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: '32px' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E8600A', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Voir tous les articles
          </Link>
        </div>
      </article>
    </div>
  )
}
