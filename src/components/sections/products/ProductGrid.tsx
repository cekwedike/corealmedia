'use client'

import { ArrowRight, FileText, Calendar, Mic2, Repeat2, Hash, BookOpen, Layers } from '@/components/ui/Icons3D'
import ScrollReveal from '@/components/shared/ScrollReveal'
import type { Product } from '@/types/product'

// Maps icon name strings (stored in WordPress) to actual React components
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText,
  Calendar,
  Mic2,
  Repeat2,
  Hash,
  BookOpen,
  Layers,
}

interface Props {
  products: Product[]
}

export default function ProductGrid({ products }: Props) {
  return (
    <section className="bg-bg-primary section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => {
            const Icon = ICON_MAP[product.icon] ?? FileText
            return (
              <ScrollReveal key={product.id} delay={index * 0.1}>
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
