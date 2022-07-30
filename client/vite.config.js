import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
import image from '@rollup/plugin-image';


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
    // outDir: "../../sound-wave-backend/public",
    outDir: "../heroku-final/sound-wave-project/public",
    emptyOutDir: true
  }

})
