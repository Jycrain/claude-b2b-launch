import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base = chemin du sous-dossier GitHub Pages (https://<user>.github.io/claude-b2b-launch/).
// En local (dev/preview), repasser à '/' via VITE_BASE=/ si besoin.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/claude-b2b-launch/',
  plugins: [react()],
})
