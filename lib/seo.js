import { BRAND, LOCALES, SITE_URL } from '@/lib/site'

const ogLocale = (lang) => (lang === 'en' ? 'en_US' : 'fr_FR')

// Builds the per-page metadata: unique title/description, canonical and fr/en alternates.
export function buildMetadata({ lang, path = '', title, description, image, type = 'website' }) {
    const localePath = (locale) => `/${locale}${path}`
    const imageUrl = image || BRAND.logo

    return {
        title: `${title} | ${BRAND.name}`,
        description,
        alternates: {
            canonical: localePath(lang),
            languages: Object.fromEntries(LOCALES.map((locale) => [locale, localePath(locale)])),
        },
        openGraph: {
            type,
            url: `${SITE_URL}${localePath(lang)}`,
            siteName: BRAND.name,
            locale: ogLocale(lang),
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
