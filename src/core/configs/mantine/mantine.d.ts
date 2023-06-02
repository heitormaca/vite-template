/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tuple, DefaultMantineColor } from '@mantine/core';

type ExtendedCustomColors = 'primary' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeOther {
    headerHeight: number;
    layoutPrivate: {
      light: {
        backgroundColor: string;
      };
      dark: {
        backgroundColor: string;
      };
    };
  }

  interface ThemeComponent {
    defaultProps?:
      | Record<string, any>
      | ((theme: MantineTheme) => Record<string, any>);
    classNames?: Record<string, string>;
    styles?:
      | Record<string, CSSObject>
      | ((theme: MantineTheme, params: any) => Record<string, CSSObject>);
  }

  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
