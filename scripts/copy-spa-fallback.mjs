import { copyFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const index = join(dist, 'index.html')

if (!existsSync(index)) {
  console.error('FAIL: dist/index.html not found')
  process.exit(1)
}

copyFileSync(index, join(dist, '404.html'))
console.log('OK: copied dist/index.html → dist/404.html (SPA fallback)')
