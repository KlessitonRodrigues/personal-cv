import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';

const imagePlugin = ViteImageOptimizer({
  jpg: { quality: 15 },
  jpeg: { quality: 15 },
  png: { quality: 5, colors: 64, dither: 0.5 },
});

export default defineConfig({
  plugins: [react(), tsconfigPaths(), imagePlugin],
  appType: 'spa',
  base: '',
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'chunk-[hash].js',
      },
    },
  },
});
