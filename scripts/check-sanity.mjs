import { createClient } from '@sanity/client'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.replace(/"/g, ''),
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET?.replace(/"/g, ''),
    token: process.env.SANITY_WRITE_TOKEN || process.env.SANITY_API_TOKEN,
    apiVersion: '2024-03-13',
    useCdn: false,
    timeout: 25000,
})

const t0 = Date.now()

try {
    const posts = await client.fetch('count(*[_type=="post"])')
    console.log(`posts existants: ${posts} (${Date.now() - t0} ms)`)
    console.log('categories:', JSON.stringify(await client.fetch('*[_type=="category"]{_id,title}')))
    console.log('authors:', JSON.stringify(await client.fetch('*[_type=="author"]{_id,name}')))
    console.log('drafts:', JSON.stringify(await client.fetch('*[_id in path("drafts.**")]{_id}')))
} catch (error) {
    console.error('ERREUR:', error.message)
    process.exit(1)
}

// Confirms whether the token may create documents, without leaving anything behind.
const probeId = 'drafts.guelichweb-write-probe'
try {
    await client.createOrReplace({ _id: probeId, _type: 'category', title: 'write probe' })
    await client.delete(probeId)
    console.log('écriture: OK (token Editor)')
} catch (error) {
    console.log(`écriture: REFUSÉE — ${error.message.split('\n')[0]}`)
}
