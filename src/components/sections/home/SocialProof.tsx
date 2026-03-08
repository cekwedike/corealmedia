'use client'

import { Quote } from '@/components/ui/Icons3D'
import ScrollReveal from '@/components/shared/ScrollReveal'

const testimonials = [
  {
    quote:
      'Before Coréal, content felt like a chore we kept failing at. Now it runs like a machine. We haven\'t missed a post in four months.',
    author: 'Founder, Personal Brand',
  },
  {
    quote:
      "They didn't just manage our content. They gave us a system we could see, trust, and rely on. That's the difference.",
    author: 'CEO, Multi-Brand Company',
  },
]

export default function SocialProof() {
  return (
    <section className="bg-bg-secondary section-padding">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14">
          <ScrollReveal>
            <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
              What Clients Say
            </p>
            <h2 className="font-display text-display-lg text-text-primary mb-5">
              The Work Speaks First
            </h2>
            <p className="font-body text-body-lg text-text-secondary max-w-[500px] mx-auto">
              We let results do the talking. Here is what working with Coréal actually looks like.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.15}
              direction={index === 0 ? 'left' : 'right'}
            >
              <div className="flex flex-col gap-6 p-10 bg-bg-card border border-border rounded-sm h-full">
                <Quote
                  size={32}
                  className="text-[rgba(139,26,26,0.4)]"
                />
                <p className="font-display text-[1.25rem] italic text-text-primary leading-[1.6] flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="font-mono text-label-lg text-text-muted uppercase tracking-widest">
                    {t.author}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
