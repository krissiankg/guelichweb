'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: "100%", value: "Rétention Client", description: "Recommandé par plus de 500 entreprises" },
  { label: "40M€", value: "Revenus Générés", description: "Sur l'ensemble des campagnes partenaires" },
  { label: "300%", value: "Taux de Croissance", description: "Augmentation moyenne de l'engagement" },
  { label: "50+", value: "Prix Remportés", description: "Reconnaissance internationale du design" },
]

export default function Results() {
  return (
    <section id="results" className="py-24 bg-gradient-to-b from-dark to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8"
            >
              Pas juste des chiffres, <br />
              vous pouvez aussi obtenir <br />
              <span className="text-gradient">bien plus encore.</span>
            </motion.h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Nous nous assurons que votre marque ne se contente pas de se démarquer, mais qu'elle génère également un engagement et des conversions significatifs.
            </p>
            <a href="#contact" className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Passons à l'échelle
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all"
              >
                <div className="text-xs text-gray-400 border border-white/20 rounded-full px-2 py-1 w-fit mb-4">Vérifié</div>
                <h3 className="text-4xl font-bold mb-2">{stat.label}</h3>
                <div className="text-lg font-medium text-white mb-1">{stat.value}</div>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-card border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-6xl font-serif text-white/20 mb-6">&quot;</div>
            <h3 className="text-2xl md:text-4xl font-display font-medium leading-snug mb-12 max-w-3xl">
              Voyez comment nous concrétisons votre idée. &quot;Travailler avec Guelichweb a transformé notre marque. Leur approche stratégique et leur souci du détail ont élevé notre présence en ligne.&quot;
            </h3>

            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/100/100?random=5" alt="Client" className="w-12 h-12 rounded-full object-cover border-2 border-white/20" />
              <div>
                <div className="font-bold text-white">Sarah Mitchell</div>
                <div className="text-sm text-gray-400">Directrice Marketing Groupe, TechCorp</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
