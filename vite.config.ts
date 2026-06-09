import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'motion': ['framer-motion'],
          'i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          'swiper': ['swiper'],
          'forms': ['react-hook-form', '@hookform/resolvers', 'yup'],
          'icons': ['lucide-react', 'react-icons'],
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 600,
    // Enable source maps for production debugging
    sourcemap: false,
    // Minification
    minify: 'esbuild',
    target: 'es2020',
  },
  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})
