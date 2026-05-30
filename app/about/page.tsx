'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PartnersBand from '@/components/PartnersBand'
import ClientsBand from '@/components/ClientsBand'

function FadeIn({ children, delay=0, direction='up' }: { children:React.ReactNode; delay?:number; direction?:'up'|'left'|'right'|'none' }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e])=>{ if(e.isIntersecting){setVisible(true);observer.disconnect()} },{threshold:0.08})
    if(ref.current) observer.observe(ref.current)
    return ()=>observer.disconnect()
  },[])
  const t:Record<string,string>={up:'translateY(36px)',left:'translateX(-36px)',right:'translateX(36px)',none:'none'}
  return <div ref={ref} style={{opacity:visible?1:0,transform:visible?'none':t[direction],transition:`opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`}}>{children}</div>
}

const values=[
  {title:'Innovation',desc:'Nous intégrons les technologies les plus avancées pour des solutions industrielles performantes et durables.'},
  {title:'Fiabilité',  desc:'Nos équipements et nos interventions répondent aux normes internationales les plus strictes.'},
  {title:'Excellence', desc:'Chaque projet est traité avec le plus haut niveau d\'expertise et de professionnalisme.'},
  {title:'Proximité',  desc:'Une équipe locale réactive, disponible 24h/24 pour accompagner nos clients au quotidien.'},
]

const expertise=[
  'Instrumentation industrielle & métrologie',
  'Systèmes de télésurveillance CCTV',
  'Sécurité incendie & détection DETNOV',
  'Système de détection d\'incendie et d\'extinction',
  'PID & vannes de régulation',
  'Contrôle d\'accès biométrique',
  'Télégestion à distance (Lacroix/IGEL)',
  'Réseau & câblage structuré',
  'Maintenance industrielle préventive',
  'Systèmes industriels intelligents',
]

export default function AboutPage() {
  return (
    <div style={{background:'#FFFFFF',paddingTop:'80px'}}>

      {/* Hero */}
      <section style={{position:'relative',padding:'80px 24px 96px',overflow:'hidden',background:'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)'}}>
        <div className="bg-grid-green" style={{position:'absolute',inset:0}}/>
        <div style={{maxWidth:'1280px',margin:'0 auto',position:'relative',zIndex:1}}>
          <div style={{fontFamily:'Rajdhani, sans-serif',fontWeight:700,fontSize:'11px',letterSpacing:'0.3em',color:'rgba(255,255,255,0.6)',textTransform:'uppercase',marginBottom:'14px'}}>— À Propos</div>
          <h1 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(44px,8vw,92px)',letterSpacing:'0.03em',lineHeight:0.95,marginBottom:'20px',color:'#FFFFFF'}}>
            DABAKH<br/><span style={{color:'#F97316'}}>GLOBAL SERVICES</span>
          </h1>
          <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'17px',color:'rgba(255,255,255,0.75)',maxWidth:'540px',lineHeight:1.7}}>
            Une entreprise sénégalaise d&apos;ingénierie industrielle, au service des industries et des institutions d&apos;Afrique de l&apos;Ouest depuis plus de 11 ans.
          </p>
        </div>
      </section>

      {/* DG + Story */}
      <section style={{padding:'96px 0',borderBottom:'1px solid #f0f0f0'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'60px',alignItems:'center'}}>
            <FadeIn direction="left">
              <div>
                <div className="accent-line-orange"/>
                <div style={{fontFamily:'Rajdhani, sans-serif',fontWeight:700,fontSize:'11px',letterSpacing:'0.3em',color:'#E8600A',textTransform:'uppercase',marginBottom:'14px'}}>— Notre Histoire</div>
                <h2 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(30px,4vw,50px)',color:'#111111',letterSpacing:'0.04em',lineHeight:0.95,marginBottom:'24px'}}>
                  L&apos;EXCELLENCE<br/><span style={{color:'#E8600A'}}>INDUSTRIELLE</span><br/>AU SÉNÉGAL
                </h2>
                <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'15px',color:'#555',lineHeight:1.8,marginBottom:'18px'}}>
                  Dabakh Global Services SARL est une société sénégalaise spécialisée dans l&apos;ingénierie industrielle, la télésurveillance, la sécurité incendie et l&apos;instrumentation. Fondée avec la vision d&apos;apporter des solutions technologiques de niveau national et international.
                </p>
                <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'15px',color:'#555',lineHeight:1.8,marginBottom:'28px'}}>
                  Partenaire agréé de Hikvision, Dahua, DETNOV, Fuji Electric, NIVUS et Lacroix — nous offrons des solutions complètes, de l&apos;étude jusqu&apos;à la maintenance.
                </p>
                <Link href="/contact" className="btn-orange" style={{fontSize:'13px'}}>Nous Contacter <ArrowRight size={16}/></Link>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div style={{borderRadius:'8px',overflow:'hidden',boxShadow:'0 20px 60px rgba(0,0,0,0.11)',border:'1px solid #f0f0f0'}}>
                <div style={{position:'relative',height:'400px',overflow:'hidden'}}>
                  <Image src="/images/dg-papa.png" alt="Papa Ousmane Diop" fill style={{objectFit:'cover',objectPosition:'center 15%'}}/>
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 55%,rgba(0,0,0,0.75) 100%)'}}/>
                  <div style={{position:'absolute',bottom:'20px',left:'20px'}}>
                    <div style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'24px',letterSpacing:'0.06em',color:'#FFFFFF'}}>PAPA OUSMANE DIOP</div>
                    <div style={{fontFamily:'Rajdhani, sans-serif',fontSize:'11px',letterSpacing:'0.15em',color:'#F97316',textTransform:'uppercase',fontWeight:700}}>Directeur Général — Dabakh Global Services</div>
                  </div>
                  <div style={{position:'absolute',top:'14px',right:'14px',background:'rgba(26,122,60,0.9)',padding:'5px 12px',borderRadius:'4px'}}>
                    <div style={{fontFamily:'JetBrains Mono, monospace',fontSize:'10px',color:'white',letterSpacing:'0.1em'}}>NIVUS — Allemagne</div>
                  </div>
                </div>
                <div style={{padding:'20px',background:'white'}}>
                  <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'14px',color:'#666',lineHeight:1.75}}>
                    Ingénieur de formation avec une expertise reconnue dans les systèmes industriels et la sécurité électronique, Papa Ousmane Diop dirige Dabakh Global Services avec une vision claire : offrir à l&apos;Afrique de l&apos;Ouest des solutions technologiques de classe mondiale.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Partenariats photos */}
      <section style={{padding:'80px 24px',background:'#F8F8F6'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto'}}>
          <FadeIn>
            <div style={{textAlign:'center',marginBottom:'40px'}}>
              <div className="accent-line-green" style={{margin:'0 auto 14px'}}/>
              <h2 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(26px,4vw,46px)',color:'#111111',letterSpacing:'0.04em'}}>
                PARTENARIATS <span style={{color:'#1A7A3C'}}>INTERNATIONAUX</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'20px'}}>
            <FadeIn direction="left" delay={0.1}>
              <div style={{position:'relative',height:'280px',borderRadius:'8px',overflow:'hidden',boxShadow:'0 8px 32px rgba(0,0,0,0.1)'}}>
                <Image src="/images/real-nivus-dg.png" alt="Partenariat NIVUS" fill style={{objectFit:'cover'}}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.75) 100%)'}}/>
                <div style={{position:'absolute',bottom:'16px',left:'16px'}}>
                  <div style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'18px',color:'white',letterSpacing:'0.06em'}}>Visite Officielle NIVUS</div>
                  <div style={{fontFamily:'Rajdhani, sans-serif',fontSize:'12px',color:'rgba(255,255,255,0.7)'}}>Allemagne — Partenaire Débitmétrie</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div style={{position:'relative',height:'280px',borderRadius:'8px',overflow:'hidden',boxShadow:'0 8px 32px rgba(0,0,0,0.1)'}}>
                <Image src="/images/real-equipe-kms3.jpg" alt="Équipe KMS3" fill style={{objectFit:'cover'}}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.75) 100%)'}}/>
                <div style={{position:'absolute',bottom:'16px',left:'16px'}}>
                  <div style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'18px',color:'white',letterSpacing:'0.06em'}}>Équipe — Station KMS3</div>
                  <div style={{fontFamily:'Rajdhani, sans-serif',fontSize:'12px',color:'rgba(255,255,255,0.7)'}}>Projet Eau Traitée — Sénégal</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{padding:'80px 24px',background:'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto'}}>
          <FadeIn>
            <div style={{textAlign:'center',marginBottom:'48px'}}>
              <div className="accent-line-white" style={{margin:'0 auto 14px'}}/>
              <h2 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(26px,4vw,48px)',color:'#FFFFFF',letterSpacing:'0.04em'}}>
                CE QUI NOUS <span style={{color:'#F97316'}}>DÉFINIT</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'18px',alignItems:'stretch'}}>
            {values.map((v,i)=>(
              <FadeIn key={v.title} delay={i*0.1}>
                <div style={{padding:'26px',borderRadius:'6px',background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.18)',borderTop:'3px solid #F97316',height:'100%',boxSizing:'border-box'}}>
                  <div style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'24px',letterSpacing:'0.06em',color:'#F97316',marginBottom:'10px'}}>{v.title}</div>
                  <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:1.75,margin:0}}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section style={{padding:'80px 24px',background:'#FFFFFF'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'60px',alignItems:'center'}}>
            <FadeIn direction="left">
              <div style={{position:'relative',height:'380px',borderRadius:'8px',overflow:'hidden',boxShadow:'0 16px 48px rgba(0,0,0,0.11)'}}>
                <Image src="/images/real-equipe-orange.png" alt="Équipe Dabakh" fill style={{objectFit:'cover'}}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(232,96,10,0.12) 0%,rgba(10,10,10,0.4) 100%)'}}/>
                <div style={{position:'absolute',bottom:'20px',left:'20px'}}>
                  <div style={{fontFamily:'JetBrains Mono, monospace',fontSize:'10px',color:'rgba(255,255,255,0.6)',textTransform:'uppercase',marginBottom:'2px'}}>Expertise confirmée</div>
                  <div style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'40px',color:'#F97316',letterSpacing:'0.05em'}}>15+ ANS</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <div className="accent-line-orange"/>
                <h2 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(26px,4vw,46px)',color:'#111111',letterSpacing:'0.04em',lineHeight:0.95,marginBottom:'28px'}}>
                  NOTRE<br/><span style={{color:'#E8600A'}}>SAVOIR-FAIRE</span>
                </h2>
                <div style={{display:'flex',flexDirection:'column',gap:'4px'}}>
                  {expertise.map(item=>(
                    <div key={item} style={{display:'flex',alignItems:'center',gap:'12px',padding:'9px 0',borderBottom:'1px solid #f0f0f0'}}>
                      <CheckCircle size={15} color="#22A050" style={{flexShrink:0}}/>
                      <span style={{fontFamily:'Rajdhani, sans-serif',fontSize:'15px',letterSpacing:'0.03em',color:'#444'}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnersBand />
      <ClientsBand />
    </div>
  )
}
