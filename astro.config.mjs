// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { loadEnv } from 'vite';

const root = path.dirname(fileURLToPath(import.meta.url));
const TURNSTILE_SITE_KEY_PLACEHOLDER = 'your_turnstile_site_key_here';

// loadEnv lee .env antes de que Astro lo inyecte en import.meta.env
const env = loadEnv(process.env.NODE_ENV ?? 'production', root, '');
const turnstileSiteKey = env.PUBLIC_TURNSTILE_SITE_KEY ?? '';

if (
  process.argv.includes('build') &&
  (!turnstileSiteKey || turnstileSiteKey === TURNSTILE_SITE_KEY_PLACEHOLDER)
) {
  throw new Error(
    'PUBLIC_TURNSTILE_SITE_KEY is required for production builds. Copy .env.example to .env and add your Cloudflare Turnstile Site Key.',
  );
}

// https://astro.build/config
export default defineConfig({
  site: 'https://sicsagroup.com.gt',
  output: 'static',
  compressHTML: true,

  build: {
    format: 'directory',
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(root, 'src'),
        '@components': path.resolve(root, 'src/components'),
        '@layouts': path.resolve(root, 'src/layouts'),
        '@data': path.resolve(root, 'src/data'),
        '@i18n': path.resolve(root, 'src/i18n'),
      },
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-GT',
          en: 'en-US',
        },
      },
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        if (
          item.url === 'https://sicsagroup.com.gt/' ||
          item.url === 'https://sicsagroup.com.gt/en/'
        ) {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        return item;
      },
    }),
    icon({
      include: {
        mdi: ['*'],
        'simple-icons': ['x'],
      },
    }),
  ],
});
