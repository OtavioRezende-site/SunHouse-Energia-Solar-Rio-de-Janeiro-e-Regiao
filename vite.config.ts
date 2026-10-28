import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// Nome do repositório no GitHub para o GitHub Pages
const REPO_NAME = 'SunHouse-Energia-Solar-Rio-de-Janeiro-e-Regiao';

export default defineConfig(({ command }) => {
  // Em desenvolvimento local: '/'
  // No build de produção para GitHub Pages: '/SunHouse-Energia-Solar-Rio-de-Janeiro-e-Regiao/'
  // Permite override via variável VITE_BASE_URL (ex: domínio personalizado)
  const base = process.env.VITE_BASE_URL || (command === 'serve' ? '/' : `/${REPO_NAME}/`);

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    build: {
      outDir: 'docs',
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
