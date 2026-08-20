import { Badge } from '@/components/ui/badge'

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
      'Crafting unique, responsive websites that perfectly blend aesthetics with functionality for excellent user experience.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend Development & APIs',
    description:
      'Architecting RESTful APIs, authentication systems, business logic, and scalable server-side applications.',
    items: ['Node.js', 'Express', 'JWT', 'REST API']
  },
  {
    title: 'AI Engineering',
    description:
      'Building AI-powered solutions and integrating machine learning models to automate and enhance business workflows.',
    items: ['Python', 'LangChain', 'OpenAI', 'TensorFlow']
  },
  {
    title: 'Database Design',
    description:
      'Design optimized database structures that support scalability, reliability, and fast data retrieval.',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
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
        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group h-72 [perspective:1400px]"
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front face */}
                <div className="absolute inset-0 flex flex-col rounded-[1.75rem] border border-border/20 bg-bg-elevated/90 p-6 shadow-soft [backface-visibility:hidden]">
                  <p className="text-sm uppercase tracking-[0.28em] text-accent">Service</p>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-muted">{service.description}</p>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-text-muted transition group-hover:text-accent">
                      Hover to flip
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Back face */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[1.75rem] border border-accent/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-sm uppercase tracking-[0.28em] text-accent">Technologies</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.items.map((item) => (
                      <Badge key={item} variant="accent">{item}</Badge>
                    ))}
                  </div>
                  <p className="mt-2 text-center text-xs uppercase tracking-[0.24em] text-text-muted">
                    {service.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
