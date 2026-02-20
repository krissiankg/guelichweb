'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
    FileText, Database, Code, Globe, Palette, Video, Printer, ShieldCheck, GraduationCap, Share2, Bot
} from 'lucide-react'

const services = [
    {
        title: "Numérisation & Gestion Documentaire",
        description: "Dématérialisation et archivage intelligent de vos documents pour un accès rapide et sécurisé.",
        icon: FileText
    },
    {
        title: "Gestion de Bases de Données",
        description: "Architecture, optimisation et sécurisation de vos données pour une exploitation performante.",
        icon: Database
    },
    {
        title: "Développement de Solutions Informatiques",
        description: "Logiciels sur mesure adaptés aux besoins spécifiques de votre entreprise.",
        icon: Code
    },
    {
        title: "Création de Sites Web sur Mesure",
        description: "Sites vitrines et e-commerce modernes, performants et optimisés pour le SEO.",
        icon: Globe
    },
    {
        title: "Design Graphique & Identité Visuelle",
        description: "Création de logos, chartes graphiques et supports visuels percutants.",
        icon: Palette
    },
    {
        title: "Montage Vidéo & Production Multimédia",
        description: "Contenus vidéos engageants pour votre communication digitale.",
        icon: Video
    },
    {
        title: "Impression & Supports Physiques",
        description: "Solutions d'impression professionnelle pour tous vos supports marketing.",
        icon: Printer
    },
    {
        title: "Sécurité & Protection des Données",
        description: "Audits et mise en conformité pour protéger votre patrimoine numérique.",
        icon: ShieldCheck
    },
    {
        title: "Formation & Assistance Technique",
        description: "Accompagnement de vos équipes pour la maîtrise des nouveaux outils numériques.",
        icon: GraduationCap
    },
    {
        title: "Community Management & Stratégie Digitale",
        description: "Gestion de votre présence sur les réseaux sociaux et stratégie d'engagement.",
        icon: Share2
    },
    {
        title: "Intelligence Artificielle & Automatisation",
        description: "Intégration d'agents IA et automatisation des processus métiers pour plus d'efficacité.",
        icon: Bot
    }
]

export default function Services() {
    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Nos Domaines d'Expertise
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Des solutions complètes pour accompagner votre transformation numérique à chaque étape.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card p-8 rounded-2xl hover:bg-white/5 transition-all group border border-white/5 hover:border-primary/50"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
