'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useDictionary } from '@/components/DictionaryProvider'

export default function Hero() {
  const dict = useDictionary()
  const params = useParams()
  const lang = params?.lang || 'fr'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-dark to-dark" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">{dict?.home?.hero?.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight"
          >
            {dict?.home?.hero?.title1} <span className="text-gradient">{dict?.home?.hero?.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed"
          >
            {dict?.home?.hero?.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href={`/${lang}/contact#diagnostic`}
              className="px-8 py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              {dict?.home?.hero?.ctaPrimary}
              <ArrowRight size={20} />
            </Link>
            <Link
              href={`/${lang}/offres`}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              {dict?.home?.hero?.ctaSecondary}
            </Link>
          </motion.div>

          {/* Portfolio Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-16"
          >
             <Link
                href={`/${lang}/portfolio`}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm font-medium uppercase tracking-wider"
              >
                <div className="w-8 h-[1px] bg-gray-600 group-hover:bg-primary transition-colors" />
                {dict?.home?.hero?.portfolio || "Découvrir notre portfolio"}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </motion.div>

          {/* Credibility Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {dict?.home?.hero?.indicators?.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                <div className="p-1 rounded-full bg-primary/20 text-primary">
                  <CheckCircle2 size={16} />
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">{dict?.home?.hero?.scroll}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  )
}
