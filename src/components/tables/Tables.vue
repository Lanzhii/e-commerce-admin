<template>
  <div>
    <el-card class="mt" :body-style="{height:height+'vh'}">
      <el-table
        :data="tabData.persons"
        style="width: 100%"
        :max-height="height+'vh'"
        fixed
        @selection-change="selectChange"
      >
        <el-table-column type="selection" width="55" />
        <vuescroll :ops="ops">
          <el-table-column
            v-for="(item, index) in tabData.tabHeader"
            :key="index"
            :prop="item.pros"
            :label="item.labels"
          />
          <slot />
        </vuescroll>
      </el-table>
    </el-card>
    <el-row type="flex" justify="space-between" class="pages mb" align="middle">
      <el-col :span="24">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="sizeChange"
          @current-change="currentChange"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import vuescroll from 'vuescroll'
import { mapMutations } from 'vuex'
export default {
  components: { vuescroll },
  props: {
    tabData: {
      type: Object,
      required: true
    },
    height: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      dialogVisible: false,
      title: '',
      currentPage: 1,
      selectList: [],
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {
          size: '1px',
          background: '#fff'
        },
        bar: {
          background: '#cecece'
        }
      }
    }
  },
  methods: {
    ...mapMutations(['setRowData']),
    edit(row) {
      this.title = '编辑'
      this.dialogVisible = true
      this.setRowData(row)
    },
    Delete(row) {
      row.name =
        row.length > 1 ? row.map((row) => row.name).toString() : row.name
      this.$alert(`确认要删除${row.name}的人员信息吗？`, '提示', {
        confirmButtonText: '确定',
        beforeClose(a, b, done) {
          console.log('调用axios请求删除数据')
          done()
        }
      })
    },
    enable(row) {
      if (row.length > 1) {
        row = row.map((row) => row.status)
        if (row.every((item) => item === 1)) {
          row.status === 1
        } else if (row.every((item) => item === 2)) {
          row.status === 2
        } else {
          this.$alert('选中的启用或禁用不一致，请重新选中', '提示', {
            confirmButtonText: '确定'
          })
          return
        }
      }
      this.$alert(`确认要${row.status === 1 ? '禁用' : '启用'}吗？`, '提示', {
        confirmButtonText: '确定',
        beforeClose(a, b, done) {
          console.log('调用axios请求处理数据')
          done()
        }
      })
    },
    selectChange(val) {
      this.advance = !val.length
      this.selectList = val.length ? val : []
    },
    visible() {
      this.title = '创建'
      this.dialogVisible = true
      this.setRowData({})
    },
    sizeChange(val) {
      // 发送axios请求
      console.log(`每页 ${val} 条`)
    },
    currentChange(val) {
      // 发送axios请求
      console.log(`当前页: ${val}`)
    },
    hide() {
      this.dialogVisible = false
    },
    freeze(row) {
      row.name =
        row.length > 1 ? row.map((row) => row.name).toString() : row.name
      this.$alert(`确认要冻结${row.name}的人员信息吗？`, '提示', {
        confirmButtonText: '确定',
        beforeClose(a, b, done) {
          console.log('调用axios请求冻结数据')
          done()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pages {
  .el-col:last-child {
    text-align: right;
  }
}
.el-table{overflow-y: auto;overflow-x: auto;}
</style>
