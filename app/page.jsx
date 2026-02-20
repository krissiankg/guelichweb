'use client'

import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import UseCases from '@/components/UseCases'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import {
  Clock,
  Database,
  LayoutGrid,
  EyeOff,
  ArrowRight,
  Target,
  Zap,
  TrendingUp,
  Check,
  FileText,
  Server,
  Globe,
  Palette,
  Video,
  Printer,
  Shield,
  GraduationCap,
  Users,
  Bot
} from 'lucide-react'
import Link from 'next/link'

// Offers Data (Replicated from Offers Page for consistency)
const offers = [
  {
    title: "Optimisation & Plan d’Automatisation",
    icon: Target,
    features: [
      "Analyse processus",
      "Audit pertes de temps",
      "Plan d’automatisation",
      "Rapport stratégique"
    ],
    highlight: false,
    href: "/offres"
  },
  {
    title: "Système Intelligent d’Entreprise",
    icon: Zap,
    features: [
      "Chatbot IA",
      "CRM automatisé",
      "Génération devis",
      "Tableaux de bord"
    ],
    highlight: true,
    href: "/offres"
  },
  {
    title: "Infrastructure Digitale",
    icon: TrendingUp,
    features: [
      "Site web haute performance",
      "Base de données",
      "Automatisations globales",
      "Formation équipe"
    ],
    highlight: false,
    href: "/offres"
  }
]

// Expertises Data
const expertises = [
  { name: "Numérisation & Gestion Documentaire", icon: FileText },
  { name: "Gestion de Bases de Données", icon: Server },
  { name: "Développement Web & App", icon: Globe },
  { name: "Design & Identité Visuelle", icon: Palette },
  { name: "Production Vidéo", icon: Video },
  { name: "Impression & Supports", icon: Printer },
  { name: "Sécurité & Data", icon: Shield },
  { name: "Formation & Assistance", icon: GraduationCap },
  { name: "Community Management", icon: Users },
  { name: "IA & Automatisation", icon: Bot },
]

// Methodology Steps
const steps = [
  { number: "01", title: "Analyse stratégique", desc: "Audit complet de vos processus et besoins." },
  { number: "02", title: "Structuration", desc: "Organisation de vos données et outils." },
  { number: "03", title: "Automatisation", desc: "Mise en place des systèmes intelligents." },
  { number: "04", title: "Optimisation", desc: "Suivi et amélioration continue." }
]

export default function Home() {
  return (
    <div className="bg-dark text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <TechMarquee />
      <UseCases />

      {/* PROBLEM SECTION */}
      <section className="py-24 px-6 bg-card border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Votre entreprise fonctionne… <br className="hidden md:block" />
              <span className="text-gray-400">mais pas de manière optimale.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Trop de tâches manuelles", desc: "Vos équipes perdent du temps sur des actions répétitives." },
              { icon: Database, title: "Données mal exploitées", desc: "Vos informations sont dispersées et non analysées." },
              { icon: LayoutGrid, title: "Outils dispersés", desc: "Un écosystème logiciel fragmenté et inefficace." },
              { icon: EyeOff, title: "Manque de visibilité", desc: "Pilotage à vue sans indicateurs stratégiques clairs." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-150" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8"
          >
            Guelichweb structure, <span className="text-primary">automatise</span> et optimise.
          </motion.h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            Nous ne sommes pas juste des développeurs. Nous analysons vos processus, structurons vos données et déployons des systèmes intelligents pour améliorer votre performance globale et libérer votre potentiel de croissance.
          </p>
          <Link href="/offres" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            Découvrir notre approche <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* MAIN OFFERS SECTION */}
      <section id="solutions" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-3xl border flex flex-col ${offer.highlight
                  ? 'bg-white/5 border-primary shadow-2xl shadow-primary/10 z-10 scale-105'
                  : 'bg-dark border-white/5 hover:border-white/20'
                  }`}
              >
                {offer.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Recommandé
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${offer.highlight ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'
                  }`}>
                  <offer.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-6">{offer.title}</h3>
                <ul className="space-y-3 mb-8 flex-grow">
                  {offer.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-primary mt-1 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href={offer.href} className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${offer.highlight ? 'bg-primary hover:bg-secondary text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}>
                  Voir l'offre
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE GRID */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-16">Un écosystème digital complet.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {expertises.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-center text-center gap-4 cursor-default"
              >
                <div className="p-3 bg-dark rounded-xl text-gray-400 group-hover:text-primary transition-colors">
                  <item.icon size={24} />
                </div>
                <span className="text-sm font-medium text-gray-300">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="py-24 px-6 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Notre approche en 4 étapes</h2>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="text-3xl font-bold text-white/10 font-display">{step.number}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="h-2 bg-white/10 rounded-full w-3/4" />
                  <div className="h-2 bg-white/10 rounded-full w-full" />
                  <div className="h-2 bg-white/10 rounded-full w-5/6" />
                  <div className="flex gap-4 mt-8">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                      <Zap size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold">Optimisation continue</div>
                      <div className="text-xs text-gray-400">Monitoring 24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">Des résultats concrets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "+40%", label: "Productivité", desc: "Gain moyen observé chez nos clients" },
              { value: "-30%", label: "Temps administratif", desc: "Réduction des tâches manuelles" },
              { value: "+25%", label: "Conversion client", desc: "Grâce à nos systèmes de relance" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8"
              >
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4 font-display">
                  {stat.value}
                </div>
                <div className="text-xl font-bold text-primary mb-2">{stat.label}</div>
                <p className="text-gray-400 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Prêt à structurer votre croissance ?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ne laissez plus l'opérationnel freiner votre développement. Passez au niveau supérieur.
          </p>
          <Link
            href="/contact#diagnostic"
            className="px-8 py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/50"
          >
            Planifier un appel stratégique
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
