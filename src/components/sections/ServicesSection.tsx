import { SectionHeading } from '../ui/SectionHeading'

const services = [
  {
    title: 'Full Stack Web Development',
    description:
      'Build complete web applications from frontend to backend using modern technologies with a focus on scalability and performance.',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL']
  },
  {
    title: 'Frontend Development',
    description:
      'Create responsive, accessible, and visually engaging interfaces with excellent user experience and performance.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend Development & APIs',
    description:
      'Develop secure REST APIs, authentication systems, business logic, and scalable server-side applications.',
    items: ['Node.js', 'Express', 'JWT', 'REST API']
  },
  {
    title: 'Performance Optimization',
    description:
      'Improve speed, loading performance, SEO readiness, accessibility, and Core Web Vitals for real-world use.',
    items: ['Lazy Loading', 'Image Optimization', 'Caching', 'Performance Audits']
  },
  {
    title: 'Database Design',
    description:
      'Design optimized database structures that support scalability, reliability, and fast data retrieval.',
    items: ['MongoDB', 'PostgreSQL', 'Firebase']
  },
  {
    title: 'Deployment & Maintenance',
    description:
      'Deploy applications, configure hosting environments, monitor performance, fix bugs, and provide ongoing support.',
    items: ['Vercel', 'Netlify', 'Railway', 'Render']
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-border/20 bg-bg py-20 sm:py-24">
      <div className="container mx-auto">
        <SectionHeading
          id="services"
          title="My Services"
          description="I help startups, businesses, and entrepreneurs transform ideas into fast, scalable, and production-ready web applications."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[1.75rem] border border-border/20 bg-bg-elevated/90 p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.28em] text-accent">Service</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-muted">{service.description}</p>
              <div className="mt-5 space-y-2">
                <p className="text-sm font-semibold text-white">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span key={item} className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
