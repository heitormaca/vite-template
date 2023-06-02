import { AxiosError } from 'axios';

export interface PaginationData {
  page?: number;
  pageSize?: number;
  field?: string;
  sortDirection?: 0 | 1;
  total: number;
  pageCount: number;
  isFirstPage: boolean;
  isLastPage: boolean;
}

// Response

export interface ResponsePagination<T> {
  pagination: PaginationData;
  items: T[];
}

export interface ResponseError {
  name: string;
  fieldErrors: Record<string, string[]>;
  description: string;
}

export type AxiosResponseError = AxiosError<ResponseError>;

// Request

export interface RequestPagination {
  search?: string;
  page?: number;
  pageSize?: number;
  field?: string;
  sortDirection?: 0 | 1;
  hasSortingData?: boolean;
}
