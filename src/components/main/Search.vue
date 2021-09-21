<template>
  <div>
    <el-card class="lookfor">
      <el-row type="flex" justify="space-between">
        <el-col v-for="(item,n) in data" :key="n" :span="spans">
          {{ item.name }}
          <el-input v-model="item.input" :placeholder="item.tip" size="mini" />
        </el-col>
        <el-col :span="spans">
          <el-button type="primary" round icon="el-icon-search" size="mini" plain>搜索</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      require: true,
      type: Array
    }
  },
  computed: {
    spans() {
      return 24 / (this.data.length + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.lookfor {
  .el-input {
    width: 50%;
  }
}
</style>
