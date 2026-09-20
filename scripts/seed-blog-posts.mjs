/**
 * Creates the blog articles as DRAFTS in Sanity, so nothing goes live
 * until you review and publish them from the Studio.
 *
 *   node --env-file=.env.local scripts/seed-blog-posts.mjs           # dry run
 *   node --env-file=.env.local scripts/seed-blog-posts.mjs --write   # actually write
 */

import { mkdir, writeFile } from 'node:fs/promises'
import { createClient } from '@sanity/client'
import { toPortableText } from './portableText.mjs'
import { author, categories, linkTargets, posts } from './blogContent.mjs'

const WRITE = process.argv.includes('--write')
const EXPORT = process.argv.includes('--export')
const OUT_DIR = 'content/blog'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.replace(/"/g, '')
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.replace(/"/g, '')
// Writing needs an Editor token; SANITY_API_TOKEN may be read-only.
const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_API_TOKEN

if (!projectId || !dataset || !token) {
    console.error('Missing env vars. Run with: node --env-file=.env.local scripts/seed-blog-posts.mjs')
    process.exit(1)
}

if (WRITE && !process.env.SANITY_WRITE_TOKEN) {
    console.warn(
        'Attention : SANITY_WRITE_TOKEN absent, utilisation de SANITY_API_TOKEN.\n' +
        'Si l\'écriture échoue, créez un token Editor sur manage.sanity.io et ajoutez-le à .env.local.\n'
    )
}

const client = createClient({
    projectId,
    dataset,
    token,
    apiVersion: '2024-03-13',
    useCdn: false,
    timeout: 30000,
})

const slugify = (value) =>
    value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

// Replaces the URL_* placeholders used in the article bodies.
const resolveLinks = (nodes) =>
    nodes.map((node) =>
        Object.fromEntries(
            Object.entries(node).map(([type, value]) => {
                const replace = (text) =>
                    Object.entries(linkTargets).reduce(
                        (acc, [placeholder, url]) => acc.split(placeholder).join(url),
                        text
                    )
                return [type, Array.isArray(value) ? value.map(replace) : replace(value)]
            })
        )
    )

// Reuses the existing author instead of creating a duplicate.
async function resolveAuthor() {
    const existing = await client.fetch('*[_type == "author"] | order(_createdAt asc)[0]{_id, name}')

    if (existing?._id) {
        console.log(`  = auteur existant réutilisé : ${existing.name}`)
        return existing._id
    }

    const id = `author.${author.slug}`
    if (WRITE) {
        await client.create({
            _id: id,
            _type: 'author',
            name: author.name,
            slug: { _type: 'slug', current: author.slug },
            bio: toPortableText([{ p: author.bio }]),
        })
        console.log(`  + auteur créé : ${author.name}`)
    } else {
        console.log(`  + auteur à créer : ${author.name}`)
    }
    return id
}

async function resolveCategory(category) {
    const id = `category.${slugify(category.title)}`
    const existing = await client.fetch(
        '*[_type == "category" && (_id == $id || lower(title) == $title)][0]{_id}',
        { id, title: category.title.toLowerCase() }
    )

    if (existing?._id) {
        console.log(`  = ${category.title}`)
        return existing._id
    }

    if (WRITE) {
        await client.create({
            _id: id,
            _type: 'category',
            title: category.title,
            description: category.description,
        })
        console.log(`  + ${category.title}`)
    } else {
        console.log(`  + ${category.title} (à créer)`)
    }
    return id
}

const wordCount = (body) =>
    body
        .flatMap((node) => Object.values(node))
        .flat()
        .join(' ')
        .split(/\s+/)
        .filter(Boolean).length

const toMarkdown = (post) => {
    const lines = [
        `# ${post.title}`,
        '',
        `- **Slug** : \`${post.slug}\``,
        `- **Langue** : ${post.language}`,
        `- **Catégories** : ${post.categories.join(', ')}`,
        '',
        `> ${post.excerpt}`,
        '',
        '---',
        '',
    ]

    for (const node of resolveLinks(post.body)) {
        if (node.h2) lines.push(`## ${node.h2}`, '')
        else if (node.h3) lines.push(`### ${node.h3}`, '')
        else if (node.quote) lines.push(`> ${node.quote}`, '')
        else if (node.ul) lines.push(...node.ul.map((item) => `- ${item}`), '')
        else if (node.ol) lines.push(...node.ol.map((item, i) => `${i + 1}. ${item}`), '')
        else lines.push(node.p, '')
    }

    return lines.join('\n')
}

// Writes Markdown (for copy-paste) and NDJSON (for `sanity dataset import`).
async function exportFiles(authorId, categoryIds) {
    await mkdir(OUT_DIR, { recursive: true })

    for (const post of posts) {
        await writeFile(`${OUT_DIR}/${post.slug}.md`, toMarkdown(post), 'utf8')
        console.log(`  → ${OUT_DIR}/${post.slug}.md`)
    }

    const documents = [
        ...categories.map((category) => ({
            _id: `category.${slugify(category.title)}`,
            _type: 'category',
            title: category.title,
            description: category.description,
        })),
        ...posts.map((post) => ({
            _id: `drafts.post.${post.slug}`,
            _type: 'post',
            title: post.title,
            language: post.language,
            slug: { _type: 'slug', current: post.slug },
            excerpt: post.excerpt,
            publishedAt: new Date().toISOString(),
            author: { _type: 'reference', _ref: authorId },
            categories: post.categories.map((title) => ({
                _type: 'reference',
                _key: slugify(title),
                _ref: categoryIds[title],
            })),
            body: toPortableText(resolveLinks(post.body)),
        })),
    ]

    const ndjson = documents.map((doc) => JSON.stringify(doc)).join('\n')
    await writeFile(`${OUT_DIR}/posts.ndjson`, `${ndjson}\n`, 'utf8')
    console.log(`  → ${OUT_DIR}/posts.ndjson`)
}

async function main() {
    console.log(`\nSanity ${projectId} / ${dataset}`)
    console.log(WRITE ? 'Mode : ÉCRITURE\n' : 'Mode : SIMULATION (ajoutez --write pour appliquer)\n')

    console.log('Auteur')
    const authorId = await resolveAuthor()

    console.log('\nCatégories')
    const categoryIds = {}
    for (const category of categories) {
        categoryIds[category.title] = await resolveCategory(category)
    }

    if (EXPORT) {
        console.log('\nExport des fichiers')
        await exportFiles(authorId, categoryIds)
    }

    console.log('\nArticles (en brouillon)')
    let total = 0

    for (const post of posts) {
        const words = wordCount(post.body)
        total += words

        const document = {
            _id: `drafts.post.${post.slug}`,
            _type: 'post',
            title: post.title,
            language: post.language,
            slug: { _type: 'slug', current: post.slug },
            excerpt: post.excerpt,
            publishedAt: new Date().toISOString(),
            author: { _type: 'reference', _ref: authorId },
            categories: post.categories.map((title) => ({
                _type: 'reference',
                _key: slugify(title),
                _ref: categoryIds[title],
            })),
            body: toPortableText(resolveLinks(post.body)),
        }

        if (WRITE) {
            await client.createOrReplace(document)
            console.log(`  + ${post.slug} — ${words} mots`)
        } else {
            console.log(`  · ${post.slug} — ${words} mots`)
        }
    }

    console.log(`\n${posts.length} articles, ${total} mots au total.`)
    console.log(
        WRITE
            ? 'Ouvrez /studio, relisez chaque brouillon et publiez-le.\n'
            : 'Simulation terminée. Relancez avec --write pour créer les brouillons.\n'
    )
}

main().catch((error) => {
    console.error('\nÉchec :', error.message)
    process.exit(1)
})
