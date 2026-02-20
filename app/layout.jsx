import './globals.css'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SmartPopup from '@/components/SmartPopup'

export const metadata = {
  title: 'Agence Transformation Digitale & IA – Guelichweb',
  description: 'Guelichweb accompagne les entreprises et institutions dans leur transformation numérique, automatisation et gestion de données avec des solutions IA sur mesure.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <FloatingWhatsApp />
        <SmartPopup />
      </body>
    </html>
  )
}
