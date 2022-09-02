<template>
    <div ref="char1" style="width:340px;height:260px;">
      <p>this is piecharts</p>
    </div>
</template>

<script>
// import $ from 'jQuery'
import * as echarts from 'echarts'
export default {
  name: 'pieChart',
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.char1()
      })
    })
  },
  created () {
    // this.char1()
  },
  methods: {
    // 统计分析图
    char1 () {
      // var myChart = echarts.init($('#char1')[0])
      var myChart = echarts.init(this.$refs.char1)
      console.log(myChart)

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
          data: ['客运车', '危险品车', '网约车', '学生校车']
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
            data: [
              {value: 335, name: '客运车'},
              {value: 310, name: '危险品车'},
              {value: 234, name: '网约车'},
              {value: 135, name: '学生校车'}

            ]
          }
        ]
      }

      myChart.setOption(option)
      // window.addEventListener('resize', function () { myChart.resize() })
    }
  }
}
</script>
