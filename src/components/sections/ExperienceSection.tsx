import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

const experience = [
  {
    role: 'Design placeholder role',
    time: '2024 — present',
    description: 'A placeholder description of experience in design systems and product interface strategy.'
  },
  {
    role: 'Product placeholder role',
    time: '2022 — 2024',
    description: 'A placeholder description of experience working across responsive layouts and motion-led product flows.'
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="container mx-auto">
        <SectionHeading
          id="experience"
          title="Experience overview"
          description="A placeholder timeline-style experience section that echoes the reference structure and spacing." 
        />

        <div className="mt-12 space-y-5">
          {experience.map((item) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="card-surface p-6 sm:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{item.role}</p>
                  <p className="text-sm uppercase tracking-[0.28em] text-accent">{item.time}</p>
                </div>
                <p className="text-sm text-text-muted">Placeholder experience detail for the portfolio layout.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
