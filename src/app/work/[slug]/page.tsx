import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies'
import CaseStudyContent from '@/components/sections/work/CaseStudyContent'
import CTABanner from '@/components/shared/CTABanner'

export function generateStaticParams() {
  return caseStudies.map(study => ({ slug: study.slug }))
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

  return (
    <>
      <CaseStudyContent study={study} />
      <CTABanner
        headline="Ready to Build Your Content Engine?"
        body="Let's talk about your brand, your goals, and exactly how Coréal can help you show up consistently — at scale, without the chaos."
        ctaLabel="Start the Conversation"
        ctaHref="/contact"
      />
    </>
  )
}
