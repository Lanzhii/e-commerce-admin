<template>
  <div>
    <el-row :gutter="10" class="mt">
      <el-col :span="4">
        <ProductSort title="产品类型列表" :data="sortList" height="85" />
      </el-col>
      <el-col :span="20">
        <el-card>
          <el-row type="flex" justify="space-between" align="middle">
            <el-col :span="20">
              <div>
                商品名称：
                <el-input placeholder="输入商品名称" size="mini" />
                <el-button icon="el-icon-search" size="mini">查询</el-button>
              </div>
              <div>
                商品类别：
                <el-input placeholder="输入商品类别" size="mini" />
                <el-button icon="el-icon-search" size="mini">查询</el-button>
              </div>
            </el-col>
            <el-col :span="4" class="classify">
              <el-row type="flex" justify="center" align="middle" :gutter="10">
                <el-col :span="12"><el-avatar :size="50">66%</el-avatar><p>服装服饰</p></el-col>
                <el-col :span="12"><el-avatar :size="50">66%</el-avatar><p>手机数码</p></el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
        <Tables :tab-data="tabData" height="62" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Tables from '@/components/tables/Tables.vue'
import ProductSort from '@/components/tables/ProductSort.vue'
export default {
  components: { Tables, ProductSort },
  data() {
    return {
      sortList: [],
      tabData: {
        tabHeader: [
          { pros: 'name', labels: '所属供应商' },
          { pros: 'classify', labels: '所属分类' },
          { pros: 'product', labels: '商品' },
          { pros: 'repertory', labels: '库存预警' },
          { pros: 'repertoryStatus', labels: '库存预警' },
          { pros: 'number', labels: '进货数量' },
          { pros: 'status', labels: '状态' }
        ],
        persons: []
      }
    }
  },
  created() {
    // get('/accountList').then(res => {
    //   this.sortList = res.list
    // })
    // get('/repertory').then((res) => {
    //   this.tabData.persons = res.data.list
    // })
  }
}
</script>

<style lang="scss" scoped>
.el-input{width: 40%;margin-right: 10px;line-height: 40px;}
.classify{text-align: center;}
</style>
