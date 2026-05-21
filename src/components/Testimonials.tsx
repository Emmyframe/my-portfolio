const items = [
  {
    quote:
      'Emmy shipped our MVP on time and left the codebase in better shape than she found it. Communication was clear and proactive.',
    name: 'Jordan Lee',
    role: 'Product lead, Series A SaaS',
  },
  {
    quote:
      'Rare mix: pixel-perfect UI sense and solid API design. Our mobile release cadence doubled after she joined.',
    name: 'Samira Okonkwo',
    role: 'Engineering manager',
  },
  {
    quote:
      'She translated vague stakeholder asks into a concrete roadmap and executed without drama. Hire again in a heartbeat.',
    name: 'Chris Dalton',
    role: 'Founder, health startup',
  },
] as const

export function Testimonials() {
  return (
    <section
      className="section"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <h2 className="section__title" id="testimonials-heading">
        Testimonials
      </h2>
      <p className="section__lead">
        Kind words from collaborators. Swap in real names and companies as you collect
        references.
      </p>
      <div className="testimonials">
        {items.map((t) => (
          <figure className="card testimonial" key={t.name}>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <footer>
              {t.name}
              <span>{t.role}</span>
            </footer>
          </figure>
        ))}
      </div>
    </section>
  )
}
