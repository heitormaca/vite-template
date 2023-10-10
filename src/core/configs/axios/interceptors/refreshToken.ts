import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';
import { authClient } from '@/core/auth';
import authService from '@/core/domains/auth/auth.service';
import { AuthTokenDecoded } from '@/core/auth/auth.types';
import { AxiosError, AxiosInterceptorManager, AxiosResponse } from 'axios';

export default function refreshTokenInterceptor(
  response: AxiosInterceptorManager<AxiosResponse>
) {
  response.use(
    (config) => config,
    async (error: AxiosError) => {
      const token = authClient.getToken();
      const router = window.location;

      if (error.response?.status !== 401) return Promise.reject(error);
      if (router.pathname === 'auth' || router.pathname === 'auth/refresh')
        return Promise.reject(error);

      if (token) {
        const { exp } = jwtDecode<AuthTokenDecoded>(token);
        const expTime = dayjs.unix(exp);
        const now = dayjs();

        const minutesToExpire = expTime.diff(now, 'minutes');

        if (!minutesToExpire || minutesToExpire < 10) {
          try {
            const result = await authService.refresh();
            const tokenData = jwtDecode<AuthTokenDecoded>(result.token);

            authClient.setAuthStorage({
              token: result.token,
              user: {
                name: tokenData.name,
                id: tokenData.sub,
              },
            });
          } catch {
            return Promise.reject(error);
          }
        }
      }
    }
  );
}
