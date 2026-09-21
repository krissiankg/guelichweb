import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: token || undefined,
  perspective: 'published',
})

export function sanityFetch(query, params = {}, options = {}) {
  const { tags = ['posts'], revalidate } = options
  const fetchOptions =
    typeof revalidate === 'number'
      ? { next: { revalidate, tags } }
      : { cache: 'no-store', next: { tags } }

  return client.fetch(query, params, fetchOptions)
}
