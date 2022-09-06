<template>
    <div ref="char2" style="width:340px;height:260px;">
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'barChart',
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.char2()
      })
    })
  },
  created () {
  },
  methods: {
    // 统计分析图
    char2 () {
      var myChart = echarts.init(this.$refs.char2)
      console.log(myChart)

      var option = {
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
          data: ['行驶', '停车', '熄火', '离线'],
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
            data: ['客运车', '危险品车', '网约车', '学生校车'],
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
            name: '行驶',
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
            data: [320, 302, 301, 334]
          },
          {
            name: '停车',
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
            data: [120, 132, 101, 134]
          },
          {
            name: '熄火',
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
            data: [220, 182, 191, 234]
          },
          {
            name: '离线',
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
            data: [150, 212, 201, 154]
          }

        ]
      }

      myChart.setOption(option)
      // window.addEventListener('resize', function () { myChart.resize() })
    }
  }
}
</script>
