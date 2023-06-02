import { createStyles } from '@mantine/core';

export const useChangeThemeModalStyle = createStyles((theme) => ({
  changeThemeWrapper: {
    flex: 1,
    lineHeight: 0,
    textAlign: 'center',
  },

  changeThemeButton: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: theme.colors.gray[3],
    padding: 8,
    borderRadius: 8,
    marginBottom: theme.spacing.sm,
  },

  changeThemeButtonActive: {
    borderStyle: 'solid',
    borderColor: theme.colors.primary[6],
  },
}));
