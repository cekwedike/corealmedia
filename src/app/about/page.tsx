import type { Metadata } from 'next'
import AboutHero from '@/components/sections/about/AboutHero'
import BrandStory from '@/components/sections/about/BrandStory'
import Philosophy from '@/components/sections/about/Philosophy'
import TeamGrid from '@/components/sections/about/TeamGrid'
import MissionVision from '@/components/sections/about/MissionVision'
import CTABanner from '@/components/shared/CTABanner'
import { JsonLd, breadcrumbSchema, SITE_URL } from '@/components/shared/JsonLd'
import { getTeamMembers } from '@/lib/wordpress'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Coréal Media was built on a simple belief: the future of content is co-created. Learn about our origin story, our philosophy, and the team behind the system.',
  openGraph: {
    title: 'About Coréal Media',
    description:
      'Human intuition meets machine intelligence. Learn how Coréal Media was built and why it exists.',
    url: 'https://corealmedia.com/about',
    images: [{ url: '/images/og/og-about.jpg', width: 1200, height: 630, alt: 'About Coréal Media' }],
  },
}

export default async function AboutPage() {
  const members = await getTeamMembers()

  return (
    <>
      <JsonLd data={breadcrumbSchema('About Us', `${SITE_URL}/about`)} />
      <AboutHero />
      <BrandStory />
      <Philosophy />
      <TeamGrid members={members} />
      <MissionVision />
      <CTABanner
        headline="Want to Work With a Team That Treats Your Brand Like Their Own?"
        body="Let's talk about your brand, your goals, and how Coréal can help you build the content engine your business deserves."
        ctaLabel="Let's Talk"
        ctaHref="/contact"
      />
    </>
  )
}
