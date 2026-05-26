import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const indexPath = join(dist, 'index.html')
const projectsFile = join(root, 'src', 'data', 'projects.json')

function loadPreviewNames() {
  const data = JSON.parse(readFileSync(projectsFile, 'utf8'))
  return (data.projects ?? []).map((p) => `${p.id}.png`)
}

if (!existsSync(indexPath)) {
  console.error('FAIL: dist/index.html missing — run npm run build')
  process.exit(1)
}

const html = readFileSync(indexPath, 'utf8')
if (html.includes('/src/main.tsx')) {
  console.error(
    'FAIL: dist/index.html still points at /src/main.tsx. Deploy the dist/ folder, not the project root.',
  )
  process.exit(1)
}

const assetsDir = join(dist, 'assets')
if (!existsSync(assetsDir) || !readdirSync(assetsDir).some((f) => f.endsWith('.js'))) {
  console.error('FAIL: dist/assets/*.js missing — build did not bundle the app')
  process.exit(1)
}

const PREVIEWS = loadPreviewNames()

if (PREVIEWS.length === 0) {
  console.log('OK: production build verified (app bundle, no project previews configured)')
  process.exit(0)
}

let previewOk = true
for (const name of PREVIEWS) {
  const file = join(dist, 'project-previews', name)
  if (!existsSync(file) || statSync(file).size < 10_000) {
    console.error(`FAIL: dist/project-previews/${name} missing or too small`)
    previewOk = false
  }
}

if (!previewOk) {
  console.error('Run: node scripts/ensure-project-previews.mjs && npm run build')
  process.exit(1)
}

console.log(
  `OK: production build verified (app bundle + ${PREVIEWS.length} project preview${PREVIEWS.length === 1 ? '' : 's'})`,
)
