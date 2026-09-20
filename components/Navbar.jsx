"use client";

import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function Navbar({ dict }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'fr';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict?.services || "Services", href: `/${currentLang}/services` },
    { name: dict?.offers || "Offres", href: `/${currentLang}/offres` },
    { name: dict?.portfolio || "Réalisations", href: `/${currentLang}/portfolio` },
    { name: dict?.about || "À propos", href: `/${currentLang}/about` },
    { name: dict?.blog || "Blog", href: `/${currentLang}/blog` },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || pathname !== "/"
        ? "bg-dark/80 backdrop-blur-md py-4 border-b border-white/10"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-nowrap justify-between items-center gap-4">
        <Link
          href={`/${currentLang}`}
          className="text-lg xl:text-2xl font-display font-bold tracking-tighter flex items-center gap-2 text-white shrink-0"
        >
          <div className="relative w-9 h-9 xl:w-10 xl:h-10 shrink-0">
            <img src="/logo.png" alt="Guelichweb Logo" className="object-contain w-full h-full" />
          </div>
          <span className="whitespace-nowrap">GUELICHWEB</span>
        </Link>
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 min-w-0">
          <Link
            href={`/${currentLang}`}
            className={`text-sm uppercase tracking-wide xl:tracking-wider font-medium whitespace-nowrap transition-colors ${pathname === `/${currentLang}` ? "text-primary" : "text-gray-300 hover:text-white"
              }`}
          >
            {dict?.home || "Accueil"}
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-wide xl:tracking-wider font-medium whitespace-nowrap transition-colors ${pathname === link.href
                ? "text-primary"
                : "text-gray-300 hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
          <LanguageSwitcher />
          <Link
            href={`/${currentLang}/contact`}
            className="bg-primary hover:bg-secondary text-white px-4 xl:px-6 py-2.5 rounded-full text-sm font-semibold transition-colors inline-block whitespace-nowrap"
          >
            {dict?.startProject || "Démarrer un projet"}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-white shrink-0 p-1"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark border-b border-white/10 p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <Link
                href={`/${currentLang}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-display font-medium text-left ${pathname === `/${currentLang}` ? "text-primary" : "text-white"
                  }`}
              >
                {dict?.home || "Accueil"}
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-display font-medium ${pathname === link.href ? "text-primary" : "text-white"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={`/${currentLang}/contact`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full text-center font-semibold mt-4"
              >
                {dict?.startProject || "Démarrer un projet"}
              </Link>

              <div className="flex flex-col items-start mt-2 border-t border-white/10 pt-4">
                <span className="text-gray-400 text-sm mb-2 uppercase tracking-wider">{dict?.language || "Langue"}</span>
                <LanguageSwitcher />
              </div>

              {/* Réseaux sociaux Mobile */}
              <div className="flex items-center justify-center gap-6 mt-4 pt-6 border-t border-white/10">
                <a href="https://www.linkedin.com/company/guelichweb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.facebook.com/guelichweb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/guelichweb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://wa.me/2290166368705" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
