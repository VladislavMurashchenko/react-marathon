import config, { EndpointConfig } from '../config';

const withParams = (params: Record<string, string>, pathname: string) => {
  return Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, value),
    pathname,
  );
};

const splitQueryAndParams = (
  queryAndParams: Record<string, any>,
  pathname: string,
) => {
  return Object.entries(queryAndParams).reduce(
    (acc, [key, value]) => {
      const type = pathname.includes(`{${key}}`) ? 'params' : 'query';
      acc[type][key] = value;
      return acc;
    },
    {
      query: {} as Record<string, any>,
      params: {} as Record<string, string>,
    },
  );
};

const getUrlWithParamsConfig = (
  endpointConfig: EndpointConfig,
  queryAndParams: Record<string, any>,
) => {
  const { host, protocol } = config.client.server;
  const { pathname } = config.client.endpoint[endpointConfig].uri;

  const { query, params } = splitQueryAndParams(queryAndParams, pathname);

  return {
    host,
    protocol,
    pathname: withParams(params, pathname),
    query,
  };
};

export default getUrlWithParamsConfig;
