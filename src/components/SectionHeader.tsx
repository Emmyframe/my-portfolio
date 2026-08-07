type Props = {
  id: string
  title: string
  lead?: string
  className?: string
}

export function SectionHeader({ id, title, lead, className = '' }: Props) {
  return (
    <header className={`space-y-4 ${className}`.trim()} id={id}>
      <h2 className="section-heading">{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </header>
  )
}
