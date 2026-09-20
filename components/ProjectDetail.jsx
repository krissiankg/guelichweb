'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const InfoRow = ({ label, value }) =>
    value ? (
        <div>
            <dt className="text-gray-500 text-xs uppercase tracking-widest mb-1">{label}</dt>
            <dd className="text-gray-200">{value}</dd>
        </div>
    ) : null

const ProjectDetail = ({ project, related = [], dict, lang }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-24 bg-dark"
        >
            <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/40"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            href={`/${lang}/portfolio`}
                            className="mb-8 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={20} /> {dict?.back}
                        </Link>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-5 max-w-4xl"
                        >
                            {project.title}
                        </motion.h1>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-sm">
                                {project.category}
                            </span>
                            {project.location && (
                                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-sm">
                                    {project.location}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    <aside className="lg:col-span-1 space-y-8">
                        <div className="p-6 border border-white/10 rounded-2xl bg-card">
                            <h2 className="text-gray-400 text-sm uppercase tracking-widest mb-5">
                                {dict?.infoTitle}
                            </h2>
                            <dl className="space-y-4">
                                <InfoRow label={dict?.categoryLabel} value={project.category} />
                                <InfoRow label={dict?.sectorLabel} value={project.sector} />
                                <InfoRow label={dict?.locationLabel} value={project.location} />
                                <InfoRow
                                    label={dict?.stackLabel}
                                    value={project.stack?.join(' · ')}
                                />
                            </dl>

                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-7 inline-flex items-center gap-2 text-primary hover:text-white font-semibold transition-colors"
                                >
                                    {dict?.visit}
                                    <ExternalLink size={15} />
                                </a>
                            )}
                        </div>

                        <div className="p-6 border border-primary/20 rounded-2xl bg-primary/5">
                            <h2 className="text-xl font-display font-bold mb-3">{dict?.ctaTitle}</h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                {dict?.ctaDesc}
                            </p>
                            <Link
                                href={`/${lang}/contact`}
                                className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-5 py-3 rounded-full text-sm font-bold transition-colors"
                            >
                                {dict?.ctaButton}
                                <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </aside>

                    <div className="lg:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                            {dict?.overviewTitle}
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12">
                            {project.description}
                        </p>

                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                            {dict?.approachTitle}
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12">
                            {dict?.approachDesc}
                        </p>

                        {/* La section résultats n'apparaît que lorsque des chiffres réels sont renseignés. */}
                        {project.results?.length > 0 && (
                            <>
                                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                                    {dict?.resultTitle}
                                </h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {project.results.map((result) => (
                                        <li
                                            key={result.label}
                                            className="p-5 border border-white/10 rounded-2xl bg-card"
                                        >
                                            <p className="text-3xl font-display font-bold text-primary mb-1">
                                                {result.value}
                                            </p>
                                            <p className="text-gray-300">{result.label}</p>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>

                {related.length > 0 && (
                    <section className="mt-24">
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
                            {dict?.otherTitle}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {related.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/${lang}/project/${item.slug}`}
                                    className="group rounded-2xl border border-white/10 bg-card overflow-hidden hover:border-primary/40 transition-colors"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(min-width: 768px) 33vw, 100vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                                            {item.category}
                                        </p>
                                        <p className="font-display font-bold leading-snug group-hover:text-primary transition-colors">
                                            {item.title}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </motion.div>
    )
}

export default ProjectDetail
