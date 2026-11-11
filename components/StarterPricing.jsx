'use client'

import { motion } from 'framer-motion'
import { Check, MessageCircle, Globe, ShoppingBag, Server, Bot, Wallet, ShieldCheck } from 'lucide-react'
import { useDictionary } from '@/components/DictionaryProvider'
import { whatsappLink } from '@/lib/site'

const itemIcons = [Globe, ShoppingBag]
const termIcons = [Wallet, ShieldCheck]

// Fixed-price entry offers, shown on the home page and on the offers page.
export default function StarterPricing({ className = 'bg-card' }) {
  const starter = useDictionary()?.home?.starter
  if (!starter?.items?.length) return null

  return (
    <section id="tarifs" className={`py-24 px-6 border-b border-white/5 scroll-mt-20 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
            {starter.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">{starter.title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{starter.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {starter.items.map((item, index) => {
            const Icon = itemIcons[index % itemIcons.length]
            const highlight = index === 0
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl border flex flex-col ${highlight
                  ? 'bg-white/5 border-primary shadow-2xl shadow-primary/10'
                  : 'bg-dark border-white/10'
                  }`}
              >
                {highlight && (
                  <div className="absolute -top-4 left-8 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {starter.popular}
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">{starter.from}</div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-white">{item.price}</div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-primary mt-1 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(item.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-lg font-bold text-center transition-colors bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  {starter.cta}
                </a>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 text-gray-300 flex items-center justify-center shrink-0">
              <Server size={20} />
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-bold">{starter.hosting?.title}</h3>
                <span className="text-primary font-bold">{starter.hosting?.price}</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">{starter.hosting?.desc}</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 text-gray-300 flex items-center justify-center shrink-0">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold">{starter.custom?.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{starter.custom?.desc}</p>
              <a
                href={whatsappLink(starter.custom?.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-bold text-primary hover:underline"
              >
                {starter.custom?.cta}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {starter.terms?.map((term, index) => {
            const Icon = termIcons[index % termIcons.length]
            return (
              <div key={term.title} className="flex items-start gap-3 text-sm">
                <Icon size={18} className="text-primary mt-0.5 shrink-0" />
                <p className="text-gray-300">
                  <span className="font-bold text-white">{term.title} : </span>
                  {term.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
