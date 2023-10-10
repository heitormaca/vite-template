import { useForm, zodResolver } from '@mantine/form';
import {
  Box,
  Button,
  Card,
  PasswordInput,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconArrowNarrowRight, IconLock } from '@tabler/icons-react';
import {
  UpdatePasswordFormProps,
  UpdatePasswordFormValues,
} from './UpdatePassword.types';
import { updatePasswordFormSchema } from './UpdatePasswordForm.configs';
import { useUpdatePassword } from '@/core/domains/users/user.hooks';

const UpdatePasswordForm: React.FC<UpdatePasswordFormProps> = ({ codeId }) => {
  const form = useForm<UpdatePasswordFormValues>({
    initialValues: { newPassword: '', confirmPassword: '' },
    validate: zodResolver(updatePasswordFormSchema),
  });

  const updatePassword = useUpdatePassword();

  async function handleSubmit(values: UpdatePasswordFormValues) {
    await updatePassword.mutateAsync({
      code: codeId,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    });
  }

  return (
    <>
      <Card withBorder>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack spacing="xl">
            <Box>
              <Title order={3}>Alteração de senha</Title>
              <Text color="dimmed">
                Preeencha os campos abaixo para alterar a senha da sua conta.
              </Text>
            </Box>

            <Stack>
              <PasswordInput
                withAsterisk
                label="Nova senha"
                placeholder="********"
                icon={<IconLock />}
                {...form.getInputProps('newPassword')}
              />

              <PasswordInput
                withAsterisk
                label="Confirmar nova senha"
                placeholder="********"
                icon={<IconLock />}
                {...form.getInputProps('confirmPassword')}
              />

              <Button
                type="submit"
                rightIcon={<IconArrowNarrowRight />}
                loading={updatePassword.isLoading}
              >
                Acessar
              </Button>
            </Stack>
          </Stack>
        </form>
      </Card>
    </>
  );
};

export default UpdatePasswordForm;
