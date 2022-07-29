import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import store from './store'
import YouTube from 'vue3-youtube'
import { clickOutsideDirective } from './directives'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/style/main.scss'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import gAuthPlugin from 'vue3-google-oauth2' // dont delete this it will be in use later on
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'



const app = createApp(App)


app.component('PulseLoader', PulseLoader)
app.component('YouTube', YouTube)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(PerfectScrollbar)
app.directive('click-outside', clickOutsideDirective)
app.mount('#app')
