import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Politique de Confidentialité – Guelichweb',
    description: 'Découvrez comment Guelichweb collecte, gère et protège vos données personnelles.',
}

export default function PolitiqueConfidentialite() {
    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">Politique de Confidentialité</h1>

                    <div className="space-y-12 text-gray-300 leading-relaxed">

                        <section>
                            <p>
                                Chez Guelichweb, nous accordons une importance fondamentale au respect de la vie privée et à la protection des données personnelles de nos clients et visiteurs. La présente politique décrit comment nous collectons, utilisons et protégeons vos données.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Données collectées</h2>
                            <p>
                                Nous collectons uniquement les informations nécessaires au bon déroulement de nos services. Lors de l'utilisation de nos formulaires de contact, les données suivantes peuvent être collectées :
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Nom complet</li>
                                <li>Adresse e-mail</li>
                                <li>Numéro de téléphone (le cas échéant)</li>
                                <li>Contenu du message ou des besoins exprimés</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Finalité de la collecte</h2>
                            <p>
                                Les informations saisies sont enregistrées et traitées exclusivement pour :
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Répondre à vos demandes de contact et établir des devis.</li>
                                <li>Assurer le suivi commercial et la gestion de notre relation client.</li>
                                <li>Améliorer la qualité de nos services et de notre site internet.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Absence de revente des données</h2>
                            <p>
                                <strong>Guelichweb s'engage formellement à ne jamais revendre, louer ou céder vos données personnelles à des tiers.</strong> Vos données restent strictement confidentielles et réservées à l'usage exclusif de notre agence.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Durée de conservation</h2>
                            <p>
                                Les données sont conservées pour une durée raisonnable nécessaire aux finalités pour lesquelles elles ont été collectées, conformément à la législation en vigueur :
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong>Données prospects :</strong> 3 ans maximum après le dernier contact.</li>
                                <li><strong>Données clients :</strong> Le temps de la relation commerciale, plus les durées de prescription légales.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Sécurité des données</h2>
                            <p>
                                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre l'altération, la perte accidentelle ou l'accès non autorisé.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Outils analytiques</h2>
                            <p>
                                Nous sommes susceptibles d'utiliser des outils d'analyse de trafic (statistiques anonymisées) pour mesurer l'audience de notre site et comprendre les parcours de navigation, afin d'optimiser l'expérience utilisateur.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Vos droits</h2>
                            <p>
                                Conformément aux réglementations internationales sur la protection des données (notamment le RGPD), vous disposez à tout moment d'un droit :
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>D'accès à vos données</li>
                                <li>De rectification ou modification</li>
                                <li>De suppression (droit à l'oubli)</li>
                                <li>De limitation du traitement</li>
                            </ul>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl mt-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Données Personnelles</h2>
                            <p className="mb-4">
                                Pour toute question relative à cette politique ou pour exercer vos droits, vous pouvez nous contacter directement à l'adresse suivante :
                            </p>
                            <a href="mailto:christ@guelichweb.online" className="text-xl font-bold text-primary hover:text-white transition-colors">
                                christ@guelichweb.online
                            </a>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
