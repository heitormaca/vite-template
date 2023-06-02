export type UseQueryParams<T> = [
  T | undefined,
  (params: T, debounce?: boolean) => void
];
