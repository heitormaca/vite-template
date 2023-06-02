/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Card, ScrollArea, Table as MTable } from '@mantine/core';
import { cloneElement } from 'react';
import TableBody from './Table.body';
import TableHead from './Table.head';
import { useTableStyles } from './Table.styles';
import { TableProps } from './Table.types';
import TablePagination from './Table.pagination';

function Table<D extends Record<string, any>>({
  data,
  columns,
  tfootComponent,
  captionComponent,
  headerComponent,
  pagination,
  loading,
  empty,
  ...props
}: TableProps<D>) {
  const { classes, cx } = useTableStyles();
  const tableWidht = columns?.reduce((prev, curr) => {
    return prev + (curr.width || 100);
  }, 0);

  function cloneTFoot() {
    if (tfootComponent) {
      return (
        <tfoot>
          {cloneElement(tfootComponent, { className: classes.tfoot })}
        </tfoot>
      );
    }
  }

  return (
    <Card withBorder className={classes.wrapper}>
      {!!headerComponent && (
        <Box className={classes.filter}>{headerComponent}</Box>
      )}
      <ScrollArea classNames={{ scrollbar: classes.scrollBar }}>
        <MTable
          {...props}
          className={cx(classes.table, props.className)}
          style={{
            width: !!data?.length ? tableWidht : undefined,
            minWidth: '100%',
          }}
        >
          <TableHead<D> columns={columns} hasData={!!data?.length} />
          <TableBody<D>
            data={data}
            columns={columns}
            loading={loading}
            empty={empty}
          />
          {cloneTFoot()}
          {!!captionComponent && captionComponent}
        </MTable>
      </ScrollArea>
      {!!pagination && !!data.length && <TablePagination {...pagination} />}
    </Card>
  );
}

export default Table;
