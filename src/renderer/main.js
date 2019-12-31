import Vue from 'vue'
import axios from 'axios'

import App from './App'
 

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  components: {App},
 
  template: '<App/>'
}).$mount('#app')
