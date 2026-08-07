import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

const projects = [
  {
    title: 'Project placeholder one',
    detail: 'A refined product interface with clear hierarchy and card-based layout.'
  },
  {
    title: 'Project placeholder two',
    detail: 'A polished landing concept with strong visual rhythm and responsive spacing.'
  },
  {
    title: 'Project placeholder three',
    detail: 'An original dashboard layout with data-first section structure and motion cues.'
  }
]

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="border-t border-border/20 bg-bg py-20 sm:py-24">
      <div className="container mx-auto">
        <SectionHeading
          id="projects"
          title="Featured projects"
          description="A placeholder project gallery that preserves the reference project section order, spacing, and visual style."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="card-surface overflow-hidden p-6"
            >
              <div className="rounded-[1.5rem] bg-bg/70 px-4 py-5">
                <p className="text-sm uppercase tracking-[0.28em] text-accent">Featured</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{project.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
