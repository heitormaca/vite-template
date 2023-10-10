import { createStyles } from '@mantine/core';

export const useLayoutPrivateStyle = createStyles((theme) => ({
  main: {
    backgroundColor:
      theme.other.layoutPrivate[theme.colorScheme].backgroundColor,
  },

  root: {
    overflowX: 'hidden',
  },
}));
