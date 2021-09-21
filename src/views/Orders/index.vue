<template>
  <div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="12">
          用户查询：
          <el-input placeholder="输入用户ID注册账号" size="mini" />
          <el-button type="primary" size="mini">查询</el-button>
        </el-col>
        <el-col :span="12">
          会员查询：
          <el-input placeholder="输入会员ID注册账号" size="mini" />
          <el-button type="primary" size="mini">查询</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt mb">
      <el-row>
        <span>订单查询：</span>
        <el-button type="success" plain size="mini">全部订单</el-button>
        <el-button type="primary" plain size="mini">代发货</el-button>
        <el-button type="warning" plain size="mini">逐步批准</el-button>
        <el-button type="danger" plain size="mini">物流查询</el-button>
      </el-row>
    </el-card>
    <Tables :tab-data="tabData" height="65" />
  </div>
</template>

<script>
import Tables from '@/components/tables/Tables.vue'
export default {
  components: { Tables },
  data() {
    return {
      tabData: {
        tabHeader: [
          { pros: 'account', labels: '商品编号' },
          { pros: 'name', labels: '商品名称' },
          { pros: 'category', labels: '商品类别' },
          { pros: 'maximum', labels: '最高' },
          { pros: 'image', labels: '图片' },
          { pros: 'repertory', labels: '库存' },
          { pros: 'minPrice', labels: '进货价' },
          { pros: 'date', labels: '加入时间' },
          { pros: 'status', labels: '状态' }
        ],
        persons: []
      }
    }
  },
  created() {
    // get('/all').then((res) => {
    //   this.tabData.persons = res.data.list
    // })
  }
}
</script>
<style lang="scss" scoped>
.el-input {
  width: 40%;
  margin-right: 10px;
}
</style>
