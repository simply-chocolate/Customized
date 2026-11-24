import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const webDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: webDir,
  plugins: [react()],
  server: {
    port: 5173,
    // Forward API calls to the Oak backend (`deno task dev`), so the browser only talks to one origin.
    proxy: { "/api": "http://localhost:8000" },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
