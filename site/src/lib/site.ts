/**
 * Single source of truth for site-wide identity and metadata.
 *
 * Everything here feeds the base layout, JSON-LD, sitemap, and llms.txt.
 * Change it once and it propagates — which is the whole reason we left
 * Elementor, where this lived in a database.
 */

export const SITE = {
  name: 'Teché Health Services',
  shortName: 'Teché',
  url: 'https://techehealthservices.com',
  /** Falls back into <title> and og:site_name. Keep under 70 chars with the page title. */
  tagline: 'Clinical Applications & AI Consulting',
  description:
    'Clinical operations consulting for healthcare practices — EMR selection, ' +
    'implementation, optimization, and AI scribe adoption. Based in Montreal.',
  locale: 'en_CA',
  lang: 'en',
} as const

/**
 * TODO(uzziel): confirm these before launch — they drive the Person schema
 * that the GEO-Pulse audit flagged as missing on all 8 sampled pages
 * (E-E-A-T, weight 6).
 */
export const AUTHOR = {
  name: 'Uzziel Tamon',
  jobTitle: 'Clinical Applications & AI Consultant',
  bio:
    'A decade in clinical settings, now helping practices automate their ' +
    'workflows and adopt healthcare technology that actually works.',
  url: 'https://techehealthservices.com/about/',
  sameAs: [
    'https://uzzieltamon.substack.com',
    'https://www.youtube.com/@Tech%C3%A9_talksAI',
    'https://x.com/Teche_THS',
  ],
} as const

export const ORGANIZATION = {
  legalName: 'Teché Health Services',
  areaServed: 'Montreal, Quebec, Canada',
  /** TODO(uzziel): add street address + phone if you want LocalBusiness schema
   *  to compete in the Google local pack. Requires a Google Business Profile. */
  address: {
    addressLocality: 'Montreal',
    addressRegion: 'QC',
    addressCountry: 'CA',
  },
} as const

/** Primary navigation. Mirrors the live site, with /podcsats corrected. */
export const NAV = [
  {
    label: 'Services',
    href: '/practice-areas/',
    children: [
      { label: 'AI Scribe', href: '/practice-areas/ai-scribe/' },
      { label: 'EMR Services', href: '/practice-areas/emr-services/' },
      { label: 'EMR Optimization', href: '/practice-areas/emr-optimization/' },
      { label: 'EMR Training', href: '/practice-areas/emr-training/' },
      { label: 'IT Services', href: '/practice-areas/it-services/' },
    ],
  },
  { label: 'About', href: '/about/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Podcasts', href: '/podcasts/' },
  { label: 'Contact', href: '/contact/' },
] as const
