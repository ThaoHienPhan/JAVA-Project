/* eslint-disable no-undef */
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        components: `${path.resolve(__dirname, './src/components/')}`,
        api: `${path.resolve(__dirname, './src/api/')}`,
        pages: path.resolve(__dirname, './src/pages'),
        assets: path.resolve(__dirname, './src/assets'),
        context: path.resolve(__dirname, './src/context'),
        layout: path.resolve(__dirname, './src/layout'),
        store: path.resolve(__dirname, './src/store'),
        routes: path.resolve(__dirname, './src/routes'),
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
