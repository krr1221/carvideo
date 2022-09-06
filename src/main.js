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
import BMap from 'vue-baidu-map'

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

Vue.use(BMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'O8hWGruur8Govaye6KCyDGitnk7KMszQ'
})
