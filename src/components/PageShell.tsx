import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Wider shell for full-bleed sections that manage their own inner max-width */
  bleed?: boolean
}

export function PageShell({ children, className = '', bleed = false }: Props) {
  return (
    <div
      className={`container mx-auto flex flex-col gap-16 px-4 py-6 sm:px-6 ${
        bleed ? 'max-w-full px-0' : 'max-w-6xl'
      } ${className}`.trim()}
    >
      {children}
    </div>
  )
}
