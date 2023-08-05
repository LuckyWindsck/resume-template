import vue from '@vitejs/plugin-vue'
import { existsSync, readdirSync } from 'fs'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

if (!existsSync('./src/configs/resume-info.js')) {
  console.error('Error: make sure you have create @/configs/resume-info.js for resume data.')
  process.exit(1)
}

if (readdirSync('./src/assets').filter((filename) => filename.match(/^resume-photo\.[^.]*$/)).length === 0) {
  console.warn('Warning: make sure you have resume photo file if you want to use it inside your resume.')
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
