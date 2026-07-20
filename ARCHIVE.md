# Site archive — techehealthservices.com

Snapshot of the live WordPress site, captured 2026-07-20, before migration.

This is a **reference and safety net**, not the site we deploy. It exists so the
content and design survive independently of Hostinger and the original agency.

## Source stack (what we're migrating off)

| | |
|---|---|
| CMS | WordPress 6.7.5 |
| Page builder | Elementor 4.1.2 + Elementor Pro |
| Theme | VamTam "Beratung" |
| Forms | FluentForm **and** WPForms Lite (both installed) |
| Other | Easy Pricing Tables |
| Host | Hostinger |
| DNS | Squarespace |
| Email | Google Workspace (unaffected by migration) |

## Running it locally

```
npx serve archive -l 4321
```

Then open http://localhost:4321. The archive is self-contained — absolute URLs
were rewritten to root-relative, so it renders without contacting the live site.

## Bugs found on the live site

**Broken "Podcasts" nav link, every page.** The main menu points at `/podcsats`
(transposed letters), which returns 404 in production. Correct path is `/podcasts`.
Present on all 21 pages. Left as-is in this archive — it's a faithful snapshot —
and to be fixed in the rebuild.

## Inventory — 21 pages, 252 assets, 13 MB

### Core pages (7)
- `/` — home
- `/about/`
- `/contact/`
- `/insights/` — blog index
- `/practice-areas/` — services index
- `/ai-scribe-comparison/`
- `/privacy-policy/`, `/terms-of-use/`

### Practice areas (5)
- `/practice-areas/ai-scribe/`
- `/practice-areas/emr-services/`
- `/practice-areas/emr-training/`
- `/practice-areas/emr-optimization/`
- `/practice-areas/it-services/`

### Blog posts (3)
- `/elevate-your-healthcare-facility-with-expert-emr-consulting/`
- `/integrated-soft-phones-emrs/`
- `/systems-software-psychological-approach/`

### Podcasts (2) — custom post type
- `/podcasts/top-4-books-for-healthcare-entrepreneurs/`
- `/podcasts/from-nurse-practitioner-to-entrepreneur-starting-a-mobile-clinic-in-montreal/`

### Category archives (3)
- `/category/insights/`, `/category/support/`, `/category/integration/`

## Notes for the rebuild

**Nav vs. reality mismatch.** The live navigation advertises 8 services — AI Scribe,
EMR Vendor Selection, EMR Project Management, EMR Systems Implementation, EMR
Optimization, EMR Training, IT Services, Digital Strategy — but only 5 practice-area
pages exist. The others are likely anchors within `/practice-areas/emr-services/`.
Worth resolving deliberately during the port rather than reproducing by accident.

**Weight.** The homepage alone is 218 KB of HTML across 2,294 lines, pulling 75
stylesheets and 30 scripts. A clean rebuild should land near 15 KB and one stylesheet.

**Heavy assets to re-optimize.** Two images exceed 250 KB uncompressed
(`shutterstock_2486103943.jpg` at 462 KB, `image.jpg` at 269 KB), and the theme
ships 540 KB of icon fonts for what is probably a handful of glyphs.

**URLs must be preserved** on cutover to protect existing SEO. Any that change need
301 redirects.

**Brand fonts are self-hosted Geologica** (Regular/Medium/SemiBold/Bold woff2, in
`wp-content/uploads/2023/06/`), with Inter loaded via Elementor's Google Fonts cache.
Both carry over to the rebuild directly.

**Email addresses are obfuscated** by Cloudflare's email-protection script, so they
appear as `/cdn-cgi/l/email-protection#<hex>` rather than plain text. The real
addresses need decoding from those hex strings during the port.
