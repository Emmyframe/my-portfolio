import {
  copyFileSync,
  existsSync,
  mkdirSync,
  openSync,
  readSync,
  closeSync,
  readdirSync,
  statSync,
  readFileSync,
} from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = join(root, 'public', 'project-previews')
const legacyDir = join(root, 'public - Copy', 'project-previews')
const projectsFile = join(root, 'src', 'data', 'projects.json')

const MIN_BYTES = 10_000

function isValidPng(filePath) {
  if (!existsSync(filePath)) return false
  const size = statSync(filePath).size
  if (size < MIN_BYTES) return false
  const buf = Buffer.alloc(8)
  const fd = openSync(filePath, 'r')
  readSync(fd, buf, 0, 8, 0)
  closeSync(fd)
  return buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47
}

function loadProjectIds() {
  const data = JSON.parse(readFileSync(projectsFile, 'utf8'))
  const projects = data.projects ?? []
  return projects.map((p) => `${p.id}.png`)
}

mkdirSync(publicDir, { recursive: true })

const REQUIRED = loadProjectIds()

if (REQUIRED.length === 0) {
  console.log('OK: no projects in src/data/projects.json — skip preview check')
  process.exit(0)
}

let copied = 0
for (const name of REQUIRED) {
  const dest = join(publicDir, name)
  if (isValidPng(dest)) continue

  const legacy = join(legacyDir, name)
  if (isValidPng(legacy)) {
    copyFileSync(legacy, dest)
    copied++
    console.log(`OK: restored public/project-previews/${name} from public - Copy`)
    continue
  }

  console.error(`FAIL: missing preview image public/project-previews/${name}`)
  console.error('      Add a 16:9 PNG with that exact name (screenshot of the live site).')
  process.exit(1)
}

const extras = readdirSync(publicDir).filter((f) => f.endsWith('.png') && !REQUIRED.includes(f))
if (extras.length) {
  console.log(`Note: extra previews not listed in projects.json: ${extras.join(', ')}`)
}

console.log(
  `OK: ${REQUIRED.length} project preview PNGs ready in public/project-previews/${copied ? ` (${copied} restored)` : ''}`,
)
