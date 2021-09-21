<template>
  <div>
    <el-page-header content="新建活动" @back="goBack" />
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/content/activity')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
