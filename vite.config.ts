import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import ejs from "ejs";

export default defineConfig({
  plugins: [
    // With Data
    ViteEjsPlugin({
      domain: "Quantum Imaging Labs",
      title: "Home",
      ejs,
    }),
  ],
});
