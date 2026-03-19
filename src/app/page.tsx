import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import ProblemSection from '@/components/sections/home/ProblemSection'
import ServicesTeaser from '@/components/sections/home/ServicesTeaser'
import ProcessStrip from '@/components/sections/home/ProcessStrip'
import WhoWeServe from '@/components/sections/home/WhoWeServe'
import SocialProof from '@/components/sections/home/SocialProof'
import HomeCTA from '@/components/sections/home/HomeCTA'
import { JsonLd, organizationSchema } from '@/components/shared/JsonLd'

export const metadata: Metadata = {
  title: 'Coréal Media | Content Systems for Brands That Scale',
  description:
    'Coréal Media builds content engines for founders, personal brands, multi-brand companies, and agencies. Strategy, execution, and scale, without losing what makes your brand human.',
  openGraph: {
    title: 'Coréal Media | Content Systems for Brands That Scale',
    description:
      'We build the content engine that ensures you never stop showing up. Strategy, quality, and a system that scales.',
    url: 'https://corealmedia.com',
    images: [{ url: '/images/og/og-home.jpg', width: 1200, height: 630, alt: 'Coréal Media' }],
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <Hero />
      <ProblemSection />
      <ServicesTeaser />
      <ProcessStrip />
      <WhoWeServe />
      <SocialProof />
      <HomeCTA />
    </>
  )
}
