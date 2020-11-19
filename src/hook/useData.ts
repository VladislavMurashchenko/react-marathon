import { useState, useEffect } from 'react';
import { EndpointConfig } from '../config';
import req from '../utils/request';

export enum DataStatus {
  LOADING = 'loading',
  ERROR = 'error',
  READY = 'ready',
}

type Props<T> = {
  endpoint: EndpointConfig;
  initialData: T;
  query?: Record<string, any>;
  deps?: any[];
};

const useData = <T>({
  endpoint,
  initialData,
  query = {},
  deps = [],
}: Props<T>) => {
  const [status, setStatus] = useState(DataStatus.LOADING);
  const [data, setData] = useState<T>(initialData);

  useEffect(() => {
    req(endpoint, query)
      .then((data: T) => {
        setData(data);
        setStatus(DataStatus.READY);
      })
      .catch(() => {
        setStatus(DataStatus.ERROR);
      });
  }, deps);

  return {
    data,
    status,
  };
};

export default useData;
