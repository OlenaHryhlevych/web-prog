import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ghPages } from 'vite-plugin-gh-pages'

export default defineConfig({
  base: '/web-prog/',
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
    ghPages(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});