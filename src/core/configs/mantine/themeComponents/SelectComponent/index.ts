import { SelectProps, ThemeComponent } from '@mantine/core';

function replaceNonNumerics(arg: string) {
  return Number(arg.replaceAll(/\D/g, ''));
}

const defaultProps: Partial<SelectProps> = {
  withinPortal: true,
  styles: (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },

    wrapper: {
      margin: 0,
    },

    error: {
      marginTop: replaceNonNumerics(theme.spacing.xs) / 2,
    },

    description: {
      order: 3,
      marginTop: replaceNonNumerics(theme.spacing.xs) / 2,
    },
  }),
};

export default {
  defaultProps,
} as ThemeComponent;
