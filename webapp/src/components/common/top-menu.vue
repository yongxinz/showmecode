<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#1d2939"
    text-color="#fff"
    active-text-color="#1890ff"
  >
    <el-menu-item index="1"><i
        class="iconfont icon-home-fill"
        @click="home"
      ></i></el-menu-item>
    <el-menu-item index="5"><span>Hogwarts v1.0</span></el-menu-item>
    <el-menu-item
      index="4"
      @click="logout"
    >退出</el-menu-item>
    <el-menu-item index="3">欢迎 {{user}}</el-menu-item>
    <el-menu-item index="2">
      <el-badge
        :value='warningnum'
        :hidden='this.warningnum === 0'
        class="item"
      >
        <i class="iconfont icon-bell-fill"></i>
      </el-badge>
    </el-menu-item>
  </el-menu>
</template>

<script>
import '@/assets/icon/iconfont.css'; // 引入图标库
import resources from '@/services/resources';
export default {
  components: {

  },
  async created () {
    // try {
    //   const result = await resources.login.getuser();
    //   this.user = result.results.first_name;
    // } catch (error) {
    //   console.log(error);
    // }
  },
  data () {
    return {
      activeIndex: '1',
      user: '未登录',
      warningnum: 0
    };
  },
  methods: {
    home () {
      // 跳回主页
      this.$router.push('/');
    },
    // ipv4
    isIP (ip) {
      const exp4 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
      const exp6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
      return exp4.test(ip) || exp6.test(ip);
    },
    async logout () {
      await resources.login.logout();
      location.reload();
      // this.$router.replace({ name: 'login' });
      // this.$notify.success({ title: '退出成功' });
      this.$emit('success');
    }
  },
  watch: {
  }
};
</script>
<style lang="scss" scoped>
.el-menu {
  padding: 0;
  width: 100%;
  /deep/.el-menu-item {
    float: right;
  }
}
.el-menu-item:nth-child(1) {
  float: left;
}
/deep/ .el-badge__content.is-fixed {
  top: 10px;
}
.iconfont {
  font-size: 25px;
}
</style>
