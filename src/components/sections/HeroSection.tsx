import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(108,208,255,0.16),_transparent_22%),_radial-gradient(circle_at_80%_10%,_rgba(75,166,255,0.1),_transparent_26%),_rgba(7,22,37,1)] py-20 sm:py-28">
      <div className="container mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-accent">Design portfolio</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Build modern product experiences with a calm, structured design system.
          </h1>
          <p className="max-w-2xl text-base text-text-muted sm:text-lg">
            An original portfolio layout with strong spacing, responsive sections, and motion-led transitions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="primary-button">
              Explore work
            </a>
            <a href="#contact" className="secondary-button">
              Start a project
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="card-surface border border-border/20 p-8 shadow-panel"
        >
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-accent">Highlight</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Responsive portfolio patterns</h2>
            </div>
            <p className="text-text-muted">
              Designed with a polished hierarchy, spacious section gaps, and a clear reading rhythm across breakpoints.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-bg/70 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-accent">Layout</p>
                <p className="mt-3 text-sm text-text-muted">Modular page sections with consistent margins and a wide content container.</p>
              </div>
              <div className="rounded-[1.5rem] bg-bg/70 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-accent">Motion</p>
                <p className="mt-3 text-sm text-text-muted">Subtle fade and slide transitions for scroll-based section reveals.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
