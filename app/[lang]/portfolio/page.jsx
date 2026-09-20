import PortfolioView from '@/components/portfolio/PortfolioView'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/dictionaries'
import { buildMetadata } from '@/lib/seo'
import { portfolioItemList, webPageGraph } from '@/lib/schema'
import { projects } from '@/lib/projectsData'
import { SITE_URL } from '@/lib/site'

const PATH = '/portfolio'

export async function generateMetadata({ params: { lang } }) {
    const dict = await getDictionary(lang)
    const meta = dict?.seo?.portfolio

    return buildMetadata({ lang, path: PATH, title: meta?.title, description: meta?.description })
}

export default async function PortfolioPage({ params: { lang } }) {
    const dict = await getDictionary(lang)
    const meta = dict?.seo?.portfolio

    const structuredData = webPageGraph({
        lang,
        path: PATH,
        name: meta?.title,
        description: meta?.description,
        breadcrumb: [{ name: dict?.navbar?.portfolio, path: PATH }],
        extra: [
            portfolioItemList({
                lang,
                projects,
                id: `${SITE_URL}/${lang}${PATH}#projects`,
            }),
        ],
    })

    return (
        <>
            <JsonLd data={structuredData} />
            <PortfolioView />
        </>
    )
}
