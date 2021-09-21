<template>
  <div>
    <Search :data="search" />
    <AllEidt>
      <el-button
        v-for="(item, index) in contentData"
        :key="index"
        :type="item.type"
        :icon="item.icon"
        plain
        @click="eidt(item)"
      >{{ item.name }}</el-button>
    </AllEidt>
    <AddProduct :visible="visible" @del="hide" />
    <el-row :gutter="10" class="mt">
      <el-col :span="4">
        <ProductSort title="产品类型列表" :data="sortList" :height="65" />
      </el-col>
      <el-col :span="20">
        <Tables :tab-data="tabData" height="60">
          <el-table-column prop="status" label="状态">
            <template slot-scope="scope">
              {{ scope.row.status == 1 ? "已启用" : "未启用" }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="220">
            <template slot-scope="scope">
              <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="Delete(scope.row)"
              >删除</el-button>
              <el-button size="mini" @click="enable(scope.row)">
                {{ scope.row.status == 1 ? "禁用" : "启用" }}
              </el-button>
            </template>
          </el-table-column>
        </Tables>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Search from '@/components/main/Search.vue'
import Tables from '@/components/tables/Tables.vue'
import ProductSort from '@/components/tables/ProductSort.vue'
import AllEidt from '@/components/main/AllEidt.vue'
import { productList, productAll } from '@/api/product'
export default {
  components: {
    Tables, ProductSort, Search, AllEidt,
    AddProduct: () => import('./components/AddPtoduct.vue')
  },
  data() {
    return {
      advance: true,
      visible: false,
      contentData: [
        { type: 'info', icon: 'el-icon-plus', name: '上架商品', status: 2 },
        { type: 'warning', icon: 'el-icon-plus', name: '新建分类', status: 0 }
      ],
      sortTitle: '产品类型列表',
      sortList: [],
      search: [
        { name: '商品名称：', tip: '输入商品名称', input: '' },
        { name: '添加时间：', tip: '输入日期', input: '' },
        { name: '商品类别：', tip: '输入商品类别', input: '' }
      ],
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
  computed: {
    setPersons() {
      return this.tabData.persons
    }
  },
  created() {
    this.getPersonList()
    productList().then(res => {
      this.sortList = res.list
    })
  },
  methods: {
    eidt(obj) {
      const { status } = obj
      if (status === 2) {
        this.visible = true
      } else if (status === 0) {
        this.$router.push('/account/classify')
      }
    },
    hide() {
      this.visible = false
    },
    getPersonList() {
      productAll().then((res) => {
        this.tabData.persons = res.data.list
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
