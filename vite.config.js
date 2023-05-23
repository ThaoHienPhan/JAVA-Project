import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        '~': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'build',
    },
    plugins: [react(), tailwindcss()],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  };
});
