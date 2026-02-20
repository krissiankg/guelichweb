"use client";

import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Offres", href: "/offres" },
    { name: "À propos", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || pathname !== "/"
        ? "bg-dark/80 backdrop-blur-md py-4 border-b border-white/10"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 text-white"
        >
          <div className="relative w-10 h-10">
            <img src="/logo.png" alt="Guelichweb Logo" className="object-contain w-full h-full" />
          </div>
          GUELICHWEB
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm uppercase tracking-wider font-medium transition-colors ${pathname === "/" ? "text-primary" : "text-gray-300 hover:text-white"
              }`}
          >
            Accueil
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-wider font-medium transition-colors ${pathname === link.href
                ? "text-primary"
                : "text-gray-300 hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors inline-block"
          >
            Démarrer un projet
          </Link>
        </div>

        <button
          className="md:hidden text-white"
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
            className="absolute top-full left-0 w-full bg-dark border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-display font-medium text-left ${pathname === "/" ? "text-primary" : "text-white"
                  }`}
              >
                Home
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
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full text-center font-semibold mt-2"
              >
                Démarrer un projet
              </Link>

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
