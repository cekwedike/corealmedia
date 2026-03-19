import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/wordpress'
import CaseStudyContent from '@/components/sections/work/CaseStudyContent'
import CTABanner from '@/components/shared/CTABanner'
import { JsonLd, breadcrumbSchema, SITE_URL } from '@/components/shared/JsonLd'

export const revalidate = 60

export async function generateStaticParams() {
  const studies = await getCaseStudies()
  return studies.map(study => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) return { title: 'Case Study Not Found' }
  return {
    title: `${study.clientType} | Case Study`,
    description: study.challenge,
    openGraph: {
      title: `${study.clientType} | Coréal Media Case Study`,
      description: study.challenge,
      url: `https://corealmedia.com/work/${study.slug}`,
      images: [{ url: study.featuredImage, width: 1200, height: 630, alt: study.clientType }],
    },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) notFound()

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${study.clientType}: Coréal Media Case Study`,
    description: study.challenge,
    datePublished: study.publishedAt,
    image: study.featuredImage,
    author: { '@type': 'Organization', name: 'Coréal Media', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Coréal Media', url: SITE_URL },
    url: `${SITE_URL}/work/${study.slug}`,
  }

  return (
    <>
      <JsonLd data={caseStudySchema} />
      <JsonLd data={breadcrumbSchema(study.clientType, `${SITE_URL}/work/${study.slug}`)} />
      <CaseStudyContent study={study} />
      <CTABanner
        headline="Ready to Build Your Content Engine?"
        body="Let's talk about your brand, your goals, and exactly how Coréal can help you show up consistently, at scale, without the chaos."
        ctaLabel="Start the Conversation"
        ctaHref="/contact"
      />
    </>
  )
}
