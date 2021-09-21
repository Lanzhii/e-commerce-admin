<template>
  <div id="product-sort">
    <el-card ref="productclass" class="product-class" :style="{height:height+'vh'}">
      <h1>{{ title }}</h1>
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        :props="defaultProps"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      require: true,
      type: String
    },
    data: {
      require: true,
      type: Array
    },
    height: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      count: 1
    }
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    handleNodeClick(data) {
      console.log(data)
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region11' }, { name: 'region22' }])
      }
      if (node.level > 3) return resolve([])

      var hasChild
      if (node.data.name === 'region1') {
        hasChild = true
      } else if (node.data.name === 'region2') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }

      setTimeout(() => {
        var data
        if (hasChild) {
          data = [
            {
              name: 'zone' + this.count++
            },
            {
              name: 'zone' + this.count++
            }
          ]
        } else {
          data = []
        }

        resolve(data)
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
#product-sort{
  height: 70vh;
}
.product-class {
  text-align: center;
  h1 {
    font-size: 20px;
    line-height: 60px;
    color: #699;
  }
}
</style>
