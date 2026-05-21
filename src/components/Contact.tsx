const EMAIL = 'emmanuelsmith2800@gmail.com'

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <h2 className="section__title" id="contact-heading">
        Contact me
      </h2>
      <p className="section__lead">
        Tell me about your product, timeline, and stack. I typically reply within one
        business day.
      </p>
      <div className="contact-wrap">
        <div className="card contact-card">
          <p style={{ margin: '0 0 0.5rem', color: 'var(--text-muted)' }}>Email</p>
          <a className="contact-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <p style={{ margin: '1rem 0 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Prefer a short note? Use the form — it opens your mail client with your
            message prefilled.
          </p>
        </div>
        <form
          className="card contact-card contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            const fd = new FormData(e.currentTarget)
            const name = String(fd.get('name') ?? '').trim()
            const message = String(fd.get('message') ?? '').trim()
            const subject = encodeURIComponent(
              name ? `Portfolio inquiry from ${name}` : 'Portfolio inquiry',
            )
            const body = encodeURIComponent(
              [name && `Name: ${name}`, '', message].filter(Boolean).join('\n'),
            )
            window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
          }}
        >
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" />

          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows={5} required />

          <button className="btn btn--primary" type="submit">
            Send via email
          </button>
        </form>
      </div>
    </section>
  )
}
