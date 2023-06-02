import { CSSObject, MantineTheme } from '@mantine/core';

export default function (_theme: MantineTheme): CSSObject {
  return {
    'svg.tabler-icon': {
      width: '1.15rem',
      height: '1.15rem',
    },
  };
}
