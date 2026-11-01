import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tanstackStart({ pages: [{ path: '/' }, { path: '/about' }, { path: '/blog/nextjs-vvedenie' }, { path: '/blog/react-osnovy' }], prerender: { enabled: true, autoStaticPathsDiscovery: false } }), react()],
});
