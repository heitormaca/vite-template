import { CardProps, ThemeComponent } from '@mantine/core';

const defaultProps: Partial<CardProps> = {
  p: 'lg',
  withBorder: true,
  radius: 'md',
  sx: (theme) => ({
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    borderColor:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[7]
        : theme.colors.gray[2],
  }),
};

export default {
  defaultProps,
} as ThemeComponent;
