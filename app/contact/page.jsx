'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/Contact'

export default function Contact() {
  return (
    <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
