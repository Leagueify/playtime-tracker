import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'All-In-One Web App',
        short_name: 'AIOWA',
        description: 'All-In-One Web App built with a ReactJS frontend and Go backend bundled in a single executable.',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'src/assets/react.svg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'src/assets/react.svg',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        scope: '/',
        start_url: '/',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    }),
  ],
})
