import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 bg-bg-elevated/90 px-4 py-10 text-sm text-text-muted sm:px-6">
      <div className="container mx-auto grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <p className="font-semibold text-white">Ajani Emmanuel — Emmydev</p>
          <p className="mt-3 max-w-xl text-sm text-text-muted">
            Full-Stack Developer, AI Engineer & Digital Business Builder. Let's build your ideas, online presence quickly and efficiently.
          </p>
        </div>

        <div className="space-y-2 text-right">
          <p>© {year} Ajani Emmanuel</p>
          <Link to="/contact" className="text-accent hover:text-accent-strong">
            Say hello
          </Link>
        </div>
      </div>
    </footer>
  )
}
