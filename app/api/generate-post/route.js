import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

// Initialize the standard client using the secure token
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: 'vX',
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

    // The deployed Sanity schema ID
    const schemaId = "_.schemas.default" 

    // Trigger the generative agent
    const result = await client.agent.action.generate({
      schemaId: schemaId,
      documentId: documentId,
      // Target document operation 'update' modifies the document directly
      targetDocument: {
        operation: 'update',
      },
      // Generate prompt for the Sanity AI Agent
      prompt: "Generate a comprehensive and engaging blog post body (and an excerpt if it's missing) based on this document's title. Keep the tone professional but accessible. Format the body using rich text blocks. Do not overwrite the title or slug.",
    })

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Generation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
