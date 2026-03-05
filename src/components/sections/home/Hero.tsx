'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Layers, Settings2, TrendingUp } from 'lucide-react'

// 8 unique portrait images — face-focused, diverse
const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80', alt: 'Creative professional' },
  { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80', alt: 'Brand strategist' },
  { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80', alt: 'Content creator' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', alt: 'Creative director' },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80', alt: 'Social media lead' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80', alt: 'Growth strategist' },
  { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80', alt: 'Marketing director' },
  { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80', alt: 'Operations lead' },
]

const CARD_COUNT = 16
const ANGLE_STEP = 360 / CARD_COUNT // 22.5°

// sin/cos of θ=67.5° — the outermost clearly-visible card in the front arc.
// Used to compute the radius that makes the arc fill the viewport width.
// Derivation: screenX = R·sin(θ)·P / (P + R·cos(θ)) = targetX
//             → R = targetX·P / (SIN_OUTER·P − COS_OUTER·targetX)
const SIN_OUTER = Math.sin((67.5 * Math.PI) / 180) // 0.9239
const COS_OUTER = Math.cos((67.5 * Math.PI) / 180) // 0.3827

const FEATURES = [
  {
    icon: Layers,
    title: 'The Content OS',
    description: 'Done-for-you systems that turn content from chaos into a predictable, repeatable engine.',
  },
  {
    icon: Settings2,
    title: 'The Operational Engine',
    description: 'Your brand stays omnipresent. We handle execution so you never miss a beat.',
  },
  {
    icon: TrendingUp,
    title: 'The Visibility Matrix',
    description: 'Demand compounding. Your message reaches people who are not even looking for you yet.',
  },
]

export default function Hero() {
  const [viewportW, setViewportW] = useState(1440)

  useEffect(() => {
    const update = () => setViewportW(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const isMobile = viewportW < 768

  // Card dimensions — desktop scales with viewport (capped), mobile fixed
  const cardW = isMobile ? 130 : Math.min(320, Math.max(260, Math.round(viewportW * 0.17)))
  const cardH = Math.round(cardW * 1.38)

  // Perspective relative to viewport so depth feel stays consistent at all screen sizes
  const perspective = Math.round(viewportW * (isMobile ? 0.7 : 1.0))

  // Radius: sized so the card at θ=67.5° (3rd from center, outermost fully visible)
  // projects to ~90% of the viewport half-width. Ensures full-width coverage at any screen size.
  const targetX = viewportW * 0.5 * 0.9 - cardW / 2
  // Minimum radius so adjacent cards never overlap on the arc
  const minRadius = Math.ceil(((cardW + 4) * CARD_COUNT) / (2 * Math.PI))
  const computedRadius = Math.round(
    (targetX * perspective) / (SIN_OUTER * perspective - COS_OUTER * targetX),
  )
  const radius = Math.max(minRadius, computedRadius)

  return (
    <section className="relative bg-bg-primary flex flex-col items-center pt-28 pb-0">
      {/* Radial accent glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,26,26,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Text content */}
      <div className="container-site w-full flex flex-col items-center text-center relative z-10 mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-accent text-label uppercase tracking-widest mb-5"
        >
          Content Systems Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-display-2xl text-text-primary max-w-4xl mx-auto text-balance"
        >
          Your Brand Deserves to Be Everywhere.{' '}
          <span className="italic text-text-secondary">Consistently.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="font-body text-body-lg text-text-secondary max-w-[520px] mx-auto mt-5"
        >
          Most brands post when they remember. We build the engine that ensures you never stop
          showing up — with strategy, quality, and a system that scales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <Link
            href="/contact"
            className="bg-accent text-text-primary font-body text-[0.875rem] font-medium px-8 py-3.5 rounded-sm hover:bg-accent-hover transition-colors duration-200"
          >
            Work With Us
          </Link>
          <Link
            href="/work"
            className="border border-border text-text-primary font-body text-[0.875rem] font-medium px-8 py-3.5 rounded-sm hover:border-accent transition-colors duration-200"
          >
            See Our Work
          </Link>
        </motion.div>
      </div>

      {/* ── 3D Concave Cylinder Carousel ──
        HOW IT WORKS:
          translateZ is NEGATIVE → cards curve AWAY from viewer (concave, "into the page").
          The center card is the DEEPEST point; outer cards wrap toward the viewer on the sides.
          backfaceVisibility:hidden → only back-arc cards are visible (the concave side facing us).
          The front-arc cards (the ones that would bulge toward viewer) are hidden.

        PRESERVE-3D RULES (must not break):
          • No ancestor div has opacity < 1, overflow:hidden, or mask/filter
          • Fade-in: a solid overlay div on TOP fades opacity 1→0 (sibling, not parent)
          • Edge fading: solid background-color gradient overlay (sibling div, not mask)
      */}
      <div
        style={{
          // Break out of container — true full viewport width
          width: '100vw',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          // Tall enough for cards + breathing room
          height: cardH + 80,
        }}
      >
        {/* Perspective context — no overflow, no opacity, no filter */}
        <div
          style={{
            perspective: `${perspective}px`,
            perspectiveOrigin: '50% 50%',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Spinning cylinder — ONLY rotateY animates, zero opacity involvement */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
            style={{
              transformStyle: 'preserve-3d',
              width: cardW,
              height: cardH,
              position: 'relative',
            }}
          >
            {Array.from({ length: CARD_COUNT }).map((_, i) => {
              const angle = i * ANGLE_STEP
              const image = IMAGES[i % IMAGES.length]
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: cardW,
                    height: cardH,
                    borderRadius: 12,
                    overflow: 'hidden',
                    // NEGATIVE translateZ → concave inward projection
                    transform: `rotateY(${angle}deg) translateZ(-${radius}px)`,
                    // Hide the front-arc cards (those facing TOWARD viewer) —
                    // only back-arc cards (facing away = concave side) are visible
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top"
                    sizes={`${cardW}px`}
                  />
                  {/* Subtle darkening overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'rgba(0,0,0,0.1)' }}
                  />
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Edge fade — solid bg-color gradient, sits on top of 3D scene as sibling */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0) 6%, rgba(10,10,10,0) 94%, #0A0A0A 100%)',
          }}
        />

        {/* Reveal overlay — fades OUT (opacity 1→0). Sibling, not parent — 3D tree unaffected */}
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: '#0A0A0A',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Feature Strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="w-full bg-bg-secondary border-t border-border-subtle mt-8"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="flex flex-col gap-3 px-6 py-8 md:px-10">
                  <Icon size={22} className="text-accent" />
                  <p className="font-display text-[1.125rem] font-medium text-text-primary">
                    {feature.title}
                  </p>
                  <p className="font-body text-body-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
