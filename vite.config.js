import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // base нужен для GitHub Pages: https://anna-kolmychek.github.io/vpr_math5/
  base: '/vpr_math5/',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
