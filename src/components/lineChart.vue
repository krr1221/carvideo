<template>
    <div ref="linechart"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'lineChart',
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
        legend: {
          data: this.showData.title,
          textStyle: {
            color: '#ffffff'

          }
        },
        grid: {
          left: '24%',
          show: 'true',
          borderWidth: '0'
        },

        calculable: false,
        tooltip: {
          trigger: 'axis',
          formatter: 'Temperature : <br/>{b}km : {c}°C'
        },
        xAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#fff'
              }
            },

            splitLine: {
              lineStyle: {
                width: 0,
                type: 'solid'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisLine: {onZero: false},
            axisLabel: {
              formatter: '{value} km',
              textStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              lineStyle: {
                width: 0,
                type: 'solid'
              }
            },
            boundaryGap: false,
            data: this.showData.coord
          }
        ],
        series: [
          {
            name: '车辆行驶数量',
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  shadowColor: 'rgba(0,0,0,0.4)'
                }
              }
            },
            data: this.showData.values
          }
        ]
      }
      this.charts = echarts.init(this.$refs.linechart)
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
