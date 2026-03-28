import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dinamo.saitik.su',
  base: '/nexus/',
  vite: {
    plugins: [tailwindv4()],
  },
});
