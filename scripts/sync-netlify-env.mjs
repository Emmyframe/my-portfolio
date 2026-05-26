/**
 * Pushes VITE_* vars from .env into Netlify (production).
 * Requires: netlify login + netlify link (or NETLIFY_AUTH_TOKEN + site id).
 *
 *   npm run sync:netlify-env
 */
import { readFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = resolve(root, ".env");

if (!existsSync(envPath)) {
  console.error("Missing .env — run setup or copy .env.example first.");
  process.exit(1);
}

const vars = {};
for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eq = trimmed.indexOf("=");
  if (eq === -1) continue;
  const key = trimmed.slice(0, eq).trim();
  const value = trimmed.slice(eq + 1).trim();
  if (key.startsWith("VITE_")) vars[key] = value;
}

if (!vars.VITE_SUPABASE_URL || !vars.VITE_SUPABASE_ANON_KEY) {
  console.error(".env must include VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY");
  process.exit(1);
}

for (const [key, value] of Object.entries(vars)) {
  const r = spawnSync(
    "npx",
    ["netlify-cli", "env:set", key, value, "--context", "production"],
    { cwd: root, stdio: "inherit", shell: true },
  );
  if (r.status !== 0) {
    console.error(`Failed to set ${key}. Run: npx netlify-cli login && npx netlify-cli link`);
    process.exit(r.status ?? 1);
  }
}

console.log("OK: Netlify production env updated from .env");
