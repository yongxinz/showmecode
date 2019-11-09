export const GET = 'GET';
export const HEAD = 'HEAD';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';
export const PATCH = 'PATCH';
export const OPTIONS = 'OPTIONS';

// 不支持 CONNECT 和 TRACE 方法
// 实例化 Request 对象，如果方法是 CONNECT 或 TRACE，会抛出异常
// export const CONNECT = 'CONNECT';
// export const TRACE = 'TRACE';

export default { GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH };
