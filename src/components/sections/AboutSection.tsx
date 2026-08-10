import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/20 bg-bg py-20 sm:py-24">
      <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <SectionHeading
            id="about"
            title="About Me"
            description="I'm Emmanuel Ajani (Emmydev), a full-stack developer passionate about turning complex business challenges into elegant, high-performance web applications."
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-5 rounded-[1.5rem] border border-border/30 bg-bg-elevated/90 p-8 shadow-soft"
          >
            <p className="text-base leading-8 text-text-muted">
              I build modern, responsive, and scalable web applications. I focus on creating intuitive user experiences supported by reliable backend systems.
            </p>
            <p className="text-sm text-text-muted">
              My work blends polished frontend interfaces with solid backend architecture, making every project feel fast, stable, and ready for growth.
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
          <div className="rounded-[1.5rem] bg-bg/70 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Modern Development</p>
            <p className="mt-3 text-sm text-text-muted">I build responsive applications using React, TypeScript, Tailwind CSS, Node.js, and modern development practices.</p>
          </div>
          <div className="rounded-[1.5rem] bg-bg/70 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Problem Solving</p>
            <p className="mt-3 text-sm text-text-muted">I enjoy breaking down complex problems into simple, efficient, and maintainable solutions.</p>
          </div>
          <div className="rounded-[1.5rem] bg-bg/70 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Continuous Learning</p>
            <p className="mt-3 text-sm text-text-muted">I regularly explore new technologies, improve my skills, and apply best practices in every project.</p>
          </div>
          <div className="rounded-[1.5rem] bg-bg/70 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Collaboration</p>
            <p className="mt-3 text-sm text-text-muted">I value clear communication, teamwork, and writing code that is easy to understand and maintain.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
