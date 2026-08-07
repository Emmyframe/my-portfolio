export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-bg-elevated/90 px-4 py-10 text-sm text-text-muted sm:px-6">
      <div className="container grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="font-semibold text-white">Original portfolio concept</p>
          <p className="mt-3 max-w-xl text-sm text-text-muted">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion. Placeholder content is used throughout.
          </p>
        </div>

        <div className="space-y-2 text-right">
          <p>© {year} Portfolio Demo</p>
          <a href="#contact" className="text-accent hover:text-accent-strong">
            Say hello
          </a>
        </div>
      </div>
    </footer>
  )
}
