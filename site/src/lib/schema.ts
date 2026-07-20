/**
 * JSON-LD builders.
 *
 * The GEO-Pulse baseline audit (2026-07-20) found no structured data anywhere
 * on the site — "Structured data (JSON-LD)" and "Schema.org type coverage" both
 * FAIL, combined weight 12, the heaviest confirmed failures in the report.
 * Everything here exists to close that.
 */

import { SITE, AUTHOR, ORGANIZATION } from './site'

const abs = (path: string) => new URL(path, SITE.url).toString()

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': abs('/#organization'),
    name: SITE.name,
    legalName: ORGANIZATION.legalName,
    url: SITE.url,
    description: SITE.description,
    areaServed: ORGANIZATION.areaServed,
    address: {
      '@type': 'PostalAddress',
      ...ORGANIZATION.address,
    },
    founder: { '@id': abs('/#person') },
  }
}

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': abs('/#person'),
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR.bio,
    url: AUTHOR.url,
    sameAs: [...AUTHOR.sameAs],
    worksFor: { '@id': abs('/#organization') },
  }
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': abs('/#website'),
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.lang,
    publisher: { '@id': abs('/#organization') },
  }
}

export interface ArticleInput {
  title: string
  description: string
  path: string
  published: Date
  updated?: Date
  image?: string
}

export function articleSchema(a: ArticleInput) {
  return {
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    url: abs(a.path),
    // Freshness signals — audit flagged "no publication or modification date
    // detected" on all 8 sampled pages.
    datePublished: a.published.toISOString(),
    dateModified: (a.updated ?? a.published).toISOString(),
    author: { '@id': abs('/#person') },
    publisher: { '@id': abs('/#organization') },
    ...(a.image ? { image: abs(a.image) } : {}),
  }
}

export interface EpisodeInput extends ArticleInput {
  episodeNumber?: number
  duration?: string
  videoUrl?: string
}

export function podcastEpisodeSchema(e: EpisodeInput) {
  return {
    '@type': 'PodcastEpisode',
    name: e.title,
    description: e.description,
    url: abs(e.path),
    datePublished: e.published.toISOString(),
    ...(e.episodeNumber ? { episodeNumber: e.episodeNumber } : {}),
    ...(e.duration ? { timeRequired: e.duration } : {}),
    partOfSeries: {
      '@type': 'PodcastSeries',
      name: 'Teché Talks',
      url: 'https://www.youtube.com/@Tech%C3%A9_talksAI',
    },
    author: { '@id': abs('/#person') },
  }
}

/** Q&A blocks are the single heaviest check in the audit (weight 10). */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer },
    })),
  }
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  }
}

/** Wraps any set of node objects into one @graph document. */
export function graph(...nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  }
}
