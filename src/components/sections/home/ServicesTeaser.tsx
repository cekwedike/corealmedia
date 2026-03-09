'use client'

import Link from 'next/link'
import { Layers, Settings2, TrendingUp, ArrowRight } from '@/components/ui/Icons3D'
import ScrollReveal from '@/components/shared/ScrollReveal'

const services = [
  {
    icon: Layers,
    title: 'The Content OS',
    tagline: 'Done-For-You Systems',
    description:
      'We design and engineer your content infrastructure so content stops being a daily decision and becomes a predictable, repeatable asset.',
  },
  {
    icon: Settings2,
    title: 'The Operational Engine',
    tagline: 'Marketing & Management',
    description:
      'This is where your brand stops being active and starts being omnipresent. We handle execution so you stay consistent even when life happens.',
  },
  {
    icon: TrendingUp,
    title: 'The Visibility Matrix',
    tagline: 'Growth & Demand Systems',
    description:
      'Once your content system is consistent, we turn up the volume. Your message reaches people who are not even looking for you yet.',
  },
]

export default function ServicesTeaser() {
  return (
    <section className="bg-bg-primary section-padding">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <ScrollReveal>
            <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h2 className="font-display text-display-lg text-text-primary mb-5">
              Three Services. One System. Real Results.
            </h2>
            <p className="font-body text-body-lg text-text-secondary max-w-[600px] mx-auto">
              We operate across three connected services. Each one builds on the last. Together,
              they turn your brand into a content machine that runs whether you&apos;re present or not.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="group flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 bg-bg-card border border-border rounded-sm hover:border-[rgba(139,26,26,0.4)] hover:bg-bg-elevated transition-all duration-300 h-full">
                  <Icon size={32} className="text-accent" />
                  <div>
                    <p className="font-mono text-label-lg text-text-muted uppercase tracking-widest mb-2">
                      {service.tagline}
                    </p>
                    <h3 className="font-display text-display-md text-text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-body-md lg:text-body-lg text-text-secondary">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 font-body text-body-sm lg:text-body-md text-text-secondary hover:text-text-primary group-hover:gap-3 transition-all duration-200"
                    >
                      Explore This Service
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1 duration-200" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
