import { projects } from '@/lib/projectsData'
import { BLOG_SLUG_PAIRS } from '@/lib/blogTranslations'
import { DEFAULT_LOCALE, LOCALES, SITE_URL } from '@/lib/site'
import { sanityFetch } from '@/sanity/lib/client'

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

export const revalidate = 3600

const POSTS_TIMEOUT_MS = 2500

function withTimeout(promise, ms) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(`timeout ${ms}ms`)), ms)
        promise.then(
            (value) => {
                clearTimeout(timer)
                resolve(value)
            },
            (error) => {
                clearTimeout(timer)
                reject(error)
            }
        )
    })
}

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

function fallbackPostEntries() {
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

async function getPostRoutes() {
    try {
        const posts = await withTimeout(
            sanityFetch(
                `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, language, _updatedAt }`,
                {},
                { revalidate: 3600 }
            ),
            POSTS_TIMEOUT_MS
        )

        if (!Array.isArray(posts) || posts.length === 0) {
            return fallbackPostEntries()
        }

        const pairBySlug = new Map()
        for (const pair of BLOG_SLUG_PAIRS) {
            pairBySlug.set(pair.fr, pair)
            pairBySlug.set(pair.en, pair)
        }

        return posts
            .filter((post) => LOCALES.includes(post.language) && post.slug)
            .map((post) => {
                const updated = new Date(post._updatedAt)
                const pair = pairBySlug.get(post.slug)
                return {
                    url: `${SITE_URL}/${post.language}/blog/${post.slug}`,
                    lastModified: Number.isNaN(updated.getTime()) ? new Date() : updated,
                    changeFrequency: 'monthly',
                    priority: 0.6,
                    alternates: {
                        languages: pair
                            ? blogAlternates(pair)
                            : languageAlternates(`/blog/${post.slug}`),
                    },
                }
            })
    } catch (error) {
        console.error('[sitemap] articles Sanity indisponibles, paires locales servies:', error?.message || error)
        return fallbackPostEntries()
    }
}

export default async function sitemap() {
    try {
        const staticEntries = STATIC_ROUTES.flatMap(entry)

        const projectEntries = projects.flatMap((project) =>
            entry({ path: `/project/${project.slug}`, priority: 0.6, changeFrequency: 'monthly' })
        )

        const postEntries = await getPostRoutes()

        return [...staticEntries, ...projectEntries, ...postEntries]
    } catch (error) {
        console.error('[sitemap] échec global, index statique seul:', error?.message || error)
        return STATIC_ROUTES.flatMap(entry)
    }
}
