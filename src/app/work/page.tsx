import type { Metadata } from 'next'
import WorkHero from '@/components/sections/work/WorkHero'
import CaseStudyGrid from '@/components/sections/work/CaseStudyGrid'
import CTABanner from '@/components/shared/CTABanner'
import { caseStudies } from '@/data/caseStudies'

export const metadata: Metadata = {
  title: 'Results | Coréal Media',
  description:
    'See how Coréal Media has helped founders and brands build consistent, high-quality content systems that generate trust, visibility, and growth.',
  openGraph: {
    title: 'Results | Coréal Media',
    description: 'Real results from real brands. Browse case studies from Coréal Media clients.',
    url: 'https://corealmedia.com/work',
    images: [{ url: '/images/og/og-work.jpg', width: 1200, height: 630, alt: 'Results — Coréal Media' }],
  },
}

export default function WorkPage() {
  return (
    <>
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
