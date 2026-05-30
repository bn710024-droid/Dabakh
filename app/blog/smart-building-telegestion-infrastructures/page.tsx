'use client'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

export default function ArticleSmartBuilding() {
  return (
    <div style={{ background: '#FFFFFF', paddingTop: '80px' }}>

      {/* ══ HERO ══ */}
      <section style={{ position: 'relative', padding: '56px 20px 64px', background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 55%,#1A5C10 100%)', overflow: 'hidden' }}>
        <div className="bg-grid-green" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', marginBottom: '24px' }}>
            <ArrowLeft size={14} /> Retour au Blog
          </Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#1A7A3C', border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '2px', marginBottom: '20px' }}>
            <Tag size={10} /> Télégestion
          </div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(26px,5vw,58px)', letterSpacing: '0.03em', lineHeight: 0.95, color: '#FFFFFF', marginBottom: '20px' }}>
            SMART BUILDING : COMMENT LA TÉLÉGESTION TRANSFORME LA GESTION DES INFRASTRUCTURES
          </h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}><Calendar size={12} /> 8 Mars 2026</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}><Clock size={12} /> 6 min de lecture</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>Par Dabakh Global Services</span>
          </div>
        </div>
      </section>

      {/* ══ IMAGE ══ */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ position: 'relative', height: '400px', borderRadius: '0 0 8px 8px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
          <img src="/images/real-supervision.png" alt="Smart Building Télégestion" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '16px', left: '20px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
            Centre de supervision SCADA — Sénégal
          </div>
        </div>
      </div>

      {/* ══ CONTENU ══ */}
      <article style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 20px 80px' }}>

        {/* Intro */}
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '18px', color: '#333', lineHeight: 1.85, fontWeight: 500, borderLeft: '4px solid #1A7A3C', background: '#F5FFF8', padding: '20px 20px 20px 24px', borderRadius: '0 6px 6px 0', marginBottom: '32px' }}>
          La transformation numérique ne concerne plus uniquement les bureaux ou les centres de données. Aujourd&apos;hui, les bâtiments industriels, commerciaux et administratifs deviennent progressivement des infrastructures intelligentes capables de surveiller, analyser et optimiser leurs propres performances.
        </div>

        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Grâce aux systèmes connectés, les gestionnaires peuvent désormais contrôler à distance leurs équipements, recevoir des alertes en temps réel et prendre des décisions plus rapides pour améliorer la sécurité, réduire les coûts et augmenter l&apos;efficacité opérationnelle.
        </p>

        {/* Section 1 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Qu&apos;est-ce que la télégestion ?</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          La télégestion est un système qui permet de superviser et piloter à distance des équipements techniques à partir d&apos;une plateforme centralisée. Elle collecte automatiquement les données provenant :
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', marginBottom: '24px' }}>
          {["Installations électriques","Systèmes de sécurité","Pompes et moteurs","Groupes électrogènes","Réservoirs","Équipements industriels","Réseaux d'eau et d'énergie"].map((item, i) => (
            <div key={i} style={{ background: '#F8F8F6', borderLeft: '3px solid #1A7A3C', padding: '10px 14px', fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', color: '#444', fontWeight: 600 }}>{item}</div>
          ))}
        </div>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Toutes ces informations sont ensuite accessibles depuis un ordinateur, une tablette ou un smartphone.
        </p>

        {/* Section 2 — 3 objectifs */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Pourquoi les Smart Buildings se développent-ils ?</h2>
        {[
          { color: '#E8600A', title: 'Réduire les coûts d\'exploitation', body: "Les consommations énergétiques représentent souvent l'une des dépenses les plus importantes d'une infrastructure. La télégestion permet d'identifier les surconsommations, d'optimiser les équipements et de réduire les pertes énergétiques." },
          { color: '#1A7A3C', title: 'Améliorer la sécurité', body: "Les responsables reçoivent immédiatement des alertes concernant une intrusion, une panne électrique, une alarme incendie, une défaillance technique ou une fuite. Les temps de réaction sont considérablement réduits." },
          { color: '#E8600A', title: 'Augmenter la disponibilité des équipements', body: "La surveillance continue permet d'anticiper les anomalies avant qu'elles ne provoquent une panne majeure, réduisant ainsi les interruptions imprévues et les pertes associées." },
        ].map((s, i) => (
          <div key={i} style={{ background: '#F8F8F6', borderLeft: `4px solid ${s.color}`, padding: '20px 24px', borderRadius: '0 6px 6px 0', marginBottom: '14px' }}>
            <div style={{ fontFamily: 'Bebas Neue', fontSize: '18px', letterSpacing: '0.06em', color: s.color, marginBottom: '8px' }}>{s.title}</div>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.75, margin: 0 }}>{s.body}</p>
          </div>
        ))}

        {/* Section 3 — domaines */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0', marginTop: '40px' }}>Les principaux domaines d&apos;application</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '40px' }}>
          {[
            { title: 'Gestion énergétique', items: ["Consommation électrique","Groupes électrogènes","Panneaux solaires","Climatisation"] },
            { title: "Gestion de l'eau", items: ["Niveaux de réservoirs","Stations de pompage","Réseaux de distribution","Systèmes de traitement"] },
            { title: 'Sécurité & CCTV', items: ["Caméras CCTV","Contrôle d'accès","Anti-intrusion","Alarmes incendie"] },
            { title: 'Industrie & Production', items: ["Suivi des machines","Paramètres de production","Équipements critiques","Maintenance préventive"] },
          ].map((card, i) => (
            <div key={i} style={{ background: '#F8F8F6', borderTop: `3px solid ${i % 2 === 0 ? '#E8600A' : '#1A7A3C'}`, borderRadius: '4px', padding: '18px' }}>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '15px', letterSpacing: '0.08em', color: i % 2 === 0 ? '#E8600A' : '#1A7A3C', marginBottom: '10px' }}>{card.title}</div>
              <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                {card.items.map((p, j) => <li key={j} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.7 }}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Section Sénégal */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Les avantages pour les entreprises sénégalaises</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          Au Sénégal et en Afrique de l&apos;Ouest, de nombreuses entreprises font face à des défis spécifiques : coûts énergétiques élevés, dispersion géographique des sites, difficultés de supervision et contraintes de maintenance. La télégestion apporte des solutions concrètes :
        </p>
        <ul style={{ margin: '0 0 40px', padding: '0 0 0 20px' }}>
          {["la supervision à distance ;","la centralisation des données ;","l'automatisation des alertes ;","la réduction des déplacements techniques."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>

        {/* Section données */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>L&apos;importance des données en temps réel</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          Les tableaux de bord permettent de visualiser :
        </p>
        <ul style={{ margin: '0 0 40px', padding: '0 0 0 20px' }}>
          {["les consommations ;","les performances ;","les alarmes ;","les historiques d'événements ;","les indicateurs de maintenance."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>

        {/* Section avenir */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>L&apos;avenir des infrastructures connectées</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          Les Smart Buildings continueront d&apos;évoluer avec l&apos;intégration de :
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '40px' }}>
          {["Intelligence artificielle","Internet des objets (IoT)","Analyse prédictive","Automatisation avancée"].map((t,k)=>(
            <div key={k} style={{ background: '#111', padding: '18px', borderRadius: '4px', textAlign: 'center', fontFamily: 'Bebas Neue', fontSize: '15px', letterSpacing: '0.08em', color: '#F97316' }}>{t}</div>
          ))}
        </div>

        {/* Conclusion */}
        <div style={{ background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)', borderRadius: '8px', padding: '32px', marginBottom: '48px' }}>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.06em', color: '#F97316', marginBottom: '12px' }}>CONCLUSION</div>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, margin: '0 0 16px' }}>
            La télégestion transforme profondément la manière dont les infrastructures sont exploitées. En offrant une visibilité complète sur les équipements et les opérations, elle améliore la sécurité, réduit les coûts et optimise les performances.
          </p>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, margin: '0 0 20px' }}>
            Pour les entreprises industrielles, les bâtiments tertiaires et les infrastructures critiques, investir dans un système de télégestion moderne constitue aujourd&apos;hui un levier majeur de compétitivité et de performance durable.
          </p>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '18px', letterSpacing: '0.06em', color: '#F97316', marginBottom: '10px' }}>DABAKH — SOLUTIONS SCADA & TÉLÉGESTION AU SÉNÉGAL</div>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E8600A', color: 'white', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none' }}>
            Demander une Étude Gratuite <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: '32px' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A7A3C', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Voir tous les articles
          </Link>
        </div>
      </article>
    </div>
  )
}
