import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// @是一个路径的别名 是src路径 在vue-cli项目下有效
// index 是目录的索引文件，默认使用的索引文件 index.js
import router from '@/router'
// 导入样式
import '@/styles/index.less'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
