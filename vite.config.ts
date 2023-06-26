/// <reference types="vitest" />

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['lit', 'lit/decorators.js'],
  },
  test: {
    globals: true,
    browser: {
      enabled: true,
      enableUI: true,
      headless: false,
      name: 'chrome',
      provider: process.env.BROWSER_PROVIDER || 'none',
    },
  },
})
