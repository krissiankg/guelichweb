'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-white/5 bg-card rounded-2xl overflow-hidden transition-colors hover:border-white/15">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-6 text-left px-6 py-5"
            >
                <span className="font-display font-bold text-white text-lg">{question}</span>
                <ChevronDown
                    size={20}
                    className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && <div className="px-6 pb-6 -mt-1 text-gray-400 leading-relaxed">{answer}</div>}
        </div>
    )
}

export default function FaqAccordion({ items }) {
    return (
        <div className="space-y-4">
            {items?.map((item, index) => (
                <FaqItem key={index} question={item.q} answer={item.a} />
            ))}
        </div>
    )
}
