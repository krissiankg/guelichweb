import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

// Use the secure token and standard Sanity client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-14',
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

    // Fetch the current document to get the title
    const existingDoc = await sanityClient.getDocument(documentId)
    const articleTitle = existingDoc?.title || "Article sans titre"

    // Sanity typical schema ID
    const schemaId = "_.schemas.default" 

    // Build the high-quality instructional prompt for Sanity's Agent
    const baseAIInstruction = `
      Tu es un expert mondial en rédaction web et en SEO.
      Ta mission est de rédiger un article complet, engageant, et optimisé pour le référencement (SEO) pour "guelichweb.online".
      
      RÈGLES CRITIQUES:
      1. L'article DOIT être très détaillé et faire au total plus de 2000 mots. Développe chaque point avec précision.
      2. Le titre précis de l'article est : "${articleTitle}".
      3. Rédige uniquement le contenu du champ 'body'.
      4. Utilise des balises de titres (H2, H3), des listes à puces et du gras pour le SEO.
    `

    // Combine system rules with user instructions
    const fullInstruction = instruction 
      ? `${baseAIInstruction}\n\nCONSIGNES SPÉCIFIQUES DE L'UTILISATEUR :\n${instruction}` 
      : `${baseAIInstruction}\n\nRédige cet article maintenant.`

    console.log("Triggering Sanity Agent Action for: ", articleTitle)

    // Call Sanity's programmatic Agent Action
    // IMPORTANT: Only use allowed keys to avoid validation errors
    const result = await sanityClient.agent.action.generate({
      schemaId: schemaId,
      documentId: documentId,
      instruction: fullInstruction,
    })

    return NextResponse.json({ success: true, result })

  } catch (error) {
    console.error('Sanity Agent Generation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
