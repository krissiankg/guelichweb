import '../globals.css'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SmartPopup from '@/components/SmartPopup'
import DictionaryProvider from '@/components/DictionaryProvider'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/dictionaries'
import { LOCALES, SITE_URL } from '@/lib/site'
import { buildMetadata } from '@/lib/seo'
import { organizationGraph } from '@/lib/schema'

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

// Unknown first segments (for example /sitemap_index.xml) must 404,
// not render the homepage as HTML.
export const dynamicParams = false

// Home page metadata. Child segments override it with their own.
export async function generateMetadata({ params: { lang } }) {
  const dict = await getDictionary(lang)
  const seo = dict?.seo?.home

  return {
    metadataBase: new URL(SITE_URL),
    icons: { icon: '/logo.png' },
    ...buildMetadata({ lang, title: seo?.title, description: seo?.description }),
  }
}

export default async function RootLayout({ children, params: { lang } }) {
  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang} className="scroll-smooth">
      <body className="antialiased">
        <JsonLd data={organizationGraph(dictionary, lang)} />
        <DictionaryProvider dictionary={dictionary}>
          {children}
          <FloatingWhatsApp />
          <SmartPopup />
        </DictionaryProvider>
      </body>
    </html>
  )
}
