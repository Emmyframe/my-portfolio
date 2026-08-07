import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/30 bg-bg/95 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#hero" className="font-semibold tracking-[0.22em] text-accent uppercase">
          Portfolio
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-text-muted transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/50 bg-bg-elevated text-text-muted transition hover:border-accent hover:text-accent md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          <span aria-hidden="true">☰</span>
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="border-t border-border/20 bg-bg/95 md:hidden"
        >
          <div className="space-y-2 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-3xl px-4 py-3 text-sm text-text-muted transition hover:bg-bg-elevated hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}
