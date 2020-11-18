import url from 'url';
import { EndpointConfig } from '../config';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const req = (endpointConfig: EndpointConfig, query: Record<string, any>) => {
  const uri = url.format(getUrlWithParamsConfig(endpointConfig, query));

  return fetch(uri).then((res) => res.json());
};

export default req;
