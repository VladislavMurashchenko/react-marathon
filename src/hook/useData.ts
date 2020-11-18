import { useState, useEffect } from 'react';
import { EndpointConfig } from '../config';
import req from '../utils/request';

export enum DataStatus {
  LOADING = 'loading',
  ERROR = 'error',
  READY = 'ready',
}

const useData = <T>(endpoint: EndpointConfig) => {
  const [status, setStatus] = useState(DataStatus.LOADING);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    req(endpoint)
      .then((data: T) => {
        setData(data);
        setStatus(DataStatus.READY);
      })
      .catch(() => {
        setStatus(DataStatus.ERROR);
      });
  }, []);

  return {
    data,
    status,
  };
};

export default useData;
