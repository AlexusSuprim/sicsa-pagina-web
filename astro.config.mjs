// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

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
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@data': '/src/data',
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
