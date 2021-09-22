<template>
  <div>
    <AllEidt>
      <el-button
        type="success"
        icon="el-icon-plus"
        plain
        @click="add()"
      >新建活动</el-button>
    </AllEidt>
    <el-row :gutter="10" class="mt">
      <el-col :span="4">
        <ProductSort title="活动分类列表" height="75" />
      </el-col>
      <el-col :span="20">
        <Tables :tab-data="tabData" height="68" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { getActivityOfContent } from '@/api/content'
import Tables from '@/components/tables/Tables.vue'
import AllEidt from '@/components/main/AllEidt.vue'
import ProductSort from '@/components/tables/ProductSort.vue'
export default {
  components: { Tables, ProductSort, AllEidt },
  data() {
    return {
      eidtData: [
        { type: 'info', icon: 'el-icon-plus', name: '添加活动', status: 0 },
        { type: 'danger', icon: 'el-icon-minus', name: '批量删除', status: 1 }
      ],
      tabData: {
        tabHeader: [
          { pros: 'account', labels: '商品编号' },
          { pros: 'classify', labels: '所属分类' },
          { pros: 'detail', labels: '活动说明' },
          { pros: 'place', labels: '活动场景' },
          { pros: 'simple', labels: '活动名称' },
          { pros: 'status', labels: '状态' }
        ],
        persons: []
      }
    }
  },
  created() {
    // getActivityOfContent().then(res => {
    //   this.tabData.persons = res.data.list
    // })
  },
  methods: {
    add() {
      this.$router.push('/addActivity')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
