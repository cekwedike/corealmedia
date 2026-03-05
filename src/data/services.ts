import { Service } from '@/types/service'

export const services: Service[] = [
  {
    id: 'content-os',
    name: 'The Content OS',
    tagline: 'Done-For-You Content Systems',
    description: `Most brands treat content like a task. Something to check off. Something to outsource and forget. The Content OS changes that entirely.\n\nWe design and engineer your full content infrastructure. That means you get a clear content strategy, a repeatable production workflow, defined themes and messaging pillars, and a system that produces high-quality content on a predictable schedule.\n\nContent stops being a daily decision. It becomes a predictable asset that grows your brand whether you're in the room or not.`,
    deliverables: [
      'A full content strategy built around your brand voice and audience',
      'Defined content pillars and messaging themes',
      'Script writing for talking head and faceless video formats',
      'Captions engineered for clarity, engagement, and conversion',
      'Design briefs and video briefs for your creative team',
      "A Custom GPT built to maintain your brand's tone and voice consistently",
      'A repeatable monthly content production workflow',
    ],
    outcome:
      'You know exactly what to post, when to post it, and why it matters. Content goes from chaos to system.',
    whoItsFor: ['Founders and personal brands who need structure and direction without the guesswork.'],
    icon: 'Layers',
  },
  {
    id: 'operational-engine',
    name: 'The Operational Engine',
    tagline: 'Marketing Execution & Management',
    description: `Building a system is one thing. Running it consistently is another. The Operational Engine is for brands who have clarity on their content direction and now need a team to execute it, day after day, without gaps.\n\nWe only offer execution once the content system is built. This is intentional. Execution without a system creates noise. Execution with a system creates momentum.\n\nThis is where your brand stops being active and starts being omnipresent.`,
    deliverables: [
      'Full content calendar management',
      'Scheduling and posting across all relevant platforms',
      'Platform formatting (hashtags, tags, link placement, aspect ratios)',
      'Engagement coordination where included in the package',
      'Monthly analytics and performance reporting',
      'Consistent delivery without last-minute panic or gaps',
    ],
    outcome:
      'Your brand shows up. Consistently. On time. At quality. Every month, without exception.',
    whoItsFor: [
      'Brands who have a clear direction and need a reliable team to execute it without founder involvement in every step.',
    ],
    icon: 'Settings2',
  },
  {
    id: 'visibility-matrix',
    name: 'The Visibility Matrix',
    tagline: 'Growth & Demand Systems',
    description: `Consistency gets you seen by your existing audience. The Visibility Matrix gets you found by people who are not even looking for you yet.\n\nThis is not SEO and email in the traditional sense. This is demand compounding. Once your content system is consistent and your execution is running, we turn up the volume. We build the infrastructure that ensures your message reaches further, converts better, and compounds over time.`,
    deliverables: [
      'SEO-aligned content strategy and blog system',
      'Email marketing infrastructure and nurture sequences',
      'Demand generation content for cold and warm audiences',
      'Content repurposing systems (one piece of content, multiple formats, multiple platforms)',
      'Optimization decisions based on monthly performance data',
      'Partnership and collaboration content strategy where applicable',
    ],
    outcome:
      'Your content works harder. It reaches more people, builds more trust, and generates more inbound without requiring more effort from you.',
    whoItsFor: [
      'Brands that are already posting consistently and want to extend their reach, attract inbound interest, and convert at a higher rate.',
    ],
    icon: 'TrendingUp',
  },
]
