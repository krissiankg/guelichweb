'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import {
    ArrowRight,
    Bot,
    Briefcase,
    Building2,
    Check,
    Cpu,
    Database,
    FileSignature,
    Globe,
    HeartHandshake,
    LayoutDashboard,
    Mail,
    MapPin,
    MessageCircle,
    Palette,
    Phone,
    Repeat,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Target,
    TrendingUp,
    User,
    Users,
    Video,
    Workflow,
    Zap,
} from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeading, { fadeUp } from '@/components/ui/SectionHeading'
import FaqAccordion from '@/components/ui/FaqAccordion'
import { useDictionary } from '@/components/DictionaryProvider'
import { CONTACT, whatsappLink } from '@/lib/site'

const offerIcons = [Target, Zap, TrendingUp]
const commIcons = [Smartphone, Palette, Video, Sparkles]
const whyUsIcons = [Target, Cpu, ShieldCheck]
const whyUsColors = ['text-blue-400', 'text-purple-400', 'text-green-400']
const audienceIcons = [User, Briefcase, HeartHandshake, Building2]
const journeyIcons = [Users, Globe, MessageCircle, Bot, Workflow, Database, Repeat, LayoutDashboard]
const scenarioIcons = [MessageCircle, FileSignature, Database, Repeat]

export default function OffersView() {
    const dict = useDictionary()
    const pageOffers = dict?.pageOffers
    const params = useParams()
    const lang = params?.lang || 'fr'

    const hero = pageOffers?.hero
    const who = pageOffers?.who
    const audience = pageOffers?.audience
    const journey = pageOffers?.journey
    const pricingNote = pageOffers?.pricingNote
    const scenarios = pageOffers?.scenarios
    const stack = pageOffers?.stack
    const work = pageOffers?.work
    const method = pageOffers?.method
    const local = pageOffers?.local
    const faq = pageOffers?.faq
    const contact = pageOffers?.contact

    const diagnosticHref = `/${lang}/contact`

    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
            <Navbar dict={dict?.navbar} />

            <main className="flex-grow">
                {/* HERO */}
                <section className="relative pt-36 pb-20 px-6 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

                    <div className="relative max-w-5xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
                                <MapPin size={15} className="text-primary" />
                                {hero?.badge}
                            </span>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8">
                                {hero?.title1}
                                <span className="text-gradient">{hero?.titleHighlight}</span>
                                {hero?.title2}
                            </h1>

                            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                                {hero?.desc}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                                <Link
                                    href={diagnosticHref}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_25px_rgba(37,99,235,0.35)]"
                                >
                                    {hero?.ctaPrimary}
                                    <ArrowRight size={18} />
                                </Link>
                                <a
                                    href={whatsappLink(hero?.ctaSecondary)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:bg-white/5 text-white font-bold rounded-full transition-colors"
                                >
                                    <MessageCircle size={18} className="text-[#25D366]" />
                                    {hero?.ctaSecondary}
                                </a>
                            </div>

                            <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400">
                                {hero?.highlights?.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check size={16} className="text-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* JOURNEY */}
                <section className="py-24 px-6 bg-card border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading label={journey?.label} title={journey?.title} desc={journey?.desc} />

                        <motion.p
                            {...fadeUp}
                            className="text-center font-display font-bold text-base md:text-2xl text-white mb-16 px-6 py-6 rounded-2xl border border-primary/30 bg-primary/5 leading-relaxed"
                        >
                            {journey?.summary}
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {journey?.steps?.map((step, index) => {
                                const Icon = journeyIcons[index % journeyIcons.length]
                                return (
                                    <motion.div
                                        key={index}
                                        {...fadeUp}
                                        transition={{ delay: (index % 4) * 0.08 }}
                                        className="relative p-6 rounded-2xl bg-dark border border-white/5 hover:border-primary/40 transition-colors"
                                    >
                                        <span className="absolute top-5 right-6 text-4xl font-display font-bold text-white/5">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                                            <Icon size={22} />
                                        </div>
                                        <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* WHO IS GUELICHWEB */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp}>
                            <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                                {who?.label}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{who?.title}</h2>
                            <p className="text-gray-400 leading-relaxed mb-5">{who?.p1}</p>
                            <p className="text-gray-400 leading-relaxed mb-10">{who?.p2}</p>

                            <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-white/5">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 bg-white/5">
                                    <Image
                                        src="/images/christian.jpg"
                                        alt={who?.name || 'Christian Guegueligue'}
                                        fill
                                        sizes="64px"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-display font-bold text-white">{who?.name}</p>
                                    <p className="text-sm text-primary">{who?.role}</p>
                                    <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
                                        <MapPin size={13} />
                                        {who?.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            {who?.points?.map((point, index) => (
                                <motion.div
                                    key={index}
                                    {...fadeUp}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-7 rounded-2xl bg-card border border-white/5 hover:border-primary/40 transition-colors"
                                >
                                    <h3 className="font-display font-bold text-xl mb-2 flex items-center gap-3">
                                        <Check size={20} className="text-primary shrink-0" />
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{point.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AUDIENCE */}
                <section className="py-24 px-6 bg-card border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading title={audience?.title} desc={audience?.desc} />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {audience?.items?.map((item, index) => {
                                const Icon = audienceIcons[index % audienceIcons.length]
                                return (
                                    <motion.div
                                        key={index}
                                        {...fadeUp}
                                        transition={{ delay: index * 0.08 }}
                                        className="p-7 rounded-2xl bg-dark border border-white/5 hover:border-primary/40 transition-colors flex flex-col"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="font-display font-bold text-lg mb-3">{item.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                                        <ul className="space-y-2.5 mt-auto pt-5 border-t border-white/5">
                                            {item.needs?.map((need, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                                                    {need}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* MAIN OFFERS */}
                <section id="offres" className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading title={pageOffers?.title} desc={pageOffers?.desc} />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 items-stretch">
                            {pageOffers?.mainOffers?.map((offer, index) => {
                                const Icon = offerIcons[index % offerIcons.length]
                                const highlight = index === 1

                                return (
                                    <motion.div
                                        key={index}
                                        {...fadeUp}
                                        transition={{ delay: index * 0.1 }}
                                        className={`relative p-8 rounded-3xl border flex flex-col transition-all duration-300 h-full ${highlight
                                            ? 'bg-white/5 border-primary shadow-[0_0_30px_rgba(59,130,246,0.15)] z-10 lg:scale-105'
                                            : 'bg-card border-white/5 hover:border-white/20 hover:shadow-lg'
                                            }`}
                                    >
                                        {highlight && (
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                                                {pageOffers?.recommended}
                                            </div>
                                        )}

                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${highlight ? 'bg-primary text-white' : 'bg-white/10 text-gray-300'
                                            }`}>
                                            <Icon size={28} />
                                        </div>

                                        <h3 className="text-2xl font-display font-bold mb-3">{offer.title}</h3>
                                        <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[40px]">{offer.hook}</p>

                                        <ul className="space-y-4 mb-8 flex-grow">
                                            {offer.features?.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                    <Check size={18} className="text-primary mt-0.5 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mb-8 pt-6 border-t border-white/10">
                                            <p className="font-bold text-center text-white">{offer.result}</p>
                                        </div>

                                        <Link
                                            href={diagnosticHref}
                                            className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${highlight
                                                ? 'bg-primary hover:bg-secondary text-white shadow-lg hover:shadow-primary/50'
                                                : 'bg-white text-black hover:bg-gray-200'
                                                }`}
                                        >
                                            {offer.cta}
                                            <ArrowRight size={18} />
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </div>

                        <motion.div
                            {...fadeUp}
                            className="mt-16 p-8 md:p-10 rounded-3xl border border-white/10 bg-card flex flex-col md:flex-row items-center justify-between gap-8"
                        >
                            <div className="max-w-2xl">
                                <h3 className="text-2xl font-display font-bold mb-3">{pricingNote?.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{pricingNote?.desc}</p>
                            </div>
                            <Link
                                href={diagnosticHref}
                                className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full border border-primary text-primary hover:bg-primary hover:text-white font-bold transition-colors"
                            >
                                {pricingNote?.cta}
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* CONCRETE SCENARIOS */}
                <section className="py-24 px-6 bg-card border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading label={scenarios?.label} title={scenarios?.title} desc={scenarios?.desc} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {scenarios?.items?.map((item, index) => {
                                const Icon = scenarioIcons[index % scenarioIcons.length]
                                return (
                                    <motion.div
                                        key={index}
                                        {...fadeUp}
                                        transition={{ delay: (index % 2) * 0.1 }}
                                        className="p-8 rounded-3xl bg-dark border border-white/5 hover:border-primary/40 transition-colors"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                <Icon size={24} />
                                            </div>
                                            <h3 className="font-display font-bold text-xl">{item.title}</h3>
                                        </div>

                                        <dl className="space-y-4 text-sm">
                                            <div>
                                                <dt className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                                                    {scenarios?.problemLabel}
                                                </dt>
                                                <dd className="text-gray-400 leading-relaxed">{item.problem}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                                                    {scenarios?.solutionLabel}
                                                </dt>
                                                <dd className="text-gray-300 leading-relaxed">{item.solution}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                                                    {scenarios?.resultLabel}
                                                </dt>
                                                <dd className="text-white font-medium leading-relaxed">{item.result}</dd>
                                            </div>
                                        </dl>

                                        <p className="mt-6 pt-5 border-t border-white/5 text-xs text-gray-500">
                                            <span className="font-bold uppercase tracking-widest">{scenarios?.stackLabel} : </span>
                                            {item.stack}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* TECH STACK TABLE */}
                <section className="py-24 px-6">
                    <div className="max-w-5xl mx-auto">
                        <SectionHeading label={stack?.label} title={stack?.title} desc={stack?.desc} />

                        <motion.div {...fadeUp} className="overflow-x-auto rounded-3xl border border-white/10 bg-card">
                            <table className="w-full text-left border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-gray-400">
                                            {stack?.headers?.tool}
                                        </th>
                                        <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-gray-400">
                                            {stack?.headers?.role}
                                        </th>
                                        <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-gray-400">
                                            {stack?.headers?.usage}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stack?.rows?.map((row, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                                        >
                                            <td className="px-6 py-5 font-display font-bold text-white whitespace-nowrap">
                                                {row.tool}
                                            </td>
                                            <td className="px-6 py-5 text-sm text-primary">{row.role}</td>
                                            <td className="px-6 py-5 text-sm text-gray-400">{row.usage}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </section>

                {/* WORK / ENGAGEMENT FORMATS */}
                <section className="py-24 px-6 bg-card border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading label={work?.label} title={work?.title} desc={work?.desc} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {work?.projects?.map((project, index) => (
                                <motion.article
                                    key={index}
                                    {...fadeUp}
                                    transition={{ delay: (index % 2) * 0.1 }}
                                    className="p-8 rounded-3xl bg-dark border border-white/5 hover:border-primary/40 transition-colors flex flex-col"
                                >
                                    <div className="flex items-start justify-between gap-4 mb-5">
                                        <div>
                                            <h3 className="font-display font-bold text-xl mb-2">{project.name}</h3>
                                            <p className="text-sm text-primary">{project.sector}</p>
                                            <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
                                                <MapPin size={13} />
                                                {project.location}
                                            </p>
                                        </div>
                                        <span className="shrink-0 px-3 py-1 rounded-full border border-white/10 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                                            {work?.badge}
                                        </span>
                                    </div>

                                    <dl className="space-y-4 text-sm flex-grow">
                                        <div>
                                            <dt className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                                                {work?.problemLabel}
                                            </dt>
                                            <dd className="text-gray-400 leading-relaxed">{project.problem}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                                                {work?.solutionLabel}
                                            </dt>
                                            <dd className="text-gray-300 leading-relaxed">{project.solution}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                                                {work?.resultLabel}
                                            </dt>
                                            <dd className="text-white font-medium leading-relaxed">{project.result}</dd>
                                        </div>
                                    </dl>

                                    <p className="mt-6 pt-5 border-t border-white/5 text-xs text-gray-500">{project.stack}</p>
                                </motion.article>
                            ))}
                        </div>

                        <motion.div
                            {...fadeUp}
                            className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl border border-white/10 bg-dark"
                        >
                            <p className="text-gray-400 leading-relaxed max-w-2xl">{work?.note}</p>
                            <Link
                                href={diagnosticHref}
                                className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black hover:bg-gray-200 font-bold transition-colors"
                            >
                                {work?.cta}
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* METHOD */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading label={method?.label} title={method?.title} desc={method?.desc} />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {method?.steps?.map((step, index) => (
                                <motion.div
                                    key={index}
                                    {...fadeUp}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/40 transition-colors flex flex-col"
                                >
                                    <span className="font-display font-bold text-5xl text-primary/20 mb-4">{step.step}</span>
                                    <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">{step.desc}</p>
                                    <div className="pt-5 border-t border-white/5">
                                        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                                            {method?.deliverableLabel}
                                        </p>
                                        <p className="text-sm text-white">{step.deliverable}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LOCAL PRESENCE */}
                <section className="py-24 px-6 bg-card border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading label={local?.label} title={local?.title} desc={local?.desc} />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                            {local?.points?.map((point, index) => (
                                <motion.div
                                    key={index}
                                    {...fadeUp}
                                    transition={{ delay: index * 0.08 }}
                                    className="p-7 rounded-2xl bg-dark border border-white/5 hover:border-primary/40 transition-colors"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                                        <MapPin size={22} />
                                    </div>
                                    <h3 className="font-display font-bold text-lg mb-2">{point.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{point.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div {...fadeUp} className="text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">
                                {local?.citiesLabel}
                            </p>
                            <ul className="flex flex-wrap items-center justify-center gap-3">
                                {local?.cities?.map((city, index) => (
                                    <li
                                        key={index}
                                        className="px-5 py-2 rounded-full border border-white/10 bg-dark text-sm text-gray-300"
                                    >
                                        {city}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* COMMUNICATION & GROWTH STUDIO */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading
                            title={pageOffers?.commStudio?.title}
                            desc={pageOffers?.commStudio?.desc}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pageOffers?.commStudio?.offers?.map((offer, index) => {
                                const Icon = commIcons[index % commIcons.length]
                                return (
                                    <motion.div
                                        key={index}
                                        {...fadeUp}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-card border border-white/5 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(37,99,235,0.2)] hover:-translate-y-2 group"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Icon size={28} />
                                        </div>

                                        <h3 className="text-lg font-display font-bold mb-1 text-white">{offer.title}</h3>
                                        <h4 className="text-primary text-sm font-medium mb-3">{offer.subtitle}</h4>
                                        <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[60px]">{offer.hook}</p>

                                        <ul className="space-y-4 mb-8 flex-grow">
                                            {offer.features?.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={diagnosticHref}
                                            className="w-full py-4 rounded-xl border border-white/10 text-center font-bold text-sm text-white hover:bg-white/10 hover:border-white/30 transition-colors mt-auto group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                                        >
                                            {offer.cta}
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* WHY US */}
                <section className="py-24 px-6 bg-card border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading title={pageOffers?.whyUs?.title} />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            {pageOffers?.whyUs?.points?.map((point, index) => {
                                const Icon = whyUsIcons[index % whyUsIcons.length]
                                const colorClass = whyUsColors[index % whyUsColors.length]
                                return (
                                    <motion.div
                                        key={index}
                                        {...fadeUp}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className={`w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 ${colorClass}`}>
                                            <Icon size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                                        <p className="text-gray-400">{point.desc}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading label={faq?.label} title={faq?.title} desc={faq?.desc} />

                        <FaqAccordion items={faq?.items} />
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="py-24 px-6 bg-card border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading label={contact?.label} title={contact?.title} desc={contact?.desc} />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.ul {...fadeUp} className="space-y-4">
                                <li>
                                    <a
                                        href={whatsappLink(contact?.ctaWhatsapp)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-5 p-6 rounded-2xl bg-dark border border-white/5 hover:border-[#25D366]/50 transition-colors"
                                    >
                                        <span className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                                            <MessageCircle size={24} />
                                        </span>
                                        <span>
                                            <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                                                {contact?.whatsappLabel}
                                            </span>
                                            <span className="block text-white font-display font-bold">
                                                {CONTACT.phoneDisplay}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${CONTACT.phone}`}
                                        className="flex items-center gap-5 p-6 rounded-2xl bg-dark border border-white/5 hover:border-primary/50 transition-colors"
                                    >
                                        <span className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <Phone size={24} />
                                        </span>
                                        <span>
                                            <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                                                {contact?.phoneLabel}
                                            </span>
                                            <span className="block text-white font-display font-bold">
                                                {CONTACT.phoneDisplay}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${CONTACT.email}`}
                                        className="flex items-center gap-5 p-6 rounded-2xl bg-dark border border-white/5 hover:border-primary/50 transition-colors"
                                    >
                                        <span className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <Mail size={24} />
                                        </span>
                                        <span>
                                            <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                                                {contact?.emailLabel}
                                            </span>
                                            <span className="block text-white font-display font-bold break-all">
                                                {CONTACT.email}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            </motion.ul>

                            <motion.div
                                {...fadeUp}
                                transition={{ delay: 0.1 }}
                                className="p-8 rounded-3xl bg-dark border border-white/10 flex flex-col"
                            >
                                <dl className="space-y-6 mb-8">
                                    <div>
                                        <dt className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                                            {contact?.locationLabel}
                                        </dt>
                                        <dd className="text-white flex items-center gap-2">
                                            <MapPin size={16} className="text-primary shrink-0" />
                                            {contact?.locationValue}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                                            {contact?.hoursLabel}
                                        </dt>
                                        <dd className="text-white">{contact?.hoursValue}</dd>
                                    </div>
                                </dl>

                                <div className="mt-auto space-y-3">
                                    <Link
                                        href={diagnosticHref}
                                        className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary hover:bg-secondary text-white font-bold transition-colors"
                                    >
                                        {contact?.ctaForm}
                                        <ArrowRight size={18} />
                                    </Link>
                                    <a
                                        href={whatsappLink(contact?.ctaWhatsapp)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/15 hover:bg-white/5 text-white font-bold transition-colors"
                                    >
                                        <MessageCircle size={18} className="text-[#25D366]" />
                                        {contact?.ctaWhatsapp}
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* FINAL CTA */}
                        <motion.div
                            {...fadeUp}
                            className="mt-20 border border-white/10 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden bg-dark"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                                    {pageOffers?.finalCta?.title}
                                </h2>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                                    {pageOffers?.finalCta?.desc}
                                </p>
                                <Link
                                    href={diagnosticHref}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-primary hover:bg-secondary text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                                >
                                    {pageOffers?.finalCta?.button}
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
