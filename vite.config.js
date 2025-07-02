import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: true,
  },
  preview: {
    host: true,
    port: 10000,
    allowedHosts: ['.onrender.com'], //✅ allows all Render domains
  },
  plugins: [react()],
  assetsInclude: ['**/*.mp3'], // ✅ explicitly include audio files
});
