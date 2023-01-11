import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import dataOverview from '@/components/dataOverview'
import mapPage from '@/components/mapPage'
import carMonitor from '@/components/carMonitor'
import statistics from '@/components/statistics'
import inputInfos from '@/components/inputInfos'
import tables from '@/components/tables'
import uploadVideos from '@/components/uploadVideos'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'dataOverview',
      component: dataOverview
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
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: statistics
    },
    {
      path: '/inputInfos',
      name: 'inputInfos',
      component: inputInfos
    },
    {
      path: '/tables',
      name: 'tables',
      component: tables
    },
    {
      path: '/uploadVideos',
      name: 'uploadVideos',
      component: uploadVideos
    }
  ]
})
