import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  base: '',
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 20,
            },
            {
              name: 'router-vendor',
              test: /node_modules[\\/](react-router|react-router-dom)[\\/]/,
              priority: 15,
            },
            {
              name: 'i18n-vendor',
              test: /node_modules[\\/](i18next|react-i18next|html-parse-stringify|use-sync-external-store)[\\/]/,
              priority: 15,
            },
            {
              name: 'styled-vendor',
              test: /node_modules[\\/](styled-components|stylis|@emotion)[\\/]/,
              priority: 15,
            },
          ],
        },
      },
    },
  },
});
