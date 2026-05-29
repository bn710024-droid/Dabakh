'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Zap, Eye, Gauge, Award, Users, Briefcase, Globe, CheckCircle, Phone } from 'lucide-react'
import PartnersBand from '@/components/PartnersBand'

function FadeIn({ children, delay=0, direction='up', style: extStyle }: { children:React.ReactNode; delay?:number; direction?:'up'|'left'|'right'|'none'; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e])=>{ if(e.isIntersecting){setVisible(true);observer.disconnect()} },{threshold:0.06})
    if(ref.current) observer.observe(ref.current)
    return ()=>observer.disconnect()
  },[])
  const t:Record<string,string>={up:'translateY(36px)',left:'translateX(-36px)',right:'translateX(36px)',none:'none'}
  return <div ref={ref} style={{opacity:visible?1:0,transform:visible?'none':t[direction],transition:`opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,...extStyle}}>{children}</div>
}

function Counter({ target, suffix='' }: { target:number; suffix?:string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const start = Date.now()
        const tick = () => {
          const p = Math.min((Date.now()-start)/2000,1)
          setCount(Math.floor((1-Math.pow(1-p,3))*target))
          if(p<1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, {threshold:0.1})
    if(ref.current) observer.observe(ref.current)
    return ()=>observer.disconnect()
  },[target])
  return <div ref={ref}>{count}{suffix}</div>
}

const services = [
  { icon:<Eye size={28}/>,    title:'Télésurveillance',   desc:'Systèmes CCTV Hikvision & Dahua. Surveillance intelligente 24h/24 avec analyse vidéo avancée.',          img:'/images/real-supervision.png',      color:'#E8600A' },
  { icon:<Shield size={28}/>, title:'Sécurité Incendie',  desc:'Détection et alarme incendie DETNOV. Protection totale de vos installations industrielles.',              img:'/images/real-detecteur-install.png', color:'#1A7A3C' },
  { icon:<Gauge size={28}/>,  title:'Instrumentation',    desc:'Capteurs, débitmètres, PID et vannes de régulation pour l\'industrie pétrolière et chimique.',            img:'/images/real-debitmetre.png',       color:'#E8600A' },
  { icon:<Zap size={28}/>,    title:'Contrôle d\'Accès',  desc:'Systèmes biométriques Hikvision pour sécuriser vos espaces sensibles.',                                   img:'/images/access-control.png',        color:'#1A7A3C' },
]

const stats = [
  { value:13,  suffix:'+', label:'Années d\'Expérience', icon:<Award size={26} color="white"/> },
  { value:200, suffix:'+', label:'Projets Réalisés',     icon:<Briefcase size={26} color="white"/> },
  { value:6,   suffix:'',  label:'Marques Partenaires',  icon:<Globe size={26} color="white"/> },
  { value:500, suffix:'+', label:'Clients Satisfaits',   icon:<Users size={26} color="white"/> },
]

const whyUs = [
  { icon:<Award size={30} color="#E8600A"/>,        title:'Expertise Certifiée',    desc:'Plus de 13 ans d\'expérience dans l\'ingénierie industrielle et la sécurité électronique au Sénégal.' },
  { icon:<Phone size={30} color="#E8600A"/>,         title:'Réactivité 24/7',        desc:'Notre équipe technique est disponible à toute heure pour l\'installation, la maintenance et les urgences.' },
  { icon:<Globe size={30} color="#E8600A"/>,         title:'Partenaires Mondiaux',   desc:'Distributeur agréé de Hikvision, Dahua, DETNOV, Fuji Electric, Lacroix et NIVUS.' },
  { icon:<Zap size={30} color="#E8600A"/>,           title:'Clé en Main',            desc:'De l\'étude technique à l\'installation et la maintenance, nous prenons en charge votre projet dans sa totalité.' },
  { icon:<Gauge size={30} color="#E8600A"/>,         title:'Solutions Sur Mesure',   desc:'Nos ingénieurs conçoivent des solutions adaptées à vos contraintes industrielles spécifiques.' },
  { icon:<CheckCircle size={30} color="#E8600A"/>,   title:'Qualité Garantie',       desc:'Tous nos équipements sont certifiés et testés. Qualité de nos installations et service après-vente garanti.' },
]

const produits = [
  { src:'/images/cam-turret-black.png', label:'Caméra Turret Hikvision',   brand:'Hikvision' },
  { src:'/images/cam-dahua-color.png',  label:'Caméra Dahua Full Color',   brand:'Dahua' },
  { src:'/images/cam-dahua-black.png',  label:'Caméra Dôme Dahua',         brand:'Dahua' },
  { src:'/images/camera-ptz.png',       label:'Caméra PTZ Speed Dome',     brand:'Hikvision' },
  { src:'/images/camera-dome.png',      label:'Caméra Dôme Hikvision',     brand:'Hikvision' },
  { src:'/images/access-control.png',   label:'Terminal Biométrique',      brand:'Hikvision' },
]

const realisationPhotos = [
  { src:'/images/real-equipe-kms3.jpg',    label:'Station KMS3',           cat:'Instrumentation' },
  { src:'/images/real-sococim-cctv.jpg',   label:'Site ICS — 16 cam',     cat:'Télésurveillance' },
  { src:'/images/real-equipe-orange.png',  label:'Équipe Terrain',        cat:'Métrologie' },
  { src:'/images/real-armoire.png',        label:'Armoire de Contrôle',   cat:'Télégestion' },
]

export default function HomePage() {
  return (
    <div style={{background:'#FFFFFF'}}>

      {/* ══ HERO ══ */}
      <section style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',overflow:'hidden',background:'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 55%,#1A5C10 100%)'}}>
        <div className="bg-grid-green" style={{position:'absolute',inset:0}}/>
        {/* IMAGE HERO — opacité augmentée à 0.40 pour bien voir les personnels */}
        <div style={{position:'absolute',right:0,top:0,bottom:0,width:'50%',opacity:0.40}}>
          <Image src="/images/real-equipe-kms3.jpg" alt="" fill style={{objectFit:'cover'}} priority/>
        </div>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(26,122,60,0.97) 40%,rgba(26,122,60,0.15) 100%)'}}/>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'140px 24px 100px',position:'relative',zIndex:1,width:'100%'}}>
          <div style={{maxWidth:'700px'}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:'10px',background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.22)',padding:'8px 18px',borderRadius:'40px',marginBottom:'28px'}}>
              <div style={{width:'7px',height:'7px',borderRadius:'50%',background:'#F97316',boxShadow:'0 0 8px rgba(249,115,22,0.9)'}}/>
              <span style={{fontFamily:'Rajdhani, sans-serif',fontWeight:600,fontSize:'11px',letterSpacing:'0.2em',color:'rgba(255,255,255,0.9)',textTransform:'uppercase'}}>Ingénierie Industrielle · Dakar, Sénégal</span>
            </div>
            <h1 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(52px,9vw,108px)',lineHeight:0.92,letterSpacing:'0.02em',marginBottom:'24px',color:'#FFFFFF'}}>
              SÉCURITÉ<br/><span style={{color:'#F97316'}}>& CONTRÔLE</span><br/>INDUSTRIEL
            </h1>
            <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'clamp(15px,2vw,18px)',color:'rgba(255,255,255,0.8)',lineHeight:1.75,maxWidth:'520px',marginBottom:'44px',letterSpacing:'0.03em'}}>
              Leader en instrumentation industrielle, télésurveillance et sécurité incendie au Sénégal. Solutions technologiques de niveau international pour l&apos;Afrique de l&apos;Ouest.
            </p>
            <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginBottom:'56px'}}>
              <Link href="/contact" className="btn-orange" style={{fontSize:'13px'}}>Demander un Devis <ArrowRight size={16}/></Link>
              <Link href="/services" className="btn-outline-white" style={{fontSize:'13px'}}>Nos Services</Link>
            </div>
            <div style={{display:'flex',gap:'36px',flexWrap:'wrap',paddingTop:'28px',borderTop:'1px solid rgba(255,255,255,0.13)'}}>
              {[{v:'13+',l:"Ans d'expérience"},{v:'200+',l:'Projets réalisés'},{v:'6',l:'Marques partenaires'}].map(s=>(
                <div key={s.l}>
                  <div style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'38px',color:'#F97316',lineHeight:1}}>{s.v}</div>
                  <div style={{fontFamily:'Rajdhani, sans-serif',fontSize:'11px',letterSpacing:'0.1em',color:'rgba(255,255,255,0.55)',textTransform:'uppercase'}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{background:'#E8600A',padding:'52px 24px'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:'28px',textAlign:'center'}}>
            {stats.map((s,i)=>(
              <FadeIn key={s.label} delay={i*0.1}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'6px'}}>
                  <div style={{opacity:0.85}}>{s.icon}</div>
                  <div style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'48px',color:'#FFFFFF',lineHeight:1}}><Counter target={s.value} suffix={s.suffix}/></div>
                  <div style={{fontFamily:'Rajdhani, sans-serif',fontSize:'11px',letterSpacing:'0.12em',color:'rgba(255,255,255,0.75)',textTransform:'uppercase'}}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section style={{padding:'96px 24px',background:'#F8F8F6'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto'}}>
          <FadeIn>
            <div style={{textAlign:'center',marginBottom:'56px'}}>
              <div className="accent-line-orange" style={{margin:'0 auto 14px'}}/>
              <div style={{fontFamily:'Rajdhani, sans-serif',fontWeight:700,fontSize:'11px',letterSpacing:'0.3em',color:'#E8600A',textTransform:'uppercase',marginBottom:'10px'}}>Nos Domaines</div>
              <h2 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(34px,5vw,64px)',color:'#111111',letterSpacing:'0.04em',lineHeight:0.95}}>
                EXPERTISE TECHNIQUE<br/><span style={{color:'#E8600A'}}>& INDUSTRIELLE</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'20px'}}>
            {services.map((s,i)=>(
              <FadeIn key={s.title} delay={i*0.1}>
                <div className="card-white" style={{borderRadius:'6px',overflow:'hidden',height:'100%',display:'flex',flexDirection:'column'}}>
                  <div style={{position:'relative',height:'196px',overflow:'hidden'}}>
                    <Image src={s.img} alt={s.title} fill style={{objectFit:'cover',transition:'transform 0.5s ease'}}/>
                    <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(0,0,0,0.05) 0%,rgba(0,0,0,0.5) 100%)'}}/>
                    <div style={{position:'absolute',top:'14px',left:'14px',background:s.color,width:'44px',height:'44px',borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',color:'white'}}>{s.icon}</div>
                    <div style={{position:'absolute',bottom:0,left:0,right:0,height:'3px',background:s.color}}/>
                  </div>
                  <div style={{padding:'22px',flex:1,display:'flex',flexDirection:'column'}}>
                    <h3 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'22px',letterSpacing:'0.06em',color:'#111111',marginBottom:'8px'}}>{s.title}</h3>
                    <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'14px',color:'#666',lineHeight:1.7,marginBottom:'18px',flex:1}}>{s.desc}</p>
                    <Link href="/services" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontFamily:'Rajdhani, sans-serif',fontWeight:700,fontSize:'12px',letterSpacing:'0.1em',textTransform:'uppercase',color:s.color,textDecoration:'none'}}>
                      En savoir plus <ArrowRight size={14}/>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'40px'}}>
            <Link href="/services" className="btn-outline-orange" style={{fontSize:'13px'}}>Voir Tous les Services <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {/* ══ WHY DABAKH ══ */}
      <section style={{padding:'96px 24px',background:'linear-gradient(135deg,#1A7A3C 0%,#0F5A2A 100%)',position:'relative',overflow:'hidden'}}>
        <div className="bg-grid-green" style={{position:'absolute',inset:0}}/>
        <div style={{maxWidth:'1280px',margin:'0 auto',position:'relative',zIndex:1}}>
          <FadeIn>
            <div style={{textAlign:'center',marginBottom:'56px'}}>
              <div className="accent-line-white" style={{margin:'0 auto 14px'}}/>
              <div style={{fontFamily:'Rajdhani, sans-serif',fontWeight:700,fontSize:'11px',letterSpacing:'0.3em',color:'rgba(255,255,255,0.65)',textTransform:'uppercase',marginBottom:'10px'}}>Pourquoi Nous Choisir</div>
              <h2 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(30px,5vw,60px)',color:'#FFFFFF',letterSpacing:'0.04em',lineHeight:1}}>
                POURQUOI CHOISIR<br/><span style={{color:'#F97316'}}>DABAKH GLOBAL SERVICES</span>
              </h2>
            </div>
          </FadeIn>
          {/* FIX: alignItems stretch + height 100% sur chaque card pour hauteur uniforme */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'18px',alignItems:'stretch'}}>
            {whyUs.map((item,i)=>(
              <FadeIn key={item.title} delay={i*0.08} style={{height:'100%'}}>
                <div className="card-green" style={{padding:'26px',borderRadius:'6px',height:'100%',display:'flex',flexDirection:'column'}}>
                  <div style={{marginBottom:'14px'}}>{item.icon}</div>
                  <h3 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'20px',letterSpacing:'0.06em',color:'#FFFFFF',marginBottom:'8px'}}>{item.title}</h3>
                  <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:1.75,flex:1}}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REALISATIONS PREVIEW ══ */}
      <section style={{padding:'96px 24px',background:'#FFFFFF'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'60px',alignItems:'center'}}>
            <FadeIn direction="left">
              <div>
                <div className="accent-line-green"/>
                <div style={{fontFamily:'Rajdhani, sans-serif',fontWeight:700,fontSize:'11px',letterSpacing:'0.3em',color:'#1A7A3C',textTransform:'uppercase',marginBottom:'10px'}}>Nos Réalisations</div>
                <h2 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(30px,4vw,54px)',color:'#111111',letterSpacing:'0.04em',lineHeight:0.95,marginBottom:'20px'}}>
                  DES PROJETS<br/><span style={{color:'#1A7A3C'}}>CONCRETS</span><br/>AU SÉNÉGAL
                </h2>
                <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'15px',color:'#555',lineHeight:1.8,marginBottom:'28px'}}>
                  Plus de 200 installations réalisées à travers le Sénégal et l&apos;Afrique de l&apos;Ouest. Nos équipes interviennent sur les sites industriels, stations d&apos;eau, institutions financières et sites commerciaux.
                </p>
                <Link href="/realisations" className="btn-green" style={{fontSize:'13px'}}>Voir Toutes les Réalisations <ArrowRight size={16}/></Link>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px'}}>
                {realisationPhotos.map((item,i)=>(
                  <div key={i} style={{position:'relative',aspectRatio:'1',borderRadius:'6px',overflow:'hidden',border:i===0?'3px solid #E8600A':i===2?'3px solid #1A7A3C':'1px solid #e8e8e8'}}>
                    <Image src={item.src} alt={item.label} fill style={{objectFit:'cover'}}/>
                    <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.65) 100%)'}}/>
                    <div style={{position:'absolute',bottom:'8px',left:'8px',right:'8px'}}>
                      <div style={{fontFamily:'JetBrains Mono, monospace',fontSize:'8px',color:i===0?'#F97316':'#22A050',letterSpacing:'0.1em',textTransform:'uppercase'}}>{item.cat}</div>
                      <div style={{fontFamily:'Rajdhani, sans-serif',fontWeight:600,fontSize:'11px',color:'white',lineHeight:1.3}}>{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ PRODUITS ══ */}
      <section style={{padding:'96px 24px',background:'#F8F8F6'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto'}}>
          <FadeIn>
            <div style={{textAlign:'center',marginBottom:'48px'}}>
              <div className="accent-line-orange" style={{margin:'0 auto 14px'}}/>
              <h2 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(30px,5vw,56px)',color:'#111111',letterSpacing:'0.04em'}}>
                NOS ÉQUIPEMENTS <span style={{color:'#E8600A'}}>PREMIUM</span>
              </h2>
              <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'15px',color:'#777',marginTop:'10px',letterSpacing:'0.03em'}}>
                Distributeur agréé des grandes marques mondiales de sécurité et d&apos;instrumentation
              </p>
            </div>
          </FadeIn>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:'16px',marginBottom:'36px'}}>
            {produits.map((item,i)=>(
              <FadeIn key={item.label} delay={i*0.07}>
                <div className="card-white" style={{borderRadius:'6px',overflow:'hidden',textAlign:'center',padding:'18px 14px 14px'}}>
                  <div style={{position:'relative',height:'130px',marginBottom:'10px'}}>
                    <Image src={item.src} alt={item.label} fill style={{objectFit:'contain',padding:'6px'}}/>
                  </div>
                  <div style={{fontFamily:'JetBrains Mono, monospace',fontSize:'9px',color:'#E8600A',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'4px'}}>{item.brand}</div>
                  <div style={{fontFamily:'Rajdhani, sans-serif',fontWeight:600,fontSize:'12px',color:'#333',lineHeight:1.3}}>{item.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div style={{textAlign:'center'}}>
            <Link href="/products" className="btn-orange" style={{fontSize:'13px'}}>Voir le Catalogue Complet <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {/* ══ PARTENAIRES ══ */}
      <PartnersBand />

      {/* ══ CTA FINAL ══ */}
      <section style={{padding:'96px 24px',background:'linear-gradient(135deg,#111111 0%,#1A1A1A 100%)',textAlign:'center'}}>
        <FadeIn>
          <div style={{maxWidth:'680px',margin:'0 auto'}}>
            <div className="accent-line-orange" style={{margin:'0 auto 18px'}}/>
            <h2 style={{fontFamily:'Bebas Neue, sans-serif',fontSize:'clamp(36px,7vw,72px)',color:'#FFFFFF',letterSpacing:'0.04em',lineHeight:0.95,marginBottom:'20px'}}>
              VOTRE PROJET<br/><span style={{color:'#E8600A'}}>MÉRITE LE MEILLEUR</span>
            </h2>
            <p style={{fontFamily:'Rajdhani, sans-serif',fontSize:'16px',color:'rgba(255,255,255,0.55)',lineHeight:1.75,marginBottom:'36px'}}>
              Contactez nos ingénieurs pour une étude gratuite et un devis personnalisé adapté à vos besoins industriels.
            </p>
            <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
              <Link href="/contact" className="btn-orange" style={{fontSize:'13px'}}>Demander un Devis Gratuit <ArrowRight size={16}/></Link>
              <a href="tel:+221338775078" className="btn-outline-white" style={{fontSize:'13px'}}><Phone size={16}/> +221 33 877 50 78</a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
