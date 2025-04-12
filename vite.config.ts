import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  base: "https://github.com/AlexL69420/dashboard-app-test",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
