import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // 👈 CRUCIAL: This tells Vite not to parse .JPG as JS
});
