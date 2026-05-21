import { NavLink, Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import type { Theme } from '../theme'

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
] as const

type Props = {
  theme: Theme
  onThemeChange: (t: Theme) => void
}

export function Header({ theme, onThemeChange }: Props) {
  return (
    <header className="site-header">
      <Link className="logo-link" to="/">
        <span className="logo-mark" aria-hidden="true">
          ES
        </span>
        <span>Emmy Stack</span>
      </Link>
      <nav className="site-header__nav" aria-label="Primary">
        <ul className="site-header__links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ThemeToggle theme={theme} onChange={onThemeChange} />
      </nav>
    </header>
  )
}
