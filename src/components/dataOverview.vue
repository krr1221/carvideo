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
                <pieChart style="margin-top:20px;"></pieChart>
            </div>
            <div class="div_any_child">
                <div class="div_any_title"><img src="../assets/img/title_2.png">车辆状态统计 </div>
                <barChart style="margin-top:20px;"></barChart>
            </div>
        </div>
        <div class="div_any02 left ">
            <div class="div_any_child div_height">
                <div class="div_any_title any_title_width"><img src="../assets/img/title_3.png">车辆行驶地图 </div>
                <mapSmall style="margin-top:20px;"></mapSmall>
            </div>
        </div>
        <div class="right div_any01">
            <div class="div_any_child">
                <div class="div_any_title"><img src="../assets/img/title_4.png">车辆行驶统计 </div>
                <lineChart style="margin-top:20px;"></lineChart>
            </div>
            <div class="div_any_child">
                <div class="div_any_title"><img src="../assets/img/title_5.png">车辆报警统计 </div>
                <barChartCol style="margin-top:20px;"></barChartCol>
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
