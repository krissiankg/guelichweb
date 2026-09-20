import LocalLandingView from '@/components/local/LocalLandingView'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/dictionaries'
import { buildMetadata } from '@/lib/seo'
import { localLandingGraph } from '@/lib/schema'

const PAGE_KEY = 'whatsappN8n'
const PATH = '/chatbot-whatsapp-n8n-benin'

export async function generateMetadata({ params: { lang } }) {
    const dict = await getDictionary(lang)
    const meta = dict?.localPages?.[PAGE_KEY]?.meta

    return buildMetadata({ lang, path: PATH, title: meta?.title, description: meta?.description })
}

export default async function WhatsappN8nPage({ params: { lang } }) {
    const dict = await getDictionary(lang)

    return (
        <>
            <JsonLd
                data={localLandingGraph({
                    lang,
                    path: PATH,
                    page: dict?.localPages?.[PAGE_KEY],
                })}
            />
            <LocalLandingView pageKey={PAGE_KEY} />
        </>
    )
}
