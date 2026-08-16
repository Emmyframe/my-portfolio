import { SectionHeading } from '../ui/SectionHeading'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

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
    detail: 'Future-proof solutions built to grow with your needs, utilizing modern development practices.'
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
            description="Quality in every detail — delivering excellence through innovative solutions and meticulous attention to detail."
          />
          <Card>
            <CardContent className="p-8">
              <p className="text-sm text-text-muted">
                Let's build a modern, scalable, and high-performing solution tailored to your business goals.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link to="/#contact">Start Your Project</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/#contact">Contact Me</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => (
            <Card key={reason.title}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{reason.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
