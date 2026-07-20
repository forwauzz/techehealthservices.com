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

## Inventory — 21 pages, 135 assets, 7.7 MB

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
