import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ProgressBar from '@/components/ProgressBar'

export const metadata: Metadata = {
  title: 'Dabakh Global Services SARL | Ingénierie Industrielle & Sécurité',
  description: 'Leader en instrumentation industrielle, télésurveillance, sécurité incendie et systèmes intelligents au Sénégal. Partenaire Hikvision, Dahua, DETNOV, Fuji Electric.',
  keywords: 'instrumentation industrielle, télésurveillance, sécurité incendie, Hikvision, Dakar, Sénégal',
  metadataBase: new URL('https://dabakhglobalservices.com'),
  openGraph: {
    title: 'Dabakh Global Services SARL | Ingénierie Industrielle & Sécurité',
    description: 'Leader en instrumentation industrielle, télésurveillance et sécurité incendie au Sénégal. Solutions technologiques de niveau international pour l\'Afrique de l\'Ouest.',
    url: 'https://dabakhglobalservices.com',
    siteName: 'Dabakh Global Services',
    images: [
      {
        url: '/images/real-supervision.png',
        width: 1200,
        height: 630,
        alt: 'Dabakh Global Services — Ingénierie Industrielle & Sécurité',
      },
    ],
    locale: 'fr_SN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dabakh Global Services SARL | Ingénierie Industrielle & Sécurité',
    description: 'Leader en instrumentation industrielle, télésurveillance et sécurité incendie au Sénégal.',
    images: ['/images/real-supervision.png'],
  },
  icons: {
  icon: [
    { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
  ],
  shortcut: '/favicon-32.png',
  apple: '/favicon-192.png',
}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <ProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
