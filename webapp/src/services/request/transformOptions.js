import uuid from 'uuid/v4';
import { isObject, isUndefined } from 'lodash';

import { BASE_URL } from '@/constants';

function transformOptions (options) {
  const { url, needBaseUrl = true, method, headers, body } = options;

  if (needBaseUrl && !isUndefined(BASE_URL)) {
    options.url = BASE_URL + url;
  }

  // 因为接口加密需要，加密后的内容需要放到 body 中，所以请求默认都采用 POST
  if (isUndefined(method)) {
    options.method = 'POST';
  }

  if (isUndefined(headers['Content-Type']) && isObject(body)) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(body);
  }

  if (isUndefined(headers['Transaction-Id'])) {
    options.headers['Transaction-Id'] = uuid();
  }

  return options;
}

export default transformOptions;
