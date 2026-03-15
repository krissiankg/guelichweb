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
    const { documentId, instruction } = body

    if (!documentId) {
      return NextResponse.json({ error: 'Missing documentId' }, { status: 400 })
    }

    // The deployed Sanity schema ID
    const schemaId = "_.schemas.default" 
    
    // Default instruction if none provided
    const baseInstruction = "Focus on writing a comprehensive and engaging article suitable for a professional blog. Format the body using rich text blocks. Do not overwrite the title or slug."
    const fullInstruction = instruction ? `${instruction}. ${baseInstruction}` : baseInstruction

    // Trigger the generative agent
    const result = await client.agent.action.generate({
      schemaId: schemaId,
      documentId: documentId,
      instruction: fullInstruction
    })

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Generation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
