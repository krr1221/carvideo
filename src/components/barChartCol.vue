<template>
    <div ref="char4" style="width:340px;height:260px;">
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'barChartCol',
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.barchartcol()
      })
    })
  },
  created () {
  },
  methods: {
    // 统计分析图
    barchartcol () {
      var myChart = echarts.init(this.$refs.char4)
      var option = {
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
            data: ['客运车', '危险品车', '网约车', '学生校车'],
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
            data: [2900, 1200, 300, 200, 900, 300]
          }
        ]
      }

      myChart.setOption(option)
      // window.addEventListener('resize', function () { myChart.resize() })
    }
  }
}
</script>
