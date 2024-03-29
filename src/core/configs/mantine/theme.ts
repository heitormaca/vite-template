import { MantineThemeOverride } from '@mantine/core';
import components from './themeComponents';
import globalStyles from './themeGlobalStyles';

export default {
  globalStyles,
  components,
  colors: {
    primary: [
      '#F2FAF5',
      '#E4F3EB',
      '#CAE8D8',
      '#B1DDC5',
      '#98D1B1',
      '#81C69E',
      '#81C69E',
      '#5AA276',
      '#4A8460',
      '#305940',
    ],
    secundary: [
      '#fafafa',
      '#f5f5f5',
      '#eeeeee',
      '#e0e0e0',
      '#bdbdbd',
      '#9e9e9e',
      '#757575',
      '#616161',
      '#424242',
      '#212121',
    ],
  },
  fontFamily: 'Roboto, sans-serif',
  black: '#101113',
  primaryColor: 'blue',
  colorScheme: 'light',
  primaryShade: { light: 6, dark: 6 },
  other: {
    headerHeight: 60,
    layoutPrivate: {
      light: {
        backgroundColor: '#FBFBFB',
      },
      dark: {
        backgroundColor: '#25262B',
      },
    },
  },
} as MantineThemeOverride;
