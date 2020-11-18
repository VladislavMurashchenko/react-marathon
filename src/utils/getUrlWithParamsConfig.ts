import config, { EndpointConfig } from '../config';

const getUrlWithParamsConfig = (endpointConfig: EndpointConfig) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };

  return url;
};

export default getUrlWithParamsConfig;
