import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/dictionaries'
import { buildMetadata } from '@/lib/seo'
import { webPageGraph, ORGANIZATION_ID } from '@/lib/schema'
import { CONTACT } from '@/lib/site'

const PATH = '/contact'

export async function generateMetadata({ params: { lang } }) {
    const dict = await getDictionary(lang)
    const seo = dict?.seo?.contact

    return buildMetadata({ lang, path: PATH, title: seo?.title, description: seo?.description })
}

export default async function ContactLayout({ children, params: { lang } }) {
    const dict = await getDictionary(lang)
    const seo = dict?.seo?.contact

    return (
        <>
            <JsonLd
                data={webPageGraph({
                    lang,
                    path: PATH,
                    name: seo?.title,
                    description: seo?.description,
                    breadcrumb: [{ name: dict?.navbar?.contact || 'Contact', path: PATH }],
                    extra: [
                        {
                            '@type': 'ContactPage',
                            name: seo?.title,
                            mainEntity: {
                                '@id': ORGANIZATION_ID,
                                telephone: CONTACT.phone,
                                email: CONTACT.email,
                            },
                        },
                    ],
                })}
            />
            {children}
        </>
    )
}
