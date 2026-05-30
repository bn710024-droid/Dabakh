'use client'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

export default function ArticleCapteurs() {
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
            <Tag size={10} /> Instrumentation
          </div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(28px,5vw,60px)', letterSpacing: '0.03em', lineHeight: 0.95, color: '#FFFFFF', marginBottom: '20px' }}>
            LES CAPTEURS ESSENTIELS POUR L&apos;INDUSTRIE PÉTROLIÈRE ET CHIMIQUE
          </h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
              <Calendar size={12} /> 18 Avril 2026
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
              <Clock size={12} /> 7 min de lecture
            </span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
              Par Dabakh Global Services
            </span>
          </div>
        </div>
      </section>

      {/* ══ IMAGE ══ */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ position: 'relative', height: '400px', borderRadius: '0 0 8px 8px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
          <img src="/images/real-debitmetre.png" alt="Débitmètre industriel" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '16px', left: '20px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
            Débitmètre NIVUS — Installation industrielle, Sénégal
          </div>
        </div>
      </div>

      {/* ══ CONTENU ══ */}
      <article style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 20px 80px' }}>

        {/* Intro */}
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '18px', color: '#333', lineHeight: 1.85, fontWeight: 500, borderLeft: '4px solid #E8600A', background: '#FFF8F5', padding: '20px 20px 20px 24px', borderRadius: '0 6px 6px 0', marginBottom: '32px' }}>
          Les industries pétrolières et chimiques reposent sur une surveillance permanente des procédés. Une variation de pression, de débit ou de niveau peut avoir des conséquences importantes sur la sécurité, la qualité de production et la rentabilité des installations.
        </div>

        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Aujourd&apos;hui, les raffineries, dépôts pétroliers, usines chimiques et installations de traitement utilisent des instruments de mesure de plus en plus précis afin de garantir la stabilité des processus industriels.
        </p>

        {/* Section 1 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Pourquoi les capteurs sont-ils indispensables ?</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>Dans un environnement industriel complexe, il est impossible de gérer efficacement les opérations sans données fiables. Les capteurs permettent de :</p>
        <ul style={{ margin: '0 0 24px', padding: '0 0 0 20px' }}>
          {["surveiller les équipements en temps réel ;","détecter rapidement les anomalies ;","optimiser les performances des installations ;","réduire les pertes de production ;","améliorer la sécurité des opérateurs ;","faciliter la maintenance préventive."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Grâce à l&apos;automatisation industrielle, les informations collectées sont transmises directement aux systèmes de supervision et aux salles de contrôle.
        </p>

        {/* Section 2 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Les débitmètres : mesurer pour mieux contrôler</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>Le débit constitue l&apos;un des paramètres les plus importants dans l&apos;industrie pétrolière et chimique. Les débitmètres permettent de mesurer avec précision :</p>
        <ul style={{ margin: '0 0 20px', padding: '0 0 0 20px' }}>
          {["les liquides ;","les hydrocarbures ;","les gaz industriels ;","les produits chimiques ;","l'eau de procédé."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>Les technologies les plus utilisées incluent :</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '40px' }}>
          {["Débitmètres électromagnétiques","Débitmètres ultrasoniques","Débitmètres massiques","Débitmètres à vortex"].map((t,k)=>(
            <div key={k} style={{ background: '#F8F8F6', border: '1px solid #E8600A22', borderTop: '3px solid #E8600A', padding: '14px', borderRadius: '4px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', color: '#333' }}>{t}</div>
          ))}
        </div>

        {/* Section 3 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Les transmetteurs de pression</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>La pression constitue un indicateur critique dans la majorité des procédés industriels. Une pression anormale peut provoquer :</p>
        <ul style={{ margin: '0 0 24px', padding: '0 0 0 20px' }}>
          {["des arrêts de production ;","des pertes de matière ;","des défaillances d'équipements ;","des risques pour la sécurité."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Les transmetteurs de pression permettent une surveillance continue des réseaux de tuyauterie, réservoirs et installations de traitement. Ils offrent des données précises indispensables au contrôle automatique des procédés.
        </p>

        {/* Section 4 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Les capteurs de niveau</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>Les réservoirs de stockage nécessitent un suivi permanent. Les capteurs de niveau permettent notamment :</p>
        <ul style={{ margin: '0 0 20px', padding: '0 0 0 20px' }}>
          {["le suivi des cuves ;","le contrôle des silos ;","la gestion des réservoirs pétroliers ;","l'automatisation des transferts de produits."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>Technologies utilisées :</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', marginBottom: '40px' }}>
          {["Ultrasons","Radar","Pression hydrostatique","Flotteurs industriels"].map((t,k)=>(
            <div key={k} style={{ background: '#F8F8F6', border: '1px solid #1A7A3C22', borderTop: '3px solid #1A7A3C', padding: '14px', borderRadius: '4px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', color: '#333' }}>{t}</div>
          ))}
        </div>

        {/* Section 5 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Les capteurs de température</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>Dans les procédés chimiques, la température influence directement la qualité du produit final. Une variation même faible peut modifier :</p>
        <ul style={{ margin: '0 0 24px', padding: '0 0 0 20px' }}>
          {["les réactions chimiques ;","les caractéristiques du produit ;","les performances des équipements."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Les sondes de température industrielles assurent une surveillance permanente afin de maintenir les conditions optimales de production.
        </p>

        {/* Section 6 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>L&apos;importance de l&apos;intégration dans les systèmes de supervision</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>Les capteurs modernes peuvent désormais être intégrés à :</p>
        <ul style={{ margin: '0 0 24px', padding: '0 0 0 20px' }}>
          {["des systèmes SCADA ;","des automates programmables (PLC) ;","des plateformes de télégestion ;","des solutions de maintenance prédictive."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Cette connectivité permet aux responsables d&apos;exploitation de visualiser les données en temps réel et d&apos;agir rapidement en cas d&apos;incident.
        </p>

        {/* Section 7 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Les bénéfices pour les entreprises industrielles</h2>
        <ul style={{ margin: '0 0 24px', padding: '0 0 0 20px' }}>
          {["d'améliorer la productivité ;","de réduire les arrêts non planifiés ;","d'augmenter la sécurité ;","de diminuer les coûts de maintenance ;","d'optimiser la consommation énergétique ;","de renforcer la qualité des produits."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Dans les secteurs pétroliers et chimiques, ces gains représentent souvent plusieurs millions de francs CFA économisés chaque année.
        </p>

        {/* Conclusion */}
        <div style={{ background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)', borderRadius: '8px', padding: '32px', marginBottom: '48px' }}>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.06em', color: '#F97316', marginBottom: '12px' }}>CONCLUSION</div>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, margin: '0 0 16px' }}>
            L&apos;instrumentation industrielle est aujourd&apos;hui l&apos;un des piliers de la performance opérationnelle. Les débitmètres, transmetteurs de pression, capteurs de niveau et sondes de température fournissent les données indispensables pour sécuriser les installations et optimiser la production.
          </p>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, margin: '0 0 20px' }}>
            Investir dans des équipements de mesure fiables et adaptés constitue un choix stratégique pour toute entreprise souhaitant améliorer son efficacité, sa sécurité et sa compétitivité sur le long terme.
          </p>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '18px', letterSpacing: '0.06em', color: '#F97316', marginBottom: '10px' }}>DABAKH GLOBAL SERVICES — PARTENAIRE FUJI ELECTRIC & NIVUS AU SÉNÉGAL</div>
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
