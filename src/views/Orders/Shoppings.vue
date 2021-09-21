<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :span-method="spanMethod" @selection-change="change">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="image" label="商品">
        <template slot-scope="scope">
          {{ require(scope.row.image) }}
          <!-- <el-image :src="require(scope.row.image)"></el-image> -->
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="address" label="地址" />
    </el-table>
    <el-image style="width: 100px; height: 100px" :src="require('../../assets/cart-product/1.jpg')" fi="fit" />
  </div>
</template>

<script>
import { get } from '../../utils/http'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      get('/shopping').then((res) => {
        this.tableData = res.data.list
      })
    },
    change(val) {
      this.multipleSelection = val
    },
    spanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row, column)
      if (columnIndex === 3) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
