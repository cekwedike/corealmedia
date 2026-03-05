'use client'

import { motion } from 'framer-motion'

export default function ProductsHero() {
  return (
    <section className="bg-bg-primary section-padding pt-36 pb-20 border-b border-border-subtle">
      <div className="container-site max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-accent text-label uppercase tracking-widest mb-5"
        >
          Digital Products
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-display-xl text-text-primary mb-8"
        >
          The Same Systems We Use.{' '}
          <span className="italic text-text-secondary">Now Yours.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="font-body text-body-lg text-text-secondary max-w-[580px]"
        >
          Not ready for a full agency engagement? Start here. These are the exact templates,
          frameworks, and tools we use to build content engines — packaged so you can implement
          them yourself, starting today.
        </motion.p>
      </div>
    </section>
  )
}
