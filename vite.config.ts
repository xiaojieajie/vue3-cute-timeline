import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-md'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// import ViteImages from 'vite-plugin-vue-images'

const pathResolve = (src: string) => resolve(__dirname, src)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    Pages({ extensions: ['vue', 'md'] }),
    Layouts(),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts'
    }),
    Markdown(),
    VueSetupExtend()
    // ViteImages()
  ],
  server: {
    proxy: {
      '/xxx': {
        target: 'https://xxx',
        changeOrigin: true
      }
    },
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@a': pathResolve('src/assets')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/variable.scss";'
      }
    }
  }
})
