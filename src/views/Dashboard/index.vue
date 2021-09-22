<template>
  <div class="dashboard-container">
    <el-card v-if="show" class="text">
      <p>
        <i class="el-icon-s-shop" /> 欢迎您使用电商管理系统！<i
          class="el-icon-close"
          @click="close"
        />
      </p>
    </el-card>
    <el-row :gutter="24" class="mt record">
      <el-col v-for="(item, index) in record" :key="index + 'n'" :span="6">
        <el-card>
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="10">
              <i :class="item.icon" :style="{ color: item.color }" />
            </el-col>
            <el-col :span="14">
              <countTo :start-val="0" :end-val="item.number" :duration="3000" />
              <p>{{ item.name }}</p>
            </el-col>
            <div class="clear" />
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="compare mt" :gutter="24">
      <el-col v-for="(item, index) in dataList" :key="index" :span="6">
        <el-card>
          <p>
            <span class="title">{{ item.title }}</span><span class="look">查看</span>
          </p>
          <p v-for="(n, m) in item.list" :key="m + 'm'">
            <span class="title">{{ n.names }}：</span>
            <span class="content">{{ n.numbers }}</span>
          </p>
        </el-card>
      </el-col>
    </el-row>
    <HomeEcharts />
    <el-row class="fast-title">
      <h3>快捷入口</h3>
    </el-row>
    <el-row :gutter="12" class="fast">
      <el-col v-for="(item, index) in fastEntrance" :key="index" :span="3">
        <el-card>
          <router-link :to="item.link">
            <el-icon :class="item.icon" :style="{ color: item.color }" /><br>
            <p>{{ item.name }}</p>
          </router-link>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import HomeEcharts from './Echarts'
import { mapGetters } from 'vuex'
import { record, statistics } from '@/api/statistics'
export default {
  name: 'Dashboard',
  components: { HomeEcharts, countTo },
  data() {
    return {
      dataList: [],
      record: [],
      show: true,
      fastEntrance: [
        {
          name: '添加商品',
          icon: 'el-icon-coin',
          color: '#9cc',
          link: '/product/product'
        },
        {
          name: '添加优惠券',
          icon: 'el-icon-office-building',
          color: '#39c',
          link: '/content/estate'
        },
        {
          name: '添加活动',
          icon: 'el-icon-truck',
          color: '#c60',
          link: '/content/activity'
        },
        {
          name: '添加文案',
          icon: 'el-icon-notebook-2',
          color: '#c33',
          link: '/content/all'
        },
        {
          name: '添加供应商',
          icon: 'el-icon-user',
          color: '#969',
          link: '/supplier'
        },
        {
          name: '采购进货',
          icon: 'el-icon-chat-dot-square',
          color: '#396',
          link: '/todo'
        },
        {
          name: '物流查询',
          icon: 'el-icon-bank-card',
          color: '#c9c',
          link: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    statistics().then((res) => {
      this.dataList = res.data
    })
    record().then((res) => {
      this.record = res.data
    })
  },
  methods: {
    close() {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 10px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.record {
  margin-bottom: 20px;
  text-align: center;
  i {
    font-size: 70px;
  }
  line-height: 25px;
  font-size: 40px;
}
.compare {
  p {
    line-height: 30px;
    border-radius: 2px;
  }
  .content,
  .title,
  .look {
    display: inline-block;
    width: 48%;
  }
  .content,
  .title {
    text-align: center;
  }
  .look {
    text-align: right;
    padding-right: 5px;
  }
}
.text {
  margin: auto;
  background: #fff;
  line-height: 24px;
  p {
    text-align: center;
    font-size: 20px;
    .el-icon-s-shop {
      font-size: 20px;
    }
    .el-icon-close {
      float: right;
      display: block;
      line-height: 24px;
      margin-right: 20px;
    }
  }
}
.fast-title {
  margin-top: 30px;
  margin-bottom: 10px;
}
.fast {
  text-align: center;
  i {
    font-size: 60px;
  }
}
</style>
