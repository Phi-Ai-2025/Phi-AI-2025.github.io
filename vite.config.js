import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Phi-AI-2025.github.io is an organization Pages site served from the domain
// root, so base stays '/'. The React app is the landing page only; the older
// hand-written pages (blog, project write-ups) live in public/ and are copied
// into dist untouched, keeping their existing URLs.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
