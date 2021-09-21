<template>
  <div>
    <el-row class="mb mt">
      <el-page-header content="新建分类" @back="goBack" />
    </el-row>
    <el-row :gutter="12" type="flex" justify="space-around">
      <el-col :span="6">
        <ProductSort title="产品类型列表" :data="sortList" height="85" />
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-row :gutter="24">
            <el-col :span="8">
              <el-button icon="el-icon-plus" :disabled="advance">新增子类型</el-button>
            </el-col>
            <el-col :span="8">
              <el-button :disabled="advance">补充该类型</el-button>
            </el-col>
            <el-col :span="8">
              <el-button icon="el-icon-minus" :disabled="advance">删除该类型</el-button>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" class="forms">
            <el-col :span="10">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="分类名称">
                  <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="备注">
                  <el-input v-model="form.desc" type="textarea" />
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="onSubmit"
                  >提交</el-button>
                  <el-button>取消创造</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { productList } from '@/api/product'
import ProductSort from '@/components/tables/ProductSort.vue'
export default {
  components: { ProductSort },
  data() {
    return {
      form: {
        name: '',
        desc: ''
      },
      advance: true,
      sortList: []
    }
  },
  created() {
    productList().then(res => {
      this.sortList = res.list
    })
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    goBack() {
      this.$router.push('/account')
    }
  }
}
</script>

<style lang="scss" scoped>
.forms {
  margin-top: 50px;
}
</style>
