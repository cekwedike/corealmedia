'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Layers, Settings2, TrendingUp } from 'lucide-react'

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

const SIN_72 = Math.sin((72 * Math.PI) / 180)
const COS_72 = Math.cos((72 * Math.PI) / 180)

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
  const rotY = useMotionValue(0)

  useEffect(() => {
    const update = () => setViewportW(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const isMobile = viewportW < 768
  const durationMs = isMobile ? 55_000 : 100_000

  useAnimationFrame((_, delta) => {
    rotY.set((rotY.get() + (360 / durationMs) * delta) % 360)
  })

  const cardCount = isMobile ? 12 : 20
  const angleStep = 360 / cardCount

  const cardW = isMobile ? 190 : Math.min(380, Math.max(300, Math.round(viewportW * 0.22)))
  const cardH = Math.round(cardW * 1.55)
  // Extra vertical room so card box-shadows don't bleed outside and create a dark line
  const containerH = cardH + 100

  const perspective = Math.round(viewportW * 0.5)

  const minRadius = Math.ceil(((cardW + 1) * cardCount) / (2 * Math.PI))

  let radius: number
  if (isMobile) {
    radius = minRadius
  } else {
    const targetX = viewportW * 0.5 * 0.85 - cardW / 2
    const computedR = Math.round(
      (targetX * perspective) / (SIN_72 * perspective - COS_72 * targetX),
    )
    radius = Math.max(minRadius, computedR)
  }

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
      <div className="container-site w-full flex flex-col items-center text-center relative z-10 mb-1">
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
            className="bg-accent text-white font-body text-body-sm font-medium px-8 py-3.5 rounded-md hover:bg-accent-hover transition-colors duration-200"
          >
            Work With Us
          </Link>
          <Link
            href="/work"
            className="border border-border text-text-primary font-body text-body-sm font-medium px-8 py-3.5 rounded-md hover:border-accent transition-colors duration-200"
          >
            See Our Work
          </Link>
        </motion.div>
      </div>

      {/* ── 3D Concave Cylinder Carousel ── */}
      <div
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          height: containerH,
        }}
      >
        {/* Perspective context */}
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
          <motion.div
            style={{
              transformStyle: 'preserve-3d',
              rotateY: rotY,
              width: cardW,
              height: cardH,
              position: 'relative',
            }}
          >
            {Array.from({ length: cardCount }).map((_, i) => {
              const angle = i * angleStep
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
                    transform: `rotateY(${angle}deg) translateZ(-${radius}px)`,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top"
                    sizes={`${cardW}px`}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'rgba(0,0,0,0.08)' }}
                  />
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Side edge fade (left/right) */}
        <div aria-hidden className="carousel-edge-fade" />

        {/* Top fade — blends card shadows into page bg */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: 60,
            background: 'linear-gradient(to bottom, var(--color-bg-primary) 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 4,
          }}
        />
        {/* Bottom fade */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: 60,
            background: 'linear-gradient(to top, var(--color-bg-primary) 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 4,
          }}
        />

        {/* Reveal overlay */}
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--color-bg-primary)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
      </div>

      {/* Feature strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="w-full"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="flex flex-col items-center text-center gap-3 px-6 py-4 md:px-10">
                  <Icon size={22} className="text-accent" />
                  <p className="font-display text-[1.125rem] font-medium text-text-primary">
                    {feature.title}
                  </p>
                  <p className="font-body text-body-sm text-text-secondary leading-relaxed max-w-[260px]">
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
