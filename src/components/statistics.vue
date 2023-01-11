<template>
    <div class="con left">
    <!--选择时间-->
    <div class="static_top left">
        <i></i><span>统计概况</span>
    </div>
    <!--数据总概-->
    <div class="stiatic_top_con left">

<table>
    <tr>
        <td class="labe_td">总概：</td>
        <td colspan="3" class="sky">拥有车辆数123456台，车辆整体情况比较良好，但违法纪律数也很多，应该着重改善驾驶人员交通法律法规教育！</td>
    </tr>
    <tr>
        <td class="labe_td">新进车辆：</td>
        <td>33987台</td>
        <td class="labe_td">违法车辆：</td>
        <td class="org">33987台</td>
    </tr>
    <tr>
        <td class="labe_td">报废车辆：</td>
        <td class="red">33987台</td>
        <td class="labe_td">报废车辆：</td>
        <td>33987台</td>
    </tr>
</table>

    </div>
    <!--统计分析图-->
    <div class="static_top left">
        <i></i><span>统计分析一</span>
    </div>
    <div class="div_any">
        <div class="left div_any03">
            <div class="div_any_child01 left">
                <div class="div_any_title"><img src="img/title_1.png">车辆类型统计 </div>
                <pieChart :showData="pieChartData" class="p_chart"></pieChart>
                <div class="char_table"><div class="table_p table_p01">
                    <table>
                        <thead><tr>
                            <th>排名</th>
                            <th>车牌号</th>
                            <th>里程数（km）</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        </tbody>
                    </table>
                </div></div>

            </div>
            <div class="div_any_child01 left">
                <div class="div_any_title"><img src="img/title_2.png">车辆状态统计 </div>
                <barChart :showData="barChartData" class="p_chart"></barChart>
                <div class="char_table"><div class="table_p table_p01">
                    <table>
                        <thead><tr>
                            <th>排名</th>
                            <th>车牌号</th>
                            <th>里程数（km）</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        </tbody>
                    </table>
                </div></div>
            </div>
        </div>

        <div class="static_top left">
            <i></i><span>统计分析二</span>
        </div>
        <div class="right div_any03">
            <div class="div_any_child01 left">
                <div class="div_any_title"><img src="img/title_4.png">车辆行驶统计 </div>
                <lineChart :showData="lineChartData" class="p_chart"></lineChart>
                <div class="char_table"><div class="table_p table_p01">
                    <table>
                        <thead><tr>
                            <th>排名</th>
                            <th>车牌号</th>
                            <th>里程数（km）</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        </tbody>
                    </table>
                </div></div>
            </div>
            <div class="div_any_child01 left">
                <div class="div_any_title"><img src="img/title_5.png">车辆报警统计 </div>
                <barChartCol :showData="barChartColData" class="p_chart"></barChartCol>
                <div class="char_table"><div class="table_p table_p01">
                    <table>
                        <thead><tr>
                            <th>排名</th>
                            <th>车牌号</th>
                            <th>里程数（km）</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        </tbody>
                    </table>
                </div></div>
            </div>
        </div>
        <div class="static_top left">
            <i></i><span>统计分析三</span>
        </div>

        <div class="right div_any03">

            <div class="div_any_child01 left div_any_child01_wh">
                <div class="div_any_title"><img src="img/title_5.png">车辆报警统计 </div>
                <barChartCol :showData="barChartColDataBig" class="p_chart"></barChartCol>
                <div class="char_table"><div class="table_p table_p01">
                    <table>
                        <thead><tr>
                            <th>排名</th>
                            <th>车牌号</th>
                            <th>里程数（km）</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                        </tbody>
                    </table>
                </div></div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import pieChart from './charts/pieChart.vue'
import barChart from './charts/barChart.vue'
import lineChart from './charts/lineChart.vue'
import barChartCol from './charts/barChartCol.vue'
import mapSmall from './charts/mapSmall.vue'
export default {
  data () {
    return {
      pieChartData: {
        values: ['客运车', '危险品车', '网约车', '学生校车'],
        values1: [
          {value: 335, name: '客运车'},
          {value: 310, name: '危险品车'},
          {value: 234, name: '网约车'},
          {value: 135, name: '学生校车'}
        ]
      },
      barChartData: {
        data1: ['行驶', '停车', '熄火', '离线'],
        data2: ['客运车', '危险品车', '网约车', '学生校车'],
        values0: [320, 302, 301, 334],
        values1: [120, 132, 101, 134],
        values2: [220, 182, 191, 234],
        values3: [150, 212, 201, 154]
      },
      barChartColData: {
        data: ['客运车', '危险品车', '网约车', '学生校车'],
        values: [2900, 1200, 300, 200, 900, 300]
      },
      lineChartData: {
        title: ['车辆行驶数量'],
        coord: ['0', '10', '20', '30', '40', '50', '60', '70', '80'],
        values: [15, 0, 20, 45, 22.1, 25, 70, 55, 76]
      },
      barChartColDataBig: {
        data: ['客运车', '危险品车', '网约车', '学生校车'],
        values: [2900, 1200, 300, 200, 900, 300]
      }
    }
  },
  components: {
    pieChart,
    barChart,
    lineChart,
    barChartCol,
    mapSmall
  }
}
</script>
<style>
.p_chart{
    height: 250px;
    padding: 5px 10px;
    margin-top: 15px;
}
</style>
