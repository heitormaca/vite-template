import axiosInstance from '@/core/configs/axios';
import { AuthLogin } from './auth.types';
import { AuthResponse } from './auth.types';

const URL_CONTROLLER = `/auth`;

export default {
  async login(data: AuthLogin) {
    const result = await axiosInstance.post<AuthResponse>(
      `${URL_CONTROLLER}`,
      data
    );

    return result.data;
  },

  async refresh() {
    const result = await axiosInstance.post<AuthResponse>(
      `${URL_CONTROLLER}/refresh`
    );

    return result.data;
  },
};
