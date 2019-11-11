/* istanbul ignore next */
class BusinessError extends Error {
  constructor ({ code, message }) {
    super(message);
    this.code = code;
  }
};

export default BusinessError;
