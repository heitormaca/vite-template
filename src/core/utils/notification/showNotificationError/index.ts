import { AxiosResponseError } from '@/core/types/api.service';
import { showNotification } from '@mantine/notifications';

export default function showNotificationError(
  error: unknown | null,
  title?: string,
  message?: string
) {
  const resError = error as AxiosResponseError;
  let errorMessage = message;

  if (resError.isAxiosError && Array.isArray(resError.request.data)) {
    errorMessage = 'Campos do formulário inválidos';
  } else if (resError) {
    errorMessage = 'Houve um erro';
  }

  showNotification({ color: 'red', message: errorMessage, title });
}
