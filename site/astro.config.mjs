// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://techehealthservices.com',

  // The live WordPress site serves every URL with a trailing slash. Matching it
  // exactly is what keeps existing SEO intact at cutover — see ARCHIVE.md.
  trailingSlash: 'always',
  build: { format: 'directory' },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
});
