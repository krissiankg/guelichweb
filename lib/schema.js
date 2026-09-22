import {
    ADDRESS,
    AREAS_SERVED,
    BRAND,
    CONTACT,
    SITE_URL,
    SOCIALS,
} from '@/lib/site'

export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

const places = () => AREAS_SERVED.map((name) => ({ '@type': 'Place', name }))

// Site-wide identity: rendered once in the root layout.
export function organizationGraph(dict, lang) {
    const business = {
        '@type': 'ProfessionalService',
        '@id': ORGANIZATION_ID,
        name: BRAND.name,
        legalName: BRAND.legalName,
        url: SITE_URL,
        logo: BRAND.logo,
        image: BRAND.logo,
        description: dict?.seo?.home?.description,
        email: CONTACT.email,
        telephone: CONTACT.phone,
        priceRange: '$$',
        founder: {
            '@type': 'Person',
            name: BRAND.founder,
            jobTitle: dict?.pageOffers?.who?.role,
            image: BRAND.founderImage,
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: ADDRESS.city,
            addressRegion: ADDRESS.region,
            addressCountry: ADDRESS.country,
        },
        areaServed: places(),
        knowsLanguage: ['fr', 'en'],
        sameAs: SOCIALS,
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: CONTACT.phone,
            email: CONTACT.email,
            availableLanguage: ['French', 'English'],
        },
    }

    const website = {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: BRAND.name,
        inLanguage: lang,
        publisher: { '@id': ORGANIZATION_ID },
    }

    return { '@context': 'https://schema.org', '@graph': [business, website] }
}

export function webPageGraph({ lang, path = '', name, description, breadcrumb = [], extra = [] }) {
    const pageUrl = `${SITE_URL}/${lang}${path}`

    const webPage = {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name,
        description,
        inLanguage: lang,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORGANIZATION_ID },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: BRAND.name, item: `${SITE_URL}/${lang}` },
                ...breadcrumb.map((item, index) => ({
                    '@type': 'ListItem',
                    position: index + 2,
                    name: item.name,
                    item: `${SITE_URL}/${lang}${item.path}`,
                })),
            ],
        },
    }

    return { '@context': 'https://schema.org', '@graph': [webPage, ...extra] }
}

export function offerCatalog(pageOffers) {
    return {
        '@type': 'OfferCatalog',
        name: pageOffers?.title,
        itemListElement: pageOffers?.mainOffers?.map((offer) => ({
            '@type': 'Offer',
            name: offer.title,
            description: offer.hook,
            itemOffered: {
                '@type': 'Service',
                name: offer.title,
                description: offer.hook,
                serviceType: offer.title,
                provider: { '@id': ORGANIZATION_ID },
                areaServed: places(),
            },
        })),
    }
}

// Landing page targeting a city or a specific service: Service + FAQ + breadcrumb.
export function localLandingGraph({ lang, path, page, areas }) {
    const pageUrl = `${SITE_URL}/${lang}${path}`
    const areaServed = (areas ? areas.map((name) => ({ '@type': 'Place', name })) : places())

    const service = {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: page?.meta?.title,
        description: page?.meta?.description,
        provider: { '@id': ORGANIZATION_ID },
        areaServed,
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: pageUrl,
            servicePhone: CONTACT.phone,
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: page?.offers?.title,
            itemListElement: page?.offers?.items?.map((item) => ({
                '@type': 'Offer',
                name: item.title,
                description: item.desc,
            })),
        },
    }

    return webPageGraph({
        lang,
        path,
        name: page?.meta?.title,
        description: page?.meta?.description,
        breadcrumb: [{ name: page?.breadcrumb, path }],
        extra: [service, faqGraph(page?.faq?.items, `${pageUrl}#faq`)].filter(Boolean),
    })
}

// Page réalisations : liste ordonnée des projets livrés.
export function portfolioItemList({ lang, projects, id }) {
    return {
        '@type': 'ItemList',
        '@id': id,
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: project.title,
            url: `${SITE_URL}/${lang}/project/${project.slug}`,
        })),
    }
}

// Fiche projet : une réalisation attribuée à l'agence.
export function projectGraph({ lang, project, id }) {
    return {
        '@type': 'CreativeWork',
        '@id': id,
        name: project.title,
        description: project.description,
        image: project.image,
        url: project.url,
        genre: project.category,
        about: project.sector,
        keywords: project.stack?.join(', '),
        inLanguage: lang,
        creator: { '@id': ORGANIZATION_ID },
        provider: { '@id': ORGANIZATION_ID },
    }
}

export function faqGraph(items, id) {
    if (!items?.length) return null
    return {
        '@type': 'FAQPage',
        '@id': id,
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    }
}

export function blogPostingGraph({
    lang,
    slug,
    title,
    description,
    image,
    publishedAt,
    authorName,
}) {
    const pageUrl = `${SITE_URL}/${lang}/blog/${slug}`
    const inLanguage = lang === 'en' ? 'en-US' : 'fr-FR'

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BlogPosting',
                '@id': `${pageUrl}#article`,
                headline: title,
                description,
                image: image ? [image] : undefined,
                datePublished: publishedAt,
                dateModified: publishedAt,
                inLanguage,
                mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
                author: {
                    '@type': 'Person',
                    name: authorName || BRAND.founder,
                },
                publisher: { '@id': ORGANIZATION_ID },
                isPartOf: { '@id': WEBSITE_ID },
            },
            {
                '@type': 'WebPage',
                '@id': pageUrl,
                url: pageUrl,
                name: title,
                description,
                inLanguage: lang,
                isPartOf: { '@id': WEBSITE_ID },
                about: { '@id': ORGANIZATION_ID },
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        {
                            '@type': 'ListItem',
                            position: 1,
                            name: BRAND.name,
                            item: `${SITE_URL}/${lang}`,
                        },
                        {
                            '@type': 'ListItem',
                            position: 2,
                            name: 'Blog',
                            item: `${SITE_URL}/${lang}/blog`,
                        },
                        {
                            '@type': 'ListItem',
                            position: 3,
                            name: title,
                            item: pageUrl,
                        },
                    ],
                },
            },
        ],
    }
}
