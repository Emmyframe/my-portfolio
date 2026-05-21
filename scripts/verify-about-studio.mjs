import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(fileURLToPath(import.meta.url))
const mainPath = join(root, '..', 'src', 'main.tsx')
const main = readFileSync(mainPath, 'utf8')

if (!main.includes("import './about-studio.css'")) {
  console.error('FAIL: src/main.tsx must import ./about-studio.css')
  process.exit(1)
}

const idx = main.indexOf("import './portfolio.css'")
const studio = main.indexOf("import './about-studio.css'")
if (idx === -1 || studio === -1 || studio < idx) {
  console.error('FAIL: about-studio.css must be imported AFTER portfolio.css in main.tsx')
  process.exit(1)
}

const aboutPath = join(root, '..', 'src', 'components', 'About.tsx')
const about = readFileSync(aboutPath, 'utf8')
if (!about.includes('id="about"') || !about.includes('about-studio')) {
  console.error('FAIL: About.tsx must keep id="about" and class about-studio on the section')
  process.exit(1)
}

console.log('OK: About studio wiring (main.tsx import order + About.tsx id/classes)')
