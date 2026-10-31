import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// GitHub Pages serves the production build from /learnjp/; dev runs at the root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/learnjp/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          fsrs: ['ts-fsrs'],
          wanakana: ['wanakana'],
        },
      },
    },
  },
}));
