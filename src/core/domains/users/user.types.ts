import { ResponsePagination } from '@/core/types/api.service';
import { Profile } from '../auth/auth.types';

export interface User {
  id: number;
  name: string;
  email: string;
  profile: number;
  status: number;
}

export type RecoverPassword = {
  email: string;
};

export type UpdatePassword = {
  code: string;
  newPassword: string;
  confirmPassword: string;
};

export type UserListResponse = ResponsePagination<User>;

export interface UserCreateRequest {
  name?: string;
  email?: string;
  profile?: Profile;
  password?: string;
}

export enum Status {
  Active = 1,
  Inactive = 0,
}

export type UserFormValues = Omit<User, 'profile' | 'status' | 'id'> & {
  profile: string;
  password: string;
};

export type UserEdit = {
  id: number;
  name: string;
  profile: number;
};
