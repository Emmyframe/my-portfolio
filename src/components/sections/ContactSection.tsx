import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border/20 bg-bg py-20 sm:py-24">
      <div className="container mx-auto">
        <SectionHeading
          id="contact"
          title="Contact"
          description="Let's connect and discuss how we can build the next modern, scalable, and high-performing digital solution for your business."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mt-12 grid gap-6 rounded-[1.75rem] border border-border/20 bg-bg-elevated/90 p-8 shadow-soft sm:grid-cols-[1fr_auto] sm:items-center"
        >
          <div>
            <p className="text-lg font-semibold text-white">Ready to start your next project?</p>
            <p className="mt-3 text-sm text-text-muted">
              Send a message and I'll get back to you with a tailored approach for your business goals.
            </p>
          </div>
          <a href="mailto:hello@example.com" className="primary-button inline-flex justify-center">
            hello@example.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
