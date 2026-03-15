import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { htmlToBlocks } from '@sanity/block-tools'
import { JSDOM } from 'jsdom'
import { Schema } from '@sanity/schema'

export const maxDuration = 60; // Increase timeout for Pro+ plans (60s)
export const dynamic = 'force-dynamic';

// Create a dummy schema to feed block-tools so it knows how to parse text
const defaultSchema = Schema.compile({
  name: 'default',
  types: [
    {
      type: 'document',
      name: 'post',
      fields: [{ type: 'array', name: 'body', of: [{ type: 'block' }] }],
    },
  ],
})
const blockContentType = defaultSchema.get('post').fields.find((field) => field.name === 'body').type

// Initialize Sanity Client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-14',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Initialize OpenAI Client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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

    // Construct the strictly enforced SEO System Prompt
    const systemPrompt = `
      Tu es un expert mondial en rédaction web et en SEO.
      Ta mission STRICTE est de rédiger un article complet, engageant, et optimisé pour le référencement (SEO).
      L'article sera publié sur le domaine "guelichweb.online". Garde un ton professionnel, clair, et percutant.
      
      RÈGLES ABSOLUES:
      1. L'article DOIT OBLIGATOIREMENT dépasser les 2000 mots. (Développe les concepts en profondeur, donne des exemples, des études de cas).
      2. Le titre exact de l'article est : "${articleTitle}".
      3. Ne fournis pas de titre h1 (<h1>) tout en haut, commence directement par une phrase d'accroche (introduction).
      4. Utilise une hiérarchie stricte avec des sous-titres HTML <h2> et <h3>.
      5. Formate TOUTE ta réponse UNIQUEMENT en HTML basique (utilises <p>, <h2>, <h3>, <strong>, <ul>, <li>). NE METS PAS la balise fermée <html>, juste le contenu HTML brut, et aucun backticks markdown comme \`\`\`html.
    `

    // Build the user prompt
    const userPrompt = instruction 
      ? `Voici des instructions additionnelles de l'utilisateur à respecter impérativement pour cet article : "${instruction}"` 
      : `Rédige un article le plus complet et détaillé possible sur le sujet du titre : "${articleTitle}".`

    // Call OpenAI API
    console.log("Calling OpenAI for document: ", documentId)
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.7,
    });

    const htmlOutput = completion.choices[0].message.content
    console.log("OpenAI output length: ", htmlOutput?.length)

    if (!htmlOutput) {
      throw new Error("L'IA n'a retourné aucun contenu.")
    }

    // Convert HTML to Sanity Blocks
    console.log("Converting HTML to Blocks...")
    const rawHtml = htmlOutput.trim().replace(/^```html|```$/g, '')
    
    try {
      const blocks = htmlToBlocks(rawHtml, blockContentType, {
        parseHtml: (html) => new JSDOM(html).window.document,
      })

      console.log("Saving blocks to Sanity...")
      // Patch the document in Sanity with the new blocks
      await sanityClient
        .patch(documentId)
        .set({ body: blocks })
        .commit()

      console.log("Generation and save successful!")
      return NextResponse.json({ success: true })
    } catch (parseError) {
      console.error("Conversion/Save error:", parseError)
      return NextResponse.json({ 
        error: "Erreur lors de la conversion du texte : " + parseError.message,
        details: parseError.stack 
      }, { status: 500 })
    }

  } catch (error) {
    console.error('OpenAI Global Route error:', error)
    return NextResponse.json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 })
  }
}
