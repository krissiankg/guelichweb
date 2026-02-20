'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="relative group">
                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-dark border border-white/10 rounded-lg text-sm font-medium text-white shadow-xl opacity-0 translate-x-4 invisible group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible transition-all duration-300 pointer-events-none whitespace-nowrap">
                    Discuter avec nous
                </div>

                {/* Pulse effect */}
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 duration-1000"></div>

                {/* Button */}
                <a
                    href="https://wa.me/2290166368705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center rounded-full text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 z-10"
                >
                    <MessageCircle size={28} />
                </a>
            </div>
        </div>
    )
}
