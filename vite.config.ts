
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to './' so that assets load correctly on GitHub Pages subfolders
  base: './',
  build: {
    outDir: 'dist',
  }
});
