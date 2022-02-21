import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import CancelToken from '@/module/axios/cancelToken'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes)
})

router.beforeEach((to, from, next) => {
  // 路由跳转要清除之前所有的请求缓存
  CancelToken.clearPending()
  next()
})

export const install = (app: App) => {
  app.use(router)
}
