import path, { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  publicDir: "./public/",
  plugins: [dts()],
  build: {
    outDir: path.join(__dirname, "dist"),
    lib: {
      entry: "src/index.ts",
      name: "shared-ui",
      fileName: "index",
      formats: ["cjs", "es"],
    },
  },
});
