import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
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
            <Card key={service.title}>
              <CardHeader>
                <p className="text-sm uppercase tracking-[0.28em] text-accent">Service</p>
                <CardTitle className="mt-4">{service.title}</CardTitle>
                <CardDescription className="mt-3">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-white">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
