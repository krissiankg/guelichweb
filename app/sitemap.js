import { projects } from '@/lib/projectsData'
import { getBlogTranslationIndex } from '@/lib/getBlogTranslations'
import { DEFAULT_LOCALE, LOCALES, SITE_URL } from '@/lib/site'

const STATIC_ROUTES = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/offres', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/portfolio', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/agence-web-abomey-calavi', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/creation-site-web-cotonou', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/chatbot-whatsapp-n8n-benin', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/mentions-legales', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/politique-confidentialite', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/conditions-generales', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/politique-cookies', priority: 0.2, changeFrequency: 'yearly' },
]

export const revalidate = 86400

const languageAlternates = (path) => {
    const languages = Object.fromEntries(
        LOCALES.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
    )
    languages['x-default'] = `${SITE_URL}/${DEFAULT_LOCALE}${path}`
    return languages
}

const entry = ({ path, priority, changeFrequency, lastModified }) =>
    LOCALES.map((locale) => ({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: lastModified || new Date(),
        changeFrequency,
        priority,
        alternates: { languages: languageAlternates(path) },
    }))

export function blogSitemapEntries(index) {
    const seen = new Set()
    const entries = []

    for (const pair of index.values()) {
        const key = `${pair.fr || ''}|${pair.en || ''}`
        if (seen.has(key)) continue
        seen.add(key)

        const languages = {}
        if (pair.fr) languages.fr = `${SITE_URL}/fr/blog/${pair.fr}`
        if (pair.en) languages.en = `${SITE_URL}/en/blog/${pair.en}`
        languages['x-default'] = languages.fr || languages.en

        for (const locale of LOCALES) {
            const slug = pair[locale]
            if (!slug) continue
            const updated = locale === 'fr' ? pair.frUpdated : pair.enUpdated
            entries.push({
                url: `${SITE_URL}/${locale}/blog/${slug}`,
                lastModified: updated ? new Date(updated) : new Date(),
                changeFrequency: 'monthly',
                priority: 0.6,
                alternates: { languages },
            })
        }
    }

    return entries
}

export default async function sitemap() {
    const staticEntries = STATIC_ROUTES.flatMap(entry)

    const projectEntries = projects.flatMap((project) =>
        entry({ path: `/project/${project.slug}`, priority: 0.6, changeFrequency: 'monthly' })
    )

    const blogIndex = await getBlogTranslationIndex()

    return [...staticEntries, ...projectEntries, ...blogSitemapEntries(blogIndex)]
}
