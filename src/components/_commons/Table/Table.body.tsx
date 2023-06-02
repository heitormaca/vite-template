/* eslint-disable @typescript-eslint/no-explicit-any */
import { Loader, Stack, Text } from '@mantine/core';
import { IconInbox } from '@tabler/icons-react';
import { useTableStyles } from './Table.styles';
import { TableBodyProps } from './Table.types';

function TableBody<D extends Record<string, any>>({
  data,
  columns,
  loading,
  empty,
}: TableBodyProps<D>) {
  const { classes, cx } = useTableStyles();
  const tableData: D[] = data || [];

  return (
    <tbody>
      {loading && (
        <tr>
          <td colSpan={columns?.length}>
            <Stack align="center" spacing="sm">
              <Loader size="sm" />
              <Text color="dimmed" weight="bold">
                Carregando...
              </Text>
            </Stack>
          </td>
        </tr>
      )}

      {!loading && !tableData.length && (
        <tr>
          <td colSpan={columns?.length}>
            {!!empty && empty}
            {!empty && (
              <Stack align="center" spacing="sm">
                <IconInbox className={classes.emptyIcon} />
                <Text color="dimmed" weight="bold">
                  Não há dados
                </Text>
              </Stack>
            )}
          </td>
        </tr>
      )}

      {!loading &&
        tableData.map((item, trIndex) => (
          <tr key={trIndex}>
            {columns?.map((column, tdIndex) => (
              <td
                key={tdIndex}
                align={column.align || 'left'}
                className={cx(classes.cell, {
                  [classes.cellFixed]: !!column.fixed,
                  [classes.cellFixedLast]:
                    column.fixed === 'left' &&
                    columns[tdIndex + 1]?.fixed !== 'left',
                  [classes.cellFixedStart]:
                    column.fixed === 'right' &&
                    columns[tdIndex - 1]?.fixed !== 'right',
                })}
                style={{
                  ...column.style,
                  width: column.width,
                  minWidth: column.width,
                  maxWidth: column.width,
                  left:
                    column.fixed === 'left' &&
                    columns[tdIndex - 1]?.fixed === 'left'
                      ? columns[tdIndex - 1]?.width || 0
                      : 0,

                  right:
                    column.fixed === 'right' &&
                    columns[tdIndex + 1]?.fixed === 'right'
                      ? columns[tdIndex + 1]?.width || 0
                      : 0,
                }}
              >
                {column.tail ? (
                  <Text lineClamp={1}>
                    {!!column.render ? column.render(item, trIndex) : null}
                    {!column.render && column.key ? item[column.key] : null}
                  </Text>
                ) : (
                  <>
                    {!!column.render ? column.render(item, trIndex) : null}
                    {!column.render && column.key ? item[column.key] : null}
                  </>
                )}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
  );
}

export default TableBody;
