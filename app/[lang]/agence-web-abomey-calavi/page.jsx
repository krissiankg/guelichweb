import LocalLandingView from '@/components/local/LocalLandingView'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/dictionaries'
import { buildMetadata } from '@/lib/seo'
import { localLandingGraph } from '@/lib/schema'

const PAGE_KEY = 'abomeyCalavi'
const PATH = '/agence-web-abomey-calavi'

export async function generateMetadata({ params: { lang } }) {
    const dict = await getDictionary(lang)
    const meta = dict?.localPages?.[PAGE_KEY]?.meta

    return buildMetadata({ lang, path: PATH, title: meta?.title, description: meta?.description })
}

export default async function AbomeyCalaviPage({ params: { lang } }) {
    const dict = await getDictionary(lang)

    return (
        <>
            <JsonLd
                data={localLandingGraph({
                    lang,
                    path: PATH,
                    page: dict?.localPages?.[PAGE_KEY],
                    areas: ['Abomey-Calavi', 'Godomey', 'Calavi', 'Akassato', 'Grand Nokoué'],
                })}
            />
            <LocalLandingView pageKey={PAGE_KEY} />
        </>
    )
}
