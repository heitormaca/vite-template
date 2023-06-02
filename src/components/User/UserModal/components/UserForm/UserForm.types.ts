import { User } from '@/core/domains/users/user.types';

export type Props = {
  onClose: VoidFunction;
  user?: User;
};
