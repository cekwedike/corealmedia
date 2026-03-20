'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  Calendar,
  Mic2,
  Repeat2,
  Hash,
  BookOpen,
  Layers,
} from '@/components/ui/Icons3D'
import ScrollReveal from '@/components/shared/ScrollReveal'
import type { Product } from '@/types/product'

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
  product: Product
}

export default function ProductDetail({ product }: Props) {
  const Icon = ICON_MAP[product.icon] ?? FileText

  return (
    <>
      {/* Hero */}
      <section className="bg-bg-primary pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-border-subtle">
        <div className="container-site max-w-5xl">
          <ScrollReveal>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-body text-body-sm text-text-muted hover:text-text-primary transition-colors group mb-10"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              All Products
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
              {/* Left: product info */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-bg-card border border-border-subtle rounded-sm">
                    <Icon size={24} className="text-accent" />
                  </div>
                  {product.badge && (
                    <span className="font-mono text-label-lg uppercase tracking-widest text-accent border border-[rgba(139,26,26,0.35)] px-3 py-1 rounded-sm">
                      {product.badge}
                    </span>
                  )}
                </div>

                <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-3">
                  {product.tagline}
                </p>
                <h1 className="font-display text-display-lg text-text-primary mb-5">
                  {product.name}
                </h1>
                <p className="font-body text-body-lg text-text-secondary leading-relaxed max-w-xl">
                  {product.description}
                </p>
              </div>

              {/* Right: price + CTA */}
              <div className="lg:w-72 bg-bg-card border border-border-subtle rounded-sm p-8 flex flex-col gap-6">
                <div>
                  <p className="font-mono text-label-lg text-text-muted uppercase tracking-widest mb-2">
                    Price
                  </p>
                  <p className="font-display text-[2.5rem] text-text-primary leading-none">
                    ${product.price}
                  </p>
                  <p className="font-body text-body-sm text-text-muted mt-1">
                    One-time · Instant digital delivery
                  </p>
                </div>

                <div className="h-px bg-border-subtle" />

                {product.purchaseUrl ? (
                  <a
                    href={product.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
                  >
                    Get It Now
                    <ArrowRight size={15} />
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
                  >
                    Enquire
                    <ArrowRight size={15} />
                  </Link>
                )}

                <p className="font-body text-label-lg text-text-muted text-center">
                  Questions?{' '}
                  <Link href="/contact" className="text-accent hover:underline">
                    Get in touch
                  </Link>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured image (if available) */}
      {product.image && (
        <section className="bg-bg-secondary border-b border-border-subtle">
          <div className="container-site max-w-5xl py-12 sm:py-16">
            <ScrollReveal>
              <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-border-subtle">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Details + What's Included */}
      <section className="bg-bg-secondary section-padding border-b border-border-subtle">
        <div className="container-site max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Long description */}
            {product.longDescription && (
              <ScrollReveal>
                <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-5">
                  About This Product
                </p>
                <div className="font-body text-body-md text-text-secondary leading-relaxed space-y-4">
                  {product.longDescription.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </ScrollReveal>
            )}

            {/* What's included */}
            {product.features.length > 0 && (
              <ScrollReveal delay={0.1}>
                <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-5">
                  What&apos;s Included
                </p>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-accent mt-0.5 shrink-0" />
                      <span className="font-body text-body-md text-text-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-bg-primary section-padding border-b border-border-subtle">
        <div className="container-site max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
              Ready?
            </p>
            <h2 className="font-display text-display-md text-text-primary mb-6">
              Get {product.name} Today
            </h2>
            <p className="font-body text-body-lg text-text-secondary mb-8">
              ${product.price} · One-time payment · Delivered instantly
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {product.purchaseUrl ? (
                <a
                  href={product.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get It Now
                  <ArrowRight size={15} />
                </a>
              ) : (
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Enquire
                  <ArrowRight size={15} />
                </Link>
              )}
              <Link
                href="/products"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Browse All Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Back nav */}
      <section className="bg-bg-secondary py-8 border-b border-border-subtle">
        <div className="container-site">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-body text-body-sm text-text-secondary hover:text-text-primary transition-colors group"
          >
            <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-1" />
            Back to All Products
          </Link>
        </div>
      </section>
    </>
  )
}
