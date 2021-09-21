<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-steps :active="active" finish-status="success" space="90%">
            <el-step
              v-for="(item, index) in stepsItem"
              :key="index"
              :title="item"
              class="steps-item"
            >
              <template slot="title">
                <div @click="nextTable(index)">{{ item }}</div>
              </template>
            </el-step>
          </el-steps>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      ><h1 class="cart-title">购物车</h1></el-row>
      <el-row>
        <component :is="tabComponent" />
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Table1 from './Shoppings.vue'
import Table2 from './Settlement.vue'
import Table3 from './Receipt.vue'
export default {
  components: { Table1, Table2, Table3 },
  data() {
    return {
      stepsItem: ['购物车', '结算', '待收货'],
      active: 0,
      tabComponent: 'Table1'
    }
  },
  methods: {
    nextTable(n) {
      this.active = n + 1
      this.tabComponent = 'Table' + (n + 1)
      if (this.active > 3) {
        this.active = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.steps-item {
  cursor: pointer;
  margin: 40px 0;
}
.active {
  background: #e2214b;
  color: #fff;
}
.cart-title {
  margin-bottom: 40px;
  color: #272727;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
.tablist{text-align: center;margin:0 auto 55px;width: 570px;position: relative;}
.tablist li{margin-right: 45px;width: 160px;float: left;}
.tablist li a span{background: #efefef;border: 7px solid #fff;border-radius: 50px;color: #9b9b9c;display: inline-block;font-size: 24px;font-weight: bold;height: 56px;line-height: 42px;width: 56px;box-sizing: border-box;}
.tablist li a p{color: #9b9b9c;font-weight: bold;line-height: 20px;text-transform: uppercase;}
.tablist .active span{background: #e2214b;color: #fff;}
.tablist .active p{color: #272727;}
.tablist .line1,.tablist .line2{background: #efefef;height: 2px;position: absolute;top: 27px;width: 146px;}
.tablist .line1{left: 108px;}
.tablist .line2{right: 108px;}
</style>
