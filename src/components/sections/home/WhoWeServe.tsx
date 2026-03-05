'use client'

import { User, Briefcase, Users, Target } from 'lucide-react'
import ScrollReveal from '@/components/shared/ScrollReveal'

const clients = [
  {
    icon: User,
    title: 'Founders & Personal Brands',
    description:
      'You have the ideas and the expertise. You just need a team that builds the system around them.',
  },
  {
    icon: Briefcase,
    title: 'Multi-Brand Companies',
    description:
      'Managing multiple brands means managing multiple content pipelines. We build systems that handle the volume without the chaos.',
  },
  {
    icon: Users,
    title: 'Agencies Managing Volume',
    description:
      'If you need execution support for client content at scale, we integrate directly into your workflow.',
  },
  {
    icon: Target,
    title: 'Businesses That Value Structure',
    description:
      'You are not looking for a freelancer. You want a partner who treats your brand like a long-term investment.',
  },
]

export default function WhoWeServe() {
  return (
    <section className="bg-bg-primary section-padding">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14">
          <ScrollReveal>
            <p className="font-mono text-accent text-label uppercase tracking-widest mb-4">
              Who We Serve
            </p>
            <h2 className="font-display text-display-lg text-text-primary mb-5">
              Built for Brands That Mean Business
            </h2>
            <p className="font-body text-body-lg text-text-secondary max-w-[520px] mx-auto">
              We work best with people who are done guessing and ready to build something that lasts.
            </p>
          </ScrollReveal>
        </div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, index) => {
            const Icon = client.icon
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex flex-col gap-4 py-6 pl-7 pr-6 border-l-2 border-accent bg-bg-card">
                  <Icon size={24} className="text-accent" />
                  <h3 className="font-display text-display-md text-text-primary">
                    {client.title}
                  </h3>
                  <p className="font-body text-body-md text-text-secondary">
                    {client.description}
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
