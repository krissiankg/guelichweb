'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    MessageSquare,
    FileText,
    Users,
    FolderOpen,
    BarChart3,
    Workflow,
    ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const cases = [
    {
        icon: MessageSquare,
        problem: "Support client saturé",
        solution: "Agent IA connecté à WhatsApp et Messenger.",
        result: "Réponses instantanées 24/7 et -60% de tickets."
    },
    {
        icon: FileText,
        problem: "Devis manuels errors",
        solution: "Génération automatique PDF via formulaire.",
        result: "Devis envoyés en moins de 2 minutes."
    },
    {
        icon: Users,
        problem: "Perte de prospects",
        solution: "CRM automatisé avec suivi & relance IA.",
        result: "Augmentation du taux de conversion."
    },
    {
        icon: FolderOpen,
        problem: "Documents dispersés",
        solution: "GED intelligente + classification IA.",
        result: "Accès instantané aux infos critiques."
    },
    {
        icon: BarChart3,
        problem: "Pilotage à l'aveugle",
        solution: "Dashboard connecté aux données réelles.",
        result: "Décisions basées sur la data en temps réel."
    },
    {
        icon: Workflow,
        problem: "Processus lents",
        solution: "Workflows automatisés via agents IA.",
        result: "Gain de productivité mesurable immédiat."
    }
]

export default function UseCases() {
    return (
        <section className="py-24 px-6 bg-card border-b border-white/5 relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        Comment l’IA transforme <span className="text-primary">concrètement</span> les entreprises
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Des cas d'usage réels pour comprendre l'impact immédiat de l'automatisation sur votre activité.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="p-8 rounded-2xl bg-dark/50 border border-white/5 hover:border-primary/30 transition-all shadow-lg group"
                        >
                            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white">
                                {item.problem}
                            </h3>

                            <div className="space-y-3">
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">Solution</span>
                                    {item.solution}
                                </p>
                                <div className="pt-3 border-t border-white/5">
                                    <span className="block text-xs uppercase tracking-wider text-primary mb-1 font-bold">Résultat</span>
                                    <p className="text-white font-medium text-sm">
                                        {item.result}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Strategic CTA */}
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-12 rounded-3xl border border-primary/20 text-center max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                    <h3 className="text-2xl md:text-4xl font-display font-bold mb-4 relative z-10">
                        Et si votre entreprise fonctionnait automatiquement ?
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
                        Nous analysons vos processus et construisons des solutions IA adaptées à votre réalité.
                    </p>

                    <Link
                        href="/offres"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/25 relative z-10 text-lg group"
                    >
                        Demander un diagnostic stratégique
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
