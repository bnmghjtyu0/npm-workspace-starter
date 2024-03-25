import path, { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  publicDir: "./public/",

  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  
  build: {
    sourcemap: false,
    minify: "esbuild",
    outDir: path.join(__dirname, "dist"),
    lib: {
      entry: "src/index.ts",
      name: "shared-ui",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      // 需要排除的套件 ~
      external: [],
      input: {
        main: resolve(__dirname, "index.html"),
      },
      // Js 輸出的資料夾位置
      output: {
        chunkFileNames: "js/[name].js",
        entryFileNames: "js/[name].js",
      },
    },
  },
});
