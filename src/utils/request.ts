import url from 'url';
import { EndpointConfig } from '../config';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const req = (endpointConfig: EndpointConfig) => {
  const uri = url.format(getUrlWithParamsConfig(endpointConfig));

  return fetch(uri).then((res) => res.json());
};

export default req;
