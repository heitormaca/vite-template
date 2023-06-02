import { createStyles } from '@mantine/styles';
import { MantinePrimaryShade } from '@mantine/styles/lib/theme/types/MantineTheme';

export const useLoginPageStyle = createStyles((theme) => ({
  grid: {
    width: '100vw',
    overflowX: 'hidden',
    margin: 0,
  },

  colBrand: {
    minHeight: '100vh',
    backgroundColor:
      theme.colors[theme.primaryColor][
        (theme.primaryShade as MantinePrimaryShade)[theme.colorScheme]
      ],
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
