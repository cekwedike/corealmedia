import type { Metadata } from 'next'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import type { LandingPageData } from '@/components/landing/LandingPageTemplate'

export const metadata: Metadata = {
  title: 'The Content OS | Coréal Media',
  description:
    'Stop guessing what to post. The Content OS gives your brand a full content system — strategy, scripts, captions, and a workflow that runs every month without you.',
  robots: { index: false, follow: false },
}

const BASE = 'https://images.unsplash.com'

const data: LandingPageData = {
  serviceId: 'content-os',
  serviceLabel: 'The Content OS',
  serviceName: 'The Content OS',
  serviceTagline: 'Done-For-You Content Systems',

  heroImage: `${BASE}/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80`,
  heroHeadline: 'You Know You Should Be Posting. You Just Don't Have a System for It.',
  heroSub:
    'The Content OS gives your brand a complete content infrastructure — built once, running every month, sounding exactly like you.',

  painPointsHeadline: 'Does Any of This Sound Like You?',
  painPoints: [
    'You spend hours staring at a blank screen wondering what to post — and still feel behind.',
    'Your content doesn't sound like you, or worse, it sounds like everyone else in your industry.',
    'You post when motivation strikes, not on a schedule that actually builds momentum.',
    'You have ideas, but no system to turn them into consistent, on-brand content every month.',
  ],

  serviceDescription:
    'The Content OS is your complete content infrastructure. We build the strategy, write the scripts and captions, create the briefs, and install the workflow — so content stops being a daily decision and starts being a predictable monthly asset.',

  deliverables: [
    'A full content strategy built around your brand voice and audience',
    'Defined content pillars and messaging themes',
    'Script writing for talking head and faceless video formats',
    'Captions engineered for clarity, engagement, and conversion',
    'Design briefs and video briefs for your creative team',
    'A Custom GPT built to maintain your brand's tone consistently',
    'A repeatable monthly content production workflow',
  ],

  steps: [
    {
      number: '01',
      title: 'Discovery & Brand Audit',
      description:
        'We get inside your brand. Your voice, your audience, your goals, your competitors. Everything goes into the strategy that drives your content system.',
      image: `${BASE}/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80`,
    },
    {
      number: '02',
      title: 'System Build',
      description:
        'We build your content pillars, messaging framework, and production workflow. Your Custom GPT is trained. Your templates are set. Your system is live.',
      image: `${BASE}/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80`,
    },
    {
      number: '03',
      title: 'Monthly Delivery',
      description:
        'Every month, we deliver scripts, captions, and briefs — ready for your team to execute. You review, approve, and show up. The system does the rest.',
      image: `${BASE}/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80`,
    },
  ],

  stats: [
    {
      value: '12',
      label: 'Clients Managed',
      description: 'Delivered consistently each month with the same team.',
    },
    {
      value: '100%',
      label: 'On-Time Delivery',
      description: 'Delivery rate maintained across all client accounts after system implementation.',
    },
    {
      value: '0',
      label: 'Zero Revisions',
      description: 'Brand alignment errors in the first month after the system was live.',
    },
  ],

  testimonialQuote:
    'Before Coréal, I was posting randomly and hoping for the best. Now I have a system that runs without me being in every decision. My content finally sounds like me — and it's consistent.',
  testimonialAuthor: 'Marketing Agency Founder — Coréal Media Client',

  whoItsFor: [
    {
      title: 'Founders & Personal Brands',
      description:
        'You're building in public but burning out trying to stay consistent. You need structure without losing your voice.',
    },
    {
      title: 'Service-Based Businesses',
      description:
        'Your work speaks for itself — but nobody knows you exist. You need content that builds trust before the sales call.',
    },
    {
      title: 'Creators Going Pro',
      description:
        'You're ready to treat content as a business asset, not a hobby. You want systems, not vibes.',
    },
  ],
}

export default function ContentOsPage() {
  return <LandingPageTemplate data={data} />
}
