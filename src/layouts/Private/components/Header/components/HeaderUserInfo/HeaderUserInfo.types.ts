import { UnstyledButtonProps } from '@mantine/core';

export type HeaderUserInfoProps = UnstyledButtonProps & {
  opened?: boolean;
  showInfo?: boolean;
  name: string;
};
