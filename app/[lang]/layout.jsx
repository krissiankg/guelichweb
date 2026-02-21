import '../globals.css'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SmartPopup from '@/components/SmartPopup'
import DictionaryProvider from '@/components/DictionaryProvider'
import { getDictionary } from '@/dictionaries'

export const metadata = {
  title: 'Agence Transformation Digitale & IA – Guelichweb',
  description: 'Guelichweb accompagne les entreprises et institutions dans leur transformation numérique, automatisation et gestion de données avec des solutions IA sur mesure.',
  icons: {
    icon: '/logo.png',
  },
}

export default async function RootLayout({ children, params: { lang } }) {
  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang} className="scroll-smooth">
      <body className="antialiased">
        <DictionaryProvider dictionary={dictionary}>
          {children}
          <FloatingWhatsApp />
          <SmartPopup />
        </DictionaryProvider>
      </body>
    </html>
  )
}
