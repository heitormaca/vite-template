import { ModalProps, ThemeComponent } from '@mantine/core';

const defaultProps: Partial<ModalProps> = {
  styles: (theme) => ({
    title: {
      fontWeight: 'bold',
      fontSize: theme.headings.sizes.h3.fontSize,
    },
    inner: {
      [theme.fn.smallerThan('sm')]: {
        padding: 0,
      },
    },
    modal: {
      [theme.fn.smallerThan('sm')]: {
        width: '100vw',
        height: '100vh',
      },
    },
    body: {
      backgroundColor: '#F5F5F5',
    },
    header: {
      backgroundColor: '#F5F5F5',
    },
  }),
  padding: 'lg',
};

export default {
  defaultProps,
} as ThemeComponent;
