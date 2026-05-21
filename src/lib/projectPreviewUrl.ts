import type { ProjectPreviewVariant } from '../components/ProjectCardPreview'

/** Public folder screenshot served at deploy; uses Vite base for subpath hosting. */
export function projectPreviewUrl(variant: ProjectPreviewVariant): string {
  const base = import.meta.env.BASE_URL
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}project-previews/${variant}.png`
}
