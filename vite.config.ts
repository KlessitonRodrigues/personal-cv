import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const noAttr = () => {
  return {
    name: 'no-attribute',
    transformIndexHtml(html: string) {
      return html.replace(`type="module" crossorigin`, 'defer="true');
    },
  };
};

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '',
});
