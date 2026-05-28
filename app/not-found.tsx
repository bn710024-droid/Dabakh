'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Home, ArrowLeft, Phone } from 'lucide-react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setTimeout(() => setMounted(true), 100) }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F2D1A 0%, #1A7A3C 50%, #0F5A2A 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,96,10,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,122,60,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        maxWidth: '600px',
        width: '100%',
      }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.3em', color: '#F97316', textTransform: 'uppercase', marginBottom: '20px' }}>
          — Erreur 404
        </div>

        <div style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(100px, 22vw, 180px)',
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #FFFFFF 30%, rgba(255,255,255,0.3) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          position: 'relative',
        }}>
          404
          <span style={{
            position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)',
            width: '80px', height: '4px', background: '#E8600A', borderRadius: '2px',
            WebkitTextFillColor: 'initial', backgroundClip: 'initial',
          }} />
        </div>

        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 6vw, 48px)', color: '#FFFFFF', letterSpacing: '0.05em', marginBottom: '16px', marginTop: '16px' }}>
          PAGE INTROUVABLE
        </h1>

        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, letterSpacing: '0.03em', marginBottom: '40px', maxWidth: '440px', margin: '0 auto 40px' }}>
          Cette page n&apos;existe pas ou a été déplacée.<br />
          Retournez à l&apos;accueil pour trouver ce que vous cherchez.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: '#E8600A', color: '#FFFFFF', borderRadius: '4px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
            <Home size={15} /> Accueil
          </Link>
          <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '4px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
            <ArrowLeft size={15} /> Nos Services
          </Link>
          <a href="tel:+221338775078" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'transparent', color: '#F97316', border: '1px solid rgba(249,115,22,0.4)', borderRadius: '4px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
            <Phone size={15} /> Nous Appeler
          </a>
        </div>

        <div style={{ marginTop: '56px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
          <span style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.2)', display: 'inline-block' }} />
          Dabakh Global Services SARL
          <span style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.2)', display: 'inline-block' }} />
        </div>
      </div>
    </div>
  )
}
