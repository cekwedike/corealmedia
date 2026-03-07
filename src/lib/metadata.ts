import type { Metadata } from 'next'

const SITE_URL = 'https://corealmedia.com'
const DEFAULT_OG_IMAGE = '/images/og/og-default.jpg'

export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function defaultOpenGraph(
  overrides: Partial<{ title: string; description: string; url: string; image: string }> = {}
): Metadata['openGraph'] {
  return {
    type: 'website',
    locale: 'en_US',
    url: overrides.url ?? SITE_URL,
    siteName: 'Coréal Media',
    title: overrides.title,
    description: overrides.description,
    images: [
      {
        url: absoluteUrl(overrides.image ?? DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: overrides.title ?? 'Coréal Media',
      },
    ],
  }
}

export function pageMetadata(
  title: string,
  description: string,
  options: { ogImage?: string; path?: string; noIndex?: boolean } = {}
): Metadata {
  const path = options.path ?? ''
  const url = path ? absoluteUrl(path) : SITE_URL
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: absoluteUrl(options.ogImage ?? DEFAULT_OG_IMAGE),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    ...(options.noIndex && { robots: { index: false, follow: false } }),
  }
}
