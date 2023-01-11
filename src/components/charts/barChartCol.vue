<template>
    <div ref="barchartcol"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'barChartCol',
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
        grid: {
          left: '24%',
          show: 'true',
          borderWidth: '0'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },

          formatter: function (params) {
            var tar = params[0]
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
          }
        },

        xAxis: [
          {
            type: 'category',
            splitLine: {show: false},
            data: this.showData.data,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            }

          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {show: false},
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            }
          }
        ],
        series: [

          {
            name: '报警数量',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'inside'
                }
              }
            },
            data: this.showData.values
          }
        ]
      }
      // this.charts = echarts.init(document.getElementById(id))
      this.charts = echarts.init(this.$refs.barchartcol)
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
