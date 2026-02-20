'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ProjectDetail = ({ project }) => {
  const router = useRouter();
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="pt-32 pb-20 min-h-screen bg-dark"
    >
        {/* Header Image */}
        <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-90"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                 <div className="max-w-7xl mx-auto">
                    <button onClick={() => router.push('/#work')} className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                        <ArrowLeft size={20} /> Back to Works
                    </button>
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-display font-bold mb-4"
                    >
                        {project.title}
                    </motion.h1>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">{project.category}</span>
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
                        <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">Client</h3>
                        <p className="text-xl font-medium">Confidential / {project.title}</p>
                    </div>
                     <div className="p-6 border border-white/10 rounded-2xl bg-card">
                        <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> UI/UX Design</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Web Development</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Brand Identity</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The Challenge</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-12">
                        The goal was to redefine the digital presence of {project.title} to match their evolving market position. 
                        We faced the challenge of integrating legacy systems with a modern frontend architecture while ensuring a 
                        seamless user experience across all devices. The brand needed a refresh that spoke to a younger demographic 
                        without alienating existing loyal customers.
                    </p>

                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Approach</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        We started with an immersive discovery phase, analyzing competitor landscapes and user behaviors. 
                        By utilizing a component-driven design system, we ensured consistency and scalability.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                         <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop" className="rounded-2xl border border-white/10" alt="Process" />
                         <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" className="rounded-2xl border border-white/10" alt="Meeting" />
                    </div>

                     <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The Result</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        The launch resulted in a 40% increase in user engagement and a 25% uplift in conversion rates within the first 
                        three months. The new identity has positioned {project.title} as a leader in their industry.
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
  );
};

export default ProjectDetail;