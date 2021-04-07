import Vue from 'vue'
import App from './App.vue'
import router from 'router/router.js'
import axios from 'http/http.js'
import store from 'store/store.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
