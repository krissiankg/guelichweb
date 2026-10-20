// Fallback pairs for articles published before the Sanity `translation` field
// was filled in. A pair is used only when both slugs are actually published
// and neither side already has a Sanity link. It never invents a URL.

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

const LOCALES = ['fr', 'en']

function emptyPair() {
    return { fr: null, en: null, frUpdated: null, enUpdated: null }
}

function remember(pairs, pair) {
    if (pair.fr) pairs.set(pair.fr, pair)
    if (pair.en) pairs.set(pair.en, pair)
}

function stamp(pair, language, updatedAt) {
    if (language === 'fr') pair.frUpdated = updatedAt || pair.frUpdated
    if (language === 'en') pair.enUpdated = updatedAt || pair.enUpdated
}

/**
 * Builds the FR ↔ EN slug index from published Sanity posts.
 * `translation` on either side is enough. Fallback pairs fill gaps only
 * when both slugs are published and still unlinked.
 */
export function buildTranslationIndex(posts, fallbackPairs = BLOG_SLUG_PAIRS) {
    const published = new Map()
    for (const post of posts || []) {
        if (!post?.slug || !LOCALES.includes(post.language)) continue
        published.set(post.slug, post)
    }

    const pairs = new Map()

    for (const post of published.values()) {
        const other = post.translationSlug ? published.get(post.translationSlug) : null
        if (!other || other.language === post.language) continue
        if (pairs.has(post.slug) && pairs.has(other.slug)) continue

        const pair = pairs.get(post.slug) || pairs.get(other.slug) || emptyPair()
        const frPost = post.language === 'fr' ? post : other
        const enPost = post.language === 'en' ? post : other
        pair.fr = frPost.slug
        pair.en = enPost.slug
        stamp(pair, 'fr', frPost.updatedAt)
        stamp(pair, 'en', enPost.updatedAt)
        remember(pairs, pair)
    }

    for (const fallback of fallbackPairs || []) {
        const frPost = published.get(fallback.fr)
        const enPost = published.get(fallback.en)
        if (!frPost || !enPost) continue
        if (frPost.language !== 'fr' || enPost.language !== 'en') continue
        if (pairs.has(fallback.fr) || pairs.has(fallback.en)) continue
        const pair = emptyPair()
        pair.fr = frPost.slug
        pair.en = enPost.slug
        stamp(pair, 'fr', frPost.updatedAt)
        stamp(pair, 'en', enPost.updatedAt)
        remember(pairs, pair)
    }

    for (const post of published.values()) {
        if (pairs.has(post.slug)) continue
        const pair = emptyPair()
        pair[post.language] = post.slug
        stamp(pair, post.language, post.updatedAt)
        remember(pairs, pair)
    }

    return pairs
}

export function serializeTranslationIndex(index) {
    const translations = {}
    const seen = new Set()
    for (const pair of index.values()) {
        const key = `${pair.fr || ''}|${pair.en || ''}`
        if (seen.has(key)) continue
        seen.add(key)
        const entry = { fr: pair.fr, en: pair.en }
        if (pair.fr) translations[pair.fr] = entry
        if (pair.en) translations[pair.en] = entry
    }
    return translations
}

export function languagePathsForSlug(slug, translations) {
    const pair = translations?.[slug]
    if (!pair) return null
    const paths = {}
    if (pair.fr) paths.fr = `/fr/blog/${pair.fr}`
    if (pair.en) paths.en = `/en/blog/${pair.en}`
    return Object.keys(paths).length ? paths : null
}

export function translateBlogPathname(pathname, targetLocale, translations = {}) {
    const parts = String(pathname || '').split('/').filter(Boolean)
    if (!LOCALES.includes(targetLocale)) return `/${targetLocale}`
    if (parts.length < 2) return `/${targetLocale}`

    const [, section, slug] = parts
    if (section === 'blog' && slug) {
        const translated = translations?.[slug]?.[targetLocale]
        if (translated) return `/${targetLocale}/blog/${translated}`
        return `/${targetLocale}/blog`
    }

    parts[0] = targetLocale
    return `/${parts.join('/')}`
}
