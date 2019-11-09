<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  async created () {
    // try {
    //   await checkLogin();
    // } catch (error) {
    //   if (ErrorAssert.isUnauthorized(error)) {
    //     window.location.replace(error.detail);
    //   } else {
    //     throw error;
    //   }
    // }
  }
};
</script>

<style lang="scss">
@import '~@/styles/base.scss';
</style>
