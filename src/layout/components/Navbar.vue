<template>
  <div class="navbar">
    <el-row>
      <el-col :span="8">
        <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

        <breadcrumb class="breadcrumb-container" />
      </el-col>
      <el-col :span="8" class="message tr">
        <el-badge :value="msgTips" :max="99">
          <router-link to="/message/message"><i class="el-icon-bell" /></router-link>
        </el-badge>
        <el-divider direction="vertical" />
      </el-col>
      <el-col :span="8" class="right-menu">
        <el-tooltip
          class="item"
          effect="dark"
          content="全屏显示"
          placement="bottom"
        >
          <svg-icon
            :icon-class="isFullscreen ? 'unscreenfull' : 'screenfull'"
            @click="setScreen"
          />
        </el-tooltip>
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img src="../../../public/stars.png" class="user-avatar">
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>
                首页
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item command="a">待办事项</el-dropdown-item>
            <el-dropdown-item command="b">个人中心</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">
              <span style="display:block;">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import screenfull from 'screenfull'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      msgTips: 1000,
      isFullscreen: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    setScreen() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
      this.isFullscreen = !this.isFullscreen
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    text-align: right;
    padding-right: 20px;
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
  .el-badge {
  margin-right: 40px;
}
.el-badge i {
  font-size: 20px;
}
.el-dropdown {
  margin-right: 20px;
}
.message {
  margin-top: 15px;
  i {
    font-size: 25px;
  }
}
.el-divider {
  font-size: 32px;
}

 .el-col > i {
  font-size: 30px;
}
.iconfont {
  font-size: 30px;
  margin-right: 30px;
}
.el-icon-user-solid {
  font-size: 30px;
}
.el-icon-bell:hover {
  -webkit-animation: wobble-hor-top 0.8s both;
  animation: wobble-hor-top 0.8s both;
}
.svg-icon{font-size: 42px;margin-right: 10px;padding-bottom: 10px;}
.svg-icon:hover{border: none;}
}
</style>
