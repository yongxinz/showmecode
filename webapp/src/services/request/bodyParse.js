import { isUndefined, get, has } from 'lodash';

function bodyParse (body) {
  // 兼容错误直接返回给body的情况
  const hasErr = has(body, 'error');
  const code = hasErr ? get(body, 'error.code') : get(body, 'code');
  if (!isUndefined(code)) {
    const msg = (has(body, 'error.msg') || has(body, 'msg')) ? 'msg' : 'message';
    const message = hasErr ? get(body, `error[${msg}]`) : get(body, msg);
    const error = new BusinessError({ code, message });

    // 临时方案，之后考虑直接更改error-definition
    error.detail = hasErr ? get(body, 'error.detail') : get(body, 'detail');
    throw error;
  }

  return body;
}

export default bodyParse;
