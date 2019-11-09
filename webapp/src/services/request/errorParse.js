function errorParse (response) {
  if (response instanceof Error) {
    if (response.message.indexOf('timeout') !== -1) {
      throw new NetworkError({ code: ErrorCodes.TIMEOUT, message: 'timeout' });
    }
    if (response instanceof TypeError) {
      throw new NetworkError({ code: ErrorCodes.OFFLINE, message: 'offline' });
    }
  }

  return response;
}

export default errorParse;
