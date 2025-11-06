import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: process.env.PORT || 3000,
    host: true,
    allowedHosts: [
      'webdevlab8-2.onrender.com',
      'webdevlab8-4.onrender.com',
      '*.onrender.com'
    ]
  }
});