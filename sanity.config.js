import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'
import { TranslateAction } from './sanity/actions/TranslateAction'
import { GenerateAction } from './sanity/actions/GenerateAction'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool(),
  ],
  document: {
    actions: (prev, context) => {
      // Add the custom TranslateAction and GenerateAction to all documents
      return [...prev, TranslateAction, GenerateAction]
    },
  },
})
