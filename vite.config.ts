import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

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
    exclude: ['js-big-decimal'],
  },
});