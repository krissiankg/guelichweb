'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Check, ArrowRight, Zap, Target, TrendingUp, ShieldCheck, Cpu, Smartphone, Palette, Video, Sparkles } from 'lucide-react'
import Link from 'next/link'

const offers = [
    {
        title: "Optimisation & Plan d’Automatisation",
        hook: "Identifiez précisément où vous perdez du temps et comment automatiser intelligemment.",
        icon: Target,
        features: [
            "Analyse complète des processus internes",
            "Identification des pertes de temps",
            "Score de maturité digitale",
            "Plan d’automatisation priorisé",
            "Rapport stratégique exploitable"
        ],
        result: "Clarté totale + feuille de route concrète.",
        cta: "Demander un diagnostic",
        highlight: false,
        href: "/contact#diagnostic"
    },
    {
        title: "Système Intelligent d’Entreprise",
        hook: "Automatisez vos tâches répétitives et gagnez jusqu’à 40% de productivité.",
        icon: Zap,
        features: [
            "Chatbot WhatsApp / Web",
            "CRM automatisé",
            "Génération automatique de devis",
            "Relances clients automatiques",
            "Tableaux de bord décisionnels"
        ],
        result: "Moins d’efforts. Plus de ventes.",
        cta: "Automatiser mon entreprise",
        highlight: true,
        href: "/contact#diagnostic"
    },
    {
        title: "Infrastructure Digitale & Croissance",
        hook: "Structurez votre entreprise pour scaler durablement.",
        icon: TrendingUp,
        features: [
            "Site web haute performance",
            "Base de données sécurisée",
            "Automatisations IA globales",
            "Dashboard stratégique",
            "Formation équipe",
            "Support prioritaire"
        ],
        result: "Entreprise moderne, scalable et pilotable.",
        cta: "Transformer mon entreprise",
        highlight: false,
        href: "/contact#diagnostic"
    }
]

const commOffers = [
    {
        title: "Community Management & Stratégie Sociale",
        subtitle: "Présence digitale professionnelle",
        hook: "Nous créons et gérons votre écosystème social pour attirer, engager et convertir votre audience.",
        icon: Smartphone,
        features: [
            "Création et optimisation pages Facebook, LinkedIn, Instagram",
            "Stratégie éditoriale mensuelle",
            "Calendrier de publication",
            "Création contenus visuels",
            "Gestion messages & commentaires",
            "Reporting performance"
        ],
        cta: "Développer ma présence en ligne",
        href: "/contact"
    },
    {
        title: "Design Graphique & Identité Visuelle",
        subtitle: "Image de marque stratégique",
        hook: "Une identité forte qui inspire confiance et différencie votre entreprise sur tous les supports.",
        icon: Palette,
        features: [
            "Création logo professionnel",
            "Charte graphique complète",
            "Supports marketing (flyers, brochures, bannières)",
            "Design réseaux sociaux",
            "Habillage digital & print"
        ],
        cta: "Créer mon identité visuelle",
        href: "/contact"
    },
    {
        title: "Vidéo Marketing & Publicité IA",
        subtitle: "Contenus vidéo qui convertissent",
        hook: "Production de vidéos modernes combinant storytelling et intelligence artificielle pour maximiser l'impact marketing.",
        icon: Video,
        features: [
            "Vidéos promotionnelles",
            "Publicités réseaux sociaux",
            "Montage professionnel",
            "Vidéos IA génératives",
            "Motion design",
            "Formats Ads optimisés"
        ],
        cta: "Créer ma vidéo marketing",
        href: "/contact"
    },
    {
        title: "UGC & Contenu IA Marketing",
        subtitle: "Contenu authentique nouvelle génération",
        hook: "Création de contenus UGC augmentés par IA pour améliorer l'engagement et les conversions publicitaires.",
        icon: Sparkles,
        features: [
            "Scripts marketing IA",
            "Création vidéos UGC IA",
            "Contenus Ads optimisés conversion",
            "Variations A/B testing créatif",
            "Adaptation multi-plateformes"
        ],
        cta: "Booster mes campagnes marketing",
        href: "/contact"
    }
]

export default function Offers() {
    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Choisissez votre niveau d’accélération
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Trois niveaux pour structurer, automatiser et faire évoluer votre entreprise.
                        </p>
                    </motion.div>

                    {/* Offers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {offers.map((offer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-8 rounded-3xl border flex flex-col transition-all duration-300 h-full ${offer.highlight
                                    ? 'bg-white/5 border-primary shadow-[0_0_30px_rgba(59,130,246,0.15)] z-10 scale-105'
                                    : 'bg-card border-white/5 hover:border-white/20 hover:shadow-lg'
                                    }`}
                            >
                                {offer.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                                        RECOMMANDÉ
                                    </div>
                                )}

                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${offer.highlight ? 'bg-primary text-white' : 'bg-white/10 text-gray-300'
                                    }`}>
                                    <offer.icon size={28} />
                                </div>

                                <h3 className="text-2xl font-display font-bold mb-3">{offer.title}</h3>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[40px]">{offer.hook}</p>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {offer.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <Check size={18} className="text-primary mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mb-8 pt-6 border-t border-white/10">
                                    <p className="font-bold text-center text-white">{offer.result}</p>
                                </div>

                                <Link href={offer.href} className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${offer.highlight
                                    ? 'bg-primary hover:bg-secondary text-white shadow-lg hover:shadow-primary/50'
                                    : 'bg-white text-black hover:bg-gray-200'
                                    }`}>
                                    {offer.cta}
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        ))}
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
                                Communication & Growth Studio
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                Nous combinons stratégie, créativité et intelligence artificielle pour développer votre visibilité et accélérer votre croissance digitale.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {commOffers.map((offer, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-card border border-white/5 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(37,99,235,0.2)] hover:-translate-y-2 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <offer.icon size={28} />
                                    </div>

                                    <h3 className="text-lg font-display font-bold mb-1 text-white">
                                        {offer.title}
                                    </h3>
                                    <h4 className="text-primary text-sm font-medium mb-3">
                                        {offer.subtitle}
                                    </h4>
                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[60px]">{offer.hook}</p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {offer.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={offer.href} className="w-full py-4 rounded-xl border border-white/10 text-center font-bold text-sm text-white hover:bg-white/10 hover:border-white/30 transition-colors mt-auto group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                        {offer.cta}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Why Choose Us Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-t border-white/10 pt-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">Pourquoi choisir Guelichweb ?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-blue-400">
                                    <Target size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Approche stratégique</h3>
                                <p className="text-gray-400">Nous analysons avant d’agir.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-purple-400">
                                    <Cpu size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Automatisation intelligente</h3>
                                <p className="text-gray-400">Nous créons des systèmes, pas des gadgets.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-green-400">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Vision long terme</h3>
                                <p className="text-gray-400">Nous structurons pour la croissance.</p>
                            </div>
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
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">De la visibilité à la performance digitale</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                                Guelichweb combine technologie, créativité et automatisation pour accompagner votre entreprise à chaque étape de sa croissance.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-primary hover:bg-secondary text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                            >
                                👉 Discuter de mon projet
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
