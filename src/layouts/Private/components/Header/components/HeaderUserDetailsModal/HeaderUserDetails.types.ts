import { User } from '@/core/domains/users/user.types';
import { ModalProps } from '@mantine/core';

export type HeaderUserDetailsModalProps = {
  user: User;
} & ModalProps;
