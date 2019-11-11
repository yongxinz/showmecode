import stringify from 'json-stable-stringify';
import DataProvider from '@bbfe/data-provider';

import { REQUEST_TIMEOUT } from '@/constants';

import transformOptions from './transformOptions';
import errorParse from './errorParse';
import responseParse from './responseParse';
import bodyParse from './bodyParse';

const dataProvider = new DataProvider({
  timeout: REQUEST_TIMEOUT,
  requestIdResolver (options) {
    return stringify(options);
  }
});

async function request (options) {
  options = await transformOptions(options);
  let response = await dataProvider.request(options);
  response = await errorParse(response);
  response = await responseParse(response);
  response = await bodyParse(response);

  return response;
}

export default request;
