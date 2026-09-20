import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/dictionaries'
import { buildMetadata } from '@/lib/seo'
import { webPageGraph, ORGANIZATION_ID } from '@/lib/schema'
import { ADDRESS, BRAND } from '@/lib/site'

const PATH = '/about'

export async function generateMetadata({ params: { lang } }) {
    const dict = await getDictionary(lang)
    const seo = dict?.seo?.about

    return buildMetadata({ lang, path: PATH, title: seo?.title, description: seo?.description })
}

export default async function AboutLayout({ children, params: { lang } }) {
    const dict = await getDictionary(lang)
    const seo = dict?.seo?.about

    return (
        <>
            <JsonLd
                data={webPageGraph({
                    lang,
                    path: PATH,
                    name: seo?.title,
                    description: seo?.description,
                    breadcrumb: [{ name: dict?.navbar?.about, path: PATH }],
                    extra: [
                        {
                            '@type': 'Person',
                            name: BRAND.founder,
                            jobTitle: dict?.pageOffers?.who?.role,
                            image: BRAND.founderImage,
                            worksFor: { '@id': ORGANIZATION_ID },
                            address: {
                                '@type': 'PostalAddress',
                                addressLocality: ADDRESS.city,
                                addressCountry: ADDRESS.country,
                            },
                        },
                    ],
                })}
            />
            {children}
        </>
    )
}
