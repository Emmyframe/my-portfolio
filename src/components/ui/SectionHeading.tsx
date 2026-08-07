type Props = {
  title: string
  description: string
  id: string
}

export function SectionHeading({ title, description, id }: Props) {
  return (
    <div id={id} className="space-y-4">
      <p className="text-sm uppercase tracking-[0.32em] text-accent">Section</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  )
}
