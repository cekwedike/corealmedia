'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Quote } from '@/components/ui/Icons3D'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { CaseStudy } from '@/types/caseStudy'
import { caseStudies } from '@/data/caseStudies'

interface CaseStudyContentProps {
  study: CaseStudy
}

export default function CaseStudyContent({ study }: CaseStudyContentProps) {
  const currentIndex = caseStudies.findIndex(s => s.slug === study.slug)
  const nextStudy = caseStudies[currentIndex + 1] ?? null

  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg-primary pt-24 sm:pt-28 min-h-[50vh] sm:min-h-[55vh] flex items-end pb-12 sm:pb-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={study.featuredImage}
            alt={study.clientType}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.62)' }} />
        </div>

        <div className="container-site relative z-10 max-w-4xl">
          <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
            Case Study
          </p>
          <h1 className="font-display text-display-xl text-text-primary mb-4">
            {study.clientType}
          </h1>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="font-mono text-text-muted text-label-lg uppercase tracking-widest border border-border-subtle px-3 py-1 rounded-sm">
              {study.industry}
            </span>
            {study.servicesUsed.map(s => (
              <span
                key={s}
                className="font-mono text-accent text-label-lg uppercase tracking-widest border border-accent px-3 py-1 rounded-sm"
                style={{ borderColor: 'rgba(139,26,26,0.5)' }}
              >
                {s}
              </span>
            ))}
          </div>
          <p className="font-body text-body-lg text-text-secondary max-w-[580px]">
            {study.challenge}
          </p>
        </div>
      </section>

      {/* The Situation */}
      <section className="bg-bg-secondary section-padding border-t border-border-subtle">
        <div className="container-site max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
              The Context
            </p>
            <h2 className="font-display text-display-md text-text-primary mb-6">The Situation</h2>
            <p className="font-body text-body-md text-text-secondary leading-relaxed">
              {study.challengeDetail}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Approached It */}
      <section className="bg-bg-primary section-padding border-t border-border-subtle">
        <div className="container-site max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
              The Approach
            </p>
            <h2 className="font-display text-display-md text-text-primary mb-6">
              How We Approached It
            </h2>
            <p className="font-body text-body-md text-text-secondary leading-relaxed mb-6">
              {study.solution}
            </p>
            <p className="font-body text-body-md text-text-secondary leading-relaxed">
              {study.solutionDetail}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="bg-bg-secondary section-padding border-t border-border-subtle">
        <div className="container-site max-w-4xl">
          <ScrollReveal>
            <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
              The Results
            </p>
            <h2 className="font-display text-display-md text-text-primary mb-10">The Outcome</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {study.results.map((result, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                <div className="h-full bg-bg-card border border-border-subtle rounded-sm p-8">
                  <p
                    className="font-display text-accent mb-2"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1 }}
                  >
                    {result.value}
                  </p>
                  <p className="font-mono text-text-muted text-label-lg uppercase tracking-widest mb-3">
                    {result.metric}
                  </p>
                  <p className="font-body text-body-sm text-text-secondary leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial (if available) */}
      {study.testimonial && (
        <section className="bg-bg-card section-padding border-t border-border-subtle">
          <div className="container-site max-w-3xl">
            <ScrollReveal>
              <Quote size={48} className="text-accent mb-6" style={{ opacity: 0.4 }} />
              <blockquote className="font-display text-display-md italic text-text-primary mb-6 leading-snug">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <div className="h-px bg-border-subtle w-16 mb-4" />
              <p className="font-body text-body-sm text-text-muted">{study.testimonial.author}</p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="bg-bg-secondary section-padding border-t border-border-subtle">
        <div className="container-site flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-body text-body-sm text-text-secondary hover:text-text-primary transition-colors group"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to All Work
          </Link>

          {nextStudy && (
            <Link
              href={`/work/${nextStudy.slug}`}
              className="group flex flex-col items-end text-right"
            >
              <span className="font-mono text-text-muted text-label-lg uppercase tracking-widest mb-1">
                Next Case Study
              </span>
              <span className="font-display text-[1.25rem] text-text-primary group-hover:text-accent transition-colors">
                {nextStudy.clientType}
              </span>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
