/* istanbul ignore next */
class NetworkError extends Error {
  constructor ({ code, message }) {
    super(message);
    this.code = code;
  }
};

export default NetworkError;
