import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
import postcssNesting from 'postcss-nesting';
import postcss100vhFix from 'postcss-100vh-fix'


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: "../../sound-wave-backend/public",
    // outDir: "../../../heroku-final/sound-wave-project/public",
    emptyOutDir: true
  },
  css: {
    postcss: {
      plugins: [
        postcssNesting,
        postcss100vhFix
      ],
    },
  },

})
