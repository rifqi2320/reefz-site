import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3010,
    open: true,
    allowedHosts: ['me.reefz.cc', 'localhost', '127.0.0.1'],
  },
  preview: {
    port: 4173,
    host: true,
    allowedHosts: ['me.reefz.cc', 'localhost', '127.0.0.1'],
  },
})
