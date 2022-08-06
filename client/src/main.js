import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import store from './store'
import YouTube from 'vue3-youtube'
import ElementPlus from 'element-plus'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { clickOutsideDirective } from './directives'

import 'element-plus/dist/index.css'
import './assets/style/main.scss'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

//test
console.log(process.env.NODE_ENV);

const app = createApp(App)


app.component('PulseLoader', PulseLoader)
app.component('YouTube', YouTube)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(PerfectScrollbar)
app.directive('click-outside', clickOutsideDirective)
app.mount('#app')
