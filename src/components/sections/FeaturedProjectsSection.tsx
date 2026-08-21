import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '../ProjectCard'

type Project = {
  title: string
  detail: string
  image: string
  href: string
  category: string
}

const projects: Project[] = [
  {
    title: 'EmmyFlix Movies',
    detail: 'A movie discovery platform with genre navigation, featured titles, and smooth browsing for film lovers.',
    image: '/project-previews/emmystream.png',
    href: 'https://emmyflixmovies.netlify.app',
    category: 'Frontend'
  },
  {
    title: 'Artify Creative Canvas',
    detail: 'A gallery-style portfolio for designers and illustrators with curated project showcases and polished visuals.',
    image: '/project-previews/creator.png',
    href: 'https://artify-your-creative-canvas.vercel.app',
    category: 'UI/UX'
  },
  {
    title: 'Buildr Mart Shop',
    detail: 'A retail storefront designed for quick product discovery, category browsing, and a straightforward shopping flow.',
    image: '/project-previews/commerce.png',
    href: 'https://buildr-mart-shop.vercel.app',
    category: 'Full Stack'
  },
  {
    title: 'Garden of Moments',
    detail: 'A lifestyle brand experience built around elegant content sections, responsive imagery, and smooth storytelling.',
    image: '/project-previews/wellness.png',
    href: 'https://garden-of-moments.vercel.app',
    category: 'Frontend'
  },
  {
    title: 'Valor Clothing Store',
    detail: 'A fashion storefront with bold product presentation, curated collections, and modern e-commerce styling.',
    image: '/project-previews/valor-clothing.png',
    href: 'https://valor-clothing-store.vercel.app',
    category: 'Full Stack'
  },
  {
    title: 'LumA E-Commerce',
    detail: 'A full-featured e-commerce platform with product catalog, cart, checkout flow, and a clean, conversion-focused shopping experience.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: 'https://lum-a-ecommerce-webs-1kmv.bolt.host',
    category: 'Full Stack'
  },
  {
    title: 'My Wear Store',
    detail: 'A modern fashion e-commerce storefront built for the African market — flash deals, curated collections, category browsing, and discount pricing with a premium shopping flow.',
    image: '/project-previews/wear-store.png',
    href: 'https://my-wear-store.netlify.app',
    category: 'Frontend'
  },
  {
    title: 'LeadRadar',
    detail: 'A lead-intelligence SaaS platform that scans millions of public conversations, scores buying intent with AI, and alerts sales teams the moment someone needs their service.',
    image: '/project-previews/leadradar.png',
    href: 'https://leadradar-u5di.vercel.app',
    category: 'Full Stack'
  },
  {
    title: 'Mhentor Portfolio',
    detail: 'A multi-page developer portfolio with case-study galleries, service categories, project filtering, and a fast, fully responsive experience.',
    image: '/project-previews/mhentor.png',
    href: 'https://mhentor.netlify.app/projects',
    category: 'Frontend'
  }
]

const filters = ['All', 'Frontend', 'Full Stack', 'UI/UX', 'API']

export function FeaturedProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="border-t border-border/20 bg-bg py-20 sm:py-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-3">
          {filters.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveFilter(tab)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition ${
                activeFilter === tab
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border/30 bg-bg-elevated/80 text-text-muted hover:border-accent hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
