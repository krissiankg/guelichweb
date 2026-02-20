'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import {
    Database,
    Cpu,
    Globe,
    Palette,
    Video,
    Shield,
    GraduationCap,
    Users,
    Bot,
    ArrowRight,
    Search,
    Layers,
    Settings,
    TrendingUp,
    CheckCircle,
    FileText,
    Repeat,
    EyeOff,
    Lock
} from 'lucide-react'

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function About() {
    return (
        <div className="bg-dark text-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="pt-20">
                {/* 1. HERO - VISION */}
                <section className="relative py-24 px-6 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                                Transformer la complexité technologique en <span className="text-gradient">performance opérationnelle.</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                                Chez Guelichweb, nous aidons les entreprises à structurer leurs systèmes numériques, exploiter leurs données et automatiser leurs processus pour accélérer leur croissance dans l’ère de l’intelligence artificielle.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                {['Transformation digitale', 'Automatisation IA', 'Structuration des données'].map((badge, index) => (
                                    <span key={index} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-primary flex items-center gap-2">
                                        <CheckCircle size={16} />
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. FOUNDER - EXPERT POSITIONING */}
                <section className="py-24 px-6 bg-card border-y border-white/5">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="relative"
                        >
                            <div className="w-full max-w-sm mx-auto aspect-square md:aspect-[4/5] bg-gradient-to-br from-gray-800 to-black rounded-3xl border border-white/10 overflow-hidden relative group">
                                <Image
                                    src="/images/christian.jpg"
                                    alt="Christian Guegueligue"
                                    fill
                                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 blur-[60px] rounded-full -z-10" />
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-8">
                                Un expert hybride entre technologie, stratégie et opérationnel.
                            </motion.h2>
                            <motion.div variants={fadeInUp} className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    <span className="text-white font-bold">Christian Guegueligue</span> est un consultant digital et architecte de solutions numériques spécialisé dans la structuration des systèmes d’entreprise.
                                </p>
                                <p>
                                    Son approche combine analyse scientifique, expertise technique et vision stratégique pour transformer des organisations complexes en systèmes efficaces et évolutifs.
                                </p>
                                <p className="border-l-4 border-primary pl-6 py-2 italic text-gray-400">
                                    "Il ne développe pas seulement des outils : il conçoit des solutions qui améliorent la performance globale des entreprises."
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. JOURNEY - STRATEGIC FRAMING */}
                <section className="py-24 px-6 relative">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                                Un parcours construit autour de la <br />
                                <span className="text-primary">résolution de problèmes complexes.</span>
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 relative">
                            {/* Connecting Line with Animation */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 overflow-hidden">
                                <motion.div
                                    animate={{ y: ["0%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-primary to-transparent"
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white/5 p-8 rounded-3xl border border-white/5 md:text-right relative"
                            >
                                <div className="absolute top-1/2 -right-6 w-3 h-3 bg-primary rounded-full md:block hidden transform -translate-y-1/2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                <h3 className="text-xl font-bold mb-2 text-white">Analyse & Vision Systémique</h3>
                                <p className="text-gray-400 mb-6 text-sm">Approche basée sur la compréhension globale des organisations et de leurs flux opérationnels.</p>
                                <ul className="space-y-3 inline-block text-sm text-gray-300 md:items-end flex flex-col">
                                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Analyse des processus métiers</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Compréhension des systèmes d’information</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Vision stratégique orientée performance</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Identification des points de friction</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-gray-900/50 p-8 rounded-3xl border border-primary/20 md:mt-24 relative"
                            >
                                <div className="absolute top-1/2 -left-[25px] w-3 h-3 bg-primary rounded-full md:block hidden transform -translate-y-1/2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                <h3 className="text-xl font-bold mb-2 text-white">Architecture Digitale & Automatisation</h3>
                                <p className="text-gray-400 mb-6 text-sm">Conception et déploiement de solutions numériques permettant d’optimiser et d’automatiser les opérations.</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Bases de données', 'Développement Web', 'Automatisation IA', 'Infrastructure connectée', 'Intégrations API', 'Workflows intelligents'].map((tag, i) => (
                                        <span key={i} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full border border-primary/20">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-center mt-16 text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            Aujourd’hui, cette expertise permet d’analyser une entreprise comme un <span className="text-primary font-bold">système vivant</span>, où <span className="text-white font-bold decoration-primary/50 underline decoration-2 underline-offset-4">données</span>, <span className="text-white font-bold decoration-primary/50 underline decoration-2 underline-offset-4">processus</span> et <span className="text-white font-bold decoration-primary/50 underline decoration-2 underline-offset-4">outils</span> travaillent ensemble pour améliorer la <span className="text-primary font-bold">productivité</span>, la prise de décision et la croissance.
                        </motion.p>
                    </div>
                </section>

                {/* NEW SECTION: CHALLENGES */}
                <section className="py-24 px-6 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Les défis que nous aidons les entreprises à résoudre</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Nous transformons vos points de friction en leviers de croissance.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {[
                                { title: "Processus désorganisés", desc: "Vos équipes perdent du temps entre plusieurs outils non connectés. Nous structurons vos flux pour créer un système fluide et efficace.", icon: Layers },
                                { title: "Tâches répétitives", desc: "Automatisation des actions manuelles grâce à des workflows intelligents et des agents IA.", icon: Repeat },
                                { title: "Données mal exploitées", desc: "Transformation de vos données en tableaux de bord décisionnels exploitables.", icon: Database },
                                { title: "Présence digitale faible", desc: "Création d’une image professionnelle cohérente qui inspire confiance et attire des clients.", icon: Globe },
                                { title: "Manque de visibilité", desc: "Mise en place d’indicateurs clairs pour piloter votre entreprise avec précision.", icon: EyeOff },
                                { title: "Croissance bloquée", desc: "Modernisation complète de votre infrastructure digitale pour soutenir votre expansion.", icon: Lock }
                            ].map((challenge, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <challenge.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{challenge.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA STRATÉGIQUE */}
                        <div className="bg-gradient-to-br from-primary/10 to-transparent p-12 rounded-3xl border border-primary/20 text-center max-w-4xl mx-auto relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Transformons vos défis en avantage compétitif</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
                                Chaque entreprise possède un potentiel inexploité. Notre rôle est de structurer, automatiser et optimiser vos systèmes pour libérer votre croissance.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/25 relative z-10">
                                Demander un diagnostic stratégique <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 4. METHODOLOGY */}
                <section className="py-24 px-6 bg-card border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-display font-bold text-center mb-20"
                        >
                            La méthode Guelichweb
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Analyse Stratégique", desc: "Compréhension des flux et données.", icon: Search },
                                { step: "02", title: "Structuration", desc: "Organisation des systèmes et informations.", icon: Layers },
                                { step: "03", title: "Automatisation", desc: "Déploiement d’agents IA et workflows.", icon: Bot },
                                { step: "04", title: "Optimisation", desc: "Amélioration basée sur les résultats.", icon: TrendingUp }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="p-8 bg-dark rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                            <item.icon size={32} />
                                        </div>
                                        <div className="text-5xl font-display font-bold text-white/5 absolute top-4 right-6 select-none">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. EXPERTISE GRID */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Les briques technologiques que nous maîtrisons</h2>
                            <p className="text-gray-400">Non pas des services séparés, mais des compétences intégrées.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Numérisation & GED", icon: FileText },
                                { name: "Gestion de bases de données", icon: Database },
                                { name: "Développement web & App", icon: Globe },
                                { name: "Design & Identité visuelle", icon: Palette },
                                { name: "Production vidéo", icon: Video },
                                { name: "Cybersécurité & Data", icon: Shield },
                                { name: "Formation & Accompagnement", icon: GraduationCap },
                                { name: "Community Management", icon: Users },
                                { name: "IA & Automatisation", icon: Cpu }
                            ].map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors"
                                >
                                    <div className="p-3 bg-dark rounded-xl text-primary shrink-0">
                                        <skill.icon size={24} />
                                    </div>
                                    <span className="font-medium text-gray-200">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. WHY US */}
                <section className="py-24 px-6 bg-card">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">Pourquoi les entreprises travaillent avec nous</h2>
                        <div className="space-y-6 text-left">
                            {[
                                "Vision globale : Entreprise + Technologie",
                                "Solutions sur mesure, pas de templates génériques",
                                "Orientation résultats et retour sur investissement",
                                "Accompagnement humain et pédagogique",
                                "Approche durable et évolutive"
                            ].map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 p-6 bg-dark rounded-2xl border border-white/5"
                                >
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                                        <CheckCircle size={18} />
                                    </div>
                                    <span className="text-lg font-medium">{reason}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. CTA FINAL */}
                <section className="py-32 px-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                            Construisons un système digital <br />
                            à la hauteur de vos ambitions.
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/50"
                        >
                            Planifier un échange stratégique
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
