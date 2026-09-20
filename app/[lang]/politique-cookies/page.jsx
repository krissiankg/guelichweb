import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/dictionaries'
import { buildMetadata } from '@/lib/seo'
import { webPageGraph } from '@/lib/schema'

const PATH = '/politique-cookies'

export async function generateMetadata({ params: { lang } }) {
    const dict = await getDictionary(lang)
    const seo = dict?.seo?.legal?.cookies

    return buildMetadata({ lang, path: PATH, title: seo?.title, description: seo?.description })
}

export default async function PolitiqueCookies({ params: { lang } }) {
    const dict = await getDictionary(lang)
    const content = dict?.legal?.cookies
    const seo = dict?.seo?.legal?.cookies

    return (
        <div className="bg-dark text-white min-h-screen flex flex-col font-sans">
            <JsonLd
                data={webPageGraph({
                    lang,
                    path: PATH,
                    name: seo?.title,
                    description: seo?.description,
                    breadcrumb: [{ name: seo?.title, path: PATH }],
                })}
            />
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
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
