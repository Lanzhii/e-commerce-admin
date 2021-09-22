<template>
  <div>
    <el-page-header content="详情页面" @back="goBack" />
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
