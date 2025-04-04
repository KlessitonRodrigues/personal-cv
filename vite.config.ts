import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';

const imagePlugin = ViteImageOptimizer({
  jpg: { quality: 20 },
  png: { quality: 20 },
  jpeg: { quality: 20 },
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
