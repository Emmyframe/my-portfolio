import { motion } from 'framer-motion'
import { PageHero } from '../components/ui/PageHero'
import { Link } from 'react-router-dom'

const skills = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  'Backend': ['Node.js', 'Express', 'Python', 'REST API', 'GraphQL', 'WebSocket'],
  'Database': ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
  'AI & Cloud': ['OpenAI', 'LangChain', 'TensorFlow', 'Docker', 'AWS', 'Vercel']
}

const experience = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Freelance',
    period: '2023 — Present',
    description:
      'Leading end-to-end development of scalable web applications. Architected RESTful APIs, integrated AI-powered features, and delivered high-converting digital products.'
  },
  {
    role: 'Backend Engineer',
    company: 'Tech Startup',
    period: '2021 — 2023',
    description:
      'Designed backend systems powering web and mobile apps. Built secure authentication, payment integrations, and real-time features for thousands of concurrent users.'
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2020 — 2021',
    description:
      'Developed responsive, accessible interfaces for client projects. Collaborated with designers to deliver pixel-perfect, high-performance experiences.'
  },
  {
    role: 'Junior Developer',
    company: 'Web Studio',
    period: '2019 — 2020',
    description:
      'Built websites and learned full-stack fundamentals. Worked on landing pages, CMS integrations, and front-end bug fixes.'
  }
]

const education = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'University of Lagos',
    period: '2016 — 2019',
    description: 'Graduated with honors. Focus on software engineering, algorithms, and database systems.'
  },
  {
    degree: 'Full-Stack Development Bootcamp',
    institution: 'Tech Academy',
    period: '2019',
    description: 'Intensive program covering modern web development with React, Node.js, and database design.'
  }
]

const certifications = [
  'AWS Certified Developer Associate',
  'Meta Front-End Developer Certificate',
  'Google Professional Cloud Architect',
  'OpenAI API Integration Specialist'
]

export function ResumePage() {
  return (
    <>
      <PageHero
        eyebrow="Professional Profile"
        title="My Resume"
        description="A comprehensive overview of my skills, experience, education, and certifications."
      />

      <section className="border-t border-border/20 bg-bg py-20 sm:py-24">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-[1.5rem] border border-border/30 bg-bg-elevated/90 p-8 shadow-soft"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Summary</p>
            <p className="mt-4 text-base leading-8 text-text-muted">
              Results-driven software developer with 5+ years of experience specializing in backend engineering, fullstack development, and AI-powered solutions. I excel in designing scalable web applications, architecting RESTful APIs, and delivering end-to-end solutions for seamless user experiences. Passionate about building impactful solutions that drive business growth.
            </p>
          </motion.div>

          {/* Skills */}
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Skills</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Technical Expertise</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.06 }}
                  className="rounded-[1.5rem] border border-border/20 bg-bg-elevated/90 p-6 shadow-soft"
                >
                  <h3 className="text-sm font-semibold text-white">{category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Experience</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Work History</h2>
            <div className="mt-8 space-y-5">
              {experience.map((exp, idx) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.06 }}
                  className="rounded-[1.5rem] border border-border/20 bg-bg-elevated/90 p-6 shadow-soft"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <p className="text-sm text-text-muted">{exp.company}</p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.24em] text-accent">{exp.period}</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-text-muted">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Education</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Academic Background</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.06 }}
                  className="rounded-[1.5rem] border border-border/20 bg-bg-elevated/90 p-6 shadow-soft"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-accent">{edu.period}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-text-muted">{edu.institution}</p>
                  <p className="mt-4 text-sm leading-7 text-text-muted">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Certifications</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Professional Credentials</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.05 }}
                  className="flex items-center gap-3 rounded-[1.25rem] border border-border/20 bg-bg-elevated/90 p-5 shadow-soft"
                >
                  <span className="text-accent text-lg" aria-hidden="true">✦</span>
                  <p className="text-sm font-medium text-white">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[1.75rem] border border-border/20 bg-bg-elevated/90 p-8 shadow-soft text-center">
            <p className="text-lg font-semibold text-white">Want to work together?</p>
            <p className="mt-3 text-sm text-text-muted">
              Let's build your ideas, online presence quickly and efficiently.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/#contact" className="primary-button inline-flex justify-center">Contact Me</Link>
              <Link to="/experience" className="secondary-button inline-flex justify-center">View Experience</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
