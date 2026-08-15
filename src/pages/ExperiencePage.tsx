import { motion } from 'framer-motion'
import { PageHero } from '../components/ui/PageHero'
import { Link } from 'react-router-dom'

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Freelance',
    period: '2023 — Present',
    description:
      'Leading end-to-end development of scalable web applications for startups and businesses. Architected RESTful APIs, integrated AI-powered features, and delivered high-converting digital products with a focus on performance and maintainability.',
    achievements: [
      'Delivered 40+ production-ready web applications',
      'Reduced average page load times by 60% through optimization',
      'Built AI-powered automation tools for business workflows'
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB']
  },
  {
    role: 'Backend Engineer',
    company: 'Tech Startup',
    period: '2021 — 2023',
    description:
      'Designed and implemented backend systems powering web and mobile applications. Built secure authentication, payment integrations, and real-time features serving thousands of concurrent users.',
    achievements: [
      'Architected microservices handling 50K+ daily requests',
      'Implemented JWT and OAuth authentication systems',
      'Built real-time features with WebSocket and Redis'
    ],
    tech: ['Node.js', 'Express', 'Redis', 'MySQL', 'Docker']
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2020 — 2021',
    description:
      'Developed responsive, accessible user interfaces for client projects ranging from e-commerce to SaaS dashboards. Collaborated closely with designers to deliver pixel-perfect, high-performance experiences.',
    achievements: [
      'Shipped 20+ client websites with 95+ Lighthouse scores',
      'Established reusable component libraries',
      'Mentored junior developers on modern frontend practices'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    role: 'Junior Developer',
    company: 'Web Studio',
    period: '2019 — 2020',
    description:
      'Started my journey building websites and learning the fundamentals of web development. Worked on landing pages, CMS integrations, and front-end bug fixes while rapidly expanding my skill set.',
    achievements: [
      'Built and deployed 15+ landing pages',
      'Learned full-stack development fundamentals',
      'Contributed to open-source projects'
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'PHP', 'MySQL']
  }
]

export function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Career Journey"
        title="My Experience"
        description="A structured path of growth — from building landing pages to architecting scalable full-stack and AI-powered solutions."
      />

      <section className="border-t border-border/20 bg-bg py-20 sm:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="relative space-y-8">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border/30 sm:left-1/2" aria-hidden="true" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                  index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                }`}
              >
                <div
                  className={`absolute top-6 h-3 w-3 rounded-full bg-accent ring-4 ring-bg ${
                    index % 2 === 0
                      ? 'left-2.5 sm:left-auto sm:right-[-6px]'
                      : 'left-2.5 sm:left-[-6px]'
                  }`}
                  aria-hidden="true"
                />

                <article className="rounded-[1.5rem] border border-border/20 bg-bg-elevated/90 p-6 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.24em] text-accent">{exp.period}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{exp.role}</h3>
                  <p className="mt-1 text-sm text-text-muted">{exp.company}</p>
                  <p className="mt-4 text-sm leading-7 text-text-muted">{exp.description}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-2 text-sm text-text-muted ${
                          index % 2 === 0 ? 'sm:justify-end' : ''
                        }`}
                      >
                        <span className="text-accent" aria-hidden="true">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`mt-5 flex flex-wrap gap-2 ${index % 2 === 0 ? 'sm:justify-end' : ''}`}>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/resume" className="primary-button inline-flex items-center">
              View Full Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
