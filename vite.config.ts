import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      imports: ['vue'],
      dts: 'auto-imports.d.ts'
    })
  ],
  server: {
    port: 5008
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: 'vue3-timeline',
      fileName: format => `vue3-timeline.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
