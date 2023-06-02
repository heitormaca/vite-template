import { useTableStyles } from './Table.styles';
import { TableHeadProps } from './Table.types';

function TableHead<D>({ columns, hasData }: TableHeadProps<D>) {
  const { classes, cx } = useTableStyles();

  return (
    <thead>
      <tr>
        {columns?.map((column, index) => (
          <th
            key={index}
            className={cx(classes.cell, {
              [classes.cellFixed]: !!column.fixed,
              [classes.cellFixedLast]:
                column.fixed === 'left' && columns[index + 1]?.fixed !== 'left',
              [classes.cellFixedStart]:
                column.fixed === 'right' &&
                columns[index - 1]?.fixed !== 'right',
            })}
            style={{
              textAlign: column.align || 'left',
              width: hasData ? column.width : undefined,
              minWidth: hasData ? column.width : undefined,
              maxWidth: hasData ? column.width : undefined,
              ...column.style,
              overflow: 'hidden',
              left:
                column.fixed === 'left' && columns[index - 1]?.fixed === 'left'
                  ? columns[index - 1]?.width || 0
                  : 0,

              right:
                column.fixed === 'right' &&
                columns[index + 1]?.fixed === 'right'
                  ? columns[index + 1]?.width || 0
                  : 0,
            }}
          >
            {column?.title}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
