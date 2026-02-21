'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useDictionary } from '@/components/DictionaryProvider'

export default function Footer() {
  const dict = useDictionary()?.footer;
  const params = useParams();
  const lang = params?.lang || 'fr';

  return (
    <footer className="bg-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href={`/${lang}`} className="inline-block mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Guelichweb Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {dict?.about}
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/guelichweb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/guelichweb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/guelichweb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">{dict?.servicesTitle}</h4>
            <ul className="space-y-4">
              <li><Link href={`/${lang}/services`} className="text-gray-400 hover:text-primary transition-colors">{dict?.servicesLinks?.audit}</Link></li>
              <li><Link href={`/${lang}/services`} className="text-gray-400 hover:text-primary transition-colors">{dict?.servicesLinks?.web}</Link></li>
              <li><Link href={`/${lang}/services`} className="text-gray-400 hover:text-primary transition-colors">{dict?.servicesLinks?.ai}</Link></li>
              <li><Link href={`/${lang}/services`} className="text-gray-400 hover:text-primary transition-colors">{dict?.servicesLinks?.design}</Link></li>
            </ul>
          </div>

          {/* Agence & Légal */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">{dict?.legalTitle}</h4>
            <ul className="space-y-4">
              <li><Link href={`/${lang}/mentions-legales`} className="text-gray-400 hover:text-primary transition-colors">{dict?.legalLinks?.mentions}</Link></li>
              <li><Link href={`/${lang}/politique-confidentialite`} className="text-gray-400 hover:text-primary transition-colors">{dict?.legalLinks?.privacy}</Link></li>
              <li><Link href={`/${lang}/conditions-generales`} className="text-gray-400 hover:text-primary transition-colors">{dict?.legalLinks?.terms}</Link></li>
              <li><Link href={`/${lang}/politique-cookies`} className="text-gray-400 hover:text-primary transition-colors">{dict?.legalLinks?.cookies}</Link></li>
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">{dict?.contactTitle}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span>{dict?.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+2290166368705</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>christ@guelichweb.online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Guelichweb. {dict?.rights}
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href={`/${lang}/conditions-generales`} className="hover:text-white transition-colors">{dict?.bottomLinks?.terms}</Link>
            <Link href={`/${lang}/politique-confidentialite`} className="hover:text-white transition-colors">{dict?.bottomLinks?.privacy}</Link>
            <Link href={`/${lang}/politique-cookies`} className="hover:text-white transition-colors">{dict?.bottomLinks?.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}