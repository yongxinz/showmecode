import { debounce } from 'lodash';
import { Message } from 'element-ui';

const DEBOUNCE_TIME = 500;

const $alert = (error) => {
  Message({
    showClose: true,
    message: (error.message || String(error)),
    type: 'error'
  });
};

const errorProcessorConfigs = [{
  assert (error) {
    return ErrorAssert.isTimeout(error);
  },
  processor: debounce(() => $alert('请求超时请重试'), DEBOUNCE_TIME)
}, {
  assert (error) {
    return ErrorAssert.isOffline(error);
  },
  processor: debounce(() => $alert('网络异常'), DEBOUNCE_TIME)
}, {
  assert (error) {
    return ErrorAssert.isInternalError(error);
  },
  processor: debounce(() => $alert('服务不可用'), DEBOUNCE_TIME)
}];

export default errorProcessorConfigs;
