import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border/20 bg-bg py-20 sm:py-24">
      <div className="container mx-auto">
        <SectionHeading
          id="contact"
          title="Contact"
          description="A simple placeholder contact section. Replace this with your own email, social links, or contact form."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mt-12 grid gap-6 rounded-[1.5rem] border border-border/20 bg-bg-elevated/90 p-8 shadow-soft sm:grid-cols-[1fr_auto] sm:items-center"
        >
          <div>
            <p className="text-lg font-semibold text-white">Ready for the next step?</p>
            <p className="mt-3 text-sm text-text-muted">
              Use this section to add a contact form, email address, or a short call to action for your portfolio.
            </p>
          </div>
          <a href="mailto:hello@example.com" className="primary-button inline-flex justify-center">
            Email placeholder
          </a>
        </motion.div>
      </div>
    </section>
  )
}
