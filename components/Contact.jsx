'use client'

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const ContactInfoCard = ({ icon: Icon, title, content, delay }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
  >
    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
      <Icon size={28} />
    </div>
    <h3 className="text-gray-400 text-sm uppercase tracking-widest font-medium mb-2">{title}</h3>
    <p className="text-xl font-medium text-white">{content}</p>
  </motion.div>
);

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark relative overflow-hidden flex flex-col justify-center">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block"
        >
          Contactez-nous
        </motion.span>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold mb-8 text-center"
        >
          Prêt à transformer votre <br />
          <span className="text-gradient">vision en réalité ?</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-16 max-w-2xl text-center leading-relaxed"
        >
          Pour toute demande de prestation professionnelle, nous vous invitons à remplir notre formulaire détaillé. Cela nous permettra de mieux analyser vos besoins pour un premier échange ciblé.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-24"
        >
          <a
            href="https://offre.guelichweb.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-lg md:text-xl rounded-full overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] hover:scale-105"
          >
            <span>Démarrer un projet</span>
            <span className="bg-white/20 p-2.5 rounded-full group-hover:bg-white/30 transition-colors flex items-center justify-center">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <ContactInfoCard
            icon={Mail}
            title="Email"
            content="christ@guelichweb.online"
            delay={0.4}
          />
          <ContactInfoCard
            icon={Phone}
            title="Appelez-nous"
            content="+229 01 66 36 87 05"
            delay={0.5}
          />
          <ContactInfoCard
            icon={MapPin}
            title="Rendez-nous visite"
            content="Abomey-Calavi, Bénin"
            delay={0.6}
          />
        </div>

        {/* Réseaux Sociaux */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <p className="text-gray-400 font-medium mr-4 hidden sm:block">Suivez-nous :</p>
          <a href="https://www.linkedin.com/company/guelichweb" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
            <Linkedin size={20} />
          </a>
          <a href="https://www.facebook.com/guelichweb" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/guelichweb" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/2290166368705" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white hover:-translate-y-1 transition-all duration-300">
            <MessageCircle size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
