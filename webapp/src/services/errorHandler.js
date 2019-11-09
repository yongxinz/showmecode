import { Message } from 'element-ui';
import errorProcessorConfigs from '@/configs/errorProcessorConfigs';
/**
 *
 * @param {*} error 捕获的错误
 * @param {*} vm 抛出错误的上下文 this 示例
 * @param {*} info 错误补充说明，辅助定位错误产生位置
 *
 * 可以捕捉的错误：
 *   1. 同步函数链抛出的错误；
 *   2. promise 链抛出的错误。（注：watch 中 promise 链抛出的错误暂时无法捕捉）
 *
 * 无法捕捉的错误：
 *   1. 同步函数中调用异步函数时异步函数抛出的错误；
 *   2. 异步函数中未使用 await 调用异步函数时被调异步函数抛出的错误；
 *   3. watch 中 promise 链抛出的错误。（注：截止当前最新的 vue2.6.9 仍不支持）
 * 无法捕捉的错误可以引入此模块，使用 .catch(error => errorHandler(error, this)) 处理。
 */
function errorHandler (error, vm, info) {
  if (error instanceof Error) {
    const errorConfig = errorProcessorConfigs.find(config => config.assert(error));
    if (errorConfig !== undefined) {
      errorConfig.processor(error, vm, info);
    } else {
      Message({
        showClose: true,
        message: (error.message || String(error)),
        type: 'error'
      });
    }
    throw error;
  }
}

export default errorHandler;
