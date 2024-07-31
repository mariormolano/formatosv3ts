import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": "/src",
      "@comp": "/src/components",
      "@assets": "/src/assets",
      "@layouts": "/src/layouts",
      "@states": "/src/modules/slices",
      "@modules": "/src/modules",
      "@services": "/src/services",
      "@hooks": "/src/hooks",
      "@interfaces": "/src/interfaces",
      "@enums": "/src/enums",
      "@mocks": "/src/mocks",
      "@models": "/src/models",
      "@pages": "/src/pages",
    },
  },
});
