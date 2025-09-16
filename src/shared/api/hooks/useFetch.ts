import { type UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query';

export function useFetch<QueryFnData, TError, TData>(option: UndefinedInitialDataOptions<QueryFnData, TError, TData>) {
  return useQuery<QueryFnData, TError, TData>({
    ...option,
  });
}
