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
import { useParams } from 'next/navigation'
import { useDictionary } from '@/components/DictionaryProvider'

const useCaseIcons = [
    MessageSquare,
    FileText,
    Users,
    FolderOpen,
    BarChart3,
    Workflow
]

export default function UseCases() {
    const dict = useDictionary()
    const params = useParams()
    const lang = params?.lang || 'fr'
    const cases = dict?.home?.useCases?.cases || []

    return (
        <section className="py-24 px-6 bg-card border-b border-white/5 relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        {dict?.home?.useCases?.title1}
                        <span className="text-primary">{dict?.home?.useCases?.titleHighlight}</span>
                        {dict?.home?.useCases?.title2}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {dict?.home?.useCases?.desc}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {cases.map((item, index) => {
                        const Icon = useCaseIcons[index % useCaseIcons.length]
                        return (
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
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white">
                                    {item.problem}
                                </h3>

                                <div className="space-y-3">
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">{dict?.home?.useCases?.solutionLabel}</span>
                                        {item.solution}
                                    </p>
                                    <div className="pt-3 border-t border-white/5">
                                        <span className="block text-xs uppercase tracking-wider text-primary mb-1 font-bold">{dict?.home?.useCases?.resultLabel}</span>
                                        <p className="text-white font-medium text-sm">
                                            {item.result}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Strategic CTA */}
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-12 rounded-3xl border border-primary/20 text-center max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                    <h3 className="text-2xl md:text-4xl font-display font-bold mb-4 relative z-10">
                        {dict?.home?.useCases?.ctaTitle}
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
                        {dict?.home?.useCases?.ctaDesc}
                    </p>

                    <Link
                        href={`/${lang}/offres`}
                        className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/25 relative z-10 text-lg group"
                    >
                        {dict?.home?.useCases?.ctaButton}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
