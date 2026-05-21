import { ProjectCardPreview, type ProjectPreviewVariant } from './ProjectCardPreview'
import { projectPreviewUrl } from '../lib/projectPreviewUrl'

type Project = {
  title: string
  desc: string
  tags: readonly string[]
  preview: ProjectPreviewVariant
  href?: string
}

const projects: Project[] = [
  {
    title: 'Commerce mobile suite',
    desc: 'Checkout, loyalty, and offline-tolerant catalog for a retail brand.',
    tags: ['React Native', 'Node', 'Stripe'],
    preview: 'commerce',
  },
  {
    title: 'Operations dashboard',
    desc: 'Real-time fleet map, alerts, and role-based workflows for dispatch teams.',
    tags: ['React', 'WebSockets', 'Postgres'],
    preview: 'dashboard',
  },
  {
    title: 'Wellness companion',
    desc: 'Habit tracking, reminders, and gentle insights with a calm visual system.',
    tags: ['Expo', 'TypeScript', 'Push'],
    preview: 'wellness',
  },
  {
    title: 'B2B onboarding portal',
    desc: 'Guided setup, document upload, and admin review with audit trails.',
    tags: ['Next.js', 'Auth', 'S3'],
    preview: 'onboarding',
  },
  {
    title: 'Field service toolkit',
    desc: 'Job tickets, signatures, and sync when connectivity is unpredictable.',
    tags: ['Mobile', 'SQLite', 'API'],
    preview: 'field',
  },
  {
    title: 'Creator microsite builder',
    desc: 'Themed landing pages with media embeds and lightweight analytics.',
    tags: ['Vite', 'Edge', 'Analytics'],
    preview: 'creator',
  },
]

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <h2 className="section__title" id="projects-heading">
        Previous projects
      </h2>
      <p className="section__lead">
        Product-style screenshots from shipped interfaces — mobile apps, dashboards, and web
        tools built for real users.
      </p>
      <div className="projects-grid">
        {projects.map((p) => {
          const image = projectPreviewUrl(p.preview)
          const inner = (
            <>
              <ProjectCardPreview
                variant={p.preview}
                image={image}
                label={p.title}
                showLiveCta={Boolean(p.href)}
              />
              <div className="project-card__body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-card__tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </>
          )

          return (
            <article className="card project-card" key={p.title}>
              {p.href ? (
                <a
                  className="project-card__link"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} — open live site (new tab)`}
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
