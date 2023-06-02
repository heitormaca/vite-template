export interface RecoverPasswordFormValues {
  email: string;
}

export type Props = {
  email: string;
  onFinish: (values: RecoverPasswordFormValues) => void;
};
