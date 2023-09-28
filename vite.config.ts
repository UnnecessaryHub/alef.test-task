import vue              from '@vitejs/plugin-vue'
import { resolve }      from 'node:path'
import { defineConfig } from 'vite'
import tsconfigPaths    from 'vite-tsconfig-paths'

export default defineConfig({
  base: 'https://unnecessaryhub.github.io/alef.test-task',
  plugins: [vue(), tsconfigPaths()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`
    }
  }
})
