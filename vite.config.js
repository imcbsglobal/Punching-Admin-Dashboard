import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build:{
    outDir:'build'
  },
  plugins: [react(),tailwindcss()],
  optimizeDeps: {
    include: ['qrcode.react'],  // Explicitly include the QRCode library
  },
})