/* istanbul ignore next */
class DataProtocolError extends Error {
  constructor ({ code, message }) {
    super(message);
    this.code = code;
  }
}

export default DataProtocolError;
