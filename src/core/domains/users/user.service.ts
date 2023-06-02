import axiosInstance from '@/core/configs/axios';
import {
  User,
  UserCreateRequest,
  UserEditRequest,
  UserListResponse,
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

  async create(data: UserCreateRequest) {
    const result = await axiosInstance.post<User>(`${URL_CONTROLLER}`, data);

    return result.data;
  },

  async edit(data: UserEditRequest) {
    const result = await axiosInstance.put<User>(
      `${URL_CONTROLLER}/${data.id}`,
      data
    );

    return result.data;
  },

  async delete(id: string) {
    const result = await axiosInstance.delete(`${URL_CONTROLLER}/${id}`);

    return result.data;
  },
};
