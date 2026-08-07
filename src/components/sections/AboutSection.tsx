import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/20 bg-bg py-20 sm:py-24">
      <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <SectionHeading
            id="about"
            title="About this concept"
            description="A flexible structure inspired by strong portfolio systems and modern product landing pages."
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-5 rounded-[1.5rem] border border-border/30 bg-bg-elevated/90 p-8 shadow-soft"
          >
            <p className="text-base leading-8 text-text-muted">
              This portfolio layout preserves the same section sequencing and navigation behavior as the reference while using placeholder content and a fresh visual language.
            </p>
            <p className="text-base leading-8 text-text-muted">
              It is organized for easy customization, with reusable section components and a clear responsive grid system.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {['Clean structure', 'Visual rhythm', 'Mobile-first', 'Motion-ready'].map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-bg/70 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-accent">{item}</p>
              <p className="mt-3 text-sm text-text-muted">A placeholder detail describing the design system and spacing approach.</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
