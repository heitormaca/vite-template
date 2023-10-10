import { CardProps, ThemeComponent } from '@mantine/core';

const defaultProps: Partial<CardProps> = {
  py: '3rem',
  px: '2rem',
  shadow: 'none',
  withBorder: true,
  radius: '0.625rem',
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
