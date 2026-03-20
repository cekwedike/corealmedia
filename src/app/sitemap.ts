import { MetadataRoute } from 'next'
import { getCaseStudies } from '@/lib/wordpress'

export const revalidate = 3600 // Rebuild sitemap at most once per hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://corealmedia.com'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Pull live case studies from WordPress so new ones are automatically included
  let caseStudyPages: MetadataRoute.Sitemap = []
  try {
    const studies = await getCaseStudies()
    caseStudyPages = studies.map(study => ({
      url: `${baseUrl}/work/${study.slug}`,
      lastModified: new Date(study.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {
    // If WordPress is unreachable at build time, sitemap still works for static pages
  }

  return [...staticPages, ...caseStudyPages]
}
