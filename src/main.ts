import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import '@vue-flow/minimap/dist/style.css'
import '@vue-flow/controls/dist/style.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/reset.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
