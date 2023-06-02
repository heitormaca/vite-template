import { ResponsePagination } from '@/core/types/api.service';
import { Profile } from '../auth/auth.types';

export interface User {
  id: string;
  name: string;
  imageUri: string | null;
  supplierName: string | null;
  email: string;
  profile: Profile;
  status: Status;
}

export type UserListResponse = ResponsePagination<User>;

export interface UserCreateRequest {
  name?: string;
  supplierName: string | null;
  email?: string;
  imageUri: string | null;
  profile?: Profile;
  password?: string;
}

export interface UserEditRequest {
  id?: string;
  name?: string;
  imageUri?: string;
  supplierName?: string;
}

export enum Status {
  Active = 0,
  Inactive = 0,
}

export type UserFormValues = Omit<User, 'profile' | 'status'> & {
  profile: string;
  password: string;
};
