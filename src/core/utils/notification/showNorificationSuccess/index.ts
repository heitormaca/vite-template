import { showNotification } from '@mantine/notifications';

export default function showNotificationSuccess(message: string) {
  showNotification({ color: 'primary', message });
}
