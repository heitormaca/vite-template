import { useForm } from '@mantine/form';
import {
  RecoverPasswordFormProps,
  RecoverPasswordFormValues,
} from './RecoverPasswordForm.types';
import { recoverPasswordFormValidate } from './RecoverPasswordForm.config';
import { Button, Stack, TextInput } from '@mantine/core';
import { IconArrowNarrowRight, IconAt } from '@tabler/icons-react';
import { useRecoverPassword } from '@/core/domains/users/user.hooks';

const RecoverPasswordForm: React.FC<RecoverPasswordFormProps> = ({
  email,
  onFinish,
}) => {
  const recoverPass = useRecoverPassword();

  const form = useForm<RecoverPasswordFormValues>({
    initialValues: { email },
    validate: recoverPasswordFormValidate,
  });

  async function handleSubmit(values: RecoverPasswordFormValues) {
    await recoverPass.mutateAsync({ email: values.email });
    onFinish();
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack spacing="xl">
        <TextInput
          label="E-mail"
          withAsterisk
          icon={<IconAt />}
          placeholder="nome@email.com"
          {...form.getInputProps('email')}
        />
        <Button
          rightIcon={<IconArrowNarrowRight />}
          type="submit"
          loading={recoverPass.isLoading}
        >
          Enviar link de recuperação
        </Button>
      </Stack>
    </form>
  );
};

export default RecoverPasswordForm;
