export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const SITE_URL = 'https://corealmedia.com'

// Enables Google Sitelinks Searchbox in search results
export const websiteSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'WebSite' as const,
  name: 'Coréal Media',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction' as const,
    target: {
      '@type': 'EntryPoint' as const,
      urlTemplate: `${SITE_URL}/work?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export const professionalServiceSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'ProfessionalService' as const,
  name: 'Coréal Media',
  url: SITE_URL,
  description:
    'Coréal Media is a content systems agency that builds content engines for founders, multi-brand companies, and agencies.',
  email: 'hello@corealmedia.com',
  areaServed: 'Worldwide',
  priceRange: '$$',
  serviceType: 'Content Marketing Agency',
  knowsAbout: [
    'Content Strategy',
    'Content Creation',
    'Brand Building',
    'Social Media Management',
    'Content Systems',
    'Growth Marketing',
  ],
  sameAs: [
    'https://instagram.com/corealmedia',
    'https://linkedin.com/company/corealmedia',
  ],
}

export const contactPageSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'ContactPage' as const,
  name: 'Contact Coréal Media',
  url: `${SITE_URL}/contact`,
  description: 'Get in touch with Coréal Media to start building your content engine.',
  mainEntity: {
    '@type': 'Organization' as const,
    name: 'Coréal Media',
    email: 'hello@corealmedia.com',
    url: SITE_URL,
  },
}

export function productSchema(product: {
  name: string
  description: string
  price: string
  url: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'Product' as const,
    name: product.name,
    description: product.description,
    image: product.image,
    url: product.url,
    offers: {
      '@type': 'Offer' as const,
      price: product.price.replace(/[^0-9.]/g, ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization' as const, name: 'Coréal Media' },
    },
    brand: { '@type': 'Brand' as const, name: 'Coréal Media' },
  }
}

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
