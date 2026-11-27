import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Lessons use Vite raw imports and the React lesson renderer.
// Do not install an MDX transform for these Markdown files.
export default defineConfig({
  base:'/yaskawa-inform-training/',
  plugins:[react(),tailwindcss()]
})
