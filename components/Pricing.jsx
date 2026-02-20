import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    description: "Image de marque essentielle et présence web pour les startups.",
    features: [
      { name: "Système d'Identité de Marque", included: true },
      { name: "Site Web de 5 Pages", included: true },
      { name: "Configuration SEO de Base", included: true },
      { name: "Intégration CMS", included: false },
      { name: "Rapport Analytique Mensuel", included: false },
      { name: "Gestionnaire de Compte Dédié", included: false },
    ],
    cta: "Demander une consultation"
  },
  {
    name: "Croissance",
    description: "Transformation digitale complète pour les entreprises en expansion.",
    isPopular: true,
    features: [
      { name: "Stratégie de Marque Avancée", included: true },
      { name: "Site Web React/Next.js Personnalisé", included: true },
      { name: "SEO Technique & Performance", included: true },
      { name: "Intégration CMS Headless", included: true },
      { name: "Appels Stratégiques Bi-hebdomadaires", included: true },
      { name: "Support Prioritaire 24/7", included: false },
    ],
    cta: "Demander une consultation"
  },
  {
    name: "Entreprise",
    description: "Équipe de design et développement dédiée pour grandes organisations.",
    features: [
      { name: "Retainer Créatif Service Complet", included: true },
      { name: "Application Web Entreprise", included: true },
      { name: "CDN Global & Sécurité", included: true },
      { name: "Intégrations API Personnalisées", included: true },
      { name: "Squad Agile Dédiée", included: true },
      { name: "SLA & Support Prioritaire", included: true },
    ],
    cta: "Demander une consultation"
  }
];

const Pricing = () => {

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Tarification simple, <br className='xs:block hidden' />
            <span className="text-gradient">transparente.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Choisissez le plan parfait pour vos besoins. Pas de frais cachés.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`relative p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 ${plan.isPopular
                ? 'bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                : 'bg-card border-white/10 hover:border-white/30'
                }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Plus Populaire
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${feature.included ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-600'}`}>
                      {feature.included ? <Check size={12} /> : <X size={12} />}
                    </div>
                    <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>{feature.name}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isPopular
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-white/10 text-white hover:bg-white hover:text-black'
                }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
