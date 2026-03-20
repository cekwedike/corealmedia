/**
 * WordPress REST API client.
 * Fetches content from the headless WordPress CMS and transforms it into
 * the same TypeScript shapes the rest of the app already uses.
 *
 * Falls back to static data files when WORDPRESS_API_URL is not set
 * (e.g. local development without a WordPress connection).
 */

import type { CaseStudy, Result } from '@/types/caseStudy'
import type { Service } from '@/types/service'
import type { TeamMember } from '@/types/team'
import type { Product } from '@/types/product'

// Static fallbacks (used when WordPress is not configured)
import { caseStudies as staticCaseStudies } from '@/data/caseStudies'
import { services as staticServices } from '@/data/services'
import { teamMembers as staticTeamMembers } from '@/data/team'

const BASE = process.env.WORDPRESS_API_URL

// ─── Raw WordPress REST API shapes ───────────────────────────────────────────

interface WPPost {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  acf: Record<string, string | boolean | null | undefined>
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>
  }
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

function str(val: unknown): string {
  if (!val) return ''
  return String(val).trim()
}

function bool(val: unknown): boolean {
  return val === true || val === 1 || val === '1' || val === 'true'
}

function featuredImageUrl(post: WPPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? ''
}

async function wpFetch<T>(path: string): Promise<T[]> {
  try {
    const res = await fetch(`${BASE}/${path}?per_page=100&_embed`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) {
      console.error(`[WordPress] ${res.status} fetching /${path}`)
      return []
    }
    return res.json()
  } catch (err) {
    console.error(`[WordPress] Failed to fetch /${path}:`, err)
    return []
  }
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

function transformCaseStudy(post: WPPost): CaseStudy {
  const a = post.acf

  const results: Result[] = [
    {
      metric: str(a.result_1_metric),
      value: str(a.result_1_value),
      description: str(a.result_1_description),
    },
    {
      metric: str(a.result_2_metric),
      value: str(a.result_2_value),
      description: str(a.result_2_description),
    },
    {
      metric: str(a.result_3_metric),
      value: str(a.result_3_value),
      description: str(a.result_3_description),
    },
  ].filter(r => r.metric)

  return {
    slug: post.slug,
    clientType: str(a.client_type),
    industry: str(a.industry),
    challenge: str(a.challenge),
    challengeDetail: str(a.challenge_detail),
    solution: str(a.solution),
    solutionDetail: str(a.solution_detail),
    results,
    servicesUsed: str(a.services_used)
      .split(',')
      .map(s => s.trim())
      .filter(Boolean),
    featuredImage: featuredImageUrl(post),
    publishedAt: post.date.split('T')[0],
    featured: bool(a.featured),
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!BASE) return staticCaseStudies
  const posts = await wpFetch<WPPost>('case-study')
  if (!posts.length) return staticCaseStudies
  return posts.map(transformCaseStudy)
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  if (!BASE) {
    return staticCaseStudies.find(s => s.slug === slug) ?? null
  }
  try {
    const res = await fetch(`${BASE}/case-study?slug=${slug}&_embed`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const posts: WPPost[] = await res.json()
    return posts.length ? transformCaseStudy(posts[0]) : null
  } catch {
    return null
  }
}

export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  const all = await getCaseStudies()
  return all.filter(s => s.featured)
}

// ─── Services ─────────────────────────────────────────────────────────────────

function transformService(post: WPPost): Service {
  const a = post.acf

  return {
    id: post.slug,
    name: post.title.rendered,
    tagline: str(a.tagline),
    description: str(a.description),
    deliverables: str(a.deliverables)
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean),
    outcome: str(a.outcome),
    whoItsFor: str(a.who_its_for)
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean),
    icon: str(a.icon),
  }
}

export async function getServices(): Promise<Service[]> {
  if (!BASE) return staticServices
  const posts = await wpFetch<WPPost>('service')
  if (!posts.length) return staticServices
  return posts.map(transformService)
}

// ─── Team Members ─────────────────────────────────────────────────────────────

function transformTeamMember(post: WPPost): TeamMember {
  const a = post.acf

  return {
    name: post.title.rendered,
    role: str(a.role),
    department: str(a.department),
    bio: str(a.bio),
    owns: str(a.owns)
      .split(',')
      .map(s => s.trim())
      .filter(Boolean),
    image: featuredImageUrl(post),
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  if (!BASE) return staticTeamMembers
  const posts = await wpFetch<WPPost>('team-member')
  if (!posts.length) return staticTeamMembers
  return posts.map(transformTeamMember).reverse()
}

// ─── Products ─────────────────────────────────────────────────────────────────

function transformProduct(post: WPPost): Product {
  const a = post.acf

  return {
    id: post.slug,
    name: post.title.rendered,
    tagline: str(a.tagline),
    description: str(a.description),
    longDescription: str(a.long_description),
    features: str(a.features)
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean),
    price: Number(a.price) || 0,
    badge: str(a.badge) || null,
    icon: str(a.icon),
    purchaseUrl: str(a.purchase_url),
    image: featuredImageUrl(post),
  }
}

export async function getProducts(): Promise<Product[]> {
  if (!BASE) return []
  const posts = await wpFetch<WPPost>('product-item')
  return posts.map(transformProduct)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!BASE) return null
  try {
    const res = await fetch(`${BASE}/product-item?slug=${slug}&_embed`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const posts: WPPost[] = await res.json()
    return posts.length ? transformProduct(posts[0]) : null
  } catch {
    return null
  }
}
