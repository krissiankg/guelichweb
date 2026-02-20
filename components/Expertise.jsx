'use client'

import { motion } from 'framer-motion'
import { PenTool, Monitor, Smartphone, Layout, Code, Search } from 'lucide-react'

const services = [
  {
    title: "Design UI/UX",
    description: "Création d'expériences utilisateur intuitives et engageantes pour maximiser la rétention.",
    icon: <Layout size={28} />
  },
  {
    title: "Identité de Marque",
    description: "Définition et amélioration de la présence unique de votre marque sur le marché.",
    icon: <PenTool size={28} />
  },
  {
    title: "Développement",
    description: "Construction de solutions digitales et de sites web robustes et évolutifs.",
    icon: <Code size={28} />
  },
  {
    title: "Applications Mobiles",
    description: "Développement d'applications mobiles performantes et conviviales.",
    icon: <Smartphone size={28} />
  },
  {
    title: "SEO & Marketing",
    description: "Stratégies pour optimiser la visibilité de la marque et l'engagement de l'audience.",
    icon: <Search size={28} />
  },
  {
    title: "Visuels 3D",
    description: "Conception de modèles 3D immersifs et réalistes pour vos produits.",
    icon: <Monitor size={28} />
  }
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap text-center md:!text-left md:!flex-nowrap md:flex-row justify-center md:justify-between md:items-end mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-2 block"
            >
              Ce Que Nous Faisons
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Notre Expertise
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md text-center md:text-left"
          >
            Nous combinons recherche approfondie, stratégie créative et technologie innovante pour offrir les meilleures solutions à votre entreprise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-white/10 rounded-2xl bg-card hover:bg-white/5 transition-colors duration-300 cursor-pointer"
            >
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl text-white group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
