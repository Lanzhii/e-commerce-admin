<template>
  <div>
    <Search :data="search" />
    <AllEidt :button-data="contentData" class="mt">
      <el-button
        type="success"
        icon="el-icon-plus"
        plain
        @click="add(item)"
      >新建供应商</el-button>
    </AllEidt>
    <Tables :tab-data="tabData" height="62" />
  </div>
</template>

<script>
import Search from '@/components/main/Search.vue'
import Tables from '@/components/tables/Tables.vue'
import AllEidt from '@/components/main/AllEidt.vue'
export default {
  components: { Tables, AllEidt, Search },
  data() {
    return {
      advance: true,
      contentData: [
        { type: 'warning', icon: 'el-icon-plus', name: '添加供应商', status: 0 },
        { type: 'danger', icon: 'el-icon-minus', name: '批量删除', status: 1 }
      ],
      search: [
        { name: '供应商名称：', tip: '输入供应商名称', input: '' },
        { name: '供应商商品名称：', tip: '输入供应商商品名称', input: '' }
      ],
      tabData: {
        tabHeader: [
          { pros: 'account', labels: '商品编号' },
          { pros: 'name', labels: '供应商名称' },
          { pros: 'addressNum', labels: '供应商邮编' },
          { pros: 'address', labels: '供应商所属地区' },
          { pros: 'product', labels: '供应商产品' },
          { pros: 'telphone', labels: '供应商电话' },
          { pros: 'phone', labels: '联系人电话' },
          { pros: 'status', labels: '状态' },
          { pros: 'person', labels: '联系人' }
        ],
        persons: []
      }

    }
  },
  created() {
    // get('/supplier').then((res) => {
    //   this.tabData.persons = res.data.list
    // })
  },
  methods: {
    add() {
      this.$router.push('/addSupplier')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
