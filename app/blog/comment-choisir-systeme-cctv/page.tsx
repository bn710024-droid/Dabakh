'use client'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

export default function ArticleCCTV() {
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
            <Tag size={10} /> Télésurveillance
          </div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(32px,6vw,68px)', letterSpacing: '0.03em', lineHeight: 0.95, color: '#FFFFFF', marginBottom: '20px' }}>
            COMMENT CHOISIR LE BON SYSTÈME CCTV POUR VOTRE SITE INDUSTRIEL ?
          </h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
              <Calendar size={12} /> 15 Mai 2026
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
              <Clock size={12} /> 6 min de lecture
            </span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
              Par Dabakh Global Services
            </span>
          </div>
        </div>
      </section>

      {/* ══ IMAGE PRINCIPALE ══ */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ position: 'relative', height: '420px', borderRadius: '0 0 8px 8px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
          <img src="/images/real-sococim-cctv.jpg" alt="Système CCTV industriel" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '16px', left: '20px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
            Supervision CCTV — Site Industriel ICS, Sénégal
          </div>
        </div>
      </div>

      {/* ══ CONTENU ══ */}
      <article style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 20px 80px' }}>

        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '18px', color: '#333', lineHeight: 1.85, letterSpacing: '0.02em', fontWeight: 500, borderLeft: '4px solid #E8600A', paddingLeft: '20px', marginBottom: '40px', background: '#FFF8F5', padding: '20px 20px 20px 24px', borderRadius: '0 6px 6px 0' }}>
          Dans les environnements industriels modernes, la sécurité ne peut plus être considérée comme une simple option. Les sites de production, entrepôts, usines, stations techniques et infrastructures sensibles nécessitent aujourd&apos;hui des systèmes de vidéosurveillance performants capables d&apos;assurer un contrôle permanent des opérations et une protection efficace des équipements, du personnel et des accès stratégiques.
        </div>

        {[
          {
            heading: null,
            body: "Le choix d'un système CCTV industriel dépend de plusieurs facteurs techniques essentiels. Il ne s'agit pas uniquement d'installer des caméras, mais de concevoir une architecture de surveillance cohérente, fiable et adaptée aux contraintes du terrain. Chaque environnement possède ses propres risques : intrusion, vol, sabotage, incidents techniques, circulation non autorisée ou encore absence de visibilité sur certaines zones critiques.",
          },
          {
            heading: "Identifier les zones à surveiller",
            body: "La première étape consiste à identifier les zones à surveiller. Les entrées principales, les zones de stockage, les espaces de chargement, les lignes de production, les salles techniques et les parkings nécessitent souvent des niveaux de surveillance différents. Certaines zones demandent une couverture large tandis que d'autres exigent un niveau de précision élevé pour reconnaître les visages, plaques d'immatriculation ou mouvements suspects.",
          },
          {
            heading: "Caméras fixes ou PTZ : faire le bon choix",
            body: "Les caméras fixes restent les plus utilisées pour les zones statiques et les points de contrôle permanents. Elles offrent une excellente stabilité d'image et une surveillance continue avec un coût optimisé. Pour les sites plus vastes, les caméras PTZ (Pan-Tilt-Zoom) permettent une rotation motorisée, un zoom puissant et une supervision dynamique de plusieurs zones à distance. Ces solutions sont particulièrement adaptées aux installations industrielles, aux entrepôts logistiques et aux infrastructures sensibles.",
          },
          {
            heading: "La vision nocturne, un élément fondamental",
            body: "La vision nocturne constitue également un élément fondamental dans un système de vidéosurveillance professionnel. Un grand nombre d'incidents surviennent en dehors des horaires d'activité. Les technologies infrarouges et les capteurs basse luminosité permettent aujourd'hui d'obtenir des images exploitables même dans des environnements très sombres ou mal éclairés.",
          },
          {
            heading: "L'analyse vidéo intelligente",
            body: "Les nouvelles générations de systèmes CCTV intègrent également des fonctionnalités intelligentes basées sur l'analyse vidéo. Détection de mouvement, franchissement de ligne virtuelle, intrusion périmétrique, comptage de personnes ou reconnaissance de comportements suspects permettent d'améliorer considérablement la réactivité des équipes de sécurité. Ces fonctions réduisent les erreurs humaines et facilitent le suivi des événements critiques.",
          },
          {
            heading: "Le stockage vidéo : un point stratégique",
            body: "La qualité du stockage vidéo est un autre point stratégique. Les entreprises industrielles doivent disposer d'une capacité d'enregistrement suffisante pour conserver les archives plusieurs jours ou plusieurs semaines selon les exigences internes ou réglementaires. Les systèmes NVR modernes permettent aujourd'hui une gestion centralisée, sécurisée et accessible à distance.",
          },
          {
            heading: "Choisir les bons équipements",
            body: "Le choix de la marque et des équipements joue également un rôle majeur dans la fiabilité globale du système. Des fabricants comme Hikvision ou Dahua proposent des solutions reconnues dans le secteur industriel pour leur stabilité, leurs performances et leur compatibilité avec les infrastructures professionnelles modernes.",
          },
          {
            heading: "L'importance de l'intégration et de la maintenance",
            body: "Enfin, un système CCTV efficace ne dépend pas uniquement du matériel installé. La qualité de l'intégration, du paramétrage réseau, du positionnement des caméras et de la maintenance technique influence directement les performances du dispositif sur le long terme. Une mauvaise installation peut créer des angles morts, réduire la qualité d'image ou provoquer des interruptions de surveillance.",
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: '32px' }}>
            {section.heading && (
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(20px,2.5vw,28px)', letterSpacing: '0.05em', color: '#111111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #F0F0F0' }}>
                {section.heading}
              </h2>
            )}
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.85, letterSpacing: '0.02em', margin: 0 }}>
              {section.body}
            </p>
          </div>
        ))}

        {/* Encadré conclusion */}
        <div style={{ background: 'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)', borderRadius: '8px', padding: '32px', marginTop: '48px', marginBottom: '48px' }}>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '22px', letterSpacing: '0.06em', color: '#F97316', marginBottom: '12px' }}>
            DABAKH GLOBAL SERVICES — VOTRE PARTENAIRE CCTV AU SÉNÉGAL
          </div>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, margin: '0 0 20px' }}>
            Chez Dabakh Global Services SARL, nous accompagnons les entreprises industrielles dans l&apos;étude, l&apos;installation et la maintenance de solutions de vidéosurveillance professionnelles adaptées aux réalités du terrain au Sénégal et en Afrique de l&apos;Ouest. Notre approche repose sur la fiabilité, la performance technique et l&apos;optimisation des systèmes de sécurité pour les environnements industriels exigeants.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E8600A', color: 'white', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none' }}>
            Demander un Devis Gratuit <ArrowRight size={15} />
          </Link>
        </div>

        {/* Retour au blog */}
        <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: '32px' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E8600A', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Voir tous les articles
          </Link>
        </div>
      </article>
    </div>
  )
}
