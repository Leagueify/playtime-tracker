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
        name: 'Leagueify Time on Ice Tracker',
        short_name: 'Leagueify TOI',
        description: 'Leagueify Time on Ice Tracker provides an easy intuitive way track player ice time.',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'src/assets/leagueify.svg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'src/assets/leagueify.svg',
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
