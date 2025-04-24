import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'logo.png') {
            return 'logo.png';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});