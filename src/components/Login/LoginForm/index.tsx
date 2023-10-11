import { useForm } from '@mantine/form';
import { LoginFormValues } from './LoginForm.types';
import { loginFormValidate } from './LoginForm.config';
import { useAuthLogin } from '@/core/domains/auth/auth.hooks';
import { useDisclosure } from '@mantine/hooks';
import {
  Box,
  Button,
  Card,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { IconArrowNarrowRight, IconAt, IconLock } from '@tabler/icons-react';
import RecoverPasswordModal from '../RecoverPasswordModal';

const LoginForm: React.FC = () => {
  const form = useForm<LoginFormValues>({
    validate: loginFormValidate,
  });

  const authLogin = useAuthLogin();

  const [modalOpened, modalAction] = useDisclosure(false);

  async function handleSubmit(values: LoginFormValues) {
    const { hasErrors } = form.validate();

    if (hasErrors) return;
    authLogin.mutateAsync(values);
  }

  return (
    <>
      <Card withBorder>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack spacing="xl">
            <Box>
              <Title order={3}>Acessar</Title>
              <Text color="dimmed">
                Informe os dados para acessar sua conta
              </Text>
            </Box>

            <Stack>
              <TextInput
                withAsterisk
                label="E-mail"
                placeholder="nome@email.com"
                icon={<IconAt />}
                {...form.getInputProps('email')}
              />

              <PasswordInput
                withAsterisk
                label="Senha"
                placeholder="********"
                icon={<IconLock />}
                {...form.getInputProps('password')}
              />

              <Button
                type="submit"
                rightIcon={<IconArrowNarrowRight />}
                loading={authLogin.isLoading}
              >
                Acessar
              </Button>
            </Stack>
          </Stack>
        </form>
      </Card>

      <RecoverPasswordModal
        opened={modalOpened}
        onClose={modalAction.close}
        email={form.values.email}
      />
    </>
  );
};

export default LoginForm;
