<template>
    <section class="sm_section left">
    <form>
        <fieldset class="message_fieldset">
            <legend>基本信息</legend>
            <div class="message_con"><label>新闻标题：</label><input type="text" class="message_input"><span class="must">*</span>
            <p>新闻标题可以输入任一字符，但长度不能小于1大有大于200！</p>
            </div>
            <div class="message_con"><label>新闻类型：</label><select class="message_select"><option>全部类型</option></select><span class="must">*</span>
                <p>新闻标题可以输入任一字符，但长度不能小于1大有大于200！</p>
            </div>
            <div class="message_con"><label>是否需要审核：</label><input type="radio" name="ref" checked><span class="font_color">是</span><input type="radio" name="ref" ><span class="font_color">否</span>

            </div>
            <div class="message_con inputfile_div"><label>附件上传：</label><input type="file" class="message_input input_file"><span class="must">*</span>
                <div><input type="text"><button>选择文件</button></div>
                <p>新闻标题可以输入任一字符，但长度不能小于1大有大于200！</p>
            </div>
        </fieldset>
        <fieldset class="message_fieldset">
            <legend>详情信息</legend>
            <div class="message_con"><label>新闻格式：</label><input type="checkbox" name="ref" checked><span class="font_color">格式一</span><input type="checkbox" name="ref" ><span class="font_color">格式二</span><input type="checkbox" name="ref" ><span class="font_color">格式三</span></div>
            <div class="message_con"><label>新闻详情：</label>
                <textarea id="editor" ></textarea>

            </div>
            </fieldset>
        <div class="message_footer"><button class="bule">保存</button><button class="orgen">取消</button></div>
    </form>

</section>
</template>

<script>
import '@/assets/css/base.css'
import '@/assets/css/tail.css'
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
