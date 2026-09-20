'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import {
    ArrowRight,
    Bot,
    Check,
    LayoutDashboard,
    MapPin,
    MessageCircle,
    Palette,
    Repeat,
    Workflow,
} from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeading, { fadeUp } from '@/components/ui/SectionHeading'
import FaqAccordion from '@/components/ui/FaqAccordion'
import { useDictionary } from '@/components/DictionaryProvider'
import { whatsappLink } from '@/lib/site'

const offerIcons = [Bot, Workflow, LayoutDashboard, Palette]
const secondaryIcons = [MessageCircle, Repeat, LayoutDashboard, Palette]

export default function LocalLandingView({ pageKey }) {
    const dict = useDictionary()
    const page = dict?.localPages?.[pageKey]
    const params = useParams()
    const lang = params?.lang || 'fr'

    const diagnosticHref = `/${lang}/contact`
    const hero = page?.hero

    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
            <Navbar dict={dict?.navbar} />

            <main className="flex-grow">
                {/* HERO */}
                <section className="relative pt-36 pb-20 px-6 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

                    <div className="relative max-w-5xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
                                <MapPin size={15} className="text-primary" />
                                {hero?.badge}
                            </span>

                            <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-8">
                                {hero?.title1}
                                <span className="text-gradient">{hero?.titleHighlight}</span>
                                {hero?.title2}
                            </h1>

                            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                                {hero?.desc}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                                <Link
                                    href={diagnosticHref}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_25px_rgba(37,99,235,0.35)]"
                                >
                                    {page?.cta?.button}
                                    <ArrowRight size={18} />
                                </Link>
                                <a
                                    href={whatsappLink(page?.meta?.title)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:bg-white/5 text-white font-bold rounded-full transition-colors"
                                >
                                    <MessageCircle size={18} className="text-[#25D366]" />
                                    WhatsApp
                                </a>
                            </div>

                            <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400">
                                {hero?.highlights?.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check size={16} className="text-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="py-20 px-6 bg-card border-y border-white/5">
                    <motion.div {...fadeUp} className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">{page?.intro?.title}</h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-5">{page?.intro?.p1}</p>
                        <p className="text-gray-300 leading-relaxed text-lg">{page?.intro?.p2}</p>
                    </motion.div>
                </section>

                {/* OFFERS */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading title={page?.offers?.title} desc={page?.offers?.desc} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {page?.offers?.items?.map((item, index) => {
                                const Icon = (pageKey === 'whatsappN8n' ? secondaryIcons : offerIcons)[
                                    index % offerIcons.length
                                ]
                                return (
                                    <motion.div
                                        key={index}
                                        {...fadeUp}
                                        transition={{ delay: (index % 2) * 0.1 }}
                                        className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/40 transition-colors flex flex-col"
                                    >
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                <Icon size={24} />
                                            </div>
                                            <h3 className="font-display font-bold text-xl">{item.title}</h3>
                                        </div>

                                        <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>

                                        <ul className="space-y-3 mt-auto pt-5 border-t border-white/5">
                                            {item.features?.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* COMPARISON (optional) */}
                {page?.comparison && (
                    <section className="py-24 px-6 bg-card border-y border-white/5">
                        <div className="max-w-5xl mx-auto">
                            <SectionHeading title={page.comparison.title} desc={page.comparison.desc} />

                            <motion.div
                                {...fadeUp}
                                className="overflow-x-auto rounded-3xl border border-white/10 bg-dark"
                            >
                                <table className="w-full text-left border-collapse min-w-[640px]">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-gray-400">
                                                {page.comparison.headers?.criteria}
                                            </th>
                                            <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-primary">
                                                {page.comparison.headers?.n8n}
                                            </th>
                                            <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-gray-400">
                                                {page.comparison.headers?.make}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {page.comparison.rows?.map((row, index) => (
                                            <tr key={index} className="border-b border-white/5 last:border-0">
                                                <td className="px-6 py-5 font-display font-bold text-white align-top">
                                                    {row.criteria}
                                                </td>
                                                <td className="px-6 py-5 text-sm text-gray-300 align-top">{row.n8n}</td>
                                                <td className="px-6 py-5 text-sm text-gray-400 align-top">{row.make}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div>

                            <motion.p
                                {...fadeUp}
                                className="mt-8 text-gray-400 leading-relaxed max-w-3xl mx-auto text-center"
                            >
                                {page.comparison.conclusion}
                            </motion.p>
                        </div>
                    </section>
                )}

                {/* PROCESS */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading title={page?.process?.title} desc={page?.process?.desc} />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {page?.process?.steps?.map((step, index) => (
                                <motion.div
                                    key={index}
                                    {...fadeUp}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/40 transition-colors"
                                >
                                    <span className="font-display font-bold text-5xl text-primary/20 block mb-4">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY LOCAL */}
                <section className="py-24 px-6 bg-card border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading title={page?.whyLocal?.title} />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {page?.whyLocal?.points?.map((point, index) => (
                                <motion.div
                                    key={index}
                                    {...fadeUp}
                                    transition={{ delay: index * 0.08 }}
                                    className="p-7 rounded-2xl bg-dark border border-white/5 hover:border-primary/40 transition-colors"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                                        <Check size={22} />
                                    </div>
                                    <h3 className="font-display font-bold text-lg mb-2">{point.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{point.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading title={page?.faq?.title} />
                        <FaqAccordion items={page?.faq?.items} />
                    </div>
                </section>

                {/* CTA */}
                <section className="pb-24 px-6">
                    <motion.div
                        {...fadeUp}
                        className="max-w-7xl mx-auto border border-white/10 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden bg-card"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{page?.cta?.title}</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                                {page?.cta?.desc}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href={diagnosticHref}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 bg-primary hover:bg-secondary text-white font-bold text-lg rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                                >
                                    {page?.cta?.button}
                                    <ArrowRight size={20} />
                                </Link>
                                <Link
                                    href={`/${lang}/offres`}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 border border-white/15 hover:bg-white/5 text-white font-bold text-lg rounded-full transition-colors"
                                >
                                    {dict?.navbar?.offers}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
