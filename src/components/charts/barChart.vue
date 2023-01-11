<template>
    <div ref="barchart"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'barChart',
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
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '24%', // 控制左右边距
          show: 'true',
          borderWidth: '0'
        },
        legend: {
          data: this.showData.data1,
          textStyle: {
            color: '#ffffff'

          }
        },

        calculable: false,
        xAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              lineStyle: {
                color: ['#f2f2f2'],
                width: 0,
                type: 'solid'
              }
            }

          }
        ],
        yAxis: [
          {
            type: 'category',
            data: this.showData.data2,
            axisLabel: {
              show: true,
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
        series: [
          {
            name: this.showData.data1[0],
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'insideRight'
                }
              }
            },
            data: this.showData.values0
          },
          {
            name: this.showData.data1[1],
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'insideRight'
                }
              }
            },
            data: this.showData.values1
          },
          {
            name: this.showData.data1[2],
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'insideRight'
                }
              }
            },
            data: this.showData.values2
          },
          {
            name: this.showData.data1[3],
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'insideRight'
                }
              }
            },
            data: this.showData.values3
          }

        ]
      }
      this.charts = echarts.init(this.$refs.barchart)
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
