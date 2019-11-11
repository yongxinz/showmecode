import camelCase from 'camelcase';
import BusinessError from './error/BusinessError';
import DataProtocolError from './error/DataProtocolError';
import NetworkError from './error/NetworkError';

const ErrorAssert = {};

// 内置 assert
ErrorAssert.isBusinessError = function (error) {
  return error instanceof BusinessError;
};

ErrorAssert.isDataProtocolError = function (error) {
  return error instanceof DataProtocolError;
};

ErrorAssert.isNetworkError = function (error) {
  return error instanceof NetworkError;
};

function assert (code, error) {
  return (error instanceof Error) && (error.code === code);
}

function addAssert (name, code) {
  const assertName = camelCase(`is_${name}`);
  if (ErrorAssert[assertName] === undefined) {
    ErrorAssert[assertName] = assert.bind(null, code);
  }
}

function deleteAssert (name) {
  const assertName = camelCase(`is_${name}`);
  delete ErrorAssert[assertName];
}

export { ErrorAssert, addAssert, deleteAssert };

// 只是为了测试
export { assert };
