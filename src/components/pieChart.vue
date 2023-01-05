<template>
    <div ref="char1" id="top"></div>
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
        this.drawMap('top')
      })
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   setTimeout(() => {
    //     this.char1()
    //   })
    // })
    // this.$nextTick(function () {
    //   this.drawMap('top')
    // })
    // this.drawMap('top')
  },
  created () {
    this.$nextTick(function () {
      this.drawMap('top')
    })
  },
  methods: {
    // 统计分析图
    char1 () {
      var myChart = echarts.init(this.$refs.char1)
      // console.log(myChart)

      var option = {
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
          // data: ['客运车', '危险品车', '网约车', '学生校车']
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

      myChart.setOption(option)
      // window.addEventListener('resize', function () { myChart.resize() })
    },

    // 绘制图标的函数
    drawMap  (id) {
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
      this.charts = echarts.init(document.getElementById(id))
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
