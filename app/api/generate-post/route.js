import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from "@google/generative-ai"

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

// Initialize Sanity Client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-14',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

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

    console.log("Generating with Gemini for: ", articleTitle)

    // Construct the prompt for Gemini
    const systemPrompt = `
      Tu es un expert mondial en rédaction web et en SEO.
      Ta mission est de rédiger un article complet, engageant, et optimisé pour le référencement (SEO) pour "guelichweb.online".
      
      RÈGLES CRITIQUES:
      1. L'article DOIT être très détaillé et dépasser les 2000 mots.
      2. Le titre exact est : "${articleTitle}".
      3. Utilise des sous-titres H2 et H3 pour structurer.
      4. RÉPONDS UNIQUEMENT AU FORMAT JSON "Portable Text" de Sanity.
      
      STRUCTURE DU JSON ATTENDUE (exemple) :
      [
        {
          "_type": "block",
          "style": "normal",
          "children": [{ "_type": "span", "text": "Introduction..." }]
        },
        {
          "_type": "block",
          "style": "h2",
          "children": [{ "_type": "span", "text": "Premier titre important" }]
        }
      ]
      
      Ne mets aucun texte avant ou après le JSON. Pas de backticks markdown. Juste le tableau JSON.
    `

    const userPrompt = instruction 
      ? `Instructions spécifiques : "${instruction}"` 
      : `Rédige l'article le plus complet possible sur : "${articleTitle}"`

    const result = await model.generateContent([systemPrompt, userPrompt]);
    const responseText = result.response.text();
    
    // Clean the response in case Gemini adds markdown code blocks
    const cleanJson = responseText.replace(/```json|```/g, '').trim();
    
    let blocks;
    try {
      blocks = JSON.parse(cleanJson);
    } catch (e) {
      console.error("Failed to parse Gemini JSON:", cleanJson);
      throw new Error("L'IA n'a pas renvoyé un format JSON valide. Veuillez réessayer.");
    }

    console.log("Saving generated blocks to Sanity...");
    await sanityClient
      .patch(documentId)
      .set({ body: blocks })
      .commit()

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Gemini Generation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
