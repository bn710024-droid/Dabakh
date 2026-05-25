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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
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
