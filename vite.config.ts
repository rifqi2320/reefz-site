import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
const base = process.env.VITE_BASE_PATH ?? (isGitHubActions && repositoryName ? `/${repositoryName}/` : '/')

export default defineConfig({
  base,
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
