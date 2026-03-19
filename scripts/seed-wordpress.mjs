/**
 * WordPress Seed Script
 * Creates all case studies, team members, and products via the REST API.
 *
 * Usage:
 *   node scripts/seed-wordpress.mjs
 *
 * Requirements:
 *   Set WP_USER and WP_APP_PASSWORD below before running.
 */

// ─── CONFIG — fill these in ───────────────────────────────────────────────────
const WP_BASE = 'https://cms.corealmedia.com/wp-json/wp/v2'
const WP_USER = 'winnyezeme2023@gmail.com'
const WP_APP_PASSWORD = 'urCd xu6I maJU MygG t7lK FoEB'
// ─────────────────────────────────────────────────────────────────────────────

const auth = Buffer.from(`${WP_USER}:${WP_APP_PASSWORD}`).toString('base64')

const headers = {
  'Authorization': `Basic ${auth}`,
  'Content-Type': 'application/json',
}

async function createPost(postType, data) {
  const res = await fetch(`${WP_BASE}/${postType}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  })
  const json = await res.json()
  if (!res.ok) {
    console.error(`❌ Failed to create ${postType}:`, json.message)
    return null
  }
  console.log(`✅ Created ${postType}: ${data.title} (slug: ${data.slug})`)
  return json
}

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────

const caseStudies = [
  {
    title: 'Personal Brand / Founder',
    slug: 'personal-brand-business-coach',
    acf: {
      client_type: 'Personal Brand / Founder',
      industry: 'Business Coaching',
      challenge: 'Inconsistent posting, no clear content direction, founder doing everything manually with no system in place.',
      challenge_detail: "Hours lost weekly to guesswork, captions written at midnight, and weeks missed. The brand existed but wasn't building anything.",
      solution: 'We implemented The Content OS, building a full content strategy, defining three core content pillars, writing three months of scripts and captions in advance, and setting up a repeatable monthly production workflow.',
      solution_detail: 'One recording session per month. We handled scripting, briefs, captions, scheduling, and optimization. The system ran whether the founder was present or not.',
      result_1_metric: '3 Months',
      result_1_value: '3',
      result_1_description: 'Of consecutive consistent posting from day one of going live',
      result_2_metric: 'Zero Gaps',
      result_2_value: '0',
      result_2_description: 'Missed posting days across the entire engagement',
      result_3_metric: '4 Hours Saved',
      result_3_value: '4+',
      result_3_description: 'Per week previously spent on content guesswork, returned to the founder',
      services_used: 'The Content OS',
      featured: true,
    },
  },
  {
    title: 'Multi-Brand Company',
    slug: 'multi-brand-lifestyle-wellness',
    acf: {
      client_type: 'Multi-Brand Company',
      industry: 'Lifestyle & Wellness',
      challenge: 'Managing content across three brands simultaneously with a small team and no repeatable workflow.',
      challenge_detail: 'Three brands, three audiences, one small team, stretched thin with no shared system. Quality dropped and deadlines slipped.',
      solution: 'We deployed The Content OS and The Operational Engine across all three brands simultaneously, building a unified production workflow that treated all three brands as one coordinated system.',
      solution_detail: 'Each brand kept its own strategy and pillars. But one shared production workflow handled all three: scripts, briefs, and schedules through a single system.',
      result_1_metric: '3 Brands',
      result_1_value: '3',
      result_1_description: 'Running on a single coordinated content production system',
      result_2_metric: '4 Months',
      result_2_value: '4',
      result_2_description: 'Of zero missed posts across all three brands combined',
      result_3_metric: '60% Less',
      result_3_value: '60%',
      result_3_description: 'Time spent by the internal team on content coordination',
      services_used: 'The Content OS, The Operational Engine',
      featured: true,
    },
  },
  {
    title: 'Marketing Agency',
    slug: 'marketing-agency-volume',
    acf: {
      client_type: 'Marketing Agency',
      industry: 'Agency Services',
      challenge: 'High client volume, inconsistent output quality, and no repeatable content production workflow.',
      challenge_detail: 'Twelve clients, no repeatable process. Every month felt like starting over. Quality varied, deadlines were close calls, and the team was burnt out.',
      solution: 'We built a standardized content production system using The Operational Engine, creating SOPs, brief templates, review checkpoints, and delivery workflows that applied across all twelve client accounts.',
      solution_detail: 'Standardized briefs, defined review cycles, and shared production stages across all accounts. The team knew exactly what to do and when.',
      result_1_metric: '12 Clients',
      result_1_value: '12',
      result_1_description: 'Delivered consistently each month with the same team',
      result_2_metric: '100% On-Time',
      result_2_value: '100%',
      result_2_description: 'Delivery rate maintained across all client accounts after system implementation',
      result_3_metric: 'Zero Revisions',
      result_3_value: '0',
      result_3_description: 'Brand alignment errors in the first month after the system was live',
      services_used: 'The Operational Engine',
      featured: false,
    },
  },
]

// ─── TEAM MEMBERS ─────────────────────────────────────────────────────────────

const teamMembers = [
  {
    title: 'Winny',
    slug: 'winny',
    acf: {
      role: 'Chief Executive Officer & Founder',
      department: 'Leadership',
      bio: "Winny built Coréal around a simple but radical belief: that the future of content is co-created. She leads with clarity and holds the standard for everything the agency produces.",
      owns: 'Vision, standards, key client relationships, final decisions, culture',
    },
  },
  {
    title: 'Chidi',
    slug: 'chidi',
    acf: {
      role: 'Strategic Partner',
      department: 'Leadership',
      bio: 'Growth intelligence, client acquisition strategy, deal logic, partnerships, and revenue leverage.',
      owns: 'Growth intelligence, client acquisition strategy, deal logic, partnerships, revenue leverage',
    },
  },
  {
    title: 'Olanrewaju (Lanre)',
    slug: 'olanrewaju-lanre',
    acf: {
      role: 'Creative Ops Manager',
      department: 'Operations',
      bio: 'Task assignment, timelines, follow-ups, delivery coordination, and process enforcement.',
      owns: 'Task assignment, timelines, follow-ups, delivery coordination, process enforcement',
    },
  },
  {
    title: 'Segun',
    slug: 'segun',
    acf: {
      role: 'Creative Lead',
      department: 'Creative',
      bio: 'Brand integrity, visual direction, creative standards, and final creative quality checks.',
      owns: 'Brand integrity, visual direction, creative standards, final creative quality checks',
    },
  },
  {
    title: 'Pelumi',
    slug: 'pelumi',
    acf: {
      role: 'Content & Copywriter',
      department: 'Content',
      bio: 'The message. Content strategy themes, hooks, scripts, captions, design briefs, voice over generation, and visual design copy.',
      owns: 'Content strategy themes, hooks, scripts, captions, design briefs',
    },
  },
  {
    title: 'Korede',
    slug: 'korede',
    acf: {
      role: 'Social Media Manager',
      department: 'Execution',
      bio: 'Execution and publishing consistency. Scheduling, calendar accuracy, platform formatting, and reporting.',
      owns: 'Scheduling, calendar accuracy, platform formatting, reporting',
    },
  },
  {
    title: 'Noah',
    slug: 'noah',
    acf: {
      role: 'Lead Generation',
      department: 'Growth',
      bio: 'Pipeline activity. Prospecting, list building, outreach systems, lead tracking, and proposal support.',
      owns: 'Prospecting, list building, outreach systems, lead tracking, proposal support',
    },
  },
  {
    title: 'Ngoc',
    slug: 'ngoc',
    acf: {
      role: 'Video Editor',
      department: 'Creative',
      bio: 'Retention and watch-time quality. Faceless reels, talking head editing, b-roll, retention strategy, and correct export formats.',
      owns: 'Faceless reels, talking head editing, b-roll, retention strategy',
    },
  },
  {
    title: 'Chris',
    slug: 'chris',
    acf: {
      role: 'Video Editor',
      department: 'Creative',
      bio: 'Retention and watch-time quality. Faceless reels, talking head editing, b-roll, retention strategy, and correct export formats.',
      owns: 'Faceless reels, talking head editing, b-roll, retention strategy',
    },
  },
  {
    title: 'Johnson',
    slug: 'johnson',
    acf: {
      role: 'Video Editor',
      department: 'Creative',
      bio: 'Retention and watch-time quality. Faceless reels, talking head editing, b-roll, retention strategy, and correct export formats.',
      owns: 'Faceless reels, talking head editing, b-roll, retention strategy',
    },
  },
  {
    title: 'Henry',
    slug: 'henry',
    acf: {
      role: 'Graphic Designer',
      department: 'Creative',
      bio: 'Visual clarity and brand perception. Carousels, statics, infographics, banners, and brand graphics.',
      owns: 'Carousels, statics, infographics, banners, brand graphics',
    },
  },
  {
    title: 'Eben',
    slug: 'eben',
    acf: {
      role: 'Graphic Designer',
      department: 'Creative',
      bio: 'Visual clarity and brand perception. Carousels, statics, infographics, banners, and brand graphics.',
      owns: 'Carousels, statics, infographics, banners, brand graphics',
    },
  },
]

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

const products = [
  {
    title: 'Content Audit Kit',
    slug: 'content-audit-kit',
    acf: {
      tagline: 'Diagnose before you fix',
      description: 'A Google Sheets template that reveals exactly where your content is leaking: gaps, inconsistencies, and dead formats. Know what to fix first.',
      price: 19,
      badge: 'Most Popular',
      icon: 'FileText',
    },
  },
  {
    title: 'Brand Voice Blueprint',
    slug: 'brand-voice-blueprint',
    acf: {
      tagline: 'Sound like yourself, every time',
      description: "A fill-in-the-blank worksheet to define your tone, language rules, and content personality. Stop second-guessing every caption.",
      price: 25,
      badge: '',
      icon: 'Mic2',
    },
  },
  {
    title: '90-Day Content Calendar',
    slug: '90-day-content-calendar',
    acf: {
      tagline: 'Never stare at a blank schedule again',
      description: 'A Notion template with 90 days of content slots, platform-specific prompts, and a weekly review system baked in.',
      price: 29,
      badge: '',
      icon: 'Calendar',
    },
  },
  {
    title: 'Caption Pack: 30 Done-For-You',
    slug: 'caption-pack-30',
    acf: {
      tagline: 'Post today. Write nothing.',
      description: '30 platform-ready captions across LinkedIn, Instagram, and X, crafted for founders, coaches, and service brands. Edit, post, done.',
      price: 15,
      badge: 'Quick Win',
      icon: 'Hash',
    },
  },
  {
    title: 'Hook Library',
    slug: 'hook-library',
    acf: {
      tagline: '100+ proven opening lines',
      description: 'The hardest part of any post is the first line. This library gives you 100+ tested hooks organized by goal: attention, curiosity, authority, and emotion.',
      price: 19,
      badge: '',
      icon: 'BookOpen',
    },
  },
  {
    title: 'Repurposing Playbook',
    slug: 'repurposing-playbook',
    acf: {
      tagline: 'Turn 1 piece into 10',
      description: 'A step-by-step guide to extracting maximum value from every piece of content you create, across formats, platforms, and audiences.',
      price: 24,
      badge: '',
      icon: 'Repeat2',
    },
  },
]

// ─── RUN ──────────────────────────────────────────────────────────────────────

async function run() {
  console.log('\n📦 Seeding Case Studies...')
  for (const study of caseStudies) {
    await createPost('case-study', { title: study.title, slug: study.slug, status: 'publish', acf: study.acf })
  }

  console.log('\n👥 Seeding Team Members...')
  for (const member of teamMembers) {
    await createPost('team-member', { title: member.title, slug: member.slug, status: 'publish', acf: member.acf })
  }

  console.log('\n🛍️ Seeding Products...')
  for (const product of products) {
    await createPost('product-item', { title: product.title, slug: product.slug, status: 'publish', acf: product.acf })
  }

  console.log('\n✅ Done! All content seeded.')
}

run()
