import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base = '/' par défaut (Vercel + local). GitHub Pages passe VITE_BASE=/claude-b2b-launch/
// via le workflow Actions.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
