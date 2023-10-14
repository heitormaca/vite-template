import { createStyles } from '@mantine/core';

export const useTableStyles = createStyles((theme) => {
  return {
    scrollBar: {
      zIndex: 2,
    },
    wrapper: {
      padding: `2rem 1.5rem 1rem 2rem !important`,
    },
    filter: {
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.gray[7]
          : theme.colors.gray[2]
      }`,
      padding: theme.spacing.xs,
    },
    pagination: {
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.gray[7]
          : theme.colors.gray[2]
      }`,
      padding: theme.spacing.xs,
    },

    table: {
      'thead tr th, tbody tr td': {
        borderColor:
          theme.colorScheme === 'dark'
            ? theme.colors.gray[7]
            : theme.colors.gray[2],
        padding: `${theme.spacing.lg}px ${theme.spacing.md}px`,
      },
    },

    cell: {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    },

    cellFixed: {
      position: 'sticky',
      left: 0,
      zIndex: 2,
    },

    cellFixedLast: {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        borderRight: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.gray[7]
            : theme.colors.gray[2]
        }`,
      },
    },

    cellFixedStart: {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        borderLeft: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.gray[7]
            : theme.colors.gray[2]
        }`,
      },
    },

    emptyIcon: {
      color: theme.colors.gray[5],
      width: 32,
      height: 32,
    },

    tfoot: {
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.gray[7]
          : theme.colors.gray[2]
      }`,
    },
  };
});
