'use client'

import { motion } from 'framer-motion'

export const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
}

export default function SectionHeading({ label, title, desc, className = '' }) {
    return (
        <motion.div {...fadeUp} className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
            {label && (
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                    {label}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">{title}</h2>
            {desc && <p className="text-lg text-gray-400 leading-relaxed">{desc}</p>}
        </motion.div>
    )
}
