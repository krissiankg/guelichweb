'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/Contact'

import { useDictionary } from '@/components/DictionaryProvider'

export default function Contact({ params: { lang } }) {
  const dict = useDictionary()
  return (
    <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
      <Navbar dict={dict.navbar} />

      <main className="flex-grow">
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
