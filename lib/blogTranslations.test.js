import assert from 'node:assert/strict'
import test from 'node:test'
import {
    buildTranslationIndex,
    languagePathsForSlug,
    serializeTranslationIndex,
    translateBlogPathname,
} from './blogTranslations.js'

const fr = 'article-fr'
const en = 'article-en'

test('links posts when only one side fills translation', () => {
    const index = buildTranslationIndex([
        { slug: fr, language: 'fr', translationSlug: en, translationLanguage: 'en', updatedAt: '2026-10-01' },
        { slug: en, language: 'en', updatedAt: '2026-10-02' },
    ], [])

    const pair = index.get(fr)
    assert.equal(pair.en, en)
    assert.equal(index.get(en), pair)
    assert.equal(pair.frUpdated, '2026-10-01')
    assert.equal(pair.enUpdated, '2026-10-02')
})

test('lists a published article that has no translation yet', () => {
    const index = buildTranslationIndex([
        { slug: 'nouveau', language: 'fr', updatedAt: '2026-10-20' },
    ], [])

    const pair = index.get('nouveau')
    assert.equal(pair.fr, 'nouveau')
    assert.equal(pair.en, null)
})

test('ignores a translation that points at the same language or an unpublished slug', () => {
    const index = buildTranslationIndex([
        { slug: 'seul', language: 'fr', translationSlug: 'autre-fr', translationLanguage: 'fr' },
        { slug: 'autre-fr', language: 'fr' },
        { slug: 'orphelin', language: 'en', translationSlug: 'pas-publie', translationLanguage: 'fr' },
    ], [])

    assert.equal(index.get('seul').en, null)
    assert.equal(index.get('autre-fr').fr, 'autre-fr')
    assert.equal(index.get('orphelin').fr, null)
})

test('uses a fallback pair only when both slugs are published and unlinked', () => {
    const index = buildTranslationIndex(
        [
            { slug: fr, language: 'fr' },
            { slug: en, language: 'en' },
            { slug: 'brouillon-fr', language: 'fr' },
        ],
        [
            { fr, en },
            { fr: 'brouillon-fr', en: 'brouillon-en' },
        ]
    )

    assert.equal(index.get(fr).en, en)
    assert.equal(index.get('brouillon-fr').en, null)
    assert.equal(index.has('brouillon-en'), false)
})

test('sanity link wins over a stale fallback pair', () => {
    const index = buildTranslationIndex(
        [
            { slug: fr, language: 'fr', translationSlug: 'vraie-en', translationLanguage: 'en' },
            { slug: en, language: 'en' },
            { slug: 'vraie-en', language: 'en' },
        ],
        [{ fr, en }]
    )

    assert.equal(index.get(fr).en, 'vraie-en')
    assert.equal(index.get(en).fr, null)
})

test('language paths and the switcher never invent a missing translation', () => {
    const translations = serializeTranslationIndex(buildTranslationIndex([
        { slug: fr, language: 'fr', translationSlug: en, translationLanguage: 'en' },
        { slug: en, language: 'en' },
        { slug: 'solo', language: 'fr' },
    ], []))

    assert.deepEqual(languagePathsForSlug(fr, translations), {
        fr: `/fr/blog/${fr}`,
        en: `/en/blog/${en}`,
    })
    assert.deepEqual(languagePathsForSlug('solo', translations), {
        fr: '/fr/blog/solo',
    })
    assert.equal(translateBlogPathname(`/fr/blog/${fr}`, 'en', translations), `/en/blog/${en}`)
    assert.equal(translateBlogPathname('/en/blog/solo', 'fr', translations), '/fr/blog/solo')
    assert.equal(translateBlogPathname('/en/blog/inconnu', 'fr', translations), '/fr/blog')
    assert.equal(translateBlogPathname('/en/blog/inconnu', 'en', translations), '/en/blog')
    assert.equal(translateBlogPathname('/fr/contact', 'en', translations), '/en/contact')
})
