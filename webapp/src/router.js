import Vue from 'vue';
import Router from 'vue-router';
import routes from './configs/routes';
// import resources from '@/services/resources';

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
});

router.beforeEach((to, from, next) => {
  // window.location.replace('/');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  try {
    next();
  } catch (error) {
    // window.location.replace(error.detail);
    if (ErrorAssert.isUnauthorized(error)) {
      // 跳转登录
      window.location.replace(error.detail);
    } else {
      throw error;
    }
  }
});
export default router;
