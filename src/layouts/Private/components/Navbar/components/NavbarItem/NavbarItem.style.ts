import { createStyles } from '@mantine/core';
import { MantinePrimaryShade } from '@mantine/styles/lib/theme/types/MantineTheme';

type Params = { disabled?: boolean; active?: boolean; collapsed?: boolean };

export const useNavbarItemStyle = createStyles((theme, params: Params) => {
  const colorPrimary =
    theme.colors[theme.primaryColor][
      (theme.primaryShade as MantinePrimaryShade)[theme.colorScheme]
    ];

  function getIconColor() {
    if (params.active) {
      return colorPrimary;
    }
    return theme.colorScheme === 'light'
      ? theme.colors.gray[params.disabled ? 5 : 8]
      : theme.colors.gray[params.disabled ? 6 : 1];
  }

  function getBgColor() {
    if (params.active) {
      return theme.colorScheme === 'dark'
        ? `${theme.colors[theme.primaryColor][3]}22`
        : `${theme.colors[theme.primaryColor][1]}66`;
    }
    return theme.colorScheme === 'light' ? theme.white : theme.colors.dark[5];
  }

  function getLabelColor() {
    return params.active
      ? colorPrimary
      : theme.colorScheme === 'light'
      ? theme.colors.gray[params.disabled ? 5 : 8]
      : theme.colors.gray[params.disabled ? 6 : 1];
  }

  return {
    navbarItemLink: {
      cursor: params.disabled ? 'not-allowed' : 'pointer',
      pointerEvents: params.disabled ? 'none' : 'initial',
      borderRight: `3px solid ${params.active ? colorPrimary : 'transparent'}`,
      height: 52,
      padding: `0 ${params.collapsed ? 'auto' : theme.spacing.xl}`,
      display: 'flex',
      justifyContent: params.collapsed ? 'center' : 'init',
      backgroundColor: getBgColor(),
    },

    navbarItemIconWrapper: {
      width: 30,
      height: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    navbarItemIcon: {
      color: getIconColor(),
      width: 22,
      height: 22,
    },

    navbarItemLabel: {
      flex: 1,
      color: getLabelColor(),
      fontWeight: params.active ? 700 : 500,
      display: params.collapsed ? 'none' : 'block',
    },

    navbarItemInfoIcon: {
      color: theme.colors.gray[theme.colorScheme === 'dark' ? 7 : 5],
      display: params.collapsed ? 'none' : 'block',
    },
  };
});
