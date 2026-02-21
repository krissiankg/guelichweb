'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useDictionary } from '@/components/DictionaryProvider'
import {
    FileText, Database, Code, Globe, Palette, Video, Printer, ShieldCheck, GraduationCap, Share2, Bot
} from 'lucide-react'

const serviceIcons = [
    FileText, Database, Code, Globe, Palette, Video, Printer, ShieldCheck, GraduationCap, Share2, Bot
]

export default function Services() {
    const dict = useDictionary()
    const services = dict?.services

    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
            <Navbar dict={dict?.navbar} />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            {services?.title}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            {services?.desc}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services?.items?.map((service, index) => {
                            const Icon = serviceIcons[index % serviceIcons.length]
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-card p-8 rounded-2xl hover:bg-white/5 transition-all group border border-white/5 hover:border-primary/50"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {service.desc}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
