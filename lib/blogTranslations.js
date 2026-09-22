// Canonical FR ↔ EN slug pairs for blog posts.
// Used by hreflang, language switcher and sitemap alternates.

export const BLOG_SLUG_PAIRS = [
    {
        fr: 'comment-creer-un-site-web-professionnel-en-2026-guide-complet-pour-debutants-et-entreprises',
        en: 'how-to-create-a-professional-website-in-2026-a-complete-guide-for-beginners-and-businesses',
    },
    {
        fr: 'combien-coute-une-automatisation-ia-au-benin',
        en: 'how-much-does-ai-automation-cost-in-benin',
    },
    {
        fr: 'site-web-whatsapp-crm-pme-cotonou',
        en: 'website-whatsapp-crm-sme-cotonou',
    },
    {
        fr: 'n8n-ou-make-quel-outil-automatisation-choisir',
        en: 'n8n-or-make-which-automation-tool-to-choose',
    },
    {
        fr: 'chatbot-whatsapp-ce-quil-fait-vraiment',
        en: 'whatsapp-chatbot-what-it-actually-does',
    },
    {
        fr: 'pourquoi-votre-site-web-ne-rapporte-rien',
        en: 'why-your-website-is-not-bringing-customers',
    },
]

const bySlug = new Map()
for (const pair of BLOG_SLUG_PAIRS) {
    bySlug.set(pair.fr, pair)
    bySlug.set(pair.en, pair)
}

export function getBlogSlugPair(slug) {
    return bySlug.get(slug) || null
}

export function getBlogSlugForLocale(slug, locale) {
    const pair = getBlogSlugPair(slug)
    if (!pair) return slug
    return pair[locale] || slug
}

// Relative paths used by Next.js metadata alternates (without domain).
export function getBlogLanguagePaths(slug) {
    const pair = getBlogSlugPair(slug)
    if (!pair) {
        return {
            fr: `/fr/blog/${slug}`,
            en: `/en/blog/${slug}`,
        }
    }
    return {
        fr: `/fr/blog/${pair.fr}`,
        en: `/en/blog/${pair.en}`,
    }
}

export function translateBlogPathname(pathname, targetLocale) {
    const parts = pathname.split('/').filter(Boolean)
    if (parts.length < 2) return `/${targetLocale}`

    const [, section, slug] = parts
    if (section === 'blog' && slug) {
        return `/${targetLocale}/blog/${getBlogSlugForLocale(slug, targetLocale)}`
    }

    parts[0] = targetLocale
    return `/${parts.join('/')}`
}
