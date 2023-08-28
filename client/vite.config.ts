import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  optimizeDeps: {
    include: ['cli-table3'],
  },
});
