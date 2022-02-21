import type { App } from 'vue'

const fileInfo = import.meta.globEager('./**/*.ts')
const needRegisterModules = Object.entries(fileInfo).filter(([filePath]) => !filePath.includes('axios'))

export const registerModules = (app: App) => {
  needRegisterModules.forEach(([_, module]) => {
    if (!module.install) throw new Error('导出的不是一个可以注册的插件')
    module.install(app)
  })

  return app
}
