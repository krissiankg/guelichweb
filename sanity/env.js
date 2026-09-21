export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-13'

const strip = (value) => (value || '').replace(/^["']|["']$/g, '').trim()

export const dataset = strip(process.env.NEXT_PUBLIC_SANITY_DATASET)
export const projectId = strip(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
export const useCdn = false
