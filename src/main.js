import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import router from './router'
Vue.prototype.$echarts = echarts

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
