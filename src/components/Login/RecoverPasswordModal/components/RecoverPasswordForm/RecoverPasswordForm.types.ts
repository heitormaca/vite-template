export interface RecoverPasswordFormValues {
  email: string;
}

export type RecoverPasswordFormProps = {
  email: string;
  onFinish: VoidFunction;
};
