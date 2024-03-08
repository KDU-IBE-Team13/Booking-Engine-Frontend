import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "kickdrum-ibe-team13",
    project: "ibe-frontend-react"
  })],

  build: {
    sourcemap: true
  }
})