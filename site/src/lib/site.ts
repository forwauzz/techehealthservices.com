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
 * Drives the Person schema on every page — the E-E-A-T fix for the audit's
 * "missing author attribution" failure (weight 6, all 8 sampled pages).
 *
 * Sourced from the existing About page. The specifics matter more than the
 * adjectives: named institutions, named collaborators, and a real publication
 * are what search engines and language models actually weigh when deciding
 * whether to cite a source.
 */
export const AUTHOR = {
  name: 'Uzziel Tamon',
  jobTitle: 'Clinical Applications & AI Consultant',
  bio:
    'More than a decade inside clinical settings, most of it spent implementing ' +
    'systems. Began at Brunswick Medical Center as an Archivist and progressed ' +
    'to Archives Supervisor and IT Coordinator, leading the transition from ' +
    'paper charts to EMR alongside appointment booking and RAMQ billing ' +
    'deployments. Also served as a Data Manager at the MUHC Research Institute. ' +
    'Now advises private practices and RAMQ clinics on EMR selection, ' +
    'implementation, and AI scribe adoption.',
  url: 'https://techehealthservices.com/about/',

  /** Past affiliations — schema.org Person.alumniOf / worksFor context. */
  affiliations: [
    { name: 'Brunswick Medical Center', role: 'Archives Supervisor, IT Coordinator' },
    { name: 'MUHC Research Institute', role: 'Data Manager' },
  ],

  /** Topical authority signals for knowsAbout. */
  expertise: [
    'EMR implementation',
    'EHR vendor selection',
    'Clinical workflow optimization',
    'RAMQ billing systems',
    'Medical records management',
    'AI scribe adoption',
    'Clinic operations',
  ],

  sameAs: [
    'https://uzzieltamon.substack.com',
    'https://www.youtube.com/@Tech%C3%A9_talksAI',
    'https://x.com/Teche_THS',
  ],
} as const

export const CONTACT = {
  phone: '514-836-3199',
  phoneHref: 'tel:+15148363199',
  email: 'uzziel@techehealthservices.com',
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
