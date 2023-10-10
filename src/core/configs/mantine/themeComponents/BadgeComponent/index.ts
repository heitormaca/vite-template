import { BadgeProps, ThemeComponent } from '@mantine/core';

const defaultProps: Partial<BadgeProps> = {
  variant: 'filled',
  style: {
    textTransform: 'capitalize',
    fontWeight: 600,
  },
  radius: 'xs',
};

export default {
  defaultProps,
} as ThemeComponent;
