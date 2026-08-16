import { PageHero } from '../components/ui/PageHero'
import { ContactSection } from '../components/sections/ContactSection'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        description="Let's connect and discuss how we can build the next modern, scalable, and high-performing digital solution for your business."
      />
      <ContactSection />
    </>
  )
}
