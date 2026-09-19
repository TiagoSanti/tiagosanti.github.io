import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './tailwind.config.mjs';
import { fileURLToPath } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    },
  },
  build: {
    lib: {
      entry: fileURLToPath(
        new URL('./src/components/GitProfile.jsx', import.meta.url)
      ),
      name: 'GitProfile',
      fileName: (format) =>
        `gitprofile.${format}.${format === 'umd' ? 'cjs' : 'js'}`,
      cssFileName: 'style',
    },
    rolldownOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
