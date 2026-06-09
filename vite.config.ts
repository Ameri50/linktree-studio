/* eslint-disable prettier/prettier */
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    ssr: false,
  },
  vite: {
    plugins: [react()],
  },
 
});