import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ROLLAND_GRELLETY_Carole_12_sportsee_062025/", // <-- important
})
