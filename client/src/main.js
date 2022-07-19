import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import YouTube from 'vue3-youtube'

import './assets/style/main.scss'
const app = createApp(App)
app.component('YouTube', YouTube)
app.use(router)
app.use(store)

app.mount('#app')
