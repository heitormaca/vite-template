import { User } from '@/core/domains/users/user.types';
import { ModalProps } from '@mantine/core';

export interface Props extends ModalProps {
  user?: User;
}
