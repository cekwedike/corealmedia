'use client'

import { motion } from 'framer-motion'

export default function WorkHero() {
  return (
    <section className="bg-bg-primary section-padding pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 border-b border-border-subtle">
      <div className="container-site max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-accent text-label-lg uppercase tracking-widest mb-5"
        >
          Results
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-display-xl text-text-primary mb-8"
        >
          Real Brands. Real Results.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="font-body text-body-lg text-text-secondary max-w-[580px]"
        >
          Results over promises. Here is a look at the work Coréal has done for brands that
          decided to stop guessing and start building a real content system.
        </motion.p>
      </div>
    </section>
  )
}
