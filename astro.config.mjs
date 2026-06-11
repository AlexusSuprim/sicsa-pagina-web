// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

const root = path.dirname(fileURLToPath(import.meta.url));

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
      },
    },
  },

  integrations: [
    sitemap(),
    icon({
      include: {
        mdi: ['*'],
        'simple-icons': ['x'],
      },
    }),
  ],
});
