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

    // Fetch the current document to know its title before generating
    const existingDoc = await client.getDocument(documentId)
    const articleTitle = existingDoc?.title || "Article sans titre"

    // The deployed Sanity schema ID
    const schemaId = "_.schemas.default" 
    
    // Default instruction if none provided
    const baseInstruction = `
      You are an expert copywriter. Your ONLY task is to write the 'body' (and 'excerpt' if empty) of a blog article. 
      The actual title of the article is EXACTLY: "${articleTitle}". 
      You MUST NOT change or translate the 'title' or 'slug' fields. They must remain exactly as they are.
      Write a comprehensive, engaging, and professional article focusing strictly on the subject of the title.
      Format the body using rich text blocks.
    `
    const fullInstruction = instruction ? `${instruction}\n\n${baseInstruction}` : baseInstruction

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
