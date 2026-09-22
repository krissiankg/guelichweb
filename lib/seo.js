import { BRAND, DEFAULT_LOCALE, LOCALES, SITE_URL } from '@/lib/site'

const ogLocale = (lang) => (lang === 'en' ? 'en_US' : 'fr_FR')

// Builds the per-page metadata: unique title/description, canonical and fr/en alternates.
// languagePaths: optional map { fr: '/fr/...', en: '/en/...' } for pages whose path
// differs by locale (blog articles with distinct slugs).
export function buildMetadata({
    lang,
    path = '',
    title,
    description,
    image,
    type = 'website',
    languagePaths,
}) {
    const localePath = (locale) => languagePaths?.[locale] || `/${locale}${path}`
    const imageUrl = image || BRAND.logo
    const languages = Object.fromEntries(LOCALES.map((locale) => [locale, localePath(locale)]))
    languages['x-default'] = localePath(DEFAULT_LOCALE)
    const alternateLocale = LOCALES.filter((locale) => locale !== lang).map(ogLocale)

    return {
        title: `${title} | ${BRAND.name}`,
        description,
        alternates: {
            canonical: localePath(lang),
            languages,
        },
        openGraph: {
            type,
            url: `${SITE_URL}${localePath(lang)}`,
            siteName: BRAND.name,
            locale: ogLocale(lang),
            alternateLocale,
            title,
            description,
            images: [{ url: imageUrl, alt: title }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        },
    }
}
