import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // New value on every build — busts CDN cache when screenshot files keep the same name
    "import.meta.env.VITE_BUILD_VERSION": JSON.stringify(Date.now().toString()),
  },
});
