import { User } from '@/core/domains/users/user.types';

export type HeaderUserDetailsFormProps = {
  user: User;
  onClose: VoidFunction;
};

export type HeaderUserDetailsFormValues = {
  name: string;
  email: string;
};
