import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using './' for base ensures that generated paths are relative.
  // This is crucial for GitHub Pages when the project is not at the root domain.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});