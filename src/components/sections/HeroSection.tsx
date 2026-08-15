import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(108,208,255,0.08),_transparent_22%),_radial-gradient(circle_at_80%_10%,_rgba(75,166,255,0.05),_transparent_26%),_rgba(7,14,30,1)] py-24 sm:py-32">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Emmydev</p>
            <p className="text-xs uppercase tracking-[0.3em] text-text-muted">Available for freelance</p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Digital Systems That Drive Real Business Growth
          </h1>

          <p className="max-w-2xl text-lg text-text-muted sm:text-xl">
            I help startups, entrepreneurs, and growing businesses turn ideas into scalable, high-converting web solutions that perform, convert, and scale.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="primary-button inline-flex items-center">Hire Me</a>
            <a href="#about" className="secondary-button inline-flex items-center">Learn More</a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-bg-elevated/90 p-4 text-sm text-text-muted">
              <p className="text-xl font-semibold text-white">5+</p>
              <p className="mt-2">Years Experience</p>
            </div>
            <div className="rounded-[1.5rem] bg-bg-elevated/90 p-4 text-sm text-text-muted">
              <p className="text-xl font-semibold text-white">40+</p>
              <p className="mt-2">Projects Delivered</p>
            </div>
            <div className="rounded-[1.5rem] bg-bg-elevated/90 p-4 text-sm text-text-muted">
              <p className="text-xl font-semibold text-white">98%</p>
              <p className="mt-2">Client Satisfaction</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Built with</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="inline-flex items-center rounded-full bg-white/5 px-3 py-2 text-sm text-text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative flex items-center justify-center"
        >
          <div className="rounded-[2.5rem] border border-border/30 bg-bg-elevated/90 p-6 shadow-soft">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white shadow-xl">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 rounded-3xl bg-white/5 px-4 py-3 text-sm text-text-muted">
                  <span className="font-semibold text-white">Emmydev</span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-slate-950">Freelance</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.28em] text-accent">Available for Hire</p>
                  <h2 className="text-2xl font-semibold">Business-focused digital products</h2>
                </div>
                <p className="text-sm leading-7 text-text-muted">
                  Built for startups, entrepreneurs, and growing businesses that need scalable, high-converting web solutions.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.5rem] bg-white/5 p-4 text-center">
                    <p className="text-2xl font-semibold text-white">5+</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Years</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white/5 p-4 text-center">
                    <p className="text-2xl font-semibold text-white">40+</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Projects</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white/5 p-4 text-center">
                    <p className="text-2xl font-semibold text-white">98%</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Client satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                <img src="/emmy-portrait.png" alt="Emmydev portrait" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
