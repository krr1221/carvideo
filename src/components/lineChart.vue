<template>
    <div ref="char3" style="width:340px;height:260px;">
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'lineChart',
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.linechart()
      })
    })
  },
  created () {
  },
  methods: {
    // 统计分析图
    linechart () {
      var myChart = echarts.init(this.$refs.char3)

      var option = {
        legend: {
          data: ['车辆行驶数量'],
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
            data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
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
            data: [15, 0, 20, 45, 22.1, 25, 70, 55, 76]
          }
        ]
      }

      myChart.setOption(option)
      // window.addEventListener('resize', function () { myChart.resize() })
    }
  }
}
</script>
