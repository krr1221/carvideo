import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue.config.productionTip = false

global.Vue = Vue
console.log('--lobal:', global.hasOwnProperty('Vue'))
Vue.config.productionTip = false
// 使用elementui组件
// npm run unit 时要下面引入样式那句注释掉-不知为什么导入会报错。可能因为测试时，不需要css样式

Vue.use(ElementUI)
