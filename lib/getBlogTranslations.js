import { cache } from 'react'
import { sanityFetch } from '@/sanity/lib/client'
import {
    BLOG_SLUG_PAIRS,
    buildTranslationIndex,
    serializeTranslationIndex,
} from '@/lib/blogTranslations'

const POSTS_QUERY = `*[_type == "post" && defined(slug.current) && language in ["fr", "en"]]{
  "slug": slug.current,
  language,
  "translationSlug": translation->slug.current,
  "translationLanguage": translation->language,
  "updatedAt": coalesce(_updatedAt, publishedAt)
}`

async function fetchPublishedPosts() {
    return sanityFetch(POSTS_QUERY, {}, { revalidate: 3600, tags: ['posts'] })
}

export const getBlogTranslationIndex = cache(async () => {
    let timer
    try {
        const posts = await Promise.race([
            fetchPublishedPosts(),
            new Promise((_, reject) => {
                timer = setTimeout(() => reject(new Error('Sanity blog index timed out')), 8000)
            }),
        ])
        return buildTranslationIndex(posts, BLOG_SLUG_PAIRS)
    } catch (error) {
        console.error('Unable to read published blog posts from Sanity:', error)
        return buildTranslationIndex([], [])
    } finally {
        clearTimeout(timer)
    }
})

export const getBlogTranslationMap = cache(async () => {
    const index = await getBlogTranslationIndex()
    return serializeTranslationIndex(index)
})
