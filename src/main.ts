import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import '@a/styles/index.scss'
import { registerModules } from './module'

const app = registerModules(createApp(App))
app.mount('#app')
