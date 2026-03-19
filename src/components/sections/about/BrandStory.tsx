'use client'

import ScrollReveal from '@/components/shared/ScrollReveal'

const PARAGRAPHS = [
  "Coréal didn't come from a naming exercise. It came from a question: what do we really do in this new era of content, where humans and machines create together?",
  "We started with meaning. Co-creation. Authenticity. Human intuition meeting machine intelligence. One idea stood out: Co-Real.",
  "The accent in Coréal wasn't decorative. It was deliberate. It elevated the word. Gave it an editorial quality. A nod to global creative excellence, built for the digital age.",
]

export default function BrandStory() {
  return (
    <section className="bg-bg-secondary section-padding border-t border-border-subtle relative overflow-hidden">
      {/* Decorative quotation mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-8 left-8 font-display text-text-primary select-none hidden md:block"
        style={{ fontSize: '18rem', lineHeight: 1, opacity: 0.04 }}
      >
        &ldquo;
      </div>

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Left: label + headline + callout */}
          <div>
            <ScrollReveal>
              <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
                Brand Origin
              </p>
              <h2 className="font-display text-display-lg text-text-primary mb-10">
                How Coréal Began
              </h2>
            </ScrollReveal>

            {/* Co-Real deconstruction */}
            <ScrollReveal delay={0.2}>
              <div className="bg-bg-card border border-border-subtle rounded-sm overflow-hidden">
                <div className="grid grid-cols-2 divide-x divide-border-subtle">
                  <div className="p-4 sm:p-6">
                    <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-2">Co</p>
                    <p className="font-display text-[1.5rem] text-text-primary mb-2">Collaboration</p>
                    <p className="font-body text-body-sm text-text-secondary">
                      Co-creation, collective intelligence, the power of working together.
                    </p>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-2">Real</p>
                    <p className="font-display text-[1.5rem] text-text-primary mb-2">Authenticity</p>
                    <p className="font-body text-body-sm text-text-secondary">
                      Emotion, human truth, brand integrity that people actually feel.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: body paragraphs */}
          <div className="space-y-5">
            {PARAGRAPHS.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="font-body text-body-md text-text-secondary leading-relaxed">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
