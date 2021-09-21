<template>
  <div>
    <Search :data="search" />
    <AddEidt :button-data="addData" />
    <Tables :tab-data="tabData" height="70" />
  </div>
</template>

<script>
import Search from '@/components/main/Search.vue'
import Tables from '@/components/tables/Tables.vue'
export default {
  components: { Search, Tables },
  data() {
    return {
      search: [
        { name: '供应商名称：', tip: '输入供应商名称', input: '' },
        { name: '供应商商品名称：', tip: '输入供应商商品名称', input: '' }
      ],
      addData: [
        { type: 'warning', icon: 'el-icon-plus', name: '采购商品', status: 0 },
        { type: 'danger', icon: 'el-icon-minus', name: '批量删除', status: 1 }
      ],
      tabData: {
        tabHeader: [
          { pros: 'account', labels: '商品编号' },
          { pros: 'name', labels: '供应商名称' },
          { pros: 'product', labels: '商品' },
          { pros: 'date', labels: '进货时间' },
          { pros: 'person', labels: '操作员' },
          { pros: 'size', labels: '规格' },
          { pros: 'price', labels: '进货价格' },
          { pros: 'number', labels: '进货数量' },
          { pros: 'text', labels: '备注' }
        ],
        persons: []
      }
    }
  },
  created() {
    // get('/todo').then((res) => {
    //   this.tabData.persons = res.data.list
    // })
  }
}
</script>

<style lang="scss" scoped>
</style>
