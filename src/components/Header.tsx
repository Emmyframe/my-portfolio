import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Theme } from '../theme'

type Props = {
  theme: Theme
  onThemeChange: (t: Theme) => void
}

const sections = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' }
] as const

export function Header({ theme, onThemeChange }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const nextTheme = theme === 'wine' ? 'light' : 'wine'

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-bg/90 backdrop-blur-lg">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/15 text-accent">PX</span>
          Portfolio
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {sections.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-text-muted transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onThemeChange(nextTheme)}
            className="rounded-full border border-border/80 bg-bg-elevated/95 px-3 py-2 text-sm text-text-muted transition hover:border-accent hover:text-accent"
          >
            {theme === 'wine' ? 'Light' : 'Dark'}
          </button>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/80 bg-bg-elevated/95 text-text-muted transition hover:border-accent hover:text-accent md:hidden"
          >
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="border-t border-border/40 bg-bg/95 md:hidden"
          >
            <div className="space-y-3 px-6 py-5">
              {sections.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-text-muted transition hover:bg-bg-elevated/80 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
