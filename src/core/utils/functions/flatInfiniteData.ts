import { ResponsePagination } from '@/core/types/api.service';
import { InfiniteData } from 'react-query';

export default function flatInfiniteData<T>(
  data: InfiniteData<ResponsePagination<T>> | undefined
): T[] {
  return (
    data?.pages?.reduce<T[]>((acc, curr) => [...acc, ...curr.items], []) || []
  );
}
