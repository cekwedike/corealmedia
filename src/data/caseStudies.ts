import { CaseStudy } from '@/types/caseStudy'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'personal-brand-business-coach',
    clientType: 'Personal Brand / Founder',
    industry: 'Business Coaching',
    challenge:
      'Inconsistent posting, no clear content direction, founder doing everything manually with no system in place.',
    challengeDetail:
      'The founder was spending hours every week trying to figure out what to post, writing captions at midnight, and still missing weeks at a time. There was no strategy, no workflow, and no consistency. The brand existed, but it was not building anything.',
    solution:
      'We implemented The Content OS — building a full content strategy, defining three core content pillars, writing three months of scripts and captions in advance, and setting up a repeatable monthly production workflow.',
    solutionDetail:
      'The founder recorded content in one session per month. We handled everything else: scripting, editing briefs, caption writing, scheduling, and optimization. The system ran whether the founder was present or not.',
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
      'Three different brands. Three different audiences. Three different content calendars. A small internal team was stretched across all of them with no system connecting the work. Quality was inconsistent and deadlines were missed regularly.',
    solution:
      'We deployed The Content OS and The Operational Engine across all three brands simultaneously, building a unified production workflow that treated all three brands as one coordinated system.',
    solutionDetail:
      'Each brand got its own content strategy and messaging pillars, but the production workflow was shared and standardized. Scripts, briefs, and schedules moved through one system instead of three separate ones.',
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
      'The agency was managing twelve clients but running on chaos. Every month felt like starting from scratch. Content quality varied between clients. Deadlines were close calls. The team was tired.',
    solution:
      'We built a standardized content production system using The Operational Engine, creating SOPs, brief templates, review checkpoints, and delivery workflows that applied across all twelve client accounts.',
    solutionDetail:
      'Every client account followed the same production stages. Briefs were standardized. Review cycles were defined. The team knew exactly what to do and when. Quality became predictable instead of variable.',
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
