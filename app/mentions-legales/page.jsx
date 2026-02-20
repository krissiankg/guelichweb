import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
    title: 'Mentions Légales – Guelichweb',
    description: 'Mentions légales et informations sur l’éditeur du site Guelichweb.',
}

export default function MentionsLegales() {
    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">Mentions Légales</h1>

                    <div className="space-y-12 text-gray-300 leading-relaxed">

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Éditeur du site</h2>
                            <ul className="space-y-2">
                                <li><strong>Nom :</strong> GUELICHWEB</li>
                                <li><strong>Activité :</strong> Agence digitale spécialisée en transformation numérique, automatisation IA et communication digitale</li>
                                <li><strong>Localisation :</strong> Abomey-Calavi, Bénin</li>
                                <li><strong>Email :</strong> <a href="mailto:christ@guelichweb.online" className="text-primary hover:underline">christ@guelichweb.online</a></li>
                                <li><strong>Téléphone :</strong> <a href="https://wa.me/2290166368705" className="text-primary hover:underline">+229 01 66 36 87 05</a></li>
                                <li><strong>Site web :</strong> <Link href="/" className="text-primary hover:underline">https://guelichweb.online</Link></li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Directeur de la publication</h2>
                            <p>
                                <strong>Christian GUEGUELIGUE</strong> — Fondateur & CEO de Guelichweb.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Hébergement</h2>
                            <p>
                                Ce site est hébergé via une infrastructure cloud moderne et sécurisée fournie par Vercel Inc. (ou équivalent), assurant une disponibilité et des performances optimales à l'échelle mondiale.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Propriété intellectuelle</h2>
                            <p>
                                La structure générale du site ainsi que les textes, images animées ou non, vidéos, savoir-faire, et tous les autres éléments composant le site sont la propriété exclusive de Guelichweb, sauf mentions contraires.
                            </p>
                            <p className="mt-4">
                                Toute représentation totale ou partielle de ce site par quelle que personne que ce soit, sans l'autorisation expresse de Guelichweb, est interdite et constituerait une contrefaçon sanctionnée par les lois en vigueur.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Responsabilité</h2>
                            <p>
                                Guelichweb s'efforce de fournir sur son site des informations aussi précises que possible. Toutefois, l'agence ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                            </p>
                            <p className="mt-4">
                                Les informations données sur le site le sont à titre purement indicatif. L’utilisation des informations et contenus disponibles sur l'ensemble du site ne saurait en aucun cas engager la responsabilité de Guelichweb, à quelque titre que ce soit.
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
