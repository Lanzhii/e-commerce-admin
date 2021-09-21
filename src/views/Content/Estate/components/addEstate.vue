<template>
  <div>
    <el-page-header content="新建优惠卷" @back="goBack" />
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/content/estate')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
