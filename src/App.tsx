import { Layout } from './components/layout/Layout'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { FeaturedProjectsSection } from './components/sections/FeaturedProjectsSection'
import { WhyChooseSection } from './components/sections/WhyChooseSection'
import { ContactSection } from './components/sections/ContactSection'

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <WhyChooseSection />
      <ContactSection />
    </Layout>
  )
}
