import { motion } from 'framer-motion'
import { FeatureCard } from '../components/FeatureCard'
import { PageShell } from '../components/PageShell'
import { ProjectTile } from '../components/ProjectTile'
import { SectionHeader } from '../components/SectionHeader'
import { TestimonialCard } from '../components/TestimonialCard'

const services = [
  {
    title: 'Product strategy',
    description: 'Crafting focused roadmaps, launch-ready flows, and polished experience systems.',
    icon: '🎯'
  },
  {
    title: 'Interface design',
    description: 'Designing readable, responsive interfaces for web and mobile products.',
    icon: '✨'
  },
  {
    title: 'Motion system',
    description: 'Applying subtle, modern transitions to guide attention and delight users.',
    icon: '⚡'
  }
]

const projects = [
  {
    title: 'Horizon dashboard',
    subtitle: 'Analytics and growth suite',
    tags: ['Dashboard', 'UX', 'Data'],
    description: 'A polished analytics workspace built for fast insights and clear action.'
  },
  {
    title: 'Launch landing page',
    subtitle: 'Brand and launch kit',
    tags: ['Landing page', 'Copy', 'Design'],
    description: 'A modern landing experience with refined layout, spacing, and clear CTA patterns.'
  },
  {
    title: 'Growth toolkit',
    subtitle: 'Collaboration & workflow',
    tags: ['SaaS', 'Teams', 'Product'],
    description: 'A lightweight team experience that balances utility and confidence in every step.'
  }
]

const testimonials = [
  {
    quote: 'The design system feels clean and effortless, with a strong focus on content hierarchy.',
    name: 'Jordan Lee',
    role: 'Product lead'
  },
  {
    quote: 'The polished spacing and responsive structure make the app feel trustworthy from the first screen.',
    name: 'Morgan Reed',
    role: 'Founding partner'
  }
]

export default function HomePage() {
  return (
    <main>
      <PageShell>
        <section className="overflow-hidden pb-20 pt-10 sm:pb-24">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                New portfolio concept
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Crafting digital experiences for modern products, teams, and launches.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-text-muted sm:text-xl">
                A clean and adaptable portfolio layout with a strong content hierarchy, spacious sections, and motion-driven transitions.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#work" className="primary-button">
                  View work
                </a>
                <a href="#contact" className="secondary-button">
                  Contact me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="card-surface border border-border/80 p-8 shadow-elevated"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-accent-strong">Services</p>
                  <p className="mt-3 text-xl font-semibold text-white">Work that is clear, calm, and easy to navigate.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-bg/80 p-5">
                    <p className="text-sm font-semibold text-white">Design systems</p>
                    <p className="mt-3 text-sm text-text-muted">
                      Consistent components and well-considered spacing for every breakpoint.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-bg/80 p-5">
                    <p className="text-sm font-semibold text-white">Responsive layouts</p>
                    <p className="mt-3 text-sm text-text-muted">
                      Flexible grids for desktop, tablet, and mobile experiences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="work" className="space-y-8 pb-20">
          <SectionHeader
            id="work"
            title="Featured work"
            lead="Three placeholder projects that show a polished mix of product design, web design, and user-first details."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectTile key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="services" className="space-y-8 pb-20">
          <SectionHeader
            id="services"
            title="Design and motion services"
            lead="Reusable components, responsive visual design, and motion transitions to bring your portfolio or product site to life."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <FeatureCard key={service.title} service={service} />
            ))}
          </div>
        </section>

        <section id="testimonials" className="space-y-8 pb-20">
          <SectionHeader
            id="testimonials"
            title="What product partners say"
            lead="Testimonials that emphasize clarity, trust, and a calm user experience for every screen size."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-8 pb-28">
          <SectionHeader
            id="contact"
            title="Ready to build something new?"
            lead="Get in touch to explore a concept, wireframe an experience, or build a clean, responsive portfolio site."
          />
          <div className="flex flex-col gap-6 rounded-[2rem] border border-border/70 bg-bg-elevated/90 p-10 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-accent-strong">Let’s connect</p>
              <p className="mt-3 text-2xl font-semibold text-white">Available for new projects and collaboration.</p>
            </div>
            <a href="mailto:hello@example.com" className="primary-button inline-flex">
              Email me
            </a>
          </div>
        </section>
      </PageShell>
    </main>
  )
}
