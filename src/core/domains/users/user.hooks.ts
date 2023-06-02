import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UserListResponse } from './user.types';
import {
  AxiosResponseError,
  RequestPagination,
} from '@/core/types/api.service';
import userService from './user.service';
import showNotificationError from '@/core/utils/notification/showNotificationError';
import showNotificationSuccess from '@/core/utils/notification/showNorificationSuccess';

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

export function useEditUser() {
  const queryClient = useQueryClient();

  return useMutation(userService.edit, {
    onSuccess() {
      queryClient.invalidateQueries(['users']);
      showNotificationSuccess('Usuário editado');
    },
    onError(error) {
      showNotificationError(error, 'Edição de usuário');
    },
  });
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
