'use client'

import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import UseCases from '@/components/UseCases'
import Work from '@/components/Work'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import {
  Clock,
  Database,
  LayoutGrid,
  EyeOff,
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
  Bot,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { useDictionary } from '@/components/DictionaryProvider'

const problemIcons = [Clock, Database, LayoutGrid, EyeOff]
const offerIcons = [Target, Zap, TrendingUp]
const expertiseIcons = [FileText, Server, Globe, Palette, Video, Printer, Shield, GraduationCap, Users, Bot]

export default function Home({ params: { lang } }) {
  const dict = useDictionary()
  const home = dict?.home

  return (
    <div className="bg-dark text-white font-sans selection:bg-primary selection:text-white">
      <Navbar dict={dict?.navbar} />
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
              {home?.problem?.title1} <br className="hidden md:block" />
              <span className="text-gray-400">{home?.problem?.title2}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {home?.problem?.items?.map((item, index) => {
              const Icon = problemIcons[index % problemIcons.length]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
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
            {home?.solution?.title1}<span className="text-primary">{home?.solution?.titleHighlight}</span>{home?.solution?.title2}
          </motion.h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            {home?.solution?.desc}
          </p>
          <Link href={`/${lang}/offres`} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            {home?.solution?.cta} <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* MAIN OFFERS SECTION */}
      <section id="solutions" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {home?.offers?.items?.map((offer, index) => {
              const Icon = offerIcons[index % offerIcons.length]
              const highlight = index === 1; // second item gets highlighted
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-3xl border flex flex-col ${highlight
                    ? 'bg-white/5 border-primary shadow-2xl shadow-primary/10 z-10 scale-105'
                    : 'bg-dark border-white/5 hover:border-white/20'
                    }`}
                >
                  {highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {home?.offers?.recommended}
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${highlight ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'
                    }`}>
                    <Icon size={24} />
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
                  <Link href={`/${lang}/offres`} className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${highlight ? 'bg-primary hover:bg-secondary text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}>
                    {home?.offers?.cta}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* EXPERTISE GRID */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-16">{home?.expertise?.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {home?.expertise?.items?.map((name, index) => {
              const Icon = expertiseIcons[index % expertiseIcons.length]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-center text-center gap-4 cursor-default"
                >
                  <div className="p-3 bg-dark rounded-xl text-gray-400 group-hover:text-primary transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="text-sm font-medium text-gray-300">{name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="py-24 px-6 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">{home?.methodology?.title}</h2>
              <div className="space-y-8">
                {home?.methodology?.steps?.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="text-3xl font-bold text-white/10 font-display">0{index + 1}</div>
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
                      <div className="text-sm font-bold">{home?.methodology?.badge?.title}</div>
                      <div className="text-xs text-gray-400">{home?.methodology?.badge?.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Work />

      {/* RESULTS SECTION */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">{home?.results?.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {home?.results?.items?.map((stat, index) => (
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
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">{home?.cta?.title}</h2>
          <p className="text-xl text-gray-300 mb-12">
            {home?.cta?.desc}
          </p>
          <Link
            href={`/${lang}/contact#diagnostic`}
            className="px-8 py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/50"
          >
            {home?.cta?.button}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
