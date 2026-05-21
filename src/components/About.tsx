import { Link } from 'react-router-dom'
import emmyPhoto from '../assets/emmy.png'

const skills = [
  'React / React Native',
  'TypeScript',
  'Node.js',
  'REST & GraphQL',
  'UI systems',
  'CI/CD',
  'PostgreSQL',
  'Cloud deploy',
]

/** Studio strip styles: `src/about-studio.css` (imported last in main.tsx). Keep id + classes in sync with that file. */
export function About() {
  return (
    <section className="section about-studio" id="about" aria-labelledby="about-heading">
      <div className="about-studio__shell">
        <h2 className="section__title" id="about-heading">
          About me
        </h2>
        <p className="section__lead">
          I work across the stack: product-minded frontend, dependable backends, and the
          glue in between {'\u2014'} auth, sync, performance, and release quality.
        </p>
        <div className="about-layout">
          <figure className="card about-portrait">
            <div className="about-portrait__frame">
              <img
                src={emmyPhoto}
                alt="Portrait of Emmy Stack"
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="about-portrait__caption">
              <span className="about-portrait__name">Emmy Stack</span>
              <span className="about-portrait__role">
                Full stack developer {'\u00b7'} Mobile &amp; web
              </span>
            </figcaption>
          </figure>
          <div className="about-cards">
            <article className="card about-card">
              <h3>How I work</h3>
              <p>
                I start from the user journey {'\u2014'} whether that&apos;s a shopper on the web or a
                field worker on a phone {'\u2014'} then shape architecture and components so the
                product stays fast to iterate and safe to grow.
              </p>
              <p>
                I care about accessibility, coherent design language, and code that the next
                developer (including future me) can navigate without guesswork.
              </p>
            </article>
            <article className="card about-card">
              <h3>Stack &amp; focus</h3>
              <p>
                Mobile apps, responsive web apps, dashboards, and the services behind them.
                If you need a partner who can own features end-to-end, we should talk.
              </p>
              <div className="skills" role="list">
                {skills.map((s) => (
                  <span className="skill-pill" key={s} role="listitem">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
        <div className="about-studio__actions hero__actions">
          <Link className="btn btn--primary" to="/projects">
            View work
          </Link>
          <Link className="btn btn--ghost" to="/contact">
            Contact me
          </Link>
        </div>
      </div>
    </section>
  )
}
