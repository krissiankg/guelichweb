'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useDictionary } from '@/components/DictionaryProvider'
import { featuredProjects } from '@/lib/projectsData'

export default function Work() {
  const dict = useDictionary()
  const copy = dict?.home?.work
  const params = useParams()
  const lang = params?.lang || 'fr'

  return (
    <section id="work" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {copy?.title}
          </motion.h2>
          <p className="text-lg text-gray-400 leading-relaxed">{copy?.desc}</p>
          <div className="h-[1px] w-full bg-white/10 mt-8"></div>
        </div>

        <div className="space-y-16 md:space-y-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              <Link
                href={`/${lang}/project/${project.slug}`}
                className="w-full md:w-3/5 relative group overflow-hidden rounded-2xl cursor-pointer block aspect-[4/3]"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </Link>

              <div className="w-full md:w-2/5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs uppercase tracking-wider text-gray-400">{project.sector}</span>
                  <span className="h-[1px] w-12 bg-white/20"></span>
                </div>
                <p className="text-xl text-gray-400 mb-2">{project.category}</p>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">{project.title}</h3>
                <p className="text-xl text-gray-400 mb-6">{project.description}</p>
                <Link
                  href={`/${lang}/project/${project.slug}`}
                  className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1 font-medium"
                >
                  {copy?.viewCase}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            href={`/${lang}/portfolio`}
            className="inline-block border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all text-sm font-bold uppercase tracking-widest"
          >
            {copy?.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}
