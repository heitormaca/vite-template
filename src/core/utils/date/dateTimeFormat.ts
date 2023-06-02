import dayjs from 'dayjs';

export default function dateTimeFormat(date: string, format?: string) {
  return dayjs(date).format(format || 'DD/MM/YYYY HH:mm:ss');
}
