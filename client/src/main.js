import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import YouTube from 'vue3-youtube'
import { clickOutsideDirective } from './directives'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/style/main.scss'


const app = createApp(App)
app.component('YouTube', YouTube)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.directive('click-outside', clickOutsideDirective)
app.mount('#app')
