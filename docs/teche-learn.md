# Teché Learn — planning doc (NOT built yet)

**Status: skeleton only.** This captures the vision so it isn't lost. Nothing
here is implemented beyond the `courses` content-collection schema in
`site/src/content.config.ts`. There is no route, no auth, no course content.
Do not build any of this until it is deliberately scoped and scheduled — it is a
separate project, roughly the size of the marketing-site migration itself.

## What it is

An **academy for busy health and legal professionals to learn how to use AI.**

- Audience: clinicians AND legal professionals (lawyers, notaries, paralegals).
  Note this is broader than the consulting practice, which is healthcare-only.
- Example courses: "Prompt Engineering for Doctors", and equivalents for legal.
- Free at launch. Functions as a lead-generation funnel into Brevo for the
  consulting business — email capture matters more than badges/quizzes early on.

## Why it's a "monster" (the reasons to plan, not rush)

1. **Accounts / auth.** Real user accounts to setup — sign-up, login, password
   reset, sessions. None of this is static; it needs a backend.
2. **Course directory.** A browsable catalog: categories (health vs legal),
   course cards, filtering, search.
3. **Course authoring workflow.** How does a course get made and published?
   Markdown lessons in the repo? A CMS? Who writes them, how are they reviewed,
   how are they versioned?
4. **Lesson delivery.** Video + text + maybe exercises. Progress tracking,
   resume-where-you-left-off, completion.
5. **Video hosting.** Start cheap (unlisted YouTube/Vimeo), move to Cloudflare
   Stream (~$5/1000 min stored) when it needs to be unbranded and access-gated.

## Open questions to resolve before building

- **Where does it live?** `academy.techehealthservices.com` subdomain, or
  `/teche-learn/` path? (Leaning subdomain — cleaner separation of a product
  from the marketing site.)
- **Auth provider?** Cloudflare Access, Supabase Auth, Clerk, or roll-your-own
  on Cloudflare D1. Depends on whether courses are truly free/open or gated.
- **Free vs gated?** The `access` field already supports
  `public | email-gated | account`. Decide per-course. Email-gated is the
  lead-magnet sweet spot: no friction of accounts, still captures the email.
- **Content model.** Is a course a folder of markdown lessons (git-authored,
  developer workflow) or does a non-technical person need to add courses via a
  UI? This decision drives the whole architecture.
- **Two audiences, one platform?** Health and legal are different buyers with
  different compliance contexts. Shared platform, separate tracks? Or two
  branded front-ends?

## Compliance flags (apply once real users/data exist — not at skeleton stage)

- **Quebec Law 25** applies the moment we hold personal data on users. Consent,
  privacy policy, breach obligations, a designated privacy officer.
- **Professional data sensitivity.** Clinicians and lawyers are regulated
  professions; be careful what user data is collected and how it's stored.
- **GST/QST** obligations arise only if courses become paid. Free = out of scope
  for now, but the moment there's a price, tax handling is required for QC buyers.
  A hosted platform (Teachable/Podia) handles this automatically — worth
  weighing against self-hosting when/if courses go paid.

## Recommended sequencing (from earlier discussion)

1. Marketing site migrated and live first. A lead magnet on a dead WordPress
   site captures nothing; it needs the fast, crawlable, ranking foundation.
2. Validate demand with ONE course (e.g. Prompt Engineering for Doctors),
   email-gated, before building accounts/progress/certificates.
3. If it works, then invest in the full LMS — accounts, directory, tracking.
   Consider a hosted platform (Podia/Teachable) for the paid phase rather than
   rebuilding Stripe + tax + video from scratch.

## What exists today (the actual skeleton)

- `courses` collection in `site/src/content.config.ts` with fields: title,
  description, course, lessonNumber, `access` (public/email-gated/account),
  audience, estimatedMinutes.
- `src/content/courses/` directory (empty).
- Nothing else. No route, no nav entry, no auth, no content.
