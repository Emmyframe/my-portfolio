import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { FeaturedProjectsSection } from './components/sections/FeaturedProjectsSection'
import { WhyChooseSection } from './components/sections/WhyChooseSection'
import { ContactSection } from './components/sections/ContactSection'
import { ExperiencePage } from './pages/ExperiencePage'
import { ResumePage } from './pages/ResumePage'

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <WhyChooseSection />
      <ContactSection />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
