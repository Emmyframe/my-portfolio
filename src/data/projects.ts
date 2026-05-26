import raw from './projects.json'

export type PortfolioProject = {
  /** Used for preview filename: public/project-previews/{id}.png */
  id: string
  title: string
  desc: string
  tags: string[]
  /** Live Vercel (or other) URL — opens in a new tab */
  href: string
}

export const portfolioProjects: PortfolioProject[] = raw.projects

export function projectImagePath(id: string): string {
  const base = import.meta.env.BASE_URL
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}project-previews/${id}.png`
}
