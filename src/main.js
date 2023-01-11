// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jQuery'
import * as echarts from 'echarts'
import './assets/css/base.css'
import './assets/css/tail.css'
import './assets/css/zTreeStyle/zTreeStyle.css'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import uploader from 'vue-simple-uploader'

Vue.config.productionTip = false

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'O8hWGruur8Govaye6KCyDGitnk7KMszQ'
})
Vue.use(ElementUI)
Vue.use(uploader)

Vue.prototype.$ = $
Vue.prototype.$echarts = echarts

Vue.directive('dialogDrag', {
  bind (el, binding, vnode) {
    console.log(el)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
