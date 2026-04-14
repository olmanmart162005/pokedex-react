import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.DEPLOY_BASE_URL ?? '/' ,
  plugins: [
    react(),
    tailwindcss()
  ],
})
