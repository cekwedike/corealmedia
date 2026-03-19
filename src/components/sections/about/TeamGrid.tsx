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

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {members.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.06} className="h-full">
              <div className="group bg-bg-card border border-border-subtle rounded-sm overflow-hidden h-full flex flex-col hover:border-[rgba(139,26,26,0.4)] transition-colors duration-300">
                {/* Image */}
                <div className="relative w-full aspect-[3/4] bg-bg-elevated shrink-0">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-bg-elevated" />
                  )}
                  {/* Department badge */}
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[0.6rem] uppercase tracking-widest bg-bg-primary/80 text-text-muted px-2 py-1 rounded-sm backdrop-blur-sm">
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="font-display text-[1.1rem] sm:text-[1.2rem] text-text-primary leading-snug mb-1">
                    {member.name}
                  </h3>
                  <p className="font-mono text-accent text-[0.6rem] uppercase tracking-widest mb-3 line-clamp-2">
                    {member.role}
                  </p>
                  <p className="font-body text-body-sm text-text-secondary leading-relaxed line-clamp-2 mt-auto">
                    {member.owns.slice(0, 2).join(', ')}.
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
