import { Box, Center, Pagination, PaginationProps } from '@mantine/core';
import { useTableStyles } from './Table.styles';

function TablePagination(props: PaginationProps) {
  const { classes } = useTableStyles();

  return (
    <Box py="xl" className={classes.pagination}>
      <Center>
        <Pagination {...props} />
      </Center>
    </Box>
  );
}

export default TablePagination;
