<template>
  <div>
    <el-card class="mt">
      <slot />
      <el-button
        type="danger"
        icon="el-icon-minus"
        plain
        disabled
        @click="clearAll(item)"
      >批量删除</el-button>
    </el-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations(['setOpenDialog']),
    eidt(obj) {
      const { status } = obj
      if (status === 2) {
        this.setOpenDialog(true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
