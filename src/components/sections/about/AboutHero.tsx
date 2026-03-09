'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="bg-bg-primary section-padding pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 border-b border-border-subtle">
      <div className="container-site max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-accent text-label-lg uppercase tracking-widest mb-5"
        >
          Our Story
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-display-xl text-text-primary max-w-[680px] text-balance mb-8"
        >
          We Didn&apos;t Start With a Name. We Started With a Question.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="font-body text-body-lg text-text-secondary max-w-[520px] italic"
        >
          What do we really do in this new era of content creation?
        </motion.p>
      </div>
    </section>
  )
}
