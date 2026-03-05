# SEO & Metadata Document
# Coréal Media Agency Website

---

## 1. Overview

This document defines the complete SEO strategy, metadata, Open Graph tags, structured data, and technical SEO configuration for the Coréal Media website. Every page listed here must have its metadata implemented exactly as specified. Claude Code must use Next.js 14 App Router metadata conventions throughout.

---

## 2. Global SEO Settings

**Site Name:** Coréal Media
**Default Title Template:** %s | Coréal Media
**Default Description:** Coréal Media builds content engines for founders, multi-brand companies, and agencies. Strategy, execution, and scale without losing what makes your brand human.
**Site URL:** https://corealmedia.com
**Default OG Image:** /images/og/og-default.jpg (1200 x 630px)
**Default Twitter Card:** summary_large_image
**Language:** en
**Locale:** en_US

---

## 3. Page-Level Metadata

### 3.1 Homepage (/)

```typescript
export const metadata: Metadata = {
  title: 'Coréal Media | Content Systems for Brands That Scale',
  description:
    'Coréal Media builds content engines for founders, personal brands, multi-brand companies, and agencies. Strategy, execution, and scale — without losing what makes your brand human.',
  openGraph: {
    title: 'Coréal Media | Content Systems for Brands That Scale',
    description:
      'We build the content engine that runs your brand consistently, at scale, without founder dependence.',
    url: 'https://corealmedia.com',
    images: [
      {
        url: '/images/og/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Coréal Media — Content Systems for Brands That Scale',
      },
    ],
  },
  twitter: {
    title: 'Coréal Media | Content Systems for Brands That Scale',
    description:
      'We build the content engine that runs your brand consistently, at scale, without founder dependence.',
    images: ['/images/og/og-home.jpg'],
  },
}
```

### 3.2 About Page (/about)

```typescript
export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Coréal Media was built on a simple belief: the future of content is co-created. Learn about our origin story, our philosophy, and the team behind the system.',
  openGraph: {
    title: 'About Coréal Media',
    description:
      'Human intuition meets machine intelligence. Learn how Coréal Media was built and why it exists.',
    url: 'https://corealmedia.com/about',
    images: [
      {
        url: '/images/og/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Coréal Media',
      },
    ],
  },
  twitter: {
    title: 'About Coréal Media',
    description:
      'Human intuition meets machine intelligence. Learn how Coréal Media was built and why it exists.',
    images: ['/images/og/og-about.jpg'],
  },
}
```

### 3.3 Services Page (/services)

```typescript
export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Three ways Coréal Media helps brands scale: The Content OS, The Operational Engine, and The Visibility Matrix. Strategy, execution, and demand compounding — done for you.',
  openGraph: {
    title: 'Services | Coréal Media',
    description:
      'Content strategy, done-for-you execution, and demand growth systems. Built for brands that are serious about scale.',
    url: 'https://corealmedia.com/services',
    images: [
      {
        url: '/images/og/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Services — Coréal Media',
      },
    ],
  },
  twitter: {
    title: 'Services | Coréal Media',
    description:
      'Content strategy, done-for-you execution, and demand growth systems. Built for brands that are serious about scale.',
    images: ['/images/og/og-services.jpg'],
  },
}
```

### 3.4 Case Studies Index (/work)

```typescript
export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'See how Coréal Media has helped founders and brands build consistent, high-quality content systems that generate trust, visibility, and growth.',
  openGraph: {
    title: 'Our Work | Coréal Media',
    description:
      'Real results from real brands. Browse case studies from Coréal Media clients.',
    url: 'https://corealmedia.com/work',
    images: [
      {
        url: '/images/og/og-work.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Work — Coréal Media',
      },
    ],
  },
  twitter: {
    title: 'Our Work | Coréal Media',
    description:
      'Real results from real brands. Browse case studies from Coréal Media clients.',
    images: ['/images/og/og-work.jpg'],
  },
}
```

### 3.5 Individual Case Study Page (/work/[slug])

Dynamic metadata generated per case study using generateMetadata:

```typescript
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.clientType} | Case Study`,
    description: caseStudy.challenge,
    openGraph: {
      title: `${caseStudy.clientType} | Coréal Media Case Study`,
      description: caseStudy.challenge,
      url: `https://corealmedia.com/work/${caseStudy.slug}`,
      images: [
        {
          url: caseStudy.featuredImage,
          width: 1200,
          height: 630,
          alt: `${caseStudy.clientType} — Coréal Media Case Study`,
        },
      ],
    },
    twitter: {
      title: `${caseStudy.clientType} | Coréal Media Case Study`,
      description: caseStudy.challenge,
      images: [caseStudy.featuredImage],
    },
  }
}
```

### 3.6 Contact Page (/contact)

```typescript
export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Ready to build your content engine? Get in touch with Coréal Media and let\'s talk about your brand, your goals, and how we can help you scale.',
  openGraph: {
    title: 'Contact Coréal Media',
    description:
      'Ready to build your content engine? Let\'s talk.',
    url: 'https://corealmedia.com/contact',
    images: [
      {
        url: '/images/og/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Coréal Media',
      },
    ],
  },
  twitter: {
    title: 'Contact Coréal Media',
    description: 'Ready to build your content engine? Let\'s talk.',
    images: ['/images/og/og-contact.jpg'],
  },
}
```

### 3.7 Thank You Page (/thank-you)

```typescript
export const metadata: Metadata = {
  title: 'Message Received',
  description: 'Thank you for reaching out to Coréal Media. We will be in touch shortly.',
  robots: {
    index: false,
    follow: false,
  },
}
```

### 3.8 Privacy Policy Page (/privacy-policy)

```typescript
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Coréal Media privacy policy to understand how we collect, use, and protect your information.',
  robots: {
    index: true,
    follow: false,
  },
}
```

### 3.9 404 Not Found Page

```typescript
// In not-found.tsx — Next.js handles this automatically
// No explicit metadata export needed but ensure the page has appropriate content
// Next.js will apply the default site metadata to 404
```

---

## 4. Structured Data (JSON-LD)

### 4.1 Organization Schema (Homepage)

Add to homepage layout or page component as a script tag:

```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Coréal Media',
  url: 'https://corealmedia.com',
  logo: 'https://corealmedia.com/images/logo.png',
  description:
    'Coréal Media is a content systems agency that builds content engines for founders, multi-brand companies, and agencies.',
  foundingDate: '2024',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@corealmedia.com',
  },
  sameAs: [
    'https://instagram.com/corealmedia',
    'https://linkedin.com/company/corealmedia',
  ],
}
```

Render in the component using:

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

### 4.2 Service Schema (Services Page)

```typescript
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Content Marketing',
  provider: {
    '@type': 'Organization',
    name: 'Coréal Media',
    url: 'https://corealmedia.com',
  },
  description:
    'Content strategy, done-for-you content creation, and demand growth systems for brands that want to scale consistently.',
  areaServed: 'Worldwide',
}
```

### 4.3 BreadcrumbList Schema (Inner Pages)

Apply to all inner pages (About, Services, Work, Contact):

```typescript
const breadcrumbSchema = (pageName: string, pageUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://corealmedia.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: pageName,
      item: pageUrl,
    },
  ],
})
```

---

## 5. Sitemap Configuration

Next.js 14 App Router generates the sitemap via src/app/sitemap.ts:

```typescript
import { MetadataRoute } from 'next'
import { caseStudies } from '@/data/caseStudies'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://corealmedia.com'

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  const caseStudyPages = caseStudies.map(study => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified: new Date(study.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...caseStudyPages]
}
```

---

## 6. robots.txt

Place in /public/robots.txt:

```
User-agent: *
Allow: /
Disallow: /thank-you
Disallow: /api/

Sitemap: https://corealmedia.com/sitemap.xml
```

---

## 7. Canonical URLs

Next.js App Router handles canonical URLs automatically when metadataBase is set in the root layout. Ensure the following is set in src/app/layout.tsx:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://corealmedia.com'),
  // ... rest of metadata
}
```

This ensures all relative URLs in metadata resolve correctly and canonical tags are automatically generated.

---

## 8. On-Page SEO Rules

Every page must follow these rules:

- One H1 per page only, using the primary keyword naturally
- H2 tags for main section headings
- H3 tags for subsections and card headings
- All images must have descriptive alt text that describes the image content, not just "image"
- Internal links must use descriptive anchor text, never "click here" or "read more" alone
- Avoid duplicate content across pages
- Page copy must be unique and specific to each page

### Keyword Targets Per Page

| Page | Primary Keyword | Secondary Keywords |
|---|---|---|
| Homepage | content systems agency | content engine, brand content strategy |
| About | content agency origin story | human and AI content, co-creation agency |
| Services | content marketing services | done-for-you content, content OS, visibility growth |
| Work | content marketing case studies | agency case studies, brand content results |
| Contact | hire content agency | content strategy consultation |

---

## 9. Performance Impact on SEO

The following technical requirements directly affect Core Web Vitals and therefore SEO rankings:

- All images use next/image component for automatic optimization
- No image is served without explicit width and height props
- Fonts loaded via next/font with display: swap
- No render-blocking scripts in the head
- All third-party scripts loaded with strategy="lazyOnload" if needed
- Target LCP (Largest Contentful Paint): under 2.5 seconds
- Target CLS (Cumulative Layout Shift): under 0.1
- Target FID (First Input Delay): under 100ms

---

## 10. Social Sharing Preview Checklist

Before launch, verify on each page:

- [ ] Title renders correctly in browser tab
- [ ] Meta description is unique and under 160 characters
- [ ] OG image displays correctly when URL is pasted into Facebook debugger
- [ ] Twitter card displays correctly in Twitter card validator
- [ ] Structured data passes Google Rich Results test
- [ ] No console errors on any page
- [ ] Sitemap accessible at /sitemap.xml
- [ ] robots.txt accessible at /robots.txt
