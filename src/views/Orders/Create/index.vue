<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="商品名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="商品">
        <el-select v-model="form.region" placeholder="选择发货单">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="日期选择">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择时间" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="在线配送">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="商品类别">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="家具家电" name="type" />
          <el-checkbox label="服饰衣帽" name="type" />
          <el-checkbox label="电脑及配件" name="type" />
          <el-checkbox label="手机及配件" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="商品来源">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="商品备注">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

