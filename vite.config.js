import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Dailybit/',  // 👈 This is the fix!
  plugins: [react(), tailwindcss()],
})
