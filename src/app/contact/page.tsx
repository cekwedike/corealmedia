import type { Metadata } from 'next'
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactForm from '@/components/sections/contact/ContactForm'
import { JsonLd, breadcrumbSchema, contactPageSchema, professionalServiceSchema, SITE_URL } from '@/components/shared/JsonLd'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Ready to build your content engine? Get in touch with Coréal Media and let's talk about your brand, your goals, and how we can help you scale.",
  openGraph: {
    title: 'Contact Coréal Media',
    description: "Ready to build your content engine? Let's talk.",
    url: 'https://corealmedia.com/contact',
    images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Contact Coréal Media' }],
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema('Contact', `${SITE_URL}/contact`)} />
      <JsonLd data={contactPageSchema} />
      <JsonLd data={professionalServiceSchema} />
      <ContactHero />
      <ContactForm />
    </>
  )
}
