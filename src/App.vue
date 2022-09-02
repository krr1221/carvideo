<template>
  <div id="app">
    <header class="header left">
    <div class="left nav">
        <ul>
            <li :class="index===0?'nav_active':''" @click="goto($event)"><i class="nav_1"></i><a>数据概览</a> </li>
            <li :class="index===1?'nav_active':''" @click="goto($event)"><i class="nav_2"></i><a>车辆监控</a> </li>
            <li :class="index===2?'nav_active':''" @click="goto($event)"><i class="nav_3"></i><a>地图界面</a> </li>
            </ul>
    </div>
    <div class="header_center left">
        <h2><strong>车载视频监控系统</strong></h2>
        <p class="color_font"><small>On Board Video Monitoring System</small></p>
    </div>
    <div class="right nav text_right">
        <ul> <li @click="goto($event)"><i class="nav_7"></i><a href="static.html">查询统计</a> </li>
            <li @click="goto($event)"><i class="nav_8"></i><a href="message.html">信息录入</a> </li>
            <li @click="goto($event)"><i class="nav_4"></i><a href="table1.html">表格界面</a> </li>
        </ul>
    </div>
</header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      index: 0
    }
  },
  methods: {
    goto (e) {
      let title = e.currentTarget.lastChild.innerText
      if (title === '车辆监控') {
        this.index = 1
        this.$router.push({path: '/carMonitor'})
      } else if (title === '地图界面') {
        this.index = 2
        this.$router.push('/mapPage')
      } else if (title === '数据概览') {
        this.index = 0
        this.$router.push('/dataOverview')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
