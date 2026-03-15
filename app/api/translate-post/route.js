import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

// Initialize the standard client using the secure token
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-14',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export async function POST(req) {
  try {
    const body = await req.json()
    const { documentId } = body

    if (!documentId) {
      return NextResponse.json({ error: 'Missing documentId' }, { status: 400 })
    }

    // According to docs, we need the schema ID.
    // In typical Sanity v3 projects, the default workspace/schema name is "default"
    const schemaId = "default" 

    // Trigger the translation agent
    // We are requesting from French (fr) to English (en)
    const result = await client.agent.action.translate({
      schemaId: schemaId,
      documentId: documentId,
      targetDocument: {
        operation: 'create', // Creates a new unlinked draft
      },
      fromLanguage: { id: 'fr', title: 'Français' },
      toLanguage: { id: 'en', title: 'English' },
    })

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Translation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
