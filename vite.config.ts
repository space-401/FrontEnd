import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    ViteFaviconsPlugin({
      logo: 'src/assets/png/logo/logo.png',
      favicons: {
        path: 'assets/',
      },
    }),
  ],
  optimizeDeps: {
    include: ['cli-table3'],
  },
});
