'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Zap } from 'lucide-react'

export default function SmartPopup() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)

        // Vérifier si l'utilisateur a cliqué sur le CTA
        const hasConverted = sessionStorage.getItem('guelichweb_popup_converted')
        if (hasConverted) return

        // Récupérer le nombre de fermetures (0, 1 ou 2)
        const closeCount = parseInt(sessionStorage.getItem('guelichweb_popup_close_count') || '0', 10)

        // Déterminer le délai en fonction du nombre de fermetures précédentes
        // 0 fermeture -> 20s, 1 fermeture -> 60s, 2 fermetures -> 180s
        let delay = null;
        if (closeCount === 0) delay = 20000;
        else if (closeCount === 1) delay = 60000; // 1 min (60s)
        else if (closeCount === 2) delay = 180000; // 3 min (180s)

        if (delay !== null) {
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, delay)

            return () => clearTimeout(timer)
        }
    }, [isVisible])

    const handleClose = () => {
        setIsVisible(false)
        const currentCount = parseInt(sessionStorage.getItem('guelichweb_popup_close_count') || '0', 10)
        sessionStorage.setItem('guelichweb_popup_close_count', (currentCount + 1).toString())
    }

    const handleConversion = () => {
        setIsVisible(false)
        sessionStorage.setItem('guelichweb_popup_converted', 'true')
    }

    if (!isMounted) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                    className="fixed bottom-6 left-6 z-[60] max-w-sm w-[calc(100%-3rem)] bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                    {/* Effet lumineux de fond */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                    {/* Bouton fermeture */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-1.5 transition-colors z-10"
                        aria-label="Fermer la popup"
                    >
                        <X size={18} />
                    </button>

                    <div className="flex items-start gap-4 mb-5 mt-2">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 relative">
                            <div className="absolute inset-0 bg-primary/20 blur-md rounded-xl"></div>
                            <Zap size={24} className="relative z-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-display font-bold text-white leading-tight">
                                Vous cherchez à automatiser votre entreprise ?
                            </h3>
                        </div>
                    </div>

                    <a
                        href="https://offre.guelichweb.online/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleConversion}
                        className="group relative w-full py-3.5 px-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
                    >
                        <span className="relative z-10">Recevoir un diagnostic gratuit</span>
                        <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
