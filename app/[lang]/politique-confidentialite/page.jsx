import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useDictionary } from '@/components/DictionaryProvider'

export default function PolitiqueConfidentialite() {
    const dict = useDictionary()
    const content = dict?.legal?.privacy

    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
            <Navbar dict={dict?.navbar} />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">{content?.title}</h1>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        {content?.intro && (
                            <section dangerouslySetInnerHTML={{ __html: content.intro }} />
                        )}

                        {content?.sections?.map((section, idx) => (
                            <section key={idx}>
                                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: section.content }} />
                            </section>
                        ))}

                        {content?.contactBoxTitle && (
                            <section className="bg-white/5 border border-white/10 p-8 rounded-2xl mt-12">
                                <h2 className="text-2xl font-bold text-white mb-4">{content.contactBoxTitle}</h2>
                                <div dangerouslySetInnerHTML={{ __html: content.contactBoxText }} />
                            </section>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
