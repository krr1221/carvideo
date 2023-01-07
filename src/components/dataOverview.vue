<template>
    <div class="con left">
    <!--选择时间-->
    <div class="select_time">
        <div class="static_top left">
            <i></i><span>总体概况</span>
        </div>
    </div>
    <!--数据总概-->
    <div class="con_div">
        <div class="con_div_text left">
            <div class="con_div_text01 left">
                <img src="../assets/img/info_1.png" class="left text01_img">
                <div class="left text01_div">
                    <p>车辆总数(辆)</p>
                    <p>12356</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../assets/img/info_2.png" class="left text01_img">
                <div class="left text01_div">
                    <p>车辆使用数(辆)</p>
                    <p>12356</p>
                </div>
            </div>
        </div>
        <div class="con_div_text left">
            <div class="con_div_text01 left">
                <img src="../assets/img/info_4.png" class="left text01_img">
                <div class="left text01_div">
                    <p>行驶里程总数(km)</p>
                    <p class="sky">12356</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../assets/img/info_5.png" class="left text01_img">
                <div class="left text01_div">
                    <p>行驶里程平均数(km)</p>
                    <p class="sky">12356</p>
                </div>
            </div>
        </div>
        <div class="con_div_text left">

            <div class="con_div_text01 left">
                <img src="../assets/img/info_6.png" class="left text01_img">
                <div class="left text01_div">
                    <p>行驶时长总数(s)</p>
                    <p class="org">12356</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../assets/img/info_7.png" class="left text01_img">
                <div class="left text01_div">
                    <p>行驶ihfj平均数(s)</p>
                    <p class="org">12356</p>
                </div>
            </div>
        </div>
    </div>
    <!--统计分析图-->
    <div class="div_any">
        <div class="left div_any01">
            <div class="div_any_child">
                <div class="div_any_title"><img src="../assets/img/title_1.png">车辆类型统计 </div>
                <pieChart :showData="pieChartData" class="p_chart"></pieChart>
            </div>
            <div class="div_any_child">
                <div class="div_any_title"><img src="../assets/img/title_2.png">车辆状态统计 </div>
                <barChart :showData="barChartData" class="p_chart"></barChart>
            </div>
        </div>
        <div class="div_any02 left ">
            <div class="div_any_child div_height">
                <div class="div_any_title any_title_width"><img src="../assets/img/title_3.png">车辆行驶地图 </div>
                <mapSmall style="margin-top:20px;" boxheight="566px"></mapSmall>
            </div>
        </div>
        <div class="right div_any01">
            <div class="div_any_child">
                <div class="div_any_title"><img src="../assets/img/title_4.png">车辆行驶统计 </div>
                <lineChart :showData="lineChartData" class="p_chart"></lineChart>
            </div>
            <div class="div_any_child">
                <div class="div_any_title"><img src="../assets/img/title_5.png">车辆报警统计 </div>
                <barChartCol :showData="barChartColData" class="p_chart"></barChartCol>
            </div>
        </div>
    </div>
    <!--分析表格-->
    <div class="div_table">
        <div class="left div_table_box">
            <div class="div_any_child">
                <div class="div_any_title"><img src="../assets/img/title_4.png">行驶里程排名前5位 </div>
                <div class="table_p">
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
                </div>

            </div>
        </div>
        <div class="left div_table_box">
            <div class="div_any_child">
                <div class="div_any_title"><img src="../assets/img/title_4.png">行驶次数车辆前5位 </div>
                <div class="table_p">
                    <table>
                        <thead><tr>
                            <th>排名</th>
                            <th>车牌号</th>
                            <th>次数（km）</th>
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
                </div>
            </div>
        </div>
        <div class="left div_table_box">
            <div class="div_any_child">
                <div class="div_any_title"><img src="../assets/img/title_4.png">行驶最高时速前5位 </div>
                <div class="table_p">
                    <table>
                        <thead><tr>
                            <th>排名</th>
                            <th>车牌号</th>
                            <th>时速（km）</th>
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
                </div>
            </div>
        </div>
        <div class="left div_table_box">
            <div class="div_any_child">
                <div class="div_any_title"><img src="../assets/img/title_4.png">行驶时长排名前5位 </div>
                <div class="table_p">
                    <table>
                        <thead><tr>
                            <th>排名</th>
                            <th>车牌号</th>
                            <th>时长（km）</th>
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
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import pieChart from './pieChart.vue'
import barChart from './barChart.vue'
import lineChart from './lineChart.vue'
import barChartCol from './barChartCol.vue'
import mapSmall from './mapSmall.vue'
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
