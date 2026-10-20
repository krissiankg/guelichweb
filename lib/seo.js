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
    const localePath = (locale) => {
        if (languagePaths) return languagePaths[locale] || null
        return `/${locale}${path}`
    }
    const availableLocales = LOCALES.filter((locale) => localePath(locale))
    const imageUrl = image || BRAND.logo
    const languages = Object.fromEntries(
        availableLocales.map((locale) => [locale, localePath(locale)])
    )
    languages['x-default'] = languages[DEFAULT_LOCALE] || languages[availableLocales[0]]
    const alternateLocale = availableLocales.filter((locale) => locale !== lang).map(ogLocale)

    return {
        title: `${title} | ${BRAND.name}`,
        description,
        alternates: {
            canonical: localePath(lang) || `/${lang}${path}`,
            languages,
        },
        openGraph: {
            type,
            url: `${SITE_URL}${localePath(lang) || `/${lang}${path}`}`,
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
