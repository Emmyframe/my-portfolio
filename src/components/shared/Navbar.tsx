import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' }
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 border-b border-border/30 bg-bg/95 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="font-semibold tracking-[0.22em] text-accent uppercase">
          Emmydev
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm transition hover:text-white ${
                location.pathname === link.to ? 'text-accent' : 'text-text-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          <span aria-hidden="true">☰</span>
        </Button>
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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`block rounded-3xl px-4 py-3 text-sm transition hover:bg-bg-elevated hover:text-white ${
                  location.pathname === link.to ? 'text-accent' : 'text-text-muted'
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}
