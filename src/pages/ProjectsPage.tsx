import { PageHero } from '../components/ui/PageHero'
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection'

export function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="My work"
        title="Featured Projects"
        description="A polished project gallery showcasing my recent work and experiments."
      />
      <FeaturedProjectsSection />
    </>
  )
}
