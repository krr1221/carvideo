import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dataOverview from '@/components/dataOverview'
import mapPage from '@/components/mapPage'
import carMonitor from '@/components/carMonitor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dataOverview',
      name: 'dataOverview',
      component: dataOverview
    },
    {
      path: '/mapPage',
      name: 'mapPage',
      component: mapPage
    },
    {
      path: '/carMonitor',
      name: 'carMonitor',
      component: carMonitor
    }
  ]
})
