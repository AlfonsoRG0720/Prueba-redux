import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',          // Carpeta base
  publicDir: 'public',// Archivos estáticos
  build: {
    outDir: 'dist',   // Carpeta de salida
  },
  server: {
    port: 3000,       // Puerto del servidor
    open: true        // Abre el navegador al iniciar
  }
});