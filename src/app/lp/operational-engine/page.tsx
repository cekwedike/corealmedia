import type { Metadata } from 'next'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import type { LandingPageData } from '@/components/landing/LandingPageTemplate'

export const metadata: Metadata = {
  title: 'The Operational Engine | Coreal Media',
  description:
    "Your strategy is solid. Your execution is where things fall apart. The Operational Engine handles your content calendar, scheduling, posting, and reporting — so you never miss a deadline again.",
  robots: { index: false, follow: false },
}

const BASE = 'https://images.unsplash.com'

const data: LandingPageData = {
  serviceId: 'operational-engine',
  serviceLabel: 'The Operational Engine',
  serviceName: 'The Operational Engine',
  serviceTagline: 'Marketing Execution & Management',

  heroImage: `${BASE}/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80`,
  heroHeadline: 'Your Strategy Is Solid. Your Execution Is Where Things Fall Apart.',
  heroSub:
    "The Operational Engine takes day-to-day content execution completely off your plate — posting, scheduling, reporting, and delivery — without you in every step.",

  painPointsHeadline: 'Does Any of This Sound Like You?',
  painPoints: [
    'Deadlines get missed because no one owns the content calendar end-to-end.',
    'Your team posts inconsistently — different tones, different quality, different schedules.',
    "You're stuck approving every single post instead of focusing on growing the business.",
    "You have a strategy. You just don't have the people or process to execute it reliably.",
  ],

  serviceDescription:
    "The Operational Engine is for brands that have direction and need a reliable team to execute it. We take ownership of your content calendar, handle every post across every platform, report on performance monthly, and deliver without gaps.",

  deliverables: [
    'Full content calendar management — planned, scheduled, and delivered on time',
    'Scheduling and posting across all relevant platforms',
    'Platform formatting: hashtags, tags, link placement, aspect ratios',
    'Engagement coordination where included in the package',
    'Monthly analytics and performance reporting',
    'Consistent delivery without last-minute panic or gaps',
  ],

  steps: [
    {
      number: '01',
      title: 'Onboarding & Handoff',
      description:
        'We learn your brand, access your platforms, and take over the calendar. A clear handoff so nothing falls through the cracks.',
      image: `${BASE}/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80`,
    },
    {
      number: '02',
      title: 'System Setup',
      description:
        'We build the workflow, the approval process, and the reporting cadence. Everything documented. Everyone aligned.',
      image: `${BASE}/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80`,
    },
    {
      number: '03',
      title: 'Ongoing Execution',
      description:
        'Month after month — content goes out on time, at quality, across every channel. You get a report. We handle everything else.',
      image: `${BASE}/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80`,
    },
  ],

  stats: [
    {
      value: '100%',
      label: 'On-Time Delivery',
      description: 'Delivery rate maintained across all accounts after system implementation.',
    },
    {
      value: '12+',
      label: 'Brands Managed',
      description: 'Active client accounts running on the Operational Engine every month.',
    },
    {
      value: '0',
      label: 'Missed Deadlines',
      description: 'After onboarding, no client has missed a scheduled posting window.',
    },
  ],

  testimonialQuote:
    "I used to dread Mondays — chasing the team for content, approving things last minute. Now it just runs. The Coreal team handles everything and I get a report at the end of the month.",
  testimonialAuthor: 'Multi-Brand Company Owner — Coreal Media Client',

  whoItsFor: [
    {
      title: 'Multi-Brand Operators',
      description:
        "You're managing more than one brand and can't be in the weeds of every content calendar. You need a team that owns it.",
    },
    {
      title: 'Scaling Startups',
      description:
        "You've got traction but your content operation is chaos. You need execution without hiring in-house.",
    },
    {
      title: 'Agencies & Studios',
      description:
        'You produce work for clients but your own marketing is an afterthought. Let us handle it while you handle clients.',
    },
  ],
}

export default function OperationalEnginePage() {
  return <LandingPageTemplate data={data} />
}
