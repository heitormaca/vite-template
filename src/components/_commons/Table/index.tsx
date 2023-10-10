import { cloneElement } from 'react';
import TableBody from './Table.body';
import TableHead from './Table.head';
import { useTableStyles } from './Table.styles';
import { TableProps } from './Table.types';
import TablePagination from './Table.pagination';
import { Box, Card, ScrollArea, Table as MTable } from '@mantine/core';

function Table<D extends Record<string, any>>({
  data,
  columns,
  tfootComponent,
  captionComponent,
  headerComponent,
  pagination,
  loading,
  empty,
  width,
  ...props
}: TableProps<D>) {
  const { classes, cx } = useTableStyles();

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
            width: data?.length ? width : undefined,
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
