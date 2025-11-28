import { defineConfig } from 'vite';
import { resolve } from 'path';
 
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        Aladdin: resolve(__dirname, 'pages/Aladdin.html'),
        Lareinedesneiges: resolve(__dirname, 'pages/La reine des neiges.html'),
        labelleetlabete: resolve(__dirname, 'pages/labelleetlabete.html'),
        Leroilion: resolve(__dirname, 'pages/Le roi lion.html'),
        ratatouille: resolve(__dirname, 'pages/ratatouille.html'),
        toystory: resolve(__dirname, 'pages/toy story.html'),
        Vaiana: resolve(__dirname, 'pages/Vaiana.html'),
        zootopia: resolve(__dirname, 'pages/zootopia.html'),
      },
    },
  },
});