/**
 * Screenshot harness. This is the fix for the blind spot: a real Chromium that
 * paints and runs the event loop, driven from the CLI, writing PNGs I can read.
 *
 *   node scripts/shoot.mjs <url> <label> [scrollY]
 *
 * Writes to scripts/shots/<label>.png. With a scrollY it scrolls first, waits
 * for paint, and captures the viewport so scroll-driven state (sticky header
 * colour, parallax) is visible.
 */
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const [url, label, scrollY] = process.argv.slice(2)
if (!url || !label) {
  console.error('usage: shoot.mjs <url> <label> [scrollY]')
  process.exit(1)
}

const OUT = join(dirname(fileURLToPath(import.meta.url)), 'shots')
await mkdir(OUT, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })

await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
await page.waitForTimeout(600) // fonts + first paint

const file = join(OUT, `${label}.png`)

if (scrollY) {
  await page.evaluate((y) => window.scrollTo(0, Number(y)), scrollY)
  await page.waitForTimeout(700) // let transitions/parallax settle
  await page.screenshot({ path: file }) // viewport only
  console.log(`viewport @${scrollY}px -> ${file}`)
} else {
  await page.screenshot({ path: file, fullPage: true })
  console.log(`full page -> ${file}`)
}

await browser.close()
