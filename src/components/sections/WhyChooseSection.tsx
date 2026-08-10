import { SectionHeading } from '../ui/SectionHeading'

const reasons = [
  {
    title: 'Fast Performance',
    detail: 'Optimized for speed and smooth user experiences across every device.'
  },
  {
    title: 'Secure Development',
    detail: 'Best practices for authentication, validation, and application security.'
  },
  {
    title: 'Responsive Design',
    detail: 'Pixel-perfect experiences across desktop, tablet, and mobile devices.'
  },
  {
    title: 'Scalable Architecture',
    detail: 'Applications built for future growth and maintainability.'
  }
]

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="border-t border-border/20 bg-bg py-20 sm:py-24">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <SectionHeading
            id="why-choose"
            title="Why Clients Choose Me"
            description="A strategic approach to building modern applications that perform, scale, and deliver business value." 
          />
          <div className="rounded-[1.75rem] border border-border/20 bg-bg-elevated/90 p-8 shadow-soft">
            <p className="text-sm text-text-muted">
              Let’s build a modern, scalable, and high-performing solution tailored to your business goals.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="primary-button inline-flex justify-center">Start Your Project</a>
              <a href="#contact" className="secondary-button inline-flex justify-center">Contact Me</a>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-[1.75rem] border border-border/20 bg-bg-elevated/90 p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
              <p className="mt-3 text-sm text-text-muted">{reason.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
