import { ProjectCardPreview } from './ProjectCardPreview'
import { portfolioProjects, projectImagePath } from '../data/projects'

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <h2 className="section__title" id="projects-heading">
        Projects
      </h2>
      <p className="section__lead">
        Live work — each card links to a deployed site with a screenshot preview.
      </p>

      {portfolioProjects.length === 0 ? (
        <p className="section__lead projects-empty">
          No projects yet. Add entries in <code>src/data/projects.json</code> and matching
          PNGs in <code>public/project-previews/</code>.
        </p>
      ) : (
        <div className="projects-grid">
          {portfolioProjects.map((p) => {
            const image = projectImagePath(p.id)
            const inner = (
              <>
                <ProjectCardPreview
                  variant="creator"
                  image={image}
                  label={p.title}
                  showLiveCta
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
              <article className="card project-card" key={p.id}>
                <a
                  className="project-card__link"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} — open live site (new tab)`}
                >
                  {inner}
                </a>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
