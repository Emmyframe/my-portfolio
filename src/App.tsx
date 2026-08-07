import { Layout } from './components/layout/Layout'
import { ContactSection } from './components/sections/ContactSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { FeaturedProjectsSection } from './components/sections/FeaturedProjectsSection'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </Layout>
  )
}
