import Vue from 'vue';
import App from './App.vue';
import router from './router';
import esui from 'element-ui';
import '@/styles/esui-variables.scss';
import 'element-ui/packages/theme-chalk/src/index.scss';
import ERROR_CODES from '@/constants/errorCodes';
import errorHandler from '@/services/errorHandler';

window.__APP_VERSION__ = __VERSION__;

Vue.use(esui);

Vue.config.productionTip = false;
Vue.config.errorHandler = errorHandler;

Vue.prototype.$throw = function (error) {
  if (typeof error === 'string') {
    error = new Error(error);
  }
  if (!(error instanceof Error)) {
    error = new Error('you should throw error or string');
  }
  errorHandler(error, this);
};

const errorCodeManager = ErrorCodeManager.getInstance();
errorCodeManager.register(ERROR_CODES);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
