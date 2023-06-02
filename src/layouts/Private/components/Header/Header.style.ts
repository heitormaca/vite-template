import { createStyles } from '@mantine/core';

export const useHeaderStyle = createStyles((theme) => ({
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    borderBottomColor:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[7]
        : theme.colors.gray[2],
  },

  headerBrand: {
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[2]
    }`,
  },

  headerMenuAction: {
    display: 'none',

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
    },
  },
}));
