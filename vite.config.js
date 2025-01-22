import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { BASEPATH } from "./BasePath";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `${BASEPATH}/`,
});
