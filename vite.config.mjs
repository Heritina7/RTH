import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,js,ts,tsx}', // Permet à Vite de lire le JSX dans les fichiers .js
    }),
  ],
  server: {
    port: 3000,
  },
})

