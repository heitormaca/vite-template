import { useMutation } from 'react-query';
import fileService from './file.service';
import showNotificationSuccess from '@/core/utils/notification/showNorificationSuccess';
import showNotificationError from '@/core/utils/notification/showNotificationError';
import { AxiosResponseError } from '@/core/types/api.service';
import { FileUploadResponse } from './file.types';

export function useUpload() {
  return useMutation<FileUploadResponse, AxiosResponseError, FormData>(
    (data) => fileService.upload(data),
    {
      onSuccess() {
        showNotificationSuccess('Arquivo carregado com sucesso');
      },
      onError(error) {
        showNotificationError(error, 'Upload de aquivo');
      },
    }
  );
}
