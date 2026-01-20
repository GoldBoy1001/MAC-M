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
        catalogDetail: resolve(__dirname, "catalog-detail.html"),
        projects: resolve(__dirname, "projects.html"),
        projectsDetail: resolve(__dirname, "projects-detail.html"),
        news: resolve(__dirname, "news.html"),
        newsDetail: resolve(__dirname, "news-detail.html"),
        articles: resolve(__dirname, "articles.html"),
        articlesDetail: resolve(__dirname, "articles-detail.html"),
        faq: resolve(__dirname, "faq.html"),
        contacts: resolve(__dirname, "contacts.html"),
        price: resolve(__dirname, "price.html"),
        gotovoeOborudovanie: resolve(__dirname, "gotovoe-oborudovanie.html"),
      },
      output: {
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
    },
  },
});
