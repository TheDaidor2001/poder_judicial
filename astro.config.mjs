// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://poderjudicial-gq.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    vue(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-GQ'
        }
      }
    })
  ],

  adapter: vercel(),
  output: 'server',

  trailingSlash: 'ignore',
});