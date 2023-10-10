import { TextInputProps } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

export type SearchInputProps<S = any> = Omit<TextInputProps, 'form'> & {
  form: UseFormReturnType<S>;
};
