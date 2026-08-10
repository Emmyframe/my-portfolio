import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from '../ProjectCard'

const projects = [
  {
    title: 'EmmyFlix Movies',
    detail: 'A movie discovery platform with genre navigation, featured titles, and smooth browsing for film lovers.',
    image: '/project-previews/emmystream.png',
    href: 'https://emmyflixmovies.netlify.app'
  },
  {
    title: 'Artify Creative Canvas',
    detail: 'A gallery-style portfolio for designers and illustrators with curated project showcases and polished visuals.',
    image: '/project-previews/creator.png',
    href: 'https://artify-your-creative-canvas.vercel.app'
  },
  {
    title: 'Buildr Mart Shop',
    detail: 'A retail storefront designed for quick product discovery, category browsing, and a straightforward shopping flow.',
    image: '/project-previews/commerce.png',
    href: 'https://buildr-mart-shop.vercel.app'
  },
  {
    title: 'Garden of Moments',
    detail: 'A lifestyle brand experience built around elegant content sections, responsive imagery, and smooth storytelling.',
    image: '/project-previews/wellness.png',
    href: 'https://garden-of-moments.vercel.app'
  },
  {
    title: 'Valor Clothing Store',
    detail: 'A fashion storefront with bold product presentation, curated collections, and modern e-commerce styling.',
    image: '/project-previews/valor-clothing.png',
    href: 'https://valor-clothing-store.vercel.app'
  }
]

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="border-t border-border/20 bg-bg py-20 sm:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 lg:items-center lg:justify-between lg:flex-row">
          <div className="max-w-2xl">
            <SectionHeading
              id="projects"
              title="Featured Projects"
              description="A polished project gallery layout inspired by clean, modern portfolio presentation styles."
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {['All', 'Frontend', 'Full Stack', 'UI/UX', 'API'].map((tab) => (
              <button
                key={tab}
                type="button"
                className="rounded-full border border-border/30 bg-bg-elevated/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-text-muted transition hover:border-accent hover:text-white"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
