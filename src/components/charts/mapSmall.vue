<template>
      <!-- 小地图的高度由父组件传入确定  -->
      <div id="map" :style="{height:height}"></div>
</template>

<script>
// import func from 'vue-editor-bridge'
// import * as echarts from 'echarts'
// import $ from 'jQuery'
// import BMap from 'BMap'
import {MP} from './map'
export default {
  name: 'mapSmall',
  props: [
    'boxheight'
  ],
  data () {
    return {
      height: this.boxheight,
      ak: 'O8hWGruur8Govaye6KCyDGitnk7KMszQ',
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 17,
      map: null
    }
  },
  mounted () {
    // this.getHt()
    // this.initMap()
    // this.mapActive()
    // this.mapsmall()
    // this.page()
    // this.mapRestList()
    // this.rightChange()
    // var map = new BMap.Map('fli', {enableMapClick: true})
    // console.log(map)

    this.$nextTick(function () {
      var _this = this
      MP(_this.ak).then(BMap => {
        var map = new BMap.Map('map')
        this.init({BMap, map})
      })
    })
  },
  created () {
    // this.$nextTick(function () {
    //   var _this = this
    //   MP(_this.ak).then(BMap => {
    //     var map = new BMap.Map('map')
    //     this.init({BMap, map})
    //   })
    // })
  },
  methods: {

    init ({BMap, map}) {
      console.log('开始加载地图。。。。')
      // console.log(this.height)
      // map = new BMap.Map('map')
      var point = new BMap.Point(116.404, 39.915)
      map.centerAndZoom(point, 17)
      // var size1 = new BMap.Size(10, 50)
      // map.addControl(new BMap.MapTypeControl({
      //   offset: size1,
      //   mapTypes: [
      //     BMAP_NORMAL_MAP,
      //     BMAP_HYBRID_MAP
      //   ]}
      // ))
      // 编写自定义函数,创建标注
      function addMarker (point) {
        var marker = new BMap.Marker(point)
        map.addOverlay(marker)
      }

      // 随机向地图添加25个标注
      var bounds = map.getBounds()
      var sw = bounds.getSouthWest()
      var ne = bounds.getNorthEast()
      var lngSpan = Math.abs(sw.lng - ne.lng)
      var latSpan = Math.abs(ne.lat - sw.lat)
      for (var i = 0; i < 25; i++) {
        var point1 = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7))
        addMarker(point1)
      }

      map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      // 设备地图颜色
      // var mapStyle = {
      //   style: 'midnight'
      // }
      // map.setMapStyle(mapStyle)

      // 加载城市控件
      var size = new BMap.Size(10, 50)
      map.addControl(new BMap.CityListControl({
        // anchor: BMAP_ANCHOR_TOP_LEFT,
        offset: size
      }))
    }

    // // 获取div的高度
    // getHt () {
    //   var allHeight = $(window).height()
    //   var divHeight = allHeight - 84
    //   $('#car_control').css('height', divHeight + 'px')
    // },
    // // 加载地图
    // initMap () {
    // // 百度地图API功能
    //   var map = new BMap.Map('map_box') // 创建Map实例
    //   map.centerAndZoom(new BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
    //   // 添加地图类型控件
    //   var size1 = new BMap.Size(10, 50)
    //   map.addControl(new BMap.MapTypeControl({
    //     offset: size1,
    //     mapTypes: [
    //       // BMAP_NORMAL_MAP,
    //       // BMAP_HYBRID_MAP

    //     ]}))
    //   // 编写自定义函数,创建标注
    //   function addMarker (point) {
    //     var marker = new BMap.Marker(point)
    //     map.addOverlay(marker)
    //   }
    //   // 随机向地图添加25个标注
    //   var bounds = map.getBounds()
    //   var sw = bounds.getSouthWest()
    //   var ne = bounds.getNorthEast()
    //   var lngSpan = Math.abs(sw.lng - ne.lng)
    //   var latSpan = Math.abs(ne.lat - sw.lat)
    //   for (var i = 0; i < 25; i++) {
    //     var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7))
    //     addMarker(point)
    //   }

    //   map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
    //   map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
    //   /// /设备地图颜色
    //   // var mapStyle={
    //   //    style:"midnight"
    //   // };
    //   // map.setMapStyle(mapStyle);

    //   // 加载城市控件
    //   var size = new BMap.Size(10, 50)
    //   map.addControl(new BMap.CityListControl({
    //     // anchor: BMAP_ANCHOR_TOP_LEFT,
    //     offset: size

    //   }))
    // }

    // // 工具条点击效果
    // mapActive () {
    //   $('.map_top>ul>li').click(function () {
    //     $(this).addClass('active').siblings().removeClass('active')
    //     $(this).find('a').addClass('active')
    //     $(this).find('a').parents('li').siblings().find('a').removeClass('active')
    //   })
    // },

    // // 统计分析图
    // mapsmall () {
    //   var myChart = echarts.init(this.$refs.mapSmall)

    //   var option = {
    //     tooltip: {
    //       trigger: 'item',
    //       formatter: '{a} <br/>{b} : {c} ({d}%)'
    //     },
    //     legend: {
    //       orient: 'vertical',
    //       x: 'right',
    //       textStyle: {
    //         color: '#ffffff'

    //       },
    //       data: ['客运车', '危险品车', '网约车', '学生校车']
    //     },

    //     calculable: false,
    //     series: [
    //       {
    //         name: '车类型',
    //         type: 'pie',
    //         radius: ['40%', '70%'],
    //         itemStyle: {
    //           normal: {
    //             label: {
    //               show: false
    //             },
    //             labelLine: {
    //               show: false
    //             }
    //           },
    //           emphasis: {
    //             label: {
    //               show: true,
    //               position: 'center',
    //               textStyle: {
    //                 fontSize: '20',
    //                 fontWeight: 'bold'
    //               }
    //             }
    //           }
    //         },
    //         data: [
    //           {value: 335, name: '客运车'},
    //           {value: 310, name: '危险品车'},
    //           {value: 234, name: '网约车'},
    //           {value: 135, name: '学生校车'}

    //         ]
    //       }
    //     ]
    //   }

    //   myChart.setOption(option)
    //   window.addEventListener('resize', function () { myChart.resize() })
    // },

    // page () {
    //   $('#page').Page({
    //     totalPages: 9, // 分页总数
    //     liNums: 1, // 分页的数字按钮数(建议取奇数)
    //     activeClass: 'activP', // active 类样式定义
    //     callBack: function (page) {
    //       // console.log(page)
    //     }
    //   })
    // },

    // // 专题图点击
    // mapRestList () {
    //   $('.map_work>ul>li').click(function () {
    //     $('.map_work>ul').hide()
    //     $('.map_resList').show()
    //   })
    // },

    // // 返回
    // back () {
    //   $('.map_work>ul').show()
    //   $('.map_resList').hide()
    // },

    // // 右侧功能界面切换
    // rightChange () {
    //   $('.map_right_top>ul>li').click(function () {
    //     var ins = $(this).index()
    //     $(this).addClass('li_active').siblings().removeClass('li_active')
    //     $('.map_con .map_con_div').eq(ins).show().siblings().hide()
    //   })
    // }
  }
}
</script>
