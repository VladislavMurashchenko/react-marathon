import config, { EndpointConfig } from '../config';

const getUrlWithParamsConfig = (
  endpointConfig: EndpointConfig,
  query: Record<string, any>,
) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query,
  };

  return url;
};

export default getUrlWithParamsConfig;
