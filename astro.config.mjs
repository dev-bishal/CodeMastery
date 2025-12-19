// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://dev-bishal.github.io',
    base: '/CodeMastery',
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [sitemap()],
});