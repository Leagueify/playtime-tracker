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
        name: 'Leagueify Playtime Tracker',
        short_name: 'Playtime',
        description: 'Leagueify Playtime Tracker provides an easy intuitive way track athelete playtime.',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/Leagueify Logo - 192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/Leagueify Logo - 512.png',
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
