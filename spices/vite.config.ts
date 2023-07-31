import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/spices",
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        join(searchForWorkspaceRoot(process.cwd()), ".."),
      ],
    },
  },
})
