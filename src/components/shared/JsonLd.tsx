export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const SITE_URL = 'https://corealmedia.com'

export const organizationSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'Organization' as const,
  name: 'Coréal Media',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    'Coréal Media is a content systems agency that builds content engines for founders, multi-brand companies, and agencies.',
  foundingDate: '2024',
  contactPoint: {
    '@type': 'ContactPoint' as const,
    contactType: 'customer service',
    email: 'hello@corealmedia.com',
  },
  sameAs: [
    'https://instagram.com/corealmedia',
    'https://linkedin.com/company/corealmedia',
  ],
}

export const serviceSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'Service' as const,
  serviceType: 'Content Marketing',
  provider: {
    '@type': 'Organization' as const,
    name: 'Coréal Media',
    url: SITE_URL,
  },
  description:
    'Content strategy, done-for-you content creation, and demand growth systems for brands that want to scale consistently.',
  areaServed: 'Worldwide',
}

export function breadcrumbSchema(pageName: string, pageUrl: string) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'BreadcrumbList' as const,
    itemListElement: [
      {
        '@type': 'ListItem' as const,
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem' as const,
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  }
}
