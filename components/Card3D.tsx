'use client'
import { useRef, MouseEvent } from 'react'

interface Card3DProps {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export default function Card3D({ children, style, className }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotY = ((x - cx) / cx) * 6
    const rotX = ((cy - y) / cy) * 6
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`
    card.style.boxShadow = `${-rotY * 2}px ${rotX * 2}px 40px rgba(232,96,10,0.12)`
  }

  const handleMouseLeave = () => {
    const card = ref.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
    card.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)'
  }

  return (
    <div
      ref={ref}
      className={`card-3d ${className || ''}`}
      style={{ ...style, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
