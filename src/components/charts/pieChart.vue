<template>
    <div ref="piechart"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'pieChart',
  props: ['showData'],
  data () {
    return {
      charts: ''
    }
  },
  watch: {
    showData () {
      this.$nextTick(function () {
        this.drawMap()
      })
    }
  },
  mounted () {

  },
  created () {
    this.$nextTick(function () {
      this.drawMap()
    })
  },
  methods: {

    // 绘制图标的函数
    drawMap  () {
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          textStyle: {
            color: '#ffffff'

          },
          data: this.showData.values
        },
        calculable: false,
        series: [
          {
            name: '车类型',
            type: 'pie',
            // radius是用来设置饼图大小的
            radius: ['40%', '60%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              },
              emphasis: {
                label: {
                  show: true,
                  position: 'center',
                  textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold'
                  }
                }
              }
            },
            data: this.showData.values1
          }
        ]
      }
      // this.charts = echarts.init(document.getElementById(id))
      // 使用ref的形式实现一个组件的多次复用
      this.charts = echarts.init(this.$refs.piechart)
      // 改变屏幕大小图表重新加载
      // var resizeDiv = document.getElementById(id)
      // var listener = () => {
      //   this.charts.resize()
      // }
      // EleResize.on(resizeDiv, listener)
      this.charts.clear()
      this.charts.setOption(option)
    }
  }
}
</script>
