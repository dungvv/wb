import * as path from 'path'

import { defineConfig } from 'vite'
import pluginChecker from 'vite-plugin-checker'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginChecker({ typescript: true })],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@root', replacement: path.resolve(__dirname, '') }
    ]
  },
  server: {
    port: 3000
  }
})
