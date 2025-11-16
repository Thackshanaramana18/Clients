import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000, strictPort: true, host: 'localhost' },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'three-fiber': ['@react-three/fiber', '@react-three/drei', 'three'],
          'animation': ['framer-motion', 'lenis'],
          'vendors': ['react', 'react-dom']
        }
      }
    },
    sourcemap: false,
    chunkSizeWarningLimit: 600
  }
})
