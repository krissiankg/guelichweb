import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/dictionaries'
import { buildMetadata } from '@/lib/seo'
import { offerCatalog, webPageGraph } from '@/lib/schema'

const PATH = '/services'

export async function generateMetadata({ params: { lang } }) {
    const dict = await getDictionary(lang)
    const seo = dict?.seo?.services

    return buildMetadata({ lang, path: PATH, title: seo?.title, description: seo?.description })
}

export default async function ServicesLayout({ children, params: { lang } }) {
    const dict = await getDictionary(lang)
    const seo = dict?.seo?.services

    return (
        <>
            <JsonLd
                data={webPageGraph({
                    lang,
                    path: PATH,
                    name: seo?.title,
                    description: seo?.description,
                    breadcrumb: [{ name: dict?.navbar?.services, path: PATH }],
                    extra: [
                        {
                            '@type': 'ItemList',
                            name: dict?.services?.title,
                            itemListElement: dict?.services?.items?.map((item, index) => ({
                                '@type': 'ListItem',
                                position: index + 1,
                                item: {
                                    '@type': 'Service',
                                    name: item.title,
                                    description: item.desc,
                                },
                            })),
                        },
                    ],
                })}
            />
            {children}
        </>
    )
}
