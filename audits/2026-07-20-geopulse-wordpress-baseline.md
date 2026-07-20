# GEO-Pulse — AI Search Readiness Report

- **Domain:** techehealthservices.com
- **URL:** https://techehealthservices.com/
- **Score:** 53/100 (F)
- **Generated:** 2026-07-20T21:12:09.361Z
- **Scan ID:** 567ec043-51e5-4102-9bc2-febb4c2cd2f1

## Executive Summary

Your site scored 53/100 (F). The site has meaningful readiness gaps that should be addressed before broader GEO or content expansion work. 8 of 22 checks passed. The most urgent issue is Q&A / instructional structure (LLM). Start with Add schema markup to describe the business, services, and key pages.

## At a Glance

- **Overall score:** 53/100 (F)
- **Checks passed:** 8 of 22
- **Top blocker:** Q&A / instructional structure (LLM)
- **Primary owner:** Content
- **First recommended move:** Add schema markup to describe the business, services, and key pages.

## Immediate Wins

1. **Add schema markup to describe the business, services, and key pages.**
   - **Who:** Engineering
   - **Why:** Without structured data, machines have less explicit evidence about your entities, services, and page purpose.
   - **How:** Start with Organization or LocalBusiness markup on core pages, then add service-specific schema where the page content supports it.
   - **Effort:** Quick
2. **Publish an llms.txt file that points crawlers to priority content.**
   - **Who:** Engineering
   - **Why:** Without an llms.txt file, you lose a simple machine-readable way to guide AI crawlers toward priority content.
   - **How:** Publish a root-level llms.txt file with the main site sections and the highest-priority URLs for machine retrieval.
   - **Effort:** Quick
3. **Add visible trust signals such as author, reviewer, or business credibility cues.**
   - **Who:** Brand
   - **Why:** Thin trust signals make it harder for buyers and machines to understand who is behind the claims on the page.
   - **How:** Add named authors, reviewers, credentials, and business identity details where claims depend on trust or expertise.
   - **Effort:** Quick
4. **Use one clear H1 and organize supporting content with H2/H3.**
   - **Who:** Content
   - **Why:** Multiple H1 tags (2) — prefer a single primary heading.
   - **How:** Start with this implementation step: Use one clear H1 and organize supporting content with H2/H3.
   - **Effort:** Quick

## Priority Action Plan

Focus on these actions first before moving into lower-signal cleanup or broad content expansion.

1. **Q&A / instructional structure (LLM)** [High]
   - **Owner:** Content
   - **Why it matters:** The audit could not confidently evaluate this check because page access or delivery behavior interfered with machine retrieval. Verify bot handling, access rules, and origin responses before treating this as a confirmed content issue.
   - **First move:** Add clear questions and answers or step-by-step guidance where appropriate.
2. **Structured data (JSON-LD)** [High]
   - **Owner:** Engineering
   - **Why it matters:** No JSON-LD structured data detected.
   - **First move:** Add schema.org JSON-LD (Organization, WebSite, Article, etc.) where appropriate.
3. **Content extractability (LLM)** [Medium]
   - **Owner:** Content
   - **Why it matters:** The audit could not confidently evaluate this check because page access or delivery behavior interfered with machine retrieval. Verify bot handling, access rules, and origin responses before treating this as a confirmed content issue.
   - **First move:** Add concrete facts, definitions, and scannable lists that stand alone without layout.

## Question-Answer Readiness

This section summarizes whether key pages are currently shaped to answer likely buyer questions clearly enough for machine retrieval and reuse.

1. **Direct question-answer structure** [LOW_CONFIDENCE]
   - The audit could not confidently evaluate this check because page access or delivery behavior interfered with machine retrieval. Verify bot handling, access rules, and origin responses before treating this as a confirmed content issue.
   - **First move:** Add clear questions and answers or step-by-step guidance where appropriate.
2. **Clear answer extraction** [LOW_CONFIDENCE]
   - The audit could not confidently evaluate this check because page access or delivery behavior interfered with machine retrieval. Verify bot handling, access rules, and origin responses before treating this as a confirmed content issue.
   - **First move:** Add concrete facts, definitions, and scannable lists that stand alone without layout.
3. **Supporting page discovery** [PASS]
   - 20 internal links detected in sample.
   - **First move:** Link related pages so crawlers and models can discover your site structure.
4. **Freshness and upkeep signals** [FAIL]
   - No publication or modification date detected — AI models may deprioritize content with unknown freshness.
   - **First move:** Add article:published_time / article:modified_time meta tags or datePublished / dateModified in JSON-LD.

## Category Breakdown

| Category | Score | Grade | Checks |
|----------|-------|-------|--------|
| AI Readiness | 76 | C | 64 |
| Extractability | 42 | F | 74 |
| Trust | 25 | F | 24 |
| Demand Coverage | — | N/A | 0 |
| Conversion Readiness | — | N/A | 0 |

## Detailed Check Reference

| Check | Status | Weight | Finding |
|-------|--------|--------|---------|
| Structured data (JSON-LD) | FAIL | 8 | No JSON-LD structured data detected. |
| llms.txt presence | FAIL | 6 | No /llms.txt file found at the root of your domain. |
| E-E-A-T signals (authorship & trust) | FAIL | 6 | Missing author attribution (byline, meta author, or schema.org author) — AI models weigh source cred |
| Heading structure | FAIL | 5 | Multiple H1 tags (2) — prefer a single primary heading. |
| Title tag | FAIL | 4 | Title is too long (85 characters; aim for 10-70). |
| Meta description | FAIL | 4 | Missing meta description. |
| Canonical URL | FAIL | 4 | No canonical link (rel=canonical) found. |
| Open Graph basics | FAIL | 4 | Missing Open Graph tags: og:title og:description |
| Schema.org type coverage | FAIL | 4 | No Schema.org @type values found in JSON-LD. |
| Image alt text coverage | FAIL | 3 | 17 of 17 images are missing alt text (0% coverage). |
| Content freshness signals | FAIL | 3 | No publication or modification date detected — AI models may deprioritize content with unknown fresh |
| Security response headers | FAIL | 2 | Missing security headers: strict-transport-security, x-content-type-options, x-frame-options. Presen |
| Q&A / instructional structure (LLM) | LOW_CONFIDENCE | 10 | The audit could not confidently evaluate this check because page access or delivery behavior interfe |
| Content extractability (LLM) | LOW_CONFIDENCE | 7 | The audit could not confidently evaluate this check because page access or delivery behavior interfe |
| AI crawler access (robots.txt) | PASS | 10 | robots.txt does not block any known AI crawler user-agents. |
| Robots meta (AI visibility) | PASS | 7 | Meta robots does not appear to block indexing entirely. |
| Snippet eligibility | PASS | 6 | No snippet restrictions detected — AI models can extract and display content excerpts. |
| Internal linking | PASS | 6 | 20 internal links detected in sample. |
| HTTPS URL | PASS | 4 | Page is loaded over HTTPS. |
| HTML payload size | PASS | 3 | HTML size within sampled bound (222342 characters in sample). |
| External authority links | PASS | 3 | 91 external link(s) detected — references to external sources strengthen credibility for AI models. |
| Mobile viewport | PASS | 2 | Viewport meta tag is present. |

## Pages Scanned

- **https://techehealthservices.com/** — 49/100 (F) — _section /_
- **https://techehealthservices.com/about/** — 57/100 (F) — _section /about_
- **https://techehealthservices.com/category/insights/** — 48/100 (F) — _section /category_
- **https://techehealthservices.com/contact/** — 57/100 (F) — _section /contact_
- **https://techehealthservices.com/elevate-your-healthcare-facility-with-expert-emr-consulting/** — 53/100 (F) — _section /elevate-your-healthcare-facility-with-expert-emr-consulting_
- **https://techehealthservices.com/insights/** — 57/100 (F) — _section /insights_
- **https://techehealthservices.com/integrated-soft-phones-emrs/** — 57/100 (F) — _section /integrated-soft-phones-emrs_
- **https://techehealthservices.com/podcasts/** — 48/100 (F) — _section /podcasts_

## Repeated Page Patterns

1. **Content freshness signals** appears on 8 pages.
   - No publication or modification date detected — AI models may deprioritize content with unknown freshness.
   - Sample pages: https://techehealthservices.com/, https://techehealthservices.com/about/, https://techehealthservices.com/category/insights/
2. **E-E-A-T signals (authorship & trust)** appears on 8 pages.
   - Missing author attribution (byline, meta author, or schema.org author) — AI models weigh source credibility when selecting content to cite.
   - Sample pages: https://techehealthservices.com/, https://techehealthservices.com/about/, https://techehealthservices.com/category/insights/
3. **Image alt text coverage** appears on 8 pages.
   - 17 of 17 images are missing alt text (0% coverage).
   - Sample pages: https://techehealthservices.com/, https://techehealthservices.com/about/, https://techehealthservices.com/category/insights/
4. **llms.txt presence** appears on 8 pages.
   - No /llms.txt file found at the root of your domain.
   - Sample pages: https://techehealthservices.com/, https://techehealthservices.com/about/, https://techehealthservices.com/category/insights/
5. **Meta description** appears on 8 pages.
   - Missing meta description.
   - Sample pages: https://techehealthservices.com/, https://techehealthservices.com/about/, https://techehealthservices.com/category/insights/
6. **Open Graph basics** appears on 8 pages.
   - Missing Open Graph tags: og:title og:description
   - Sample pages: https://techehealthservices.com/, https://techehealthservices.com/about/, https://techehealthservices.com/category/insights/

## Page-Level Reference

### https://techehealthservices.com/

- **Title tag** [FAIL]
  - Title is too long (85 characters; aim for 10-70).
  - Fix: Add a concise, unique title that describes the page.
- **Meta description** [FAIL]
  - Missing meta description.
  - Fix: Add a meta description that summarizes the page in one or two sentences.
- **Open Graph basics** [FAIL]
  - Missing Open Graph tags: og:title og:description
  - Fix: Add og:title and og:description for richer link previews.
- **Structured data (JSON-LD)** [FAIL]
  - No JSON-LD structured data detected.
  - Fix: Add schema.org JSON-LD (Organization, WebSite, Article, etc.) where appropriate.
- **Schema.org type coverage** [FAIL]
  - No Schema.org @type values found in JSON-LD.
  - Fix: Add JSON-LD with descriptive @type (e.g. Organization, Article, FAQPage) so AI models understand your content type.
- **Image alt text coverage** [FAIL]
  - 17 of 17 images are missing alt text (0% coverage).
  - Fix: Add descriptive alt attributes to all meaningful images so AI models and screen readers can interpret them.
- **Content freshness signals** [FAIL]
  - No publication or modification date detected — AI models may deprioritize content with unknown freshness.
  - Fix: Add article:published_time / article:modified_time meta tags or datePublished / dateModified in JSON-LD.
- **Security response headers** [FAIL]
  - Missing security headers: strict-transport-security, x-content-type-options, x-frame-options. Present: none.
  - Fix: Add the missing security headers (strict-transport-security, x-content-type-options, x-frame-options) to strengthen your site's trust profile.
- **llms.txt presence** [FAIL]
  - No /llms.txt file found at the root of your domain.
  - Fix: Create and publish an /llms.txt file that describes your site, key content areas, and preferred citation format for AI models.
- **E-E-A-T signals (authorship & trust)** [FAIL]
  - Missing author attribution (byline, meta author, or schema.org author) — AI models weigh source credibility when selecting content to cite.
  - Fix: Add author markup (meta name="author", schema.org Person, or a visible byline) and ensure your site links to an About page that establishes expertise and authority.
- **Q&A / instructional structure (LLM)** [LOW_CONFIDENCE]
  - The audit could not confidently evaluate this check because page access or delivery behavior interfered with machine retrieval. Verify bot handling, access rules, and origin responses before treating this as a confirmed content issue.
  - Fix: Add clear questions and answers or step-by-step guidance where appropriate.
- **Content extractability (LLM)** [LOW_CONFIDENCE]
  - The audit could not confidently evaluate this check because page access or delivery behavior interfered with machine retrieval. Verify bot handling, access rules, and origin responses before treating this as a confirmed content issue.
  - Fix: Add concrete facts, definitions, and scannable lists that stand alone without layout.

### https://techehealthservices.com/about/

- **Meta description** [FAIL]
  - Missing meta description.
  - Fix: Add a meta description that summarizes the page in one or two sentences.
- **Open Graph basics** [FAIL]
  - Missing Open Graph tags: og:title og:description
  - Fix: Add og:title and og:description for richer link previews.
- **Structured data (JSON-LD)** [FAIL]
  - No JSON-LD structured data detected.
  - Fix: Add schema.org JSON-LD (Organization, WebSite, Article, etc.) where appropriate.
- **Schema.org type coverage** [FAIL]
  - No Schema.org @type values found in JSON-LD.
  - Fix: Add JSON-LD with descriptive @type (e.g. Organization, Article, FAQPage) so AI models understand your content type.
- **Image alt text coverage** [FAIL]
  - 13 of 13 images are missing alt text (0% coverage).
  - Fix: Add descriptive alt attributes to all meaningful images so AI models and screen readers can interpret them.
- **Content freshness signals** [FAIL]
  - No publication or modification date detected — AI models may deprioritize content with unknown freshness.
  - Fix: Add article:published_time / article:modified_time meta tags or datePublished / dateModified in JSON-LD.
- **Security response headers** [FAIL]
  - Missing security headers: strict-transport-security, x-content-type-options, x-frame-options. Present: none.
  - Fix: Add the missing security headers (strict-transport-security, x-content-type-options, x-frame-options) to strengthen your site's trust profile.
- **llms.txt presence** [FAIL]
  - No /llms.txt file found at the root of your domain.
  - Fix: Create and publish an /llms.txt file that describes your site, key content areas, and preferred citation format for AI models.
- **E-E-A-T signals (authorship & trust)** [FAIL]
  - Missing author attribution (byline, meta author, or schema.org author) — AI models weigh source credibility when selecting content to cite.
  - Fix: Add author markup (meta name="author", schema.org Person, or a visible byline) and ensure your site links to an About page that establishes expertise and authority.

### https://techehealthservices.com/category/insights/

- **Meta description** [FAIL]
  - Missing meta description.
  - Fix: Add a meta description that summarizes the page in one or two sentences.
- **Canonical URL** [FAIL]
  - No canonical link (rel=canonical) found.
  - Fix: Add a canonical URL that matches your preferred URL for this content.
- **Open Graph basics** [FAIL]
  - Missing Open Graph tags: og:title og:description
  - Fix: Add og:title and og:description for richer link previews.
- **Structured data (JSON-LD)** [FAIL]
  - No JSON-LD structured data detected.
  - Fix: Add schema.org JSON-LD (Organization, WebSite, Article, etc.) where appropriate.
- **Schema.org type coverage** [FAIL]
  - No Schema.org @type values found in JSON-LD.
  - Fix: Add JSON-LD with descriptive @type (e.g. Organization, Article, FAQPage) so AI models understand your content type.
- **Heading structure** [FAIL]
  - Multiple H1 tags (2) — prefer a single primary heading.
  - Fix: Use one clear H1 and organize supporting content with H2/H3.
- **Image alt text coverage** [FAIL]
  - 12 of 12 images are missing alt text (0% coverage).
  - Fix: Add descriptive alt attributes to all meaningful images so AI models and screen readers can interpret them.
- **Content freshness signals** [FAIL]
  - No publication or modification date detected — AI models may deprioritize content with unknown freshness.
  - Fix: Add article:published_time / article:modified_time meta tags or datePublished / dateModified in JSON-LD.
- **Security response headers** [FAIL]
  - Missing security headers: strict-transport-security, x-content-type-options, x-frame-options. Present: none.
  - Fix: Add the missing security headers (strict-transport-security, x-content-type-options, x-frame-options) to strengthen your site's trust profile.
- **llms.txt presence** [FAIL]
  - No /llms.txt file found at the root of your domain.
  - Fix: Create and publish an /llms.txt file that describes your site, key content areas, and preferred citation format for AI models.
- **E-E-A-T signals (authorship & trust)** [FAIL]
  - Missing author attribution (byline, meta author, or schema.org author) — AI models weigh source credibility when selecting content to cite.
  - Fix: Add author markup (meta name="author", schema.org Person, or a visible byline) and ensure your site links to an About page that establishes expertise and authority.

### https://techehealthservices.com/contact/

- **Meta description** [FAIL]
  - Missing meta description.
  - Fix: Add a meta description that summarizes the page in one or two sentences.
- **Open Graph basics** [FAIL]
  - Missing Open Graph tags: og:title og:description
  - Fix: Add og:title and og:description for richer link previews.
- **Structured data (JSON-LD)** [FAIL]
  - No JSON-LD structured data detected.
  - Fix: Add schema.org JSON-LD (Organization, WebSite, Article, etc.) where appropriate.
- **Schema.org type coverage** [FAIL]
  - No Schema.org @type values found in JSON-LD.
  - Fix: Add JSON-LD with descriptive @type (e.g. Organization, Article, FAQPage) so AI models understand your content type.
- **Image alt text coverage** [FAIL]
  - 9 of 9 images are missing alt text (0% coverage).
  - Fix: Add descriptive alt attributes to all meaningful images so AI models and screen readers can interpret them.
- **Content freshness signals** [FAIL]
  - No publication or modification date detected — AI models may deprioritize content with unknown freshness.
  - Fix: Add article:published_time / article:modified_time meta tags or datePublished / dateModified in JSON-LD.
- **Security response headers** [FAIL]
  - Missing security headers: strict-transport-security, x-content-type-options, x-frame-options. Present: none.
  - Fix: Add the missing security headers (strict-transport-security, x-content-type-options, x-frame-options) to strengthen your site's trust profile.
- **llms.txt presence** [FAIL]
  - No /llms.txt file found at the root of your domain.
  - Fix: Create and publish an /llms.txt file that describes your site, key content areas, and preferred citation format for AI models.
- **E-E-A-T signals (authorship & trust)** [FAIL]
  - Missing author attribution (byline, meta author, or schema.org author) — AI models weigh source credibility when selecting content to cite.
  - Fix: Add author markup (meta name="author", schema.org Person, or a visible byline) and ensure your site links to an About page that establishes expertise and authority.

### https://techehealthservices.com/elevate-your-healthcare-facility-with-expert-emr-consulting/

- **Title tag** [FAIL]
  - Title is too long (89 characters; aim for 10-70).
  - Fix: Add a concise, unique title that describes the page.
- **Meta description** [FAIL]
  - Missing meta description.
  - Fix: Add a meta description that summarizes the page in one or two sentences.
- **Open Graph basics** [FAIL]
  - Missing Open Graph tags: og:title og:description
  - Fix: Add og:title and og:description for richer link previews.
- **Structured data (JSON-LD)** [FAIL]
  - No JSON-LD structured data detected.
  - Fix: Add schema.org JSON-LD (Organization, WebSite, Article, etc.) where appropriate.
- **Schema.org type coverage** [FAIL]
  - No Schema.org @type values found in JSON-LD.
  - Fix: Add JSON-LD with descriptive @type (e.g. Organization, Article, FAQPage) so AI models understand your content type.
- **Image alt text coverage** [FAIL]
  - 13 of 13 images are missing alt text (0% coverage).
  - Fix: Add descriptive alt attributes to all meaningful images so AI models and screen readers can interpret them.
- **Content freshness signals** [FAIL]
  - No publication or modification date detected — AI models may deprioritize content with unknown freshness.
  - Fix: Add article:published_time / article:modified_time meta tags or datePublished / dateModified in JSON-LD.
- **Security response headers** [FAIL]
  - Missing security headers: strict-transport-security, x-content-type-options, x-frame-options. Present: none.
  - Fix: Add the missing security headers (strict-transport-security, x-content-type-options, x-frame-options) to strengthen your site's trust profile.
- **llms.txt presence** [FAIL]
  - No /llms.txt file found at the root of your domain.
  - Fix: Create and publish an /llms.txt file that describes your site, key content areas, and preferred citation format for AI models.
- **E-E-A-T signals (authorship & trust)** [FAIL]
  - Missing author attribution (byline, meta author, or schema.org author) — AI models weigh source credibility when selecting content to cite.
  - Fix: Add author markup (meta name="author", schema.org Person, or a visible byline) and ensure your site links to an About page that establishes expertise and authority.

### https://techehealthservices.com/insights/

- **Meta description** [FAIL]
  - Missing meta description.
  - Fix: Add a meta description that summarizes the page in one or two sentences.
- **Open Graph basics** [FAIL]
  - Missing Open Graph tags: og:title og:description
  - Fix: Add og:title and og:description for richer link previews.
- **Structured data (JSON-LD)** [FAIL]
  - No JSON-LD structured data detected.
  - Fix: Add schema.org JSON-LD (Organization, WebSite, Article, etc.) where appropriate.
- **Schema.org type coverage** [FAIL]
  - No Schema.org @type values found in JSON-LD.
  - Fix: Add JSON-LD with descriptive @type (e.g. Organization, Article, FAQPage) so AI models understand your content type.
- **Image alt text coverage** [FAIL]
  - 12 of 12 images are missing alt text (0% coverage).
  - Fix: Add descriptive alt attributes to all meaningful images so AI models and screen readers can interpret them.
- **Content freshness signals** [FAIL]
  - No publication or modification date detected — AI models may deprioritize content with unknown freshness.
  - Fix: Add article:published_time / article:modified_time meta tags or datePublished / dateModified in JSON-LD.
- **Security response headers** [FAIL]
  - Missing security headers: strict-transport-security, x-content-type-options, x-frame-options. Present: none.
  - Fix: Add the missing security headers (strict-transport-security, x-content-type-options, x-frame-options) to strengthen your site's trust profile.
- **llms.txt presence** [FAIL]
  - No /llms.txt file found at the root of your domain.
  - Fix: Create and publish an /llms.txt file that describes your site, key content areas, and preferred citation format for AI models.
- **E-E-A-T signals (authorship & trust)** [FAIL]
  - Missing author attribution (byline, meta author, or schema.org author) — AI models weigh source credibility when selecting content to cite.
  - Fix: Add author markup (meta name="author", schema.org Person, or a visible byline) and ensure your site links to an About page that establishes expertise and authority.

### https://techehealthservices.com/integrated-soft-phones-emrs/

- **Meta description** [FAIL]
  - Missing meta description.
  - Fix: Add a meta description that summarizes the page in one or two sentences.
- **Open Graph basics** [FAIL]
  - Missing Open Graph tags: og:title og:description
  - Fix: Add og:title and og:description for richer link previews.
- **Structured data (JSON-LD)** [FAIL]
  - No JSON-LD structured data detected.
  - Fix: Add schema.org JSON-LD (Organization, WebSite, Article, etc.) where appropriate.
- **Schema.org type coverage** [FAIL]
  - No Schema.org @type values found in JSON-LD.
  - Fix: Add JSON-LD with descriptive @type (e.g. Organization, Article, FAQPage) so AI models understand your content type.
- **Image alt text coverage** [FAIL]
  - 13 of 13 images are missing alt text (0% coverage).
  - Fix: Add descriptive alt attributes to all meaningful images so AI models and screen readers can interpret them.
- **Content freshness signals** [FAIL]
  - No publication or modification date detected — AI models may deprioritize content with unknown freshness.
  - Fix: Add article:published_time / article:modified_time meta tags or datePublished / dateModified in JSON-LD.
- **Security response headers** [FAIL]
  - Missing security headers: strict-transport-security, x-content-type-options, x-frame-options. Present: none.
  - Fix: Add the missing security headers (strict-transport-security, x-content-type-options, x-frame-options) to strengthen your site's trust profile.
- **llms.txt presence** [FAIL]
  - No /llms.txt file found at the root of your domain.
  - Fix: Create and publish an /llms.txt file that describes your site, key content areas, and preferred citation format for AI models.
- **E-E-A-T signals (authorship & trust)** [FAIL]
  - Missing author attribution (byline, meta author, or schema.org author) — AI models weigh source credibility when selecting content to cite.
  - Fix: Add author markup (meta name="author", schema.org Person, or a visible byline) and ensure your site links to an About page that establishes expertise and authority.

### https://techehealthservices.com/podcasts/

- **Meta description** [FAIL]
  - Missing meta description.
  - Fix: Add a meta description that summarizes the page in one or two sentences.
- **Canonical URL** [FAIL]
  - No canonical link (rel=canonical) found.
  - Fix: Add a canonical URL that matches your preferred URL for this content.
- **Open Graph basics** [FAIL]
  - Missing Open Graph tags: og:title og:description
  - Fix: Add og:title and og:description for richer link previews.
- **Structured data (JSON-LD)** [FAIL]
  - No JSON-LD structured data detected.
  - Fix: Add schema.org JSON-LD (Organization, WebSite, Article, etc.) where appropriate.
- **Schema.org type coverage** [FAIL]
  - No Schema.org @type values found in JSON-LD.
  - Fix: Add JSON-LD with descriptive @type (e.g. Organization, Article, FAQPage) so AI models understand your content type.
- **Heading structure** [FAIL]
  - Multiple H1 tags (2) — prefer a single primary heading.
  - Fix: Use one clear H1 and organize supporting content with H2/H3.
- **Image alt text coverage** [FAIL]
  - 11 of 11 images are missing alt text (0% coverage).
  - Fix: Add descriptive alt attributes to all meaningful images so AI models and screen readers can interpret them.
- **Content freshness signals** [FAIL]
  - No publication or modification date detected — AI models may deprioritize content with unknown freshness.
  - Fix: Add article:published_time / article:modified_time meta tags or datePublished / dateModified in JSON-LD.
- **Security response headers** [FAIL]
  - Missing security headers: strict-transport-security, x-content-type-options, x-frame-options. Present: none.
  - Fix: Add the missing security headers (strict-transport-security, x-content-type-options, x-frame-options) to strengthen your site's trust profile.
- **llms.txt presence** [FAIL]
  - No /llms.txt file found at the root of your domain.
  - Fix: Create and publish an /llms.txt file that describes your site, key content areas, and preferred citation format for AI models.
- **E-E-A-T signals (authorship & trust)** [FAIL]
  - Missing author attribution (byline, meta author, or schema.org author) — AI models weigh source credibility when selecting content to cite.
  - Fix: Add author markup (meta name="author", schema.org Person, or a visible byline) and ensure your site links to an About page that establishes expertise and authority.

## Technical Appendix

- **Robots / AI crawler access:** AI crawler access (robots.txt) [PASS]: robots.txt does not block any known AI crawler user-agents.
- **Schema findings:** Schema.org type coverage [FAIL]: No Schema.org @type values found in JSON-LD.
- **Security headers:** Security response headers [FAIL]: Missing security headers: strict-transport-security, x-content-type-options, x-frame-options. Present: none.

---

_This score reflects technical signals relevant to AI search readiness — not a prediction of rankings or citations._