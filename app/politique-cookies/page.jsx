import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Politique relative aux cookies – Guelichweb',
    description: 'Découvrez comment nous utilisons les cookies pour améliorer votre expérience sur le site de Guelichweb.',
}

export default function PolitiqueCookies() {
    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">Politique relative aux Cookies</h1>

                    <div className="space-y-12 text-gray-300 leading-relaxed">

                        <section>
                            <p>
                                Lors de votre navigation sur le site internet de l'agence Guelichweb (<strong>guelichweb.online</strong>), des informations sont susceptibles d'être enregistrées dans des fichiers « cookies » installés sur votre ordinateur, tablette ou téléphone mobile. Cette page explique ce que sont les cookies, comment nous les utilisons, et comment vous pouvez les contrôler.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Qu'est-ce qu'un cookie ?</h2>
                            <p>
                                Un cookie est un petit fichier texte inoffensif déposé sur votre terminal lors de la visite d'un site ou de la consultation d'une publicité. Ils ont notamment pour but de collecter des informations relatives à votre navigation et de vous adresser des services personnalisés et d'améliorer votre expérience utilisateur.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Les cookies que nous utilisons</h2>

                            <div className="space-y-8 mt-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">A. Cookies strictement techniques et fonctionnels</h3>
                                    <p>
                                        Ces cookies sont indispensables au bon fonctionnement direct du site et à la fluidité de la navigation. Ils permettent notamment l'utilisation des fonctionnalités principales, le maintien de vos choix de préférences, et l'acheminement des requêtes. Ces cookies ne peuvent pas être désactivés.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">B. Cookies analytiques et de performance</h3>
                                    <p>
                                        Nous utilisons des outils d'analyse d'audience pour comprendre comment les visiteurs naviguent sur notre site, mesurer le taux de rebond et repérer d'éventuels bugs d'affichage. Les données collectées par ces traceurs sont anonymes (elles ne sont pas rattachées à votre nom ni à votre e-mail) et ne sont utilisées que pour produire des statistiques globales afin que Guelichweb puisse continuellement améliorer la qualité de ses interfaces.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Amélioration de l'expérience utilisateur</h2>
                            <p>
                                Nous nous engageons à minimiser l'usage des traceurs. L'ensemble des données récoltées via de potentiels cookies est exploité dans l'unique but d'améliorer l'expérience client – en comprenant par exemple quelles offres intéressent le plus nos clients pour vous afficher du contenu plus pertinent, ainsi qu'à des fins de sécurité de notre plateforme.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Gestion des cookies et possibilité de refus sur navigateur</h2>
                            <p>
                                Conformément à la réglementation européenne et internationale, vous avez la pleine liberté d'accepter ou de refuser les cookies (à l'exception des cookies strictement techniques).
                            </p>
                            <p className="mt-4">
                                Vous pouvez configurer les paramètres de votre navigateur à tout moment (Chrome, Firefox, Safari, Edge, etc.) pour qu'il rejette systématiquement les cookies ou qu'il vous demande votre autorisation à chaque fois qu'un site tente d'en placer un.
                            </p>
                            <p className="mt-4 italic text-sm text-gray-400">
                                Note : Si vous choisissez de bloquer tous les cookies, incluant ceux techniques, l'accès à certaines pages et fonctionnalités de la plateforme web risque d'être fortement altéré ou bloqué.
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
