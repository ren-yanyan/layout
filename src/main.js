import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import echarts from 'echarts'
// 导航守卫
import './permission'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
// 封装mock.js
if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('./mock/mock.js')
  mockXHR()
}

Vue.use(ElementUI)
Vue.use(VueCookies)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
