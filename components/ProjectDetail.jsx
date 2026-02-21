'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ProjectDetail = ({ project, dict, lang }) => {
    const router = useRouter();

    // Get translated project data if it exists, fallback to original
    const translatedProject = dict?.projects?.[project.id] || project;
    const title = translatedProject.title || project.title;
    const category = translatedProject.category || project.category;

    // Replace {title} in dict strings
    const challengeDesc = dict?.challengeDesc?.replace('{title}', title);
    const resultDesc = dict?.resultDesc?.replace('{title}', title);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="pt-32 pb-20 min-h-screen bg-dark"
        >
            {/* Header Image */}
            <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
                <img src={project.image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-90"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                    <div className="max-w-7xl mx-auto">
                        <Link href={`/${lang}/#work`} className="mb-8 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
                            <ArrowLeft size={20} /> {dict?.back}
                        </Link>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-8xl font-display font-bold mb-4"
                        >
                            {title}
                        </motion.h1>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">{category}</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">{project.year}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Sidebar Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="p-6 border border-white/10 rounded-2xl bg-card">
                            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">{dict?.client}</h3>
                            <p className="text-xl font-medium">{dict?.confidential} {title}</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl bg-card">
                            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">{dict?.servicesTitle}</h3>
                            <ul className="space-y-2">
                                {dict?.servicesList?.map((serviceItem, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-primary" /> {serviceItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{dict?.challengeTitle}</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12">
                            {challengeDesc}
                        </p>

                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{dict?.approachTitle}</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {dict?.approachDesc}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop" className="rounded-2xl border border-white/10" alt="Process" />
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" className="rounded-2xl border border-white/10" alt="Meeting" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{dict?.resultTitle}</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {resultDesc}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;