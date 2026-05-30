'use client'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

export default function ArticleIncendie() {
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
            <Tag size={10} /> Sécurité Incendie
          </div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(28px,5vw,60px)', letterSpacing: '0.03em', lineHeight: 0.95, color: '#FFFFFF', marginBottom: '20px' }}>
            LES NORMES DE SÉCURITÉ INCENDIE AU SÉNÉGAL : CE QUE LES ENTREPRISES DOIVENT SAVOIR
          </h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
              <Calendar size={12} /> 2 Mai 2026
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
              <Clock size={12} /> 8 min de lecture
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
          <img src="/images/real-detecteur-install.png" alt="Installation détecteur incendie" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '16px', left: '20px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
            Installation détecteur DETNOV — Site industriel, Sénégal
          </div>
        </div>
      </div>

      {/* ══ CONTENU ══ */}
      <article style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 20px 80px' }}>

        {/* Intro */}
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '18px', color: '#333', lineHeight: 1.85, letterSpacing: '0.02em', fontWeight: 500, borderLeft: '4px solid #1A7A3C', paddingLeft: '20px', marginBottom: '40px', background: '#F5FFF8', padding: '20px 20px 20px 24px', borderRadius: '0 6px 6px 0' }}>
          Dans les secteurs industriels, commerciaux et pétroliers, la sécurité incendie n&apos;est plus une option. Au Sénégal, les exigences deviennent de plus en plus strictes, notamment pour les usines, dépôts, bâtiments administratifs, hôtels, stations-service et sites sensibles. Pourtant, beaucoup d&apos;installations fonctionnent encore avec des systèmes incomplets, mal entretenus ou totalement absents.
        </div>

        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Un incendie industriel peut provoquer des pertes financières majeures, arrêter la production pendant plusieurs semaines et mettre en danger les employés ainsi que les équipements critiques. Dans certains cas, une simple détection tardive suffit pour transformer un incident mineur en catastrophe opérationnelle.
        </p>

        {/* Section 1 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>
          Pourquoi la conformité incendie est essentielle ?
        </h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          Les entreprises doivent aujourd&apos;hui garantir :
        </p>
        <ul style={{ margin: '0 0 24px 0', padding: '0 0 0 20px' }}>
          {[
            "la détection rapide des fumées ou températures anormales ;",
            "l'alerte automatique des occupants ;",
            "la sécurisation des zones sensibles ;",
            "la limitation de propagation du feu ;",
            "la protection des installations électriques et techniques."
          ].map((item, i) => (
            <li key={i} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{item}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Les compagnies d&apos;assurance accordent également une importance énorme à la qualité des systèmes de protection incendie. Une installation non conforme peut compliquer ou annuler certaines couvertures en cas de sinistre.
        </p>

        {/* Section 2 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>
          Les équipements indispensables
        </h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '20px' }}>
          Un système de sécurité incendie moderne comprend généralement :
        </p>
        {[
          { title: 'Détecteurs automatiques', body: "Les détecteurs de fumée et détecteurs thermiques permettent d'identifier rapidement un départ de feu avant qu'il ne se propage." },
          { title: 'Centrale incendie', body: "Elle reçoit les informations des détecteurs et déclenche automatiquement les alarmes sonores ou les procédures d'urgence." },
          { title: 'Sirènes et avertisseurs', body: "Ils assurent l'évacuation rapide du personnel et alertent les équipes de sécurité." },
          { title: 'Systèmes adressables', body: "Dans les grands sites industriels, les systèmes intelligents permettent d'identifier précisément la zone concernée afin d'accélérer l'intervention." },
        ].map((item, i) => (
          <div key={i} style={{ background: '#F8F8F6', borderLeft: '3px solid #1A7A3C', padding: '16px 20px', borderRadius: '0 6px 6px 0', marginBottom: '12px' }}>
            <div style={{ fontFamily: 'Bebas Neue', fontSize: '16px', letterSpacing: '0.08em', color: '#1A7A3C', marginBottom: '6px' }}>{item.title}</div>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
          </div>
        ))}

        {/* Section 3 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0', marginTop: '40px' }}>
          Les erreurs les plus fréquentes sur les sites industriels
        </h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          Chez de nombreuses entreprises, on retrouve souvent les mêmes problèmes :
        </p>
        <ul style={{ margin: '0 0 24px 0', padding: '0 0 0 20px' }}>
          {[
            "détecteurs installés mais non fonctionnels ;",
            "absence de maintenance préventive ;",
            "câblage mal protégé ;",
            "batteries de secours défectueuses ;",
            "équipements non adaptés à l'environnement industriel ;",
            "absence de tests périodiques."
          ].map((item, i) => (
            <li key={i} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{item}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Ces erreurs augmentent fortement le risque d&apos;incident majeur.
        </p>

        {/* Section 4 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>
          Maintenance et contrôle : le point négligé
        </h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          Installer un système ne suffit pas. La maintenance régulière reste obligatoire pour garantir le bon fonctionnement des équipements. Une maintenance professionnelle permet :
        </p>
        <ul style={{ margin: '0 0 24px 0', padding: '0 0 0 20px' }}>
          {[
            "de vérifier les détecteurs ;",
            "de contrôler les alimentations ;",
            "de tester les alarmes ;",
            "d'identifier les défauts invisibles ;",
            "de garantir la conformité du système dans le temps."
          ].map((item, i) => (
            <li key={i} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{item}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Un système mal entretenu devient rapidement inefficace, même s&apos;il est technologiquement avancé.
        </p>

        {/* Section 5 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>
          Les solutions modernes utilisées aujourd&apos;hui
        </h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          Les nouvelles générations de systèmes incendie permettent désormais :
        </p>
        <ul style={{ margin: '0 0 24px 0', padding: '0 0 0 20px' }}>
          {[
            "la supervision à distance ;",
            "les alertes intelligentes ;",
            "l'intégration avec la vidéosurveillance ;",
            "la gestion centralisée multi-sites ;",
            "l'analyse automatique des incidents."
          ].map((item, i) => (
            <li key={i} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{item}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Les marques industrielles reconnues comme <strong>DETNOV</strong> offrent aujourd&apos;hui des solutions adaptées aux environnements exigeants : industrie lourde, pétrole, énergie, logistique ou infrastructures critiques.
        </p>

        {/* Section 6 */}
        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,30px)', letterSpacing: '0.05em', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>
          Ce qu&apos;une entreprise doit vérifier avant d&apos;investir
        </h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '16px' }}>
          Avant de choisir un système incendie, il faut analyser :
        </p>
        <ul style={{ margin: '0 0 24px 0', padding: '0 0 0 20px' }}>
          {[
            "le niveau de risque du site ;",
            "la surface à protéger ;",
            "les zones critiques ;",
            "les contraintes électriques ;",
            "les exigences réglementaires ;",
            "les besoins futurs d'évolution."
          ].map((item, i) => (
            <li key={i} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '6px' }}>{item}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '40px' }}>
          Un mauvais dimensionnement coûte souvent beaucoup plus cher qu&apos;une installation bien pensée dès le départ.
        </p>

        {/* Conclusion */}
        <div style={{ background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)', borderRadius: '8px', padding: '32px', marginBottom: '48px' }}>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.06em', color: '#F97316', marginBottom: '12px' }}>
            CONCLUSION
          </div>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, margin: '0 0 20px' }}>
            La sécurité incendie protège bien plus qu&apos;un bâtiment. Elle protège l&apos;activité, les équipes, les équipements et la continuité de production.
          </p>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '18px', letterSpacing: '0.06em', color: '#F97316', marginBottom: '10px' }}>
            DABAKH GLOBAL SERVICES — PARTENAIRE DETNOV AU SÉNÉGAL
          </div>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, margin: '0 0 20px' }}>
            Nous accompagnons les entreprises industrielles dans l&apos;étude, l&apos;installation et la maintenance de systèmes de sécurité incendie certifiés, adaptés aux réalités du terrain au Sénégal.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E8600A', color: 'white', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none' }}>
            Demander un Audit Gratuit <ArrowRight size={15} />
          </Link>
        </div>

        {/* Retour */}
        <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: '32px' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A7A3C', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Voir tous les articles
          </Link>
        </div>
      </article>
    </div>
  )
}
