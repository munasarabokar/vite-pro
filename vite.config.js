import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { splitVendorChunkPlugin } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), splitVendorChunkPlugin()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://mobile.e-muraad.com",
        changeOrigin: true,
      },
    },
  },
});
