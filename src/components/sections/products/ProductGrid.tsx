'use client'

import { ArrowRight, FileText, Calendar, Mic2, Repeat2, Hash, BookOpen } from '@/components/ui/Icons3D'
import ScrollReveal from '@/components/shared/ScrollReveal'

const products = [
  {
    icon: FileText,
    name: 'Content Audit Kit',
    tagline: 'Diagnose before you fix',
    description:
      'A Google Sheets template that reveals exactly where your content is leaking — gaps, inconsistencies, and dead formats — so you know what to fix first.',
    price: 19,
    badge: 'Most Popular',
  },
  {
    icon: Mic2,
    name: 'Brand Voice Blueprint',
    tagline: 'Sound like yourself, every time',
    description:
      'A fill-in-the-blank worksheet to define your tone, language rules, and content personality. Stop second-guessing every caption.',
    price: 25,
    badge: null,
  },
  {
    icon: Calendar,
    name: '90-Day Content Calendar',
    tagline: 'Never stare at a blank schedule again',
    description:
      'A Notion template with 90 days of content slots, platform-specific prompts, and a weekly review system baked in.',
    price: 29,
    badge: null,
  },
  {
    icon: Hash,
    name: 'Caption Pack — 30 Done-For-You',
    tagline: 'Post today. Write nothing.',
    description:
      '30 platform-ready captions across LinkedIn, Instagram, and X — crafted for founders, coaches, and service brands. Edit, post, done.',
    price: 15,
    badge: 'Quick Win',
  },
  {
    icon: BookOpen,
    name: 'Hook Library',
    tagline: '100+ proven opening lines',
    description:
      'The hardest part of any post is the first line. This library gives you 100+ tested hooks organized by goal — attention, curiosity, authority, and emotion.',
    price: 19,
    badge: null,
  },
  {
    icon: Repeat2,
    name: 'Repurposing Playbook',
    tagline: 'Turn 1 piece into 10',
    description:
      'A step-by-step guide to extracting maximum value from every piece of content you create — across formats, platforms, and audiences.',
    price: 24,
    badge: null,
  },
]

export default function ProductGrid() {
  return (
    <section className="bg-bg-primary section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group relative flex flex-col gap-5 p-6 sm:p-8 bg-bg-card border border-border rounded-sm hover:border-[rgba(139,26,26,0.4)] hover:bg-bg-elevated transition-all duration-300 h-full">
                  {product.badge && (
                    <span className="absolute top-5 right-5 font-mono text-label-lg uppercase tracking-widest text-accent border border-[rgba(139,26,26,0.35)] px-2 py-0.5 rounded-sm">
                      {product.badge}
                    </span>
                  )}

                  <Icon size={28} className="text-accent" />

                  <div className="flex-1">
                    <p className="font-mono text-label-lg text-text-muted uppercase tracking-widest mb-1.5">
                      {product.tagline}
                    </p>
                    <h3 className="font-display text-[1.375rem] font-medium text-text-primary mb-3">
                      {product.name}
                    </h3>
                    <p className="font-body text-body-sm lg:text-body-md text-text-secondary leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                    <p className="font-display text-[1.5rem] font-medium text-text-primary">
                      ${product.price}
                    </p>
                    <button className="inline-flex items-center gap-1.5 font-body text-body-sm font-medium text-accent hover:gap-3 transition-all duration-200">
                      Get It
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center font-body text-body-sm text-text-muted mt-12">
            All products are delivered instantly as digital downloads. No subscriptions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
