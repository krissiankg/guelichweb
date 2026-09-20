import OffersView from '@/components/offers/OffersView'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/dictionaries'
import { buildMetadata } from '@/lib/seo'
import { faqGraph, offerCatalog, webPageGraph, ORGANIZATION_ID } from '@/lib/schema'
import { SITE_URL } from '@/lib/site'

const PATH = '/offres'

export async function generateMetadata({ params: { lang } }) {
    const dict = await getDictionary(lang)
    const meta = dict?.pageOffers?.meta

    return buildMetadata({ lang, path: PATH, title: meta?.title, description: meta?.description })
}

export default async function OffersPage({ params: { lang } }) {
    const dict = await getDictionary(lang)
    const pageOffers = dict?.pageOffers
    const pageUrl = `${SITE_URL}/${lang}${PATH}`

    const structuredData = webPageGraph({
        lang,
        path: PATH,
        name: pageOffers?.meta?.title,
        description: pageOffers?.meta?.description,
        breadcrumb: [{ name: dict?.navbar?.offers, path: PATH }],
        extra: [
            {
                '@id': ORGANIZATION_ID,
                '@type': 'ProfessionalService',
                hasOfferCatalog: offerCatalog(pageOffers),
            },
            faqGraph(pageOffers?.faq?.items, `${pageUrl}#faq`),
            {
                '@type': 'HowTo',
                '@id': `${pageUrl}#method`,
                name: pageOffers?.method?.title,
                description: pageOffers?.method?.desc,
                step: pageOffers?.method?.steps?.map((step, index) => ({
                    '@type': 'HowToStep',
                    position: index + 1,
                    name: step.title,
                    text: step.desc,
                })),
            },
        ].filter(Boolean),
    })

    return (
        <>
            <JsonLd data={structuredData} />
            <OffersView />
        </>
    )
}
