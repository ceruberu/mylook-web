import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const instance = axios.create({
  // baseURL: 'http://localhost:3000/api',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
  }
})

Vue.prototype.$http = instance;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
