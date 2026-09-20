'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { ArrowUpRight, ExternalLink, MapPin } from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { fadeUp } from '@/components/ui/SectionHeading'
import { useDictionary } from '@/components/DictionaryProvider'
import { projectFamilies, projects } from '@/lib/projectsData'

export default function PortfolioView() {
    const dict = useDictionary()
    const page = dict?.pagePortfolio
    const params = useParams()
    const lang = params?.lang || 'fr'

    const [family, setFamily] = useState('all')

    const visible = useMemo(
        () => (family === 'all' ? projects : projects.filter((project) => project.family === family)),
        [family]
    )

    // Un onglet n'est affiché que s'il contient au moins un projet.
    const tabs = ['all', ...projectFamilies.filter((key) => projects.some((p) => p.family === key))]

    const countLabel =
        visible.length === 1
            ? page?.count?.one
            : page?.count?.other?.replace('{count}', visible.length)

    return (
        <div className="min-h-screen bg-dark text-white">
            <Navbar dict={dict?.navbar} />

            <main className="pt-32 pb-24">
                <section className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeUp} className="max-w-3xl">
                        <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                            {page?.hero?.badge}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            {page?.hero?.title}
                        </h1>
                        <p className="text-lg text-gray-400 leading-relaxed">{page?.hero?.desc}</p>
                    </motion.div>

                    <div className="mt-12 flex flex-wrap items-center gap-3">
                        {tabs.map((key) => (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setFamily(key)}
                                aria-pressed={family === key}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border ${
                                    family === key
                                        ? 'bg-primary border-primary text-white'
                                        : 'border-white/15 text-gray-300 hover:border-white/40 hover:text-white'
                                }`}
                            >
                                {page?.filters?.[key]}
                            </button>
                        ))}
                        <span className="ml-auto text-sm text-gray-500">{countLabel}</span>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visible.map((project) => (
                            <motion.article
                                key={project.slug}
                                {...fadeUp}
                                className="group flex flex-col rounded-2xl border border-white/10 bg-card overflow-hidden hover:border-primary/40 transition-colors"
                            >
                                <Link
                                    href={`/${lang}/project/${project.slug}`}
                                    className="relative block aspect-[16/10] overflow-hidden"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </Link>

                                <div className="flex flex-col flex-1 p-6">
                                    <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                                        {project.category}
                                    </span>
                                    <h2 className="text-xl font-display font-bold mb-3 leading-snug">
                                        <Link
                                            href={`/${lang}/project/${project.slug}`}
                                            className="hover:text-primary transition-colors"
                                        >
                                            {project.title}
                                        </Link>
                                    </h2>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-5">
                                        {project.description}
                                    </p>

                                    <dl className="text-sm space-y-1.5 mb-5">
                                        <div className="flex gap-2">
                                            <dt className="text-gray-500 shrink-0">{page?.card?.sector} :</dt>
                                            <dd className="text-gray-300">{project.sector}</dd>
                                        </div>
                                        {project.location && (
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <MapPin size={14} className="text-gray-500 shrink-0" />
                                                <span>{project.location}</span>
                                            </div>
                                        )}
                                    </dl>

                                    {project.stack && (
                                        <ul className="flex flex-wrap gap-2 mb-6">
                                            {project.stack.map((tool) => (
                                                <li
                                                    key={tool}
                                                    className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-xs text-gray-300"
                                                >
                                                    {tool}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
                                        <Link
                                            href={`/${lang}/project/${project.slug}`}
                                            className="inline-flex items-center gap-1.5 text-white hover:text-primary transition-colors"
                                        >
                                            {page?.card?.detail}
                                            <ArrowUpRight size={15} />
                                        </Link>
                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                                            >
                                                {page?.card?.visit}
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                <section className="max-w-4xl mx-auto px-6 mt-24">
                    <motion.div
                        {...fadeUp}
                        className="rounded-3xl border border-white/10 bg-card p-10 md:p-14 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            {page?.cta?.title}
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">{page?.cta?.desc}</p>
                        <Link
                            href={`/${lang}/contact`}
                            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold transition-colors"
                        >
                            {page?.cta?.button}
                            <ArrowUpRight size={18} />
                        </Link>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
