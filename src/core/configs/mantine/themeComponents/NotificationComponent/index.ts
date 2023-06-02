import { NotificationProps, ThemeComponent } from '@mantine/core';

const defaultProps: Partial<NotificationProps> = {
  styles: (theme) => ({
    root: {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    },
  }),
};

export default {
  defaultProps,
} as ThemeComponent;
