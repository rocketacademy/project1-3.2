import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/project1-3.2/",
  plugins: [react()],
});

// http://localhost:5173/project1-3.2/
