import { CaseStudy } from '@/types/caseStudy'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'personal-brand-business-coach',
    clientType: 'Personal Brand / Founder',
    industry: 'Business Coaching',
    challenge:
      'Inconsistent posting, no clear content direction, founder doing everything manually with no system in place.',
    challengeDetail:
      'Hours lost weekly to guesswork, captions written at midnight, and weeks missed. The brand existed but wasn\'t building anything.',
    solution:
      'We implemented The Content OS, building a full content strategy, defining three core content pillars, writing three months of scripts and captions in advance, and setting up a repeatable monthly production workflow.',
    solutionDetail:
      'One recording session per month. We handled scripting, briefs, captions, scheduling, and optimization. The system ran whether the founder was present or not.',
    results: [
      {
        metric: '3 Months',
        value: '3',
        description: 'Of consecutive consistent posting from day one of going live',
      },
      {
        metric: 'Zero Gaps',
        value: '0',
        description: 'Missed posting days across the entire engagement',
      },
      {
        metric: '4 Hours Saved',
        value: '4+',
        description: 'Per week previously spent on content guesswork, returned to the founder',
      },
    ],
    servicesUsed: ['The Content OS'],
    featuredImage:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80',
    publishedAt: '2026-01-15',
    featured: true,
  },
  {
    slug: 'multi-brand-lifestyle-wellness',
    clientType: 'Multi-Brand Company',
    industry: 'Lifestyle & Wellness',
    challenge:
      'Managing content across three brands simultaneously with a small team and no repeatable workflow.',
    challengeDetail:
      'Three brands, three audiences, one small team, stretched thin with no shared system. Quality dropped and deadlines slipped.',
    solution:
      'We deployed The Content OS and The Operational Engine across all three brands simultaneously, building a unified production workflow that treated all three brands as one coordinated system.',
    solutionDetail:
      'Each brand kept its own strategy and pillars. But one shared production workflow handled all three: scripts, briefs, and schedules through a single system.',
    results: [
      {
        metric: '3 Brands',
        value: '3',
        description: 'Running on a single coordinated content production system',
      },
      {
        metric: '4 Months',
        value: '4',
        description: 'Of zero missed posts across all three brands combined',
      },
      {
        metric: '60% Less',
        value: '60%',
        description: 'Time spent by the internal team on content coordination',
      },
    ],
    servicesUsed: ['The Content OS', 'The Operational Engine'],
    featuredImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    publishedAt: '2026-02-01',
    featured: true,
  },
  {
    slug: 'marketing-agency-volume',
    clientType: 'Marketing Agency',
    industry: 'Agency Services',
    challenge:
      'High client volume, inconsistent output quality, and no repeatable content production workflow.',
    challengeDetail:
      'Twelve clients, no repeatable process. Every month felt like starting over. Quality varied, deadlines were close calls, and the team was burnt out.',
    solution:
      'We built a standardized content production system using The Operational Engine, creating SOPs, brief templates, review checkpoints, and delivery workflows that applied across all twelve client accounts.',
    solutionDetail:
      'Standardized briefs, defined review cycles, and shared production stages across all accounts. The team knew exactly what to do and when.',
    results: [
      {
        metric: '12 Clients',
        value: '12',
        description: 'Delivered consistently each month with the same team',
      },
      {
        metric: '100% On-Time',
        value: '100%',
        description: 'Delivery rate maintained across all client accounts after system implementation',
      },
      {
        metric: 'Zero Revisions',
        value: '0',
        description: 'Brand alignment errors in the first month after the system was live',
      },
    ],
    servicesUsed: ['The Operational Engine'],
    featuredImage:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
    publishedAt: '2026-02-15',
    featured: false,
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug)
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(study => study.featured)
}
