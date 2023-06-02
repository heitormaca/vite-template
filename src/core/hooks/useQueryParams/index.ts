import { useEffect, useState } from 'react';
import { UseQueryParams } from './useQueryParams.types';
import { useDebouncedValue } from '@mantine/hooks';

function useQueryParams<T = unknown>(_params?: T): UseQueryParams<T> {
  const [params, setParams] = useState<T>();
  const [debounced] = useDebouncedValue(params, 500);
  const [data, setData] = useState<T>();

  useEffect(() => {
    if (_params) {
      setParams({ ...params, ..._params });
    }
  }, [_params]);

  useEffect(() => {
    setData(debounced);
  }, [debounced]);

  function handleParams(reactParams: T, debounced = false) {
    if (debounced) {
      setParams((prev) => ({ ...prev, ...reactParams }));
    } else {
      setData((prev) => ({ ...prev, ...reactParams }));
    }
  }

  return [data, handleParams];
}

export default useQueryParams;
