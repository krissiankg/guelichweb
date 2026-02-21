"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Ex: '/fr/about' -> 'fr'
    const currentLang = pathname.split('/')[1] || 'fr';

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const switchLang = (lang) => {
        if (lang === currentLang) return;
        const pathParts = pathname.split('/');
        pathParts[1] = lang;
        router.push(pathParts.join('/') || '/');
        setIsOpen(false);
    };

    const languages = [
        { code: 'fr', label: 'FR' },
        { code: 'en', label: 'EN' }
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-sm font-semibold tracking-wider bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors text-white"
            >
                {currentLang.toUpperCase()}
                <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 mt-2 bg-dark/95 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl min-w-[80px] z-50"
                    >
                        {languages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => switchLang(l.code)}
                                className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${currentLang === l.code ? "bg-primary/20 text-primary" : "text-gray-300 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {l.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
