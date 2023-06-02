import { useForm } from '@mantine/form';
import { Props, RecoverPasswordFormValues } from './RecoverPasswordForm.types';
import { recoverPasswordFormValidate } from './RecoverPasswordForm.config';
import { Button, Stack, TextInput } from '@mantine/core';
import { IconArrowNarrowRight, IconAt } from '@tabler/icons-react';

const RecoverPasswordForm: React.FC<Props> = ({ email, onFinish }) => {
  const form = useForm<RecoverPasswordFormValues>({
    initialValues: { email },
    validate: recoverPasswordFormValidate,
  });

  async function handleSubmit(values: RecoverPasswordFormValues) {
    onFinish(values);
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
        <Button rightIcon={<IconArrowNarrowRight />} type="submit">
          Enviar link de recuperação
        </Button>
      </Stack>
    </form>
  );
};

export default RecoverPasswordForm;
