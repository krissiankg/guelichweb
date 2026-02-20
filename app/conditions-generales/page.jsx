import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Conditions Générales de Services – Guelichweb',
    description: 'Conditions générales encadrant les prestations digitales proposées par l\'agence Guelichweb.',
}

export default function ConditionsGenerales() {
    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">Conditions Générales de Services</h1>

                    <div className="space-y-12 text-gray-300 leading-relaxed">

                        <section>
                            <p>
                                Les présentes Conditions Générales de Services (ci-après "CGS") régissent les relations contractuelles entre l'Agence Digitale GUELICHWEB (ci-après "L'Agence") et tout professionnel souhaitant bénéficier des services proposés (ci-après "Le Client").
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Nature des prestations digitales</h2>
                            <p>
                                Guelichweb fournit des prestations intellectuelles et techniques dans les domaines suivants :
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Audit et conseil en transformation numérique.</li>
                                <li>Développement de sites web vitrines et plateformes métiers sur mesure.</li>
                                <li>Conception, développement et intégration d'automatisations IA (chatbots, CRM...).</li>
                                <li>Design de marque, création de contenus digitaux et communication (Growth Studio).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Obligation de moyens</h2>
                            <p>
                                L'Agence est soumise à une obligation de moyens ("best efforts") et non de résultat. Guelichweb s'engage à apporter tout le soin, l'expertise et la rigueur nécessaires pour la réalisation des missions qui lui sont confiées, en se conformant aux règles de l'art de la profession.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Délais indicatifs</h2>
                            <p>
                                Les délais de livraison figurant sur les devis sont fournis à titre indicatif, sauf mention contraire expresse et écrite. Un retard de réalisation, s'il est justifié par la complexité technique inattendue du projet ou le retard du Client à fournir les éléments requis (contenus, accès), ne peut donner lieu à pénalités, retenues, ou annulation de la commande.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Modalités de paiement</h2>
                            <p>
                                Toute acceptation de devis doit être accompagnée par le règlement d'un acompte déterminé lors de la proposition commerciale (généralement 30% à 50% du montant total TTC). Le solde est exigible à la livraison définitive du projet ou à la date d'échéance validée ensemble. Les règlements devront être réglés par virement bancaire ou moyen de paiement en ligne sécurisé. Les retards de paiement pourront entraîner la suspension immédiate des services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Propriété intellectuelle</h2>
                            <p>
                                <strong>Propriété des livrables après paiement :</strong> Guelichweb cède au Client, de manière exclusive, l'intégralité des droits d’exploitation (reproduction, représentation, adaptation) relatifs au livrable final commandé, et ce pour la durée légale du droit d’auteur et pour le monde entier, <strong>uniquement à compter du paiement intégral</strong> et effectif des sommes dues par le Client.
                            </p>
                            <p className="mt-4">
                                L'Agence s'autorise à mentionner le Client et le livrable comme référence dans son portfolio, sur son site internet et ses réseaux sociaux de manière anonymisée ou non, sauf demande de confidentialité explicite avant signature du devis.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation de responsabilité</h2>
                            <p>
                                L'Agence ne pourra être tenue responsable des dommages indirects subis par le Client (y compris, mais sans s'y limiter, la perte de données, dommages subis par l'équipement du Client, perte de profit, perte de marché, trouble commercial) liés à la réalisation ou l'utilisation du livrable. Le montant des réparations dues par Guelichweb au titre d'un projet, toutes causes confondues, sera strictement limité au montant facturé et encaissé pour ledit projet.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Droit applicable et juridiction compétente</h2>
                            <p>
                                Les présentes Conditions Générales seront régies par le Droit en vigueur en République du Bénin et interprétées à l'aune des conventions internationales du droit du commerce et du numérique. En cas de litige non résolu à l'amiable, le Tribunal de Commerce de Cotonou (ou juridiction équivalente) aura la compétence exclusive pour instruire le dossier.
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
