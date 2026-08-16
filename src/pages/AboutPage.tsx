import { PageHero } from '../components/ui/PageHero'
import { AboutSection } from '../components/sections/AboutSection'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Get to know me"
        title="About Me"
        description="Results-driven software developer specializing in backend engineering, fullstack development, and AI-powered solutions."
      />
      <AboutSection />
    </>
  )
}
