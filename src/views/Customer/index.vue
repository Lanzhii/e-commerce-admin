<template>
  <div>
    <el-card class="mt search">
      <el-row type="flex" align="middle" justify="space-between">
        <el-col :span="18">
          <el-row>
            <el-col :span="12">
              用户查询：
              <el-input v-model="input1" placeholder="输入用户ID注册账号" size="mini" />
              <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
            </el-col>
            <el-col :span="12">
              会员查询：
              <el-input v-model="input2" placeholder="输入会员ID注册账号" size="mini" />
              <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="5">
          <div class="user">
            <el-row type="flex" align="middle">
              <el-col :span="8">
                <el-avatar :size="50"> 2336486 </el-avatar>
                <p>用户总数</p>
              </el-col>
              <el-col :span="16">
                <p>普通用户：122333</p>
                <p>会员总数：43322</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <Tables :tab-data="tabData" height="62" />
  </div>
</template>

<script>
// import { getCustomer } from '@/api/order'
import Tables from '@/components/tables/Tables.vue'
export default {
  components: { Tables },
  data() {
    return {
      input1: '',
      input2: '',
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
    // getCustomer('/all').then((res) => {
    //   this.tabData.persons = res.data.list
    // })
  }
}
</script>

<style lang="scss" scoped>
.search{
    .el-input{width: 40%;margin-right: 10px;}
}
.user{
    padding: 2px;
    border: #999 1px solid;
    background: #eee;
    text-align: center;
}
</style>
