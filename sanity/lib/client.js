import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export function sanityFetch(query, params = {}, tags = ['posts']) {
  return client.fetch(query, params, {
    cache: 'no-store',
    next: { tags },
  })
}
