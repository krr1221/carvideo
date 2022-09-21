<template>
    <div class="map_con left" id="car_control" ref="mapPage">
    <!--左侧地图-->
  <div class="left map_left"  >
      <mapSmall boxheight="640px"></mapSmall>
      <div class="map_top">
          <ul>
              <li class="active"><i class="glyphicon glyphicon-pencil"></i><a href="javascript:void (0)" class="active">图层选择</a> </li>
              <li><i class="glyphicon glyphicon-zoom-in"></i><a href="javascript:void (0)">缩小</a> </li>
              <li><i class="glyphicon glyphicon-zoom-out"></i><a href="javascript:void (0)">放大</a> </li>
              <li><i class="glyphicon glyphicon-screenshot"></i><a href="javascript:void (0)">对比</a> </li>
              <li><i class="glyphicon glyphicon-search"></i><a href="javascript:void (0)">搜索</a> </li>
              <li><i class="glyphicon glyphicon-wrench"></i><a href="javascript:void (0)">工具</a> </li>
              <li><i class="glyphicon glyphicon-fullscreen"></i><a href="javascript:void (0)">全屏</a> </li>
          </ul>
      </div>
      <div class="map_select">
          <p><input type="checkbox"><span>人员</span></p>
          <p><input type="checkbox"><span>车辆</span></p>
          <p><input type="checkbox"><span>房屋</span></p>
          <p><input type="checkbox"><span>摄像头</span></p>
      </div>

  </div>

    <!--右侧功能栏-->
    <div class="right map_right ">
        <div class="map_right_top">
            <ul><li class="li_active">预警信息</li>
                <li>分类搜索</li>
                <li>专题信息</li></ul>
        </div>
        <div class="map_con">
            <div class="map_con_div" style="display: block" >
                <div class="map_chart">

                    <p id="char1" class="p_chart"></p>
                </div>
                <div class="div_any_child">
                    <!--<div class="div_any_title"><img src="img/title_4.png">行驶时长排名前5位 </div>-->
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
            <div class="map_con_div" >
                <p>
                    <input type="text" placeholder="输入关键字" class="carNo_input"><input type="button" class="find_but">
                </p>
                <div class="map_work">
                    <ul>
                        <li>
                            <div class="img_div img_div01"></div>
                            <div class="img_div_text">便民服务</div>
                        </li>
                        <li>
                            <div class="img_div img_div02"></div>
                            <div class="img_div_text">便民服务</div>
                        </li>
                        <li>
                            <div class="img_div img_div01"></div>
                            <div class="img_div_text">便民服务</div>
                        </li>
                        <li>
                            <div class="img_div img_div01"></div>
                            <div class="img_div_text">便民服务</div>
                        </li>
                        <li>
                            <div class="img_div img_div01"></div>
                            <div class="img_div_text">便民服务</div>
                        </li>
                        <li>
                            <div class="img_div img_div01"></div>
                            <div class="img_div_text">便民服务</div>
                        </li>
                        <li>
                            <div class="img_div img_div01"></div>
                            <div class="img_div_text">便民服务</div>
                        </li>
                        <li>
                            <div class="img_div img_div01"></div>
                            <div class="img_div_text">便民服务</div>
                        </li>
                        <li>
                            <div class="img_div img_div01"></div>
                            <div class="img_div_text">便民服务</div>
                        </li>
                    </ul>
                    <div class="map_resList">
                        <p class="set_list"><i class="list_i"></i> 查询结果：<span class="right"><i class="glyphicon glyphicon-backward back_i"></i><a href="javascript:void(0)" onclick="back()">返回 </a> </span></p>
                        <ul>
                            <li><p><strong>爱尚美术馆</strong><span class="right"><a href="javascript:void(0)" title="视频"><img src="img/nav_5.png"> </a><a href="javascript:void(0)" title="定位"><img src="img/find01.png"> </a> </span></p>
                            <p>四川省成都市高新区北美一路31号</p></li>
                            <li><p><strong>爱尚美术馆</strong><span class="right"><a href="javascript:void(0)" title="视频"><img src="img/nav_5.png"> </a><a href="javascript:void(0)" title="定位"><img src="img/find01.png"> </a> </span></p>
                                <p>四川省成都市高新区北美一路31号</p></li>
                            <li><p><strong>爱尚美术馆</strong><span class="right"><a href="javascript:void(0)" title="视频"><img src="img/nav_5.png"> </a><a href="javascript:void(0)" title="定位"><img src="img/find01.png"> </a> </span></p>
                                <p>四川省成都市高新区北美一路31号</p></li>
                            <li><p><strong>爱尚美术馆</strong><span class="right"><a href="javascript:void(0)" title="视频"><img src="img/nav_5.png"> </a><a href="javascript:void(0)" title="定位"><img src="img/find01.png"> </a> </span></p>
                                <p>四川省成都市高新区北美一路31号</p></li>
                            <li><p><strong>爱尚美术馆</strong><span class="right"><a href="javascript:void(0)" title="视频"><img src="img/nav_5.png"> </a><a href="javascript:void(0)" title="定位"><img src="img/find01.png"> </a> </span></p>
                                <p>四川省成都市高新区北美一路31号</p></li>
                        </ul>
                        <div id="page"></div>
                    </div>
                </div>
            </div>
            <div class="map_con_div">
                <div class=" bow_shadow">
                    <p>
                        <input type="text" placeholder="输入关键字" class="carNo_input"><input type="button" class="find_but">
                    </p>

                    <p class="set_list"><i class="list_i"></i> 专题列表：</p>
                    <p ><ul id="treeDemo" class="ztree"></ul></p>
                </div>
            </div>

        </div>

    </div>

</div>
</template>

<script>
import mapSmall from './mapSmall.vue'
export default {
  data () {
    return {
      clientHeight: ''
    }
  },
  components: {
    mapSmall
  },
  created () {

  },
  mounted () {
    this.clientHeight = `${document.documentElement.clientHeight}`
    window.onresize = function temp () {
      this.clientHeight = `${document.documentElement.clientHeight}`
    }
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
  methods: {
    changeFixed (clientHeight) { // 动态修改样式
      // console.log(clientHeight)
      this.$refs.mapPage.style.height = parseInt(clientHeight) - 82 + 'px'
      // console.log(this.$refs.homePage.style.height, ' this.$refs.carMonitor.style.height')
    }
  }
}
</script>
