'use client'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

export default function ArticleMaintenance() {
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
            <Tag size={10} /> Maintenance
          </div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(26px,5vw,58px)', letterSpacing: '0.03em', lineHeight: 0.95, color: '#FFFFFF', marginBottom: '20px' }}>
            MAINTENANCE PRÉVENTIVE VS MAINTENANCE CURATIVE : QUEL PLAN POUR VOS ÉQUIPEMENTS DE SÉCURITÉ ?
          </h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}><Calendar size={12} /> 5 Avril 2026</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}><Clock size={12} /> 5 min de lecture</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>Par Dabakh Global Services</span>
          </div>
        </div>
      </section>

      {/* ══ IMAGE ══ */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ position: 'relative', height: '400px', borderRadius: '0 0 8px 8px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
          <img src="/images/real-armoire.png" alt="Maintenance équipements industriels" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '16px', left: '20px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
            Maintenance armoire de contrôle — Site industriel, Sénégal
          </div>
        </div>
      </div>

      {/* ══ CONTENU ══ */}
      <article style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 20px 80px' }}>

        {/* Intro */}
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '18px', color: '#333', lineHeight: 1.85, fontWeight: 500, borderLeft: '4px solid #1A7A3C', background: '#F5FFF8', padding: '20px 20px 20px 24px', borderRadius: '0 6px 6px 0', marginBottom: '32px' }}>
          Les systèmes de sécurité industrielle représentent un investissement stratégique pour toute entreprise. Caméras de surveillance, systèmes de contrôle d&apos;accès, centrales incendie, détecteurs de fumée ou équipements de télégestion doivent fonctionner en permanence pour garantir la protection des personnes et des installations.
        </div>

        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Pourtant, de nombreuses entreprises attendent qu&apos;une panne survienne avant d&apos;intervenir. Cette approche, appelée maintenance curative, peut entraîner des coûts importants et des interruptions de service parfois critiques. Alors, faut-il attendre la panne ou prévenir les défaillances avant qu&apos;elles n&apos;apparaissent ?
        </p>

        {/* Comparatif visuel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '48px' }}>
          <div style={{ background: '#FFF5F5', border: '2px solid #DC2626', borderRadius: '8px', padding: '24px' }}>
            <div style={{ fontFamily: 'Bebas Neue', fontSize: '20px', letterSpacing: '0.06em', color: '#DC2626', marginBottom: '8px' }}>⚠ MAINTENANCE CURATIVE</div>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', color: '#666', lineHeight: 1.7, margin: 0 }}>On intervient <strong>après</strong> la panne. Coûts élevés, arrêts imprévus, risques accrus.</p>
          </div>
          <div style={{ background: '#F5FFF8', border: '2px solid #1A7A3C', borderRadius: '8px', padding: '24px' }}>
            <div style={{ fontFamily: 'Bebas Neue', fontSize: '20px', letterSpacing: '0.06em', color: '#1A7A3C', marginBottom: '8px' }}>✓ MAINTENANCE PRÉVENTIVE</div>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', color: '#666', lineHeight: 1.7, margin: 0 }}>On anticipe <strong>avant</strong> la panne. Économies, équipements pérennes, continuité garantie.</p>
          </div>
        </div>

        {/* Section 1 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Comprendre la maintenance curative</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          La maintenance curative consiste à intervenir uniquement lorsqu&apos;un équipement présente un défaut ou cesse de fonctionner. Elle comporte plusieurs inconvénients :
        </p>
        <ul style={{ margin: '0 0 24px', padding: '0 0 0 20px' }}>
          {["arrêts imprévus des équipements ;","coûts d'intervention plus élevés ;","remplacement prématuré du matériel ;","risque accru pour la sécurité ;","perturbation des opérations."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Par exemple, une caméra de surveillance défectueuse peut laisser une zone sensible sans protection pendant plusieurs jours avant son remplacement.
        </p>

        {/* Section 2 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Qu&apos;est-ce que la maintenance préventive ?</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          La maintenance préventive repose sur des inspections régulières et programmées des équipements, avec l&apos;objectif d&apos;identifier les anomalies avant qu&apos;elles ne provoquent une panne. Elle comprend notamment :
        </p>
        <ul style={{ margin: '0 0 40px', padding: '0 0 0 20px' }}>
          {["les contrôles techniques périodiques ;","les mises à jour logicielles ;","le nettoyage des équipements ;","les tests de fonctionnement ;","le remplacement préventif des composants usés."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>

        {/* Section 3 — bénéfices */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>Pourquoi la maintenance préventive est plus rentable ?</h2>
        {[
          { title: 'Réduction des coûts de réparation', body: "Une intervention préventive coûte généralement beaucoup moins cher qu'une réparation d'urgence nécessitant des pièces, du dépannage rapide et parfois l'arrêt complet d'un système." },
          { title: "Augmentation de la durée de vie des équipements", body: "Les équipements entretenus régulièrement fonctionnent plus longtemps et conservent de meilleures performances." },
          { title: "Disponibilité maximale", body: "Les systèmes restent opérationnels et assurent une protection continue du site." },
          { title: "Meilleure planification budgétaire", body: "Les dépenses de maintenance deviennent prévisibles et plus faciles à gérer." },
        ].map((item, i) => (
          <div key={i} style={{ background: '#F8F8F6', borderLeft: '3px solid #1A7A3C', padding: '16px 20px', borderRadius: '0 6px 6px 0', marginBottom: '12px' }}>
            <div style={{ fontFamily: 'Bebas Neue', fontSize: '16px', letterSpacing: '0.08em', color: '#1A7A3C', marginBottom: '6px' }}>{item.title}</div>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
          </div>
        ))}

        {/* Section 4 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0', marginTop: '40px' }}>Les équipements qui nécessitent une maintenance régulière</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '40px' }}>
          {[
            { title: 'Vidéosurveillance', points: ["qualité d'image","alimentations électriques","enregistreurs","capacités de stockage","connexions réseau"] },
            { title: "Contrôle d'accès", points: ["lecteurs biométriques","badges RFID","contrôleurs","câblage","logiciels"] },
            { title: "Sécurité incendie", points: ["détecteurs","centrales incendie","sirènes","batteries","tests périodiques"] },
            { title: "Réseaux industriels", points: ["équipements réseau","supervision","connexions","protocoles","archivage"] },
          ].map((card, i) => (
            <div key={i} style={{ background: '#F8F8F6', borderTop: '3px solid #E8600A', borderRadius: '4px', padding: '18px' }}>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '16px', letterSpacing: '0.08em', color: '#E8600A', marginBottom: '10px' }}>{card.title}</div>
              <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                {card.points.map((p, j) => <li key={j} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.7 }}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Section 5 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>L&apos;arrivée de la maintenance prédictive</h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          Grâce aux capteurs connectés et à l&apos;analyse des données, la maintenance prédictive permet de détecter les signes annonciateurs d&apos;une panne avant même qu&apos;un dysfonctionnement n&apos;apparaisse :
        </p>
        <ul style={{ margin: '0 0 40px', padding: '0 0 0 20px' }}>
          {["d'anticiper les interventions ;","de réduire les arrêts non planifiés ;","d'optimiser les coûts de maintenance ;","d'améliorer la disponibilité des équipements."].map((i,k)=>(
            <li key={k} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{i}</li>
          ))}
        </ul>

        {/* Conclusion */}
        <div style={{ background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)', borderRadius: '8px', padding: '32px', marginBottom: '48px' }}>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.06em', color: '#F97316', marginBottom: '12px' }}>CONCLUSION</div>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, margin: '0 0 16px' }}>
            Un système de sécurité qui n&apos;est pas entretenu est un système qui perd progressivement son efficacité. La maintenance préventive permet d&apos;assurer la disponibilité des équipements, de prolonger leur durée de vie et de réduire les risques opérationnels.
          </p>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, margin: '0 0 20px' }}>
            Pour les entreprises industrielles, investir dans un programme de maintenance structuré est une garantie de performance, de sécurité et de continuité d&apos;activité sur le long terme.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E8600A', color: 'white', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none' }}>
            Demander un Contrat de Maintenance <ArrowRight size={15} />
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
