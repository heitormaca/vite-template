import { createStyles } from '@mantine/styles';

export const useLoginPageStyle = createStyles((theme) => ({
  grid: {
    width: '100vw',
    overflowX: 'hidden',
    margin: 0,
  },

  colBrand: {
    minHeight: '100vh',
    backgroundColor: theme.colors['secondary'][2],
    [theme.fn.smallerThan('md')]: {
      minHeight: 200,
    },
  },

  colForm: {
    minHeight: '100vh',
    boxShadow: theme.shadows.xl,
    [theme.fn.smallerThan('md')]: {
      minHeight: 'calc(100vh - 200px)',
    },
  },
}));
