'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { TeamMember } from '@/types/team'

interface TeamGridProps {
  members: TeamMember[]
}

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <section className="bg-bg-secondary section-padding border-t border-border-subtle">
      <div className="container-site">
        {/* Header */}
        <div className="mb-12">
          <ScrollReveal>
            <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
              The Team
            </p>
            <h2 className="font-display text-display-lg text-text-primary mb-4">
              The People Behind the System
            </h2>
            <p className="font-body text-body-lg text-text-secondary max-w-[580px]">
              Every role at Coréal exists for a reason. Every person owns a lane. This is not an
              agency where everyone does everything and nothing gets done well.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards grid - uniform width and height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {members.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.06} className="h-full">
              <div className="bg-bg-card border border-border-subtle rounded-sm p-5 sm:p-6 h-full flex flex-col min-h-[280px]">
                {/* Avatar */}
                <div className="relative w-16 h-16 rounded-sm overflow-hidden mb-4 bg-bg-secondary shrink-0">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  ) : (
                    <div className="w-full h-full bg-bg-elevated" />
                  )}
                </div>

                {/* Name + role */}
                <h3 className="font-display text-[1.25rem] text-text-primary leading-snug mb-1 line-clamp-2">
                  {member.name}
                </h3>
                <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-3 line-clamp-2">
                  {member.role}
                </p>

                {/* What they own */}
                <p className="font-body text-body-sm text-text-muted mb-1">What they own</p>
                <p className="font-body text-body-sm text-text-secondary leading-relaxed flex-1 line-clamp-3">
                  {member.owns.slice(0, 3).join(', ')}.
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
