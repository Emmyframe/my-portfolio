import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

const skills = [
  'UI design',
  'Responsive systems',
  'Design tokens',
  'Motion principles',
  'Project storytelling',
  'Prototype flow'
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container mx-auto">
        <SectionHeading
          id="skills"
          title="Skills and system patterns"
          description="A placeholder skills section with a balanced grid, reflecting the reference portfolio’s structured layout."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="card-surface p-6"
            >
              <h3 className="text-lg font-semibold text-white">{skill}</h3>
              <p className="mt-3 text-sm text-text-muted">
                Placeholder description highlighting how this skill contributes to polished product experiences.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
