import { TableProps as MTableProps, PaginationProps } from '@mantine/core';

type TableColumnAlign = 'left' | 'center' | 'right' | 'justify';

export type TableColumn<D> = {
  key?: keyof D;
  title?: React.ReactNode;
  render?: (item: D, index: number) => React.ReactNode;
  align?: TableColumnAlign;
  width?: number;
  fixed?: 'left' | 'right';
  style?: React.CSSProperties;
  tail?: boolean;
};

export interface TableProps<D = any> extends Omit<MTableProps, 'withBorder'> {
  data: D[];
  columns?: TableColumn<D>[];
  tfootComponent?: React.ReactElement;
  captionComponent?: React.ReactNode;
  headerComponent?: React.ReactNode;
  pagination?: PaginationProps;
  loading?: boolean;
  empty?: React.ReactNode;
}

export type TableHeadProps<D> = {
  columns?: TableColumn<D>[];
  hasData: boolean;
};

export type TableBodyProps<D> = {
  columns?: TableColumn<D>[];
  data?: D[];
  loading?: boolean;
  empty?: React.ReactNode;
};

export type TableHeaderProps = {
  title: string;
  description: string;
  btnName?: string;
  onClick?: VoidFunction;
};
