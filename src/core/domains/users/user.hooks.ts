import { useMutation, useQuery, useQueryClient } from 'react-query';
import { User, UserListResponse } from './user.types';
import {
  AxiosResponseError,
  RequestPagination,
} from '@/core/types/api.service';
import userService from './user.service';
import showNotificationError from '@/core/utils/notification/showNotificationError';
import showNotificationSuccess from '@/core/utils/notification/showNorificationSuccess';
import { useNavigate } from 'react-router-dom';

export function useRecoverPassword() {
  return useMutation(userService.recoverPass, {
    onSuccess() {
      showNotificationSuccess('Link de recuperação enviado com sucesso!');
    },
    onError(error) {
      showNotificationError(error, 'Link de recuperação');
    },
  });
}

export function useUpdatePassword() {
  const navigate = useNavigate();
  return useMutation(userService.updatePass, {
    onSuccess() {
      showNotificationSuccess('A senha foi alterada com sucesso!');
      navigate('/');
    },

    onError(error) {
      showNotificationError(error, 'Alteração de senha');
    },
  });
}

export function useUserDetails(id: string) {
  return useQuery<User, AxiosResponseError>(
    ['user', id],
    () => userService.details(id),
    {
      onError(error) {
        showNotificationError(error, 'Detalhes de usuário');
      },
      enabled: !!id,
    }
  );
}

export function useUsers(params?: RequestPagination) {
  return useQuery<UserListResponse, AxiosResponseError>(
    ['users'],
    () => userService.list(params),
    {
      onError(error) {
        showNotificationError(error, 'Listagem de usuários');
      },
    }
  );
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation(userService.create, {
    onSuccess() {
      queryClient.invalidateQueries(['users']);
      showNotificationSuccess('Usuário cadastrado');
    },
    onError(error) {
      showNotificationError(error, 'Cadastro de usuário');
    },
  });
}

export function useUserEdit() {
  const queryClient = useQueryClient();

  return useMutation<User, AxiosResponseError, User>(
    (data) => userService.edit(data),
    {
      onSuccess() {
        queryClient.invalidateQueries(['user']);
        showNotificationSuccess('Perfil de usuário alterado com sucesso!');
      },
      onError(error) {
        showNotificationError(error, 'Alteração de usuário');
      },
    }
  );
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosResponseError, string>(userService.delete, {
    onSuccess() {
      queryClient.invalidateQueries(['users']);
      showNotificationSuccess('Usuário deletado');
    },
    onError(error) {
      showNotificationError(error, 'Remoção de usuário');
    },
  });
}

export function useValidateCode(id: string) {
  const navigate = useNavigate();

  return useQuery<unknown, AxiosResponseError>(
    ['validadeCode', id],
    () => userService.validCode(id),
    {
      onError() {
        navigate('/404');
      },
    }
  );
}
