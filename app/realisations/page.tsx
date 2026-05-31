'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ClientsBand from '@/components/ClientsBand'

function FadeIn({ children, delay=0, direction='up' }: { children:React.ReactNode; delay?:number; direction?:'up'|'left'|'right' }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e])=>{ if(e.isIntersecting){setVisible(true);observer.disconnect()} },{threshold:0.06})
    if(ref.current) observer.observe(ref.current)
    return ()=>observer.disconnect()
  },[])
  const t:Record<string,string>={up:'translateY(40px)',left:'translateX(-40px)',right:'translateX(40px)'}
  return <div ref={ref} style={{opacity:visible?1:0,transform:visible?'none':t[direction],transition:`opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`}}>{children}</div>
}

const realisations: {title:string;category:string;location:string;img:string;beforeImg?:string;pos?:string;desc:string;tags:string[];color:string}[] = [
  {
    title:'Équipe Dabakh — Station KMS3',
    category:'Instrumentation',
    location:'Station KMS3, Sénégal',
    img:'/images/real-equipe-kms3.jpg',
    desc:'L\'équipe Dabakh Global Services en intervention sur la station de pompage KMS3. Installation de la télésurveillance et du contrôle d\'accès.',
    tags:['Sen\'Eau','KMS3','Instrumentation','Eau traitée'],
    color:'#1A7A3C',
  },
  {
    title:'Pose & Configuration Capteur de Vibration — ICS',
    category:'Instrumentation',
    location:'ICS — Industries Chimiques du Sénégal',
    img:'/images/real-ics-vibration.jpg.jpeg',
    pos:'center center',
    desc:'Installation et configuration de capteurs de vibration sur équipements industriels ICS. Intervention terrain en environnement minier pour la surveillance prédictive des machines.',
    tags:['ICS','Vibration','Capteurs','Instrumentation','Terrain'],
    color:'#1A7A3C',
  },
  {
    title:'Supervision CCTV — ICS (Industries Chimiques du Sénégal)',
    category:'Télésurveillance',
    location:'ICS — Industries Chimiques du Sénégal',
    img:'/images/real-sococim-cctv.jpg',
    pos:'center center',
    desc:'Déploiement d\'un système de vidéosurveillance complet sur les sites industriels ICS (Industries Chimiques du Sénégal). Plus de 300 caméras couvrant la totalité des sites : Mines Darou, MBAO PORT, Cité Mbaye Mbaye.',
    tags:['ICS','Hikvision','+300 caméras','Industriel','Safety IA Camera'],
    color:'#E8600A',
  },
  {
    title:'Équipe Terrain — Mission Industrielle',
    category:'Télésurveillance',
    location:'Site industriel, Sénégal',
    img:'/images/real-equipe-fresque.jpg',
    pos:'center 20%',
    desc:'Nos techniciens en mission terrain pour l\'installation de systèmes de télésurveillance sur site industriel. Câblage, pose caméras et paramétrage complet du système.',
    tags:['CCTV','Installation','Terrain','Câblage'],
    color:'#E8600A',
  },
  {
    title:'Technicien — Site Minier',
    category:'Instrumentation',
    location:'Site minier, Sénégal',
    img:'/images/real-technicien-mine.jpg',
    desc:'Intervention de notre ingénieur sur un site d\'extraction minière pour la mise en place d\'instruments de mesure et de contrôle des procédés. Environnement industriel difficile maîtrisé.',
    tags:['Minier','Instruments','Mesure','Terrain'],
    color:'#1A7A3C',
  },
  {
    title:'Installation Canalisation — Débitmétrie',
    category:'Métrologie',
    location:'Station d\'eau traitée Sen\'Eau — KMS1-2',
    img:'/images/real-canalisation-bleue.jpg',
    desc:'Installation de capteurs de débit sur grande canalisation DN600. Intervention de nos techniciens pour la pose et le raccordement d\'instruments de mesure ultrasonique sur réseau hydraulique principal.',
    tags:['Débit','DN600','Ultrasonique','Hydraulique'],
    color:'#1A7A3C',
  },
  {
    title:'Centre de Supervision CCTV Multi-Sites',
    category:'Télésurveillance',
    location:'Sen\'Eau — KMS1-2',
    img:'/images/real-supervision.png',
    pos:'center center',
    desc:'Déploiement d\'un centre de supervision avec écran multi-caméras Hikvision iVMS-4200. Surveillance en temps réel de plusieurs sites industriels et commerciaux.',
    tags:['Hikvision','iVMS-4200','Multi-sites','IP'],
    color:'#E8600A',
  },
  {
    title:'Station KMS3 — Eau Traitée',
    category:'Instrumentation',
    location:'Sénégal',
    img:'/images/real-kms3.png',
    pos:'center center',
    desc:'Instrumentation complète d\'une station de pompage eau traitée. Capteurs de débit, pression et niveau avec télégestion à distance pour suivi permanent.',
    tags:['Fuji Electric','NIVUS','Débit','Eau'],
    color:'#1A7A3C',
  },
  {
    title:'Sofrel Box Lacroix — Télégestion',
    category:'Télégestion',
    location:'CSS — Compagnie Sucrière Sénégalaise',
    img:'/images/real-sofrel.png',
    pos:'center center',
    desc:'Installation d\'une unité de télégestion Sofrel Box Lacroix pour supervision à distance des installations d\'eau et d\'assainissement. Configuration complète et mise en réseau.',
    tags:['CSS','Lacroix','Sofrel','Télégestion','SCADA'],
    color:'#E8600A',
  },
  {
    title:'Centrale Alarme DETNOV',
    category:'Sécurité Incendie',
    location:'CDE Dépollution — Baie de Hann',
    img:'/images/real-detnov-centrale.png',
    pos:'center center',
    desc:'Installation et configuration d\'une centrale d\'alarme incendie DETNOV pour un site industriel côtier. Système opérationnel 24h/24 avec surveillance de plus de 4 boucles.',
    tags:['DETNOV','Alarme','Incendie','Plus de 4 boucles'],
    color:'#E8600A',
  },
  {
    title:'Sen\'Eau — Supervision & Télégestion',
    category:'Télégestion',
    location:'Sénégal',
    img:'/images/real-seneau.png',
    desc:'Intervention de mise en service pour Sen\'Eau, opérateur national d\'eau potable au Sénégal. Configuration de la supervision SCADA et tests de validation terrain.',
    tags:['Sen\'Eau','Eau','Supervision','SCADA'],
    color:'#1A7A3C',
  },
  {
    title:'Armoire de Contrôle — Automatisme',
    category:'Instrumentation',
    location:'Site industriel',
    img:'/images/real-armoire.png',
    pos:'center center',
    desc:'Câblage et mise en service d\'une armoire de contrôle-commande avec automate programmable Lacroix pour automatisation de procédés industriels complexes.',
    tags:['Lacroix','Automate','Câblage','PLC'],
    color:'#1A7A3C',
  },
  {
    title:'Installation Détecteurs — Site Commercial',
    category:'Sécurité Incendie',
    location:'Dakar, Sénégal',
    img:'/images/real-detecteur-install.png',
    desc:'Pose et raccordement de détecteurs de fumée au plafond par nos techniciens certifiés. Test de fonctionnement et remise de rapport d\'intervention.',
    tags:['DETNOV','Détecteur','Plafond','Certification'],
    color:'#E8600A',
  },
]

const stats = [
  {val:'+200',label:'Projets réalisés'},
  {val:'+11',label:"Années d'expérience"},
  {val:'+50',label:'Clients actifs'},
  {val:'100%',label:'Satisfaction client'},
]

export default function RealisationsPage() {
  return (
    <div style={{background:'#FFFFFF',paddingTop:'80px'}}>

      {/* Hero */}
      <section style={{position:'relative',padding:'80px 24px 100px',overflow:'hidden',background:'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)'}}>
        <div className="bg-grid-green" style={{position:'absolute',inset:0}}/>
        <div style={{maxWidth:'1280px',margin:'0 auto',position:'relative',zIndex:1}}>
          <div style={{fontFamily:'Rajdhani, sans-serif',fontWeight:700,fontSize:'11px',letterSpacing:'0.3em',color:'rgba(255,255,255,0.6)',textTransform:'uppercase',marginBottom:'16px'}}>— Nos Réalisations</div>
          <h1 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(48px,8vw,96px)',letterSpacing:'0.03em',lineHeight:0.95,marginBottom:'24px',color:'#FFFFFF'}}>
            PROJETS<br/><span style={{color:'#F97316'}}>RÉALISÉS</span>
          </h1>
          <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'17px',color:'rgba(255,255,255,0.75)',maxWidth:'520px',lineHeight:1.7}}>
            Découvrez nos interventions réussies à travers le Sénégal et l&apos;Afrique de l&apos;Ouest. Plus de 200 projets industriels livrés avec excellence.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{padding:'48px 24px',background:'#E8600A'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:'24px',textAlign:'center'}}>
            {stats.map(s=>(
              <div key={s.label}>
                <div style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'48px',color:'#FFFFFF',lineHeight:1}}>{s.val}</div>
                <div style={{fontFamily:'Rajdhani, sans-serif',fontSize:'12px',letterSpacing:'0.12em',color:'rgba(255,255,255,0.75)',textTransform:'uppercase',marginTop:'6px'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realisations — image + texte alternés */}
      <section style={{padding:'80px 0'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'28px'}}>
            {realisations.map((real, i) => (
              <FadeIn key={real.title} delay={0.04}>
                <div style={{
                  display:'grid',
                  gridTemplateColumns: real.beforeImg ? '1fr 1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap:'0',
                  border:'1px solid #f0f0f0',
                  borderRadius:'8px',
                  overflow:'hidden',
                  background:'white',
                  boxShadow:'0 2px 20px rgba(0,0,0,0.05)',
                  transition:'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
                }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.boxShadow='0 16px 56px rgba(0,0,0,0.11)';el.style.transform='translateY(-4px)'}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.boxShadow='0 2px 20px rgba(0,0,0,0.05)';el.style.transform='none'}}
                >
                  {/* Image — avant/après si beforeImg, sinon simple */}
                  {real.beforeImg ? (
                    <div style={{order:i%2===0?0:1,display:'flex',flexDirection:'column'}}>
                      {/* AVANT */}
                      <div style={{position:'relative',height:'300px',overflow:'hidden'}}>
                        <Image src={real.beforeImg} alt="Avant" fill style={{objectFit:'cover',objectPosition:'center center'}}/>
                        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.25)'}}/>
                        <div style={{position:'absolute',top:'14px',left:'16px',background:'#DC2626',color:'white',fontFamily:'Bebas Neue',fontSize:'15px',letterSpacing:'0.15em',padding:'5px 14px',borderRadius:'2px',zIndex:3}}>AVANT</div>
                      </div>
                      {/* APRÈS */}
                      <div style={{position:'relative',height:'300px',overflow:'hidden'}}>
                        <Image src={real.img} alt="Après" fill style={{objectFit:'cover',objectPosition:real.pos||'center center'}}/>
                        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.08)'}}/>
                        <div style={{position:'absolute',top:'14px',left:'16px',background:'#1A7A3C',color:'white',fontFamily:'Bebas Neue',fontSize:'15px',letterSpacing:'0.15em',padding:'5px 14px',borderRadius:'2px',zIndex:3}}>APRÈS</div>
                        <div style={{position:'absolute',bottom:'16px',left:'16px',zIndex:3}}>
                          <span style={{fontFamily:'Rajdhani, sans-serif',fontWeight:700,fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',background:real.color,color:'white',padding:'5px 12px',borderRadius:'2px'}}>{real.category}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="img-shimmer" style={{position:'relative',minHeight:'320px',order:i%2===0?0:1,overflow:'hidden'}}>
                      <Image src={real.img} alt={real.title} fill style={{objectFit:'cover',objectPosition:(real as {pos?:string}).pos||'center center',transition:'transform 0.6s ease'}}/>
                      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(0,0,0,0.04) 0%,rgba(0,0,0,0.3) 100%)'}}/>
                      <div style={{position:'absolute',top:'16px',left:'16px',zIndex:2}}>
                        <span style={{fontFamily:'Rajdhani, sans-serif',fontWeight:700,fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',background:real.color,color:'white',padding:'5px 12px',borderRadius:'2px'}}>{real.category}</span>
                      </div>
                      <div style={{position:'absolute',top:0,left:i%2===0?'auto':0,right:i%2===0?0:'auto',width:'4px',height:'100%',background:`linear-gradient(180deg,${real.color},transparent)`,zIndex:2}}/>
                    </div>
                  )}

                  {/* Texte */}
                  <div style={{padding:'40px',order:i%2===0?1:0,display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <div style={{fontFamily:'JetBrains Mono, monospace',fontSize:'10px',letterSpacing:'0.2em',color:'#aaa',textTransform:'uppercase',marginBottom:'8px'}}>{real.location}</div>
                    <h3 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(20px,2.5vw,30px)',letterSpacing:'0.05em',color:'#111',marginBottom:'16px',lineHeight:1.1}}>{real.title}</h3>
                    <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'14px',color:'#666',lineHeight:1.8,marginBottom:'24px'}}>{real.desc}</p>
                    <div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
                      {real.tags.map(tag=>(
                        <span key={tag} style={{
                          fontFamily:'Rajdhani, sans-serif',fontSize:'11px',fontWeight:700,
                          letterSpacing:'0.08em',textTransform:'uppercase',
                          color:real.color,
                          border:`1px solid ${real.color}`,
                          padding:'4px 10px',borderRadius:'2px',
                          background:`rgba(${real.color==='#E8600A'?'232,96,10':'26,122,60'},0.05)`,
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ILS NOUS FONT CONFIANCE — dans la page réalisations */}
      <ClientsBand />

      {/* CTA */}
      <section style={{padding:'100px 24px',textAlign:'center',background:'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)'}}>
        <FadeIn>
          <div style={{maxWidth:'600px',margin:'0 auto'}}>
            <div className="accent-line-white" style={{margin:'0 auto 20px'}}/>
            <h2 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(36px,6vw,68px)',color:'#FFFFFF',letterSpacing:'0.04em',lineHeight:1,marginBottom:'20px'}}>
              VOTRE PROJET<br/><span style={{color:'#F97316'}}>SERA LE PROCHAIN</span>
            </h2>
            <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'16px',color:'rgba(255,255,255,0.7)',lineHeight:1.7,marginBottom:'36px'}}>
              Rejoignez les entreprises qui nous font confiance pour leurs projets industriels au Sénégal.
            </p>
            <Link href="/contact" className="btn-orange" style={{fontSize:'13px'}}>
              Démarrer Mon Projet <ArrowRight size={16}/>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
