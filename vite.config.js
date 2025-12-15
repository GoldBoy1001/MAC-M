import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/MAC-M", // или /имя-репозитория/ для GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        catalog: resolve(__dirname, "catalog.html"),
        catalogSection: resolve(__dirname, "catalog-section.html"),
      },
      output: {
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
    },
  },
});
