import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/**
 * Content model for the site.
 *
 * Designed up front to hold everything we know is coming:
 *   insights  — 3 existing posts + 13 imported from Substack
 *   podcasts  — 30 Teché Talks episodes, each with a transcript
 *   courses   — Teché Learn, structured now, populated later
 *   services  — the 5 practice-area pages (+ 4 the nav promises but lacks)
 *
 * Required fields are required on purpose: `description` and `published` exist
 * because the GEO-Pulse audit failed on missing meta descriptions and missing
 * freshness signals. Schema validation makes those failures impossible to ship.
 */

const seo = {
  title: z.string().max(60, 'Keep titles short — base layout appends the site name'),
  description: z.string().min(50).max(160),
  image: z.string().optional(),
  draft: z.boolean().default(false),
}

const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    ...seo,
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['Insights', 'Integration', 'Support']).default('Insights'),
    tags: z.array(z.string()).default([]),
    /**
     * Set when a post was first published on Substack. Points rel=canonical at
     * the original so the two copies don't compete. Clear it once Substack's
     * canonical points here instead — then this becomes the original.
     */
    canonicalUrl: z.string().url().optional(),
    substackUrl: z.string().url().optional(),
  }),
})

const podcasts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/podcasts' }),
  schema: z.object({
    ...seo,
    published: z.coerce.date(),
    episodeNumber: z.number().int().positive().optional(),
    youtubeId: z.string(),
    duration: z.string().optional(), // ISO 8601, e.g. PT32M14S
    guest: z.string().optional(),
    /**
     * The SEO payload. An embedded player is invisible to crawlers; the
     * transcript is what makes an episode an indexable page.
     */
    hasTranscript: z.boolean().default(false),
  }),
})

const courses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: z.object({
    ...seo,
    /** Course slug this lesson belongs to; omit for the course index page. */
    course: z.string().optional(),
    lessonNumber: z.number().int().positive().optional(),
    /** Free at launch. Kept so gating can be added without a content migration. */
    access: z.enum(['public', 'email-gated', 'account']).default('public'),
    audience: z.string().default('Clinicians and practice administrators'),
    estimatedMinutes: z.number().int().positive().optional(),
  }),
})

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    ...seo,
    order: z.number().int().default(99),
    summary: z.string(),
    /** Rendered as an FAQ block + FAQPage schema — the audit's heaviest check. */
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
  }),
})

export const collections = { insights, podcasts, courses, services }
