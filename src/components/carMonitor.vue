<template>
    <div class="con1 left" id="car_control">
<div class="left car_left">
    <div class="left_up bow_shadow">
        <p>
            <input type="text" placeholder="输入车牌号" class="carNo_input"><input type="button" class="find_but">
        </p>

        <p class="set_list"><i class="list_i"></i> 设备列表：</p>
        <p ><ul id="treeDemo" class="ztree"></ul></p>
    </div>
    <div class="left_down bow_shadow">
<div class="text_center"><a href="javascript:void (0)" class="tab_a tab_aActive">基本信息</a><a href="javascript:void (0)" class="tab_a">云台控制</a> </div>
        <div class="car_content">
            <p><span>车牌号：</span><span>K89076</span></p>
            <p><span>驾驶人姓名：</span><span>K89076</span></p>
            <p><span>车辆品牌：</span><span>K89076</span></p>
            <p><span>车辆型号：</span><span>K89076</span></p>
            <p><span>所属公司：</span><span>K89076xxxxxxxxxxxxxxxxxx</span></p>
            <p><span>行驶里程：</span><span>xxxxx</span></p>
            <p><span>状态：</span><span>xxxxx</span></p>
            <p><span>所在位置：</span><span>xxxxxxxxxxxxx</span></p>
        </div>
    </div>
</div>
    <div class="left car_center">
        <video controls="controls" ></video>
        <video controls="controls" class="magin_left"></video>
        <video controls="controls" class="magin_top"></video>
        <video controls="controls" class="magin_top magin_left"></video>
    </div>
    <div class="right car_right" id="map"></div>
</div>
</template>
