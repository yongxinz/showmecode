import { addAssert, deleteAssert } from './ErrorAssert';

const errorCodeManagerId = Symbol('errorCodeManagerId');
let errorCodeManager = null;

class ErrorCodeManager {
  static errorCodes = {};

  constructor (id) {
    if (id !== errorCodeManagerId) {
      throw new Error('Can not create a ErrorCodeManager instance.');
    }
  }

  static getInstance () {
    if (errorCodeManager === null) {
      errorCodeManager = new ErrorCodeManager(errorCodeManagerId);
    }

    return errorCodeManager;
  }

  register (codes) {
    codes = Object.entries(codes);

    for (const [name, value] of codes) {
      ErrorCodeManager.errorCodes[name] = value;
      addAssert(name, value);
    }
  }

  unregister (codeNames) {
    for (const name of codeNames) {
      delete ErrorCodeManager.errorCodes[name];
      deleteAssert(name);
    }
  }
};

export default ErrorCodeManager;
