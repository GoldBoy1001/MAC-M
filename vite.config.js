import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/", // или /имя-репозитория/ для GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        catalog: resolve(__dirname, "about.html"),
      },
      output: {
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
    },
  },
});
