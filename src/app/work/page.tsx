import type { Metadata } from 'next'
import WorkHero from '@/components/sections/work/WorkHero'
import CaseStudyGrid from '@/components/sections/work/CaseStudyGrid'
import CTABanner from '@/components/shared/CTABanner'
import { JsonLd, breadcrumbSchema, SITE_URL } from '@/components/shared/JsonLd'
import { getCaseStudies } from '@/lib/wordpress'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'See how Coréal Media has helped founders and brands build consistent, high-quality content systems that generate trust, visibility, and growth.',
  openGraph: {
    title: 'Our Work | Coréal Media',
    description: 'Real results from real brands. Browse case studies from Coréal Media clients.',
    url: 'https://corealmedia.com/work',
    images: [{ url: '/images/og/og-work.jpg', width: 1200, height: 630, alt: 'Our Work at Coréal Media' }],
  },
}

export default async function WorkPage() {
  const caseStudies = await getCaseStudies()

  return (
    <>
      <JsonLd data={breadcrumbSchema('Our Work', `${SITE_URL}/work`)} />
      <WorkHero />
      <CaseStudyGrid caseStudies={caseStudies} />
      <CTABanner
        headline="Want Results Like These?"
        body="Every case study started with a conversation. Let's start yours."
        ctaLabel="Work With Us"
        ctaHref="/contact"
      />
    </>
  )
}
