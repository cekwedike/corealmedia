'use client'

import Image from 'next/image'
import { Check, ArrowRight, Quote } from '@/components/ui/Icons3D'
import LandingNav from './LandingNav'
import LandingFooter from './LandingFooter'
import LandingForm from './LandingForm'

export interface LandingStep {
  number: string
  title: string
  description: string
  image: string
}

export interface LandingStat {
  value: string
  label: string
  description: string
}

export interface LandingWhoCard {
  title: string
  description: string
}

export interface LandingPageData {
  heroImage: string
  heroHeadline: string
  heroSub: string
  painPointsHeadline: string
  painPoints: string[]
  serviceName: string
  serviceTagline: string
  serviceDescription: string
  deliverables: string[]
  steps: LandingStep[]
  stats: LandingStat[]
  testimonialQuote: string
  testimonialAuthor: string
  whoItsFor: LandingWhoCard[]
  serviceId: string
  serviceLabel: string
}

export default function LandingPageTemplate({ data }: { data: LandingPageData }) {
  return (
    <div className="bg-bg-primary text-text-primary overflow-x-hidden">
      <LandingNav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 sm:pb-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.serviceName}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay — heavier at bottom for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.78) 50%, rgba(10,10,10,0.95) 100%)',
            }}
          />
          {/* Left-side darkening so text area is always readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.15) 60%, transparent 100%)',
            }}
          />
        </div>

        <div className="container-site relative z-10 max-w-4xl">
          <p className="font-mono text-white text-label-lg uppercase tracking-widest mb-5" style={{ opacity: 0.7 }}>
            {data.serviceTagline}
          </p>
          <h1 className="font-display text-display-xl text-white mb-6 text-balance">
            {data.heroHeadline}
          </h1>
          <p className="font-body text-body-lg text-white max-w-[560px] mb-10" style={{ opacity: 0.85 }}>
            {data.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-body text-body-sm font-medium px-8 py-4 rounded-md hover:bg-accent-hover transition-colors duration-200 min-h-[52px]"
            >
              Book a Strategy Call
              <ArrowRight size={16} />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center font-body text-body-sm text-white hover:text-white transition-colors underline underline-offset-4 min-h-[52px]"
              style={{ opacity: 0.75 }}
            >
              See what&apos;s included
            </a>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ──────────────────────────────────────────────────── */}
      <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-subtle">
        <div className="container-site max-w-4xl">
          <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
            Sound Familiar?
          </p>
          <h2 className="font-display text-display-md text-text-primary mb-12">
            {data.painPointsHeadline}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-bg-card border border-border-subtle rounded-sm"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(139,26,26,0.12)', border: '1px solid rgba(139,26,26,0.25)' }}
                >
                  <span className="font-mono text-accent text-[0.75rem] font-medium">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="font-body text-body-md text-text-secondary leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────────────────────── */}
      <section id="solution" className="bg-bg-primary py-20 sm:py-28 border-b border-border-subtle">
        <div className="container-site max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: what it is */}
            <div>
              <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
                The Solution
              </p>
              <h2 className="font-display text-display-md text-text-primary mb-4">
                {data.serviceName}
              </h2>
              <p className="font-body text-body-lg text-text-secondary leading-relaxed mb-8">
                {data.serviceDescription}
              </p>
              <a
                href="#form"
                className="inline-flex items-center gap-2 font-body text-body-sm font-medium text-accent hover:gap-4 transition-all duration-200"
              >
                Get started today
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Right: deliverables */}
            <div>
              <p className="font-mono text-text-muted text-label-lg uppercase tracking-widest mb-6">
                What&apos;s Included
              </p>
              <ul className="space-y-4">
                {data.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="font-body text-body-md text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-subtle">
        <div className="container-site max-w-5xl">
          <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
            The Process
          </p>
          <h2 className="font-display text-display-md text-text-primary mb-14">
            How It Works
          </h2>

          <div className="flex flex-col gap-16">
            {data.steps.map((step, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] rounded-sm overflow-hidden ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                  <p
                    className="font-display text-text-muted mb-3"
                    style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1, opacity: 0.15 }}
                  >
                    {step.number}
                  </p>
                  <h3 className="font-display text-display-md text-text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-body-md text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS STRIP ────────────────────────────────────────────────── */}
      <section className="bg-bg-card py-20 sm:py-28 border-b border-border-subtle">
        <div className="container-site max-w-5xl">
          <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
            The Results
          </p>
          <h2 className="font-display text-display-md text-text-primary mb-12">
            What Our Clients Achieve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.stats.map((stat, i) => (
              <div
                key={i}
                className="p-8 rounded-sm bg-bg-secondary border border-border-subtle"
              >
                <p
                  className="font-display text-accent mb-2"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1 }}
                >
                  {stat.value}
                </p>
                <p className="font-mono text-text-muted text-label-lg uppercase tracking-widest mb-2">
                  {stat.label}
                </p>
                <p className="font-body text-body-sm text-text-secondary">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section className="bg-bg-primary py-20 sm:py-28 border-b border-border-subtle">
        <div className="container-site max-w-3xl text-center">
          <Quote size={48} className="text-accent mx-auto mb-8" style={{ opacity: 0.35 }} />
          <blockquote className="font-display text-display-md text-text-primary italic mb-8 leading-snug">
            &ldquo;{data.testimonialQuote}&rdquo;
          </blockquote>
          <div className="h-px bg-border-subtle w-12 mx-auto mb-5" />
          <p className="font-body text-body-sm text-text-muted">{data.testimonialAuthor}</p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-subtle">
        <div className="container-site max-w-5xl">
          <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
            Is This You?
          </p>
          <h2 className="font-display text-display-md text-text-primary mb-12">
            Who {data.serviceName} Is Built For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.whoItsFor.map((card, i) => (
              <div
                key={i}
                className="p-7 bg-bg-card border border-border-subtle rounded-sm"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(139,26,26,0.1)', border: '1px solid rgba(139,26,26,0.2)' }}
                >
                  <span className="font-mono text-accent text-[0.75rem]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-[1.25rem] text-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-body-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ────────────────────────────────────────────────────── */}
      <section id="form" className="bg-bg-primary py-20 sm:py-28 border-b border-border-subtle">
        <div className="container-site max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: CTA copy */}
            <div>
              <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
                Ready to Start?
              </p>
              <h2 className="font-display text-display-md text-text-primary mb-5">
                Let&apos;s Build Your Content Engine
              </h2>
              <p className="font-body text-body-lg text-text-secondary mb-10">
                Book a free strategy call. We&apos;ll look at your brand, where you are now, and
                tell you exactly how {data.serviceName} can work for you.
              </p>

              {/* What happens next */}
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'You submit this form',
                    desc: 'Takes 60 seconds. No lengthy questionnaires.',
                  },
                  {
                    step: '02',
                    title: 'We reach out within 12 hours',
                    desc: 'A real person from the Coréal team — not a bot.',
                  },
                  {
                    step: '03',
                    title: 'We map out your system',
                    desc: 'Free strategy call to align on scope, timeline, and fit.',
                  },
                ].map(item => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(139,26,26,0.1)', border: '1px solid rgba(139,26,26,0.25)' }}
                    >
                      <span className="font-mono text-accent text-[0.7rem]">{item.step}</span>
                    </div>
                    <div>
                      <p className="font-body text-body-sm font-medium text-text-primary mb-0.5">
                        {item.title}
                      </p>
                      <p className="font-body text-body-sm text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-bg-card border border-border-subtle rounded-sm p-8">
              <LandingForm serviceId={data.serviceId} serviceLabel={data.serviceLabel} />
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  )
}
