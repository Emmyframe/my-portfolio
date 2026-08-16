import { PageHero } from '../components/ui/PageHero'
import { ServicesSection } from '../components/sections/ServicesSection'

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What I offer"
        title="My Services"
        description="Delivering excellence through innovative solutions and meticulous attention to detail."
      />
      <ServicesSection />
    </>
  )
}
