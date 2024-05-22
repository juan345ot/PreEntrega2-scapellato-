import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PreEntrega2-scapellato-/', 
  plugins: [
    react({
      fastRefresh: {
        exclude: ['src/context/CartContext.jsx']
      }
    }),
  ],
});
