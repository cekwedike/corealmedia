export interface CaseStudy {
  slug: string
  clientType: string
  industry: string
  challenge: string
  challengeDetail: string
  solution: string
  solutionDetail: string
  results: Result[]
  servicesUsed: string[]
  testimonial?: Testimonial
  featuredImage: string
  gallery?: string[]
  publishedAt: string
  featured: boolean
}

export interface Result {
  metric: string
  value: string
  description: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}
