'use client'

import { Cpu, Heart, Zap } from '@/components/ui/Icons3D'
import ScrollReveal from '@/components/shared/ScrollReveal'

const PILLARS = [
  {
    icon: Cpu,
    title: 'Machine Precision',
    description:
      'AI-powered systems, automation, and data-driven decisions that operate faster and smarter than any manual process.',
  },
  {
    icon: Heart,
    title: 'Human Soul',
    description:
      'Intuition, emotion, creative direction, and brand judgment that no algorithm can replicate.',
  },
  {
    icon: Zap,
    title: 'Integrated Intelligence',
    description:
      'Neither alone is enough. Together, they create content that is both scalable and deeply felt.',
  },
]

const BODY_PARAGRAPHS = [
  "We don't choose between AI and human creativity. We integrate both. AI brings precision and scale. Humans bring taste, emotion, and judgment.",
]

export default function Philosophy() {
  return (
    <section className="bg-bg-primary section-padding border-t border-border-subtle">
      <div className="container-site">
        {/* Header - centered */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <ScrollReveal>
            <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-5">
              Our Philosophy
            </p>
            <h2 className="font-display text-display-lg text-text-primary max-w-[640px] mx-auto text-balance mb-10">
              Content Should Be Engineered by Intelligence. Felt by Humans.
            </h2>
          </ScrollReveal>

          <div className="max-w-[680px] mx-auto text-left space-y-4">
            {BODY_PARAGRAPHS.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="font-body text-body-md text-text-secondary leading-relaxed">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-bg-card border border-border rounded-sm p-6 sm:p-8 transition-colors duration-300 hover:border-accent h-full">
                  <Icon size={32} className="text-accent mb-5" />
                  <h3 className="font-display text-display-md text-text-primary mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-body-md text-text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
