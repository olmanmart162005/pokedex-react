import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pokedex-react/', // 👈 ESTE ES EL FIX
  plugins: [
    react(),
    tailwindcss()
  ],
})