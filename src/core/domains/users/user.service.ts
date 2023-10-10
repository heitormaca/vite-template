import axiosInstance from '@/core/configs/axios';
import {
  User,
  UserCreateRequest,
  UserListResponse,
  RecoverPassword,
  UpdatePassword,
  UserEdit,
} from './user.types';
import { RequestPagination } from '@/core/types/api.service';

const URL_CONTROLLER = '/users';

export default {
  async list(params?: RequestPagination) {
    const result = await axiosInstance.get<UserListResponse>(
      `${URL_CONTROLLER}`,
      { params: params }
    );

    return result.data;
  },

  async recoverPass(data: RecoverPassword) {
    const result = await axiosInstance.post(
      `${URL_CONTROLLER}/RequestResetPassword`,
      data
    );

    return result.data;
  },

  async updatePass(data: UpdatePassword) {
    const result = await axiosInstance.post(
      `${URL_CONTROLLER}/UpdateForgotPassword`,
      data
    );

    return result.data;
  },

  async create(data: UserCreateRequest) {
    const result = await axiosInstance.post<User>(`${URL_CONTROLLER}`, data);

    return result.data;
  },

  async details(id: string) {
    const result = await axiosInstance.get<User>(`${URL_CONTROLLER}/${id}`);

    return result.data;
  },

  async edit(data: UserEdit) {
    const result = await axiosInstance.put(
      `${URL_CONTROLLER}/${data.id}`,
      data
    );
    return result.data;
  },

  async delete(id: string) {
    const result = await axiosInstance.delete(`${URL_CONTROLLER}/${id}`);

    return result.data;
  },

  async validCode(id: string) {
    const result = await axiosInstance.get(
      `${URL_CONTROLLER}/ValidateResetPasswordCode`,
      { params: { code: id } }
    );

    return result.data;
  },
};
