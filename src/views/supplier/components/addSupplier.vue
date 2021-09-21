<template>
  <div>
    <el-page-header content="新建供应商" @back="goBack" />
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
