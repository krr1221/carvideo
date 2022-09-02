// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jQuery'
import * as echarts from 'echarts'
// import echarts from 'echarts'
// import ECharts from 'vue-echarts'
import './assets/css/base.css'
import './assets/css/tail.css'
import './assets/css/zTreeStyle/zTreeStyle.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.$ = $
Vue.prototype.$echarts = echarts
