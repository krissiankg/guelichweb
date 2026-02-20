'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
    SiOpenai,
    SiGoogle,
    SiAnthropic,
    SiLangchain,
    SiZapier,
    SiMake,
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiSupabase,
    SiFirebase,
    SiPostgresql,
    SiVercel,
    SiGooglecloud,
    SiAmazon,
    SiDocker,
    SiGithub
} from 'react-icons/si'

// Manual SVG for n8n
const SiN8n = (props) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
    </svg>
)

const row1 = [
    // IA
    { name: 'OpenAI', icon: SiOpenai, color: '#412991', desc: 'Modèles IA avancés pour automatisation intelligente' },
    { name: 'Claude', icon: SiAnthropic, color: '#D97757', desc: 'IA conversaionnelle éthique et performante' },
    { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C', desc: 'Orchestration de chaînes LLM complexes' },
    { name: 'Gemini', icon: SiGoogle, color: '#4285F4', desc: 'Solutions IA multimodales Google' },

    // Automation
    { name: 'n8n', icon: SiN8n, color: '#FF6D5A', desc: 'Automatisation open-source des workflows métier' },
    { name: 'Zapier', icon: SiZapier, color: '#FF4F00', desc: 'Connexion rapide entre 5000+ applications' },
    { name: 'Make', icon: SiMake, color: '#00A562', desc: 'Scénarios visuels pour processus complexes' },
]

const row2 = [
    // Dev 
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', desc: 'Framework moderne pour applications performantes' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', desc: 'Runtime JavaScript scalable et rapide' },
    { name: 'React', icon: SiReact, color: '#61DAFB', desc: 'Interface utilisateur dynamique et réactive' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', desc: 'Backend as a Service open source' },

    // Cloud & Infra
    { name: 'Vercel', icon: SiVercel, color: '#ffffff', desc: 'Déploiement global et edge computing' },
    { name: 'GitHub', icon: SiGithub, color: '#ffffff', desc: 'Versionning et collaboration code' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', desc: 'Conteneurisation pour déploiement fiable' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900', desc: 'Infrastructure cloud leader mondial' },
]

const TechCard = ({ tech }) => (
    <div
        className="flex flex-col items-center justify-center gap-3 group min-w-[100px] cursor-pointer relative"
    >
        <div
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-white/70 transition-all duration-300 transform group-hover:scale-110 drop-shadow-lg"
            style={{ '--hover-color': tech.color }}
        >
            <tech.icon
                className="w-full h-full transition-colors duration-300 group-hover:text-[var(--hover-color)]"
            />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 bg-dark/95 border border-white/10 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 shadow-xl backdrop-blur-sm">
            <div className="text-xs font-bold text-white mb-1">{tech.name}</div>
            <div className="text-[10px] text-gray-400 leading-tight">{tech.desc}</div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-dark/95"></div>
        </div>
    </div>
)

export default function TechMarquee() {
    return (
        <section className="py-20 bg-dark/50 border-b border-white/5 relative overflow-hidden">
            {/* Title */}
            <div className="text-center mb-12 px-4 relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary mb-4 tracking-wider uppercase">
                    Notre Stack Technologique
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 max-w-4xl mx-auto leading-tight">
                    Nous construisons avec les meilleures technologies <span className="text-primary">IA</span> du marché
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Nous combinons intelligence artificielle, automatisation et développement moderne pour créer des systèmes performants et évolutifs.
                </p>
            </div>

            {/* Marquee Wrapper Row 1 */}
            <div className="relative w-full overflow-hidden mask-linear-fade mb-12">
                {/* Fade Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10"></div>

                {/* Animated Track */}
                <div className="flex w-max animate-scroll gap-16 md:gap-32 px-12 items-center hover:pause">
                    {[...row1, ...row1, ...row1].map((tech, index) => (
                        <TechCard key={`r1-${index}`} tech={tech} />
                    ))}
                </div>
            </div>

            {/* Marquee Wrapper Row 2 (Reverse Scroll or just offset?) - User asked for simple infinite scroll. Let's keep same direction or reverse? User didn't specify direction. Same direction is cleaner usually, or reverse for visual interest. I'll stick to 'same' for consistency unless requested, or maybe make it slower/offset. I'll just use same direction for simplicity and clean look. */}
            <div className="relative w-full overflow-hidden mask-linear-fade mb-16">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10"></div>

                <div className="flex w-max animate-scroll gap-16 md:gap-32 px-12 items-center hover:pause" style={{ animationDuration: '45s' }}>
                    {[...row2, ...row2, ...row2].map((tech, index) => (
                        <TechCard key={`r2-${index}`} tech={tech} />
                    ))}
                </div>
            </div>

            {/* Social Proof & CTA */}
            <div className="text-center relative z-10 px-6">
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                    Ces technologies alimentent les solutions que nous déployons pour automatiser, structurer et accélérer la croissance de nos clients.
                </p>
                <Link
                    href="/offres"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-all group"
                >
                    Voir nos solutions
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    )
}
