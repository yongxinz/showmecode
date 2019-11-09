<template>
  <div class="page-wrapper">
    <el-container>
      <el-aside
        :width="asideWidth"
        v-show="isshow"
      >
        <h1 class="product">
          <img
            v-if="!isCollapse"
            src="~@/assets/images/logo.png"
            alt="logo"
            class="logo"
          >
          <i
            class="iconfont icon-menu"
            @click="changeCollapse"
          ></i>
        </h1>
        <NavMenu
          class="nav-menu"
          :data="menuData"
          :router="true"
          mode="vertical"
          :defaultActive="$route.path"
          :isCollapse="isCollapse"
        ></NavMenu>
      </el-aside>
      <el-container>
        <el-header v-show="isshow">
          <TopMenu v-on:listenhide='listenhide'></TopMenu>
        </el-header>
        <el-main>
          <BreadCrumb class="bread-crumb"></BreadCrumb>
          <router-view class="main-content"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import routes from '@/configs/routes';
import BreadCrumb from '@/components/common/bread-crumb';
import NavMenu from '@/components/common/nav-menu';
import TopMenu from '@/components/common/top-menu';
import generateMenu from '@/services/menu';
import resources from '@/services/resources';
import '@/assets/icon/iconfont.css';
export default {
  name: 'home',
  components: {
    NavMenu,
    BreadCrumb,
    TopMenu
  },
  data () {
    const menuData = generateMenu(routes[0].children, routes[0].path);
    return {
      menuData,
      isshow: true,
      isCollapse: false,
      asideWidth: '200px'
    };
  },
  watch: {
    // '$route': function () {
    //   if (this.$route.name === 'Search') {
    //     this.listenhide(false);
    //   } else {
    //     this.listenhide(true);
    //   }
    // }
  },
  created () {
    // if (this.$route.name === 'Search') {
    //   this.listenhide(false);
    // } else {
    //   this.listenhide(true);
    // }
  },
  methods: {
    async loginOut () {
      await resources.login.logout();
      this.$router.replace({ name: 'login' });
    },
    changeCollapse () {
      this.isCollapse = !this.isCollapse;
      this.asideWidth = this.isCollapse ? '60px' : '220px';
    },
    listenhide (hide) {
      this.isshow = hide;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: 100%;
}
.el-header {
  display: flex;
  align-items: center;
  z-index: 1;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 10px;
  padding: 0;
  .login-out {
    margin-left: auto;
    cursor: pointer;

    &:hover {
      color: #008dff;
    }
  }
  .el-icon-arrow-left {
    margin-left: 5px;
  }
}

.el-aside {
  display: flex;
  flex-flow: column;
  overflow: hidden;
  background: #1d2939;
}

.el-main {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.main-content {
  flex: 1;
  padding: 10px;
  background: #fff;
  overflow: auto;
  position: relative;
}

.bread-crumb {
  margin-bottom: 8px;
  font-size: 10px;

  /deep/ .el-breadcrumb__inner.is-link {
    color: #999;
    font-weight: normal;
  }
  /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner.is-link {
    color: #333;
  }
}

.product {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1;
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  text-align: center;

  .logo {
    width: 135px;
    height: 60px;
  }
  .icon-menu {
    cursor: pointer;
  }
}
</style>
