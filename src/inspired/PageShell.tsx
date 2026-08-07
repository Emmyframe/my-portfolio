import type { PropsWithChildren } from 'react'

export default function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full border-b" style={{ borderColor: 'var(--border)' }} />
      <div className="flex-1 max-w-content mx-auto px-section-x py-12">
        {children}
      </div>
    </div>
  )
}
