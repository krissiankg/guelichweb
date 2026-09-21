import { sanityFetch } from '@/sanity/lib/client'
import { projects } from '@/lib/projectsData'
import { LOCALES, SITE_URL } from '@/lib/site'

// Static routes with their relative importance and refresh rhythm.
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

const languageAlternates = (path) =>
    Object.fromEntries(LOCALES.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]))

const entry = ({ path, priority, changeFrequency, lastModified }) =>
    LOCALES.map((locale) => ({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: lastModified || new Date(),
        changeFrequency,
        priority,
        alternates: { languages: languageAlternates(path) },
    }))

async function getPostRoutes() {
    try {
        const posts = await sanityFetch(
            `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, language, _updatedAt }`,
            {},
            { revalidate: 60 }
        )

        return posts
            .filter((post) => LOCALES.includes(post.language))
            .map((post) => ({
                url: `${SITE_URL}/${post.language}/blog/${post.slug}`,
                lastModified: new Date(post._updatedAt),
                changeFrequency: 'monthly',
                priority: 0.6,
            }))
    } catch {
        // Sanity unreachable at build time: ship the static part of the sitemap anyway.
        return []
    }
}

export default async function sitemap() {
    const staticEntries = STATIC_ROUTES.flatMap(entry)

    const projectEntries = projects.flatMap((project) =>
        entry({ path: `/project/${project.slug}`, priority: 0.6, changeFrequency: 'monthly' })
    )

    const postEntries = await getPostRoutes()

    return [...staticEntries, ...projectEntries, ...postEntries]
}
