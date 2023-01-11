<template>
    <div class="con1 left">
        <!--面包屑 begin -->
        <!-- <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 文件上传
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        <!--面包屑 end -->

        <div class="container" :style="{height:divHeight}">

            <!--操作栏 begin-->
            <div class="handle-box">
                <el-button type="primary" icon="el-icon-upload" class="mr10" @click="uploadFiles()">文件上传</el-button>
                <el-input v-model="query.nameSearch" placeholder="文件名" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <!--操作栏 end-->

            <!-- table主要区域 begin -->
            <el-table
                :data="tableData"
                stripe
                border
                class="table"
                ref="multipleTable"
                align="center"
                :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ 'text-align': 'center' }"
                header-cell-class-name="table-header"
                style="margin:auto;"
            >
                <el-table-column prop="id" label="ID" align="center" v-if="idShow"></el-table-column>
                <el-table-column prop="filename" width="400" label="文件名" show-overflow-tooltip></el-table-column>
                <el-table-column prop="totalSizeName"  width="150" label="文件大小"></el-table-column>
                <el-table-column prop="location" label="location" align="center" v-if="idShow"></el-table-column>
                <el-table-column prop="identifier" label="identifier" align="center" v-if="idShow"></el-table-column>
                <el-table-column prop="uploadTimeString" width="250" label="上传时间"></el-table-column>
                <el-table-column label="操作" width="150" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-download"
                            class="blue"
                            @click="handleDownload(scope.$index, scope.row)"
                        >下载</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- table主要区域 end -->

            <!-- 分页 begin -->
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
            <!-- 分页 end -->
        </div>

        <!--上传附件弹出框 -->
        <el-dialog v-dialogDrag title="文件上传" center :visible.sync="uploadVisible" width="60%" @close="handlerClose">
            <upload-file class="uploadSlot"></upload-file>
        </el-dialog>
    </div>
</template>

<script>
import uploadFile from './uploads/Upload.vue'
import {selectFileList, deleteFile} from './uploads/uploadFile'
export default {
  data () {
    return {
      query: {
        nameSearch: '',
        pageIndex: 1,
        // 默认每页显示5条记录
        pageSize: 5
      },
      idShow: true,
      // tableData: [],
      tableData: [
        {'id': '1',
          'filename': '我的视频',
          'totalSizeName': '200',
          'location': '11111',
          'identifier': '222222',
          'uploadTimeString': '2023-1-11'
        },
        {'id': '2',
          'filename': '我的视频',
          'totalSizeName': '200',
          'location': '11111',
          'identifier': '222222',
          'uploadTimeString': '2023-1-11'
        },
        {'id': '3',
          'filename': '我的视频',
          'totalSizeName': '200',
          'location': '11111',
          'identifier': '222222',
          'uploadTimeString': '2023-1-11'
        },
        {'id': '4',
          'filename': '我的视频',
          'totalSizeName': '200',
          'location': '11111',
          'identifier': '222222',
          'uploadTimeString': '2023-1-11'
        },
        {'id': '5',
          'filename': '我的视频',
          'totalSizeName': '200',
          'location': '11111',
          'identifier': '222222',
          'uploadTimeString': '2023-1-11'
        },
        {'id': '6',
          'filename': '我的视频',
          'totalSizeName': '200',
          'location': '11111',
          'identifier': '222222',
          'uploadTimeString': '2023-1-11'
        }
      ],
      multipleSelection: [],
      uploadVisible: false,
      pageTotal: 6,
      form: {},
      id: -1,
      divHeight: ''
    }
  },
  components: {
    uploadFile
  },
  watch: {
    divHeight (val) {
      if (!this.timer) {
        this.divHeight = val
        this.timer = true
        setTimeout(function () {
          this.timer = false
        }, 400)
      }
    }
  },
  created () {
    // 首先应当获取数据库中的原始数据
    // this.getData()
    this.divHeight = document.documentElement.clientHeight - 81 + 'px'
  },
  mounted () {
    window.onresize = () => {
      return (() => {
        this.divHeight = document.documentElement.clientHeight - 81 + 'px'
      })()
    }
  },
  methods: {
    // 获取文件列表
    getData () {
      selectFileList(this.query).then(res => {
        this.tableData = res.data.list
        this.pageTotal = res.data.total || 10
      })
    },
    // 触发搜索按钮
    handleSearch () {
      this.$set(this.query, 'pageIndex', 1)
      this.getData()
    },
    // 关闭上传文件弹出框时触发
    handlerClose () {
      this.$set(this.query, 'pageIndex', 1)
      this.getData()
    },
    // 删除操作
    handleDelete (index, row) {
      // 二次确认删除
      this.$confirm('确定要删除吗？', '提示', {
        type: 'warning'
      }).then(async () => {
        let result = await deleteFile(row)
        console.log(result)
        if (result.data > 0) {
          this.$message.success('删除成功')
          this.tableData.splice(index, 1)
        } else {
          this.$message.error('删除失败')
        }
      }
      )
    },
    uploadFiles () {
      this.uploadVisible = true
    },
    // 下载
    async handleDownload (index, row) {
      this.loadingOverLay = this.$loading({
        lock: true,
        text: '文件生成中',
        spinner: 'el-icon-loading',
        background: 'rgba(0,0,0,0.7)'
      })
      var elemIF = document.createElement('iframe')
      elemIF.src = process.env.VUE_APP_BASE_API + '/uploader/download?id=' + row.id + '&filename=' + row.filename + '&location=' + row.location
      elemIF.style.display = 'none'
      document.body.appendChild(elemIF)
      this.loadingOverLay.close()
    },
    // 分页导航
    handlePageChange (val) {
      this.$set(this.query, 'pageIndex', val)
      this.getData()
    }
  }
}
</script>
<style>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 1200;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
.uploadSlot {
    margin: -10px 10px 10px 30px;
}
</style>
