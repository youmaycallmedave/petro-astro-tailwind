import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset:   import.meta.env.SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function getFaqs() {
  return sanityClient.fetch<{ question: string; answer: string }[]>(
    `*[_type == "faq"] | order(order asc) { question, answer }`
  )
}
