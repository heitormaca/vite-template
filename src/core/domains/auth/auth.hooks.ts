import { useAuthContext } from '@/core/auth';
import { useNavigate } from 'react-router-dom';
import { useRouperClient } from 'rouper-navigation';
import { useMutation } from '@tanstack/react-query';
import authService from './auth.service';
import { AuthResponse } from './auth.types';
import jwtDecode from 'jwt-decode';
import { AuthRole, AuthTokenDecoded } from '@/core/auth/auth.types';
import showNotificationError from '@/core/utils/notification/showNotificationError';

export function useAuthLogin() {
  const { setAuthData } = useAuthContext();
  const rouperClient = useRouperClient();
  const navigate = useNavigate();

  return useMutation(authService.login, {
    onSuccess(data: AuthResponse) {
      if (!!data) {
        const tokenData = jwtDecode<AuthTokenDecoded>(data.token);
        setAuthData({
          token: data.token,
          user: {
            name: tokenData.email,
            id: tokenData.sub,
          },
        });

        rouperClient.setClaims([AuthRole.AUTHORIZED]);

        navigate('/app');
      } else {
        showNotificationError(
          null,
          'Autenticação',
          'Houve um erro ao solicitar o acesso, tente novamente'
        );
      }
    },
    onError(error) {
      showNotificationError(error, 'Autenticação');
    },
  });
}
