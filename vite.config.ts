import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'src/shared/assets',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@assets/styles/mixins/_typography.scss" as typography;
          @use "@assets/styles/mixins/_common.scss" as common;
          @use "@assets/styles/mixins/_breakpoints.module.scss" as breakpoints;
        `,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@app',
        replacement: fileURLToPath(new URL('./src/app', import.meta.url)),
      },
      {
        find: '@widgets',
        replacement: fileURLToPath(new URL('./src/widgets', import.meta.url)),
      },
      {
        find: '@pages',
        replacement: fileURLToPath(new URL('./src/pages', import.meta.url)),
      },
      {
        find: '@features',
        replacement: fileURLToPath(new URL('./src/features', import.meta.url)),
      },
      {
        find: '@entities',
        replacement: fileURLToPath(new URL('./src/entities', import.meta.url)),
      },
      {
        find: '@shared',
        replacement: fileURLToPath(new URL('./src/shared', import.meta.url)),
      },
      {
        find: '@assets',
        replacement: fileURLToPath(
          new URL('./src/shared/assets', import.meta.url)
        ),
      },
    ],
  },
});
