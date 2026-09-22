import { projects } from '@/lib/projectsData'
import { BLOG_SLUG_PAIRS } from '@/lib/blogTranslations'
import { DEFAULT_LOCALE, LOCALES, SITE_URL } from '@/lib/site'

// Fully static sitemap: no Sanity call. Avoids timeouts/500 for slow or picky fetchers.
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

function blogAlternates(pair) {
    return {
        fr: `${SITE_URL}/fr/blog/${pair.fr}`,
        en: `${SITE_URL}/en/blog/${pair.en}`,
        'x-default': `${SITE_URL}/fr/blog/${pair.fr}`,
    }
}

function blogEntries() {
    return BLOG_SLUG_PAIRS.flatMap((pair) =>
        LOCALES.map((locale) => ({
            url: `${SITE_URL}/${locale}/blog/${pair[locale]}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
            alternates: { languages: blogAlternates(pair) },
        }))
    )
}

export default function sitemap() {
    const staticEntries = STATIC_ROUTES.flatMap(entry)

    const projectEntries = projects.flatMap((project) =>
        entry({ path: `/project/${project.slug}`, priority: 0.6, changeFrequency: 'monthly' })
    )

    return [...staticEntries, ...projectEntries, ...blogEntries()]
}
