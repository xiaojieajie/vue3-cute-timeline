import { createApp } from 'vue'
import { plugin } from '../packages/index'
import App from './App.vue'
const app = createApp(App)
app.use(plugin)
app.mount('#app')
