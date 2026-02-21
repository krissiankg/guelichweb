'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Check, ArrowRight, Zap, Target, TrendingUp, ShieldCheck, Cpu, Smartphone, Palette, Video, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useDictionary } from '@/components/DictionaryProvider'

const offerIcons = [Target, Zap, TrendingUp]
const commIcons = [Smartphone, Palette, Video, Sparkles]
const whyUsIcons = [Target, Cpu, ShieldCheck]
const whyUsColors = ['text-blue-400', 'text-purple-400', 'text-green-400']

export default function Offers() {
    const dict = useDictionary()
    const pageOffers = dict?.pageOffers
    const params = useParams()
    const lang = params?.lang || 'fr'

    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
            <Navbar dict={dict?.navbar} />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            {pageOffers?.title}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            {pageOffers?.desc}
                        </p>
                    </motion.div>

                    {/* Offers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {pageOffers?.mainOffers?.map((offer, index) => {
                            const Icon = offerIcons[index % offerIcons.length]
                            const highlight = index === 1;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative p-8 rounded-3xl border flex flex-col transition-all duration-300 h-full ${highlight
                                        ? 'bg-white/5 border-primary shadow-[0_0_30px_rgba(59,130,246,0.15)] z-10 scale-105'
                                        : 'bg-card border-white/5 hover:border-white/20 hover:shadow-lg'
                                        }`}
                                >
                                    {highlight && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                                            {pageOffers?.recommended}
                                        </div>
                                    )}

                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${highlight ? 'bg-primary text-white' : 'bg-white/10 text-gray-300'
                                        }`}>
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="text-2xl font-display font-bold mb-3">{offer.title}</h3>
                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[40px]">{offer.hook}</p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {offer.features?.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                <Check size={18} className="text-primary mt-0.5 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mb-8 pt-6 border-t border-white/10">
                                        <p className="font-bold text-center text-white">{offer.result}</p>
                                    </div>

                                    <Link href={`/${lang}/contact#diagnostic`} className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${highlight
                                        ? 'bg-primary hover:bg-secondary text-white shadow-lg hover:shadow-primary/50'
                                        : 'bg-white text-black hover:bg-gray-200'
                                        }`}>
                                        {offer.cta}
                                        <ArrowRight size={18} />
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Communication & Growth Studio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-t border-white/10 pt-24 mb-24"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                                {pageOffers?.commStudio?.title}
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                {pageOffers?.commStudio?.desc}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pageOffers?.commStudio?.offers?.map((offer, index) => {
                                const Icon = commIcons[index % commIcons.length]
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-card border border-white/5 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(37,99,235,0.2)] hover:-translate-y-2 group"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Icon size={28} />
                                        </div>

                                        <h3 className="text-lg font-display font-bold mb-1 text-white">
                                            {offer.title}
                                        </h3>
                                        <h4 className="text-primary text-sm font-medium mb-3">
                                            {offer.subtitle}
                                        </h4>
                                        <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[60px]">{offer.hook}</p>

                                        <ul className="space-y-4 mb-8 flex-grow">
                                            {offer.features?.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href={`/${lang}/contact`} className="w-full py-4 rounded-xl border border-white/10 text-center font-bold text-sm text-white hover:bg-white/10 hover:border-white/30 transition-colors mt-auto group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                            {offer.cta}
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Why Choose Us Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-t border-white/10 pt-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">{pageOffers?.whyUs?.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            {pageOffers?.whyUs?.points?.map((point, index) => {
                                const Icon = whyUsIcons[index % whyUsIcons.length]
                                const colorClass = whyUsColors[index % whyUsColors.length]
                                return (
                                    <div key={index} className="flex flex-col items-center">
                                        <div className={`w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 ${colorClass}`}>
                                            <Icon size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                                        <p className="text-gray-400">{point.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Final Premium Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-24 mb-10 border border-white/10 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden bg-card"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">{pageOffers?.finalCta?.title}</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                                {pageOffers?.finalCta?.desc}
                            </p>
                            <Link
                                href={`/${lang}/contact`}
                                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-primary hover:bg-secondary text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                            >
                                {pageOffers?.finalCta?.button}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
