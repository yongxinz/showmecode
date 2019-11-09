async function responseParse (response) {
  if (response instanceof Response) {
    // 如果响应是 5xx 或 404，转换成错误对象并抛出
    if (/^5\d{2}$/.test(response.status)) {
      throw new NetworkError({
        code: ErrorCodes.INTERNAL_ERROR,
        message: 'internal error'
      });
    } else if (response.status === 404) {
      throw new NetworkError({
        code: ErrorCodes.NOT_FOUND,
        message: 'not found'
      });
      // 登陆失效
    } else if (response.status === 401) {
      const detail = (await response.json()).detail;
      const error = new NetworkError({
        code: ErrorCodes.UNAUTHORIZED,
        message: 'unauthorized'
      });
      error.detail = detail;
      throw error;
    } else if (response.status === 403) {
      window.location.replace('/403');
      throw new NetworkError({
        code: ErrorCodes.FORBIDDEN,
        message: 'forbidden'
      });
    } else {
      // 解析 body
      let body = null;
      const contentType = response.headers.get('content-type');

      if (response.status === 204 || response.status === 205) {
        body = null;
      } else if (/json/.test(contentType)) {
        try {
          body = await response.json();
        } catch (error) {
          throw new DataProtocolError({
            code: ErrorCodes.DATA_DESERIALIZE_FAILED
          });
        }
      } else if (/text/.test(contentType)) {
        body = await response.text();
      } else if (/vnd.ms-excel/.test(contentType)) {
        body = await response.blob();
      }
      return body;
    }
  } else {
    return response;
  }
}
export default responseParse;
