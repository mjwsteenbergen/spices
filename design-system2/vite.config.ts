import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      preserveSymlinks: true,
      input: {
        app: './index.html', // default
      },
    }
  },
})
