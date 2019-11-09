import { isPlainObject, isEmpty } from 'lodash';
import path2reg from 'path-to-regexp';

/**
 * 根据 resource 配置生成 resource 方法
 * @param {Object} resourcesConfig resource 配置
 * @param {Function} requestMethod 请求方法
 */
function generateResources (resourcesConfig, requestMethod) {
  const resources = {};

  Object.keys(resourcesConfig).forEach(category => {
    const methodsConfig = resourcesConfig[category];
    resources[category] = {};
    Object.keys(methodsConfig).forEach(method => {
      // 生成的 resource 方法
      resources[category][method] = function (
        body,
        { params, headers, query } = {}
      ) {
        const config = methodsConfig[method];
        let _url = config.url;
        const _body = { ...config.body, ...body };
        const _query = { ...config.query, ...query };
        const _headers = { ...config.headers, ...headers };
        // 将 params 写入 URL
        if (isPlainObject(params)) {
          const toPath = path2reg.compile(_url);
          _url = toPath(params);
        }
        return requestMethod({
          url: _url,
          method: isEmpty(config.method) ? undefined : config.method,
          body: isEmpty(_body) ? undefined : _body,
          query: isEmpty(_query) ? undefined : _query,
          headers: _headers
        });
      };
    });
  });

  return resources;
}

export default generateResources;
