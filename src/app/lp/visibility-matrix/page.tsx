import type { Metadata } from 'next'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import type { LandingPageData } from '@/components/landing/LandingPageTemplate'

export const metadata: Metadata = {
  title: 'The Visibility Matrix | Coreal Media',
  description:
    "You're posting consistently but the right people still aren't finding you. The Visibility Matrix builds SEO, email, and demand systems that compound over time.",
  robots: { index: false, follow: false },
}

const BASE = 'https://images.unsplash.com'

const data: LandingPageData = {
  serviceId: 'visibility-matrix',
  serviceLabel: 'The Visibility Matrix',
  serviceName: 'The Visibility Matrix',
  serviceTagline: 'Growth & Demand Systems',

  heroImage: `${BASE}/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80`,
  heroHeadline: "You're Posting Consistently. But the Right People Still Aren't Finding You.",
  heroSub:
    'The Visibility Matrix turns your consistent content into a demand engine — reaching cold audiences, building inbound, and compounding reach across SEO, email, and every platform.',

  painPointsHeadline: 'Does Any of This Sound Like You?',
  painPoints: [
    "You're showing up every week, but your audience isn't growing at the rate your effort deserves.",
    'Your content reaches people who already know you — not the people who should.',
    "SEO feels like a black box. You're not ranking for anything meaningful in your niche.",
    'You create content for one platform and leave value on the table by not repurposing it.',
  ],

  serviceDescription:
    "The Visibility Matrix is for brands already in motion who want to extend their reach. We layer SEO, email infrastructure, demand generation content, and repurposing systems on top of your existing content — so every piece works harder and reaches further.",

  deliverables: [
    'SEO-aligned content strategy and blog system',
    'Email marketing infrastructure and nurture sequences',
    'Demand generation content for cold and warm audiences',
    'Content repurposing systems: one piece — multiple formats, multiple platforms',
    'Optimization decisions based on monthly performance data',
    'Partnership and collaboration content strategy where applicable',
  ],

  steps: [
    {
      number: '01',
      title: 'Visibility Audit',
      description:
        "We map where your content is reaching, where it's not, and where the highest-leverage opportunities are — SEO, email, social, and beyond.",
      image: `${BASE}/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80`,
    },
    {
      number: '02',
      title: 'System Architecture',
      description:
        'We build your SEO content calendar, email sequences, and repurposing workflows. Each piece of content becomes the seed for five others.',
      image: `${BASE}/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80`,
    },
    {
      number: '03',
      title: 'Compound & Amplify',
      description:
        'Month by month, your reach grows. We track, optimise, and expand — adding channels and demand levers as your brand builds momentum.',
      image: `${BASE}/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80`,
    },
  ],

  stats: [
    {
      value: '3x',
      label: 'Content Reach',
      description: 'Average increase in content reach within 90 days of implementing repurposing systems.',
    },
    {
      value: '40%',
      label: 'Inbound Growth',
      description: 'Average increase in inbound enquiries from SEO and email within 6 months.',
    },
    {
      value: '5+',
      label: 'Platforms Activated',
      description: 'Average number of platforms reached from a single piece of content.',
    },
  ],

  testimonialQuote:
    "We were already posting but the leads weren't coming from our content. Six months into the Visibility Matrix, half of our new enquiries mention finding us through a blog post or email. The system compounds.",
  testimonialAuthor: 'Personal Brand Founder — Coreal Media Client',

  whoItsFor: [
    {
      title: 'Consistent Creators',
      description:
        "You're already showing up. Now you want that effort to pull in people who don't yet know you exist.",
    },
    {
      title: 'Inbound-Hungry Businesses',
      description:
        "You're tired of chasing clients. You want your content to generate qualified leads while you sleep.",
    },
    {
      title: 'Content-Rich, Reach-Poor Brands',
      description:
        'You have great content sitting on one platform. You need it working across six.',
    },
  ],
}

export default function VisibilityMatrixPage() {
  return <LandingPageTemplate data={data} />
}
