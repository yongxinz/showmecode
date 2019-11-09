<template>
  <el-breadcrumb class="crumb">
    <el-breadcrumb-item v-for="item in list" :to="item.path" :key="item.path">{{ item.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import router from '@/router';

export default {
  data () {
    return {
      list: []
    };
  },
  created () {
    router.afterEach(this.render);
    this.render();
  },
  methods: {
    render () {
      this.list = this.$route.matched
        .filter(({ meta }) => meta.title && !meta.ignoreTitle)
        .map(({ path, meta }) => {
          const { title } = meta;
          return { path: this.formatParams(path) || '/', title };
        });
    },
    formatParams (path) {
      return path.replace(/:[\w]+/g, $ => {
        return this.$route.params[$.slice(1)];
      });
    }
  }
};
</script>
