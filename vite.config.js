import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "404.html", // Path to the source file (404.html in root)
          dest: "", // Destination folder inside 'dist'
        },
      ],
    }),
  ],
  base: "/",
});
