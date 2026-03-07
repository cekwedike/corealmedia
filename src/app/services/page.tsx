import type { Metadata } from 'next'
import ServicesHero from '@/components/sections/services/ServicesHero'
import ServiceBlock from '@/components/sections/services/ServiceBlock'
import WorkflowDetail from '@/components/sections/services/WorkflowDetail'
import CTABanner from '@/components/shared/CTABanner'
import { JsonLd, serviceSchema, breadcrumbSchema, SITE_URL } from '@/components/shared/JsonLd'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Three ways Coréal Media helps brands scale: The Content OS, The Operational Engine, and The Visibility Matrix.',
  openGraph: {
    title: 'Services | Coréal Media',
    description:
      'Content strategy, done-for-you execution, and demand growth systems. Built for brands that are serious about scale.',
    url: 'https://corealmedia.com/services',
    images: [
      { url: '/images/og/og-services.jpg', width: 1200, height: 630, alt: 'Services — Coréal Media' },
    ],
  },
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema('Services', `${SITE_URL}/services`)} />
      <ServicesHero />
      <ServiceBlock service={services[0]} serviceNumber="01" reversed={false} bg="secondary" />
      <ServiceBlock service={services[1]} serviceNumber="02" reversed={true} bg="primary" />
      <ServiceBlock service={services[2]} serviceNumber="03" reversed={false} bg="secondary" />
      <WorkflowDetail />
      <CTABanner
        headline="Not Sure Which Service Is Right for You?"
        body="That's what the first conversation is for. Tell us where you are, where you want to be, and we'll tell you exactly how we can help."
        ctaLabel="Let's Talk"
        ctaHref="/contact"
      />
    </>
  )
}
