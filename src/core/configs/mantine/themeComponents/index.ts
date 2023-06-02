import { MantineThemeOverride } from '@mantine/styles';
import CardComponent from './CardComponent';
import GroupComponent from './GroupComponent';
import ModalComponent from './ModalComponent';
import NotificationComponent from './NotificationComponent';
import SelectComponent from './SelectComponent';

export default {
  Card: CardComponent,
  Group: GroupComponent,
  Modal: ModalComponent,
  Notification: NotificationComponent,
  Select: SelectComponent,
} as MantineThemeOverride['components'];
