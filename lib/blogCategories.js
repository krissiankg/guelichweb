// Sanity category titles are stored in French. Map them for English UI.

const CATEGORY_EN = {
    Automatisation: 'Automation',
    'Intelligence artificielle': 'Artificial intelligence',
    'Transformation digitale': 'Digital transformation',
    'WhatsApp Business': 'WhatsApp Business',
    'Site web': 'Website',
}

export function translateCategory(title, lang = 'fr') {
    if (!title) return title
    if (lang !== 'en') return title
    return CATEGORY_EN[title] || title
}

export function translateCategories(titles, lang = 'fr') {
    if (!Array.isArray(titles)) return []
    return titles.map((title) => translateCategory(title, lang))
}
