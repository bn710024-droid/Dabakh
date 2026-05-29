'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À Propos' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Produits' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '2px solid #E8600A' : '1px solid rgba(232,96,10,0.15)',
        transition: 'all 0.3s ease',
        padding: scrolled ? '8px 0' : '10px 0',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo — mix-blend-mode pour rendre le fond blanc du PNG transparent */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '52px', height: '52px', position: 'relative', flexShrink: 0, borderRadius: '8px', overflow: 'hidden' }}>
              <Image
                src="/images/logo-large.png"
                alt="Dabakh Global Services"
                fill
                style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
              />
            </div>
            <div style={{ borderLeft: '2px solid #E8600A', paddingLeft: '10px' }}>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '0.1em', color: '#E8600A', lineHeight: 1 }}>DABAKH</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '9px', letterSpacing: '0.18em', color: '#1A7A3C', textTransform: 'uppercase', fontWeight: 700 }}>Global Services SARL</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '13px',
                letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 12px',
                textDecoration: 'none',
                color: pathname === link.href ? '#E8600A' : '#333333',
                borderBottom: pathname === link.href ? '2px solid #E8600A' : '2px solid transparent',
                transition: 'all 0.25s ease',
              }}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-orange" style={{ padding: '10px 20px', fontSize: '12px', marginLeft: '8px', borderRadius: '2px' }}>
              Devis Gratuit
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile" style={{
            background: 'none', border: '1px solid rgba(232,96,10,0.4)',
            color: '#E8600A', padding: '8px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', borderRadius: '2px',
          }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: '#FFFFFF',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.77,0,0.175,1)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '80px 40px 40px',
      }}>
        <div style={{ borderLeft: '3px solid #E8600A', paddingLeft: '24px', marginBottom: '40px' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              display: 'block', fontFamily: 'Bebas Neue, sans-serif', fontSize: '40px',
              letterSpacing: '0.06em', color: pathname === link.href ? '#E8600A' : '#111111',
              textDecoration: 'none', padding: '6px 0',
            }}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="btn-orange" style={{ padding: '14px 28px', fontSize: '13px', borderRadius: '2px', alignSelf: 'flex-start' }}>
          Demander un Devis
        </Link>
        <div style={{ marginTop: '32px', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#888', letterSpacing: '0.1em' }}>
          +221 33 877 50 78
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-mobile { display: none !important; }
          .nav-desktop { display: flex !important; }
        }
      `}</style>
    </>
  )
}
