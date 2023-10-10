import { useForm, zodResolver } from '@mantine/form';
import {
  HeaderUserDetailsFormProps,
  HeaderUserDetailsFormValues,
} from './HeaderUserDetailsForm.types';
import { userFormSchema } from './HeaderIUserDetailsForm.configs';
import { useUserEdit } from '@/core/domains/users/user.hooks';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const HeaderUserDetailsForm: React.FC<HeaderUserDetailsFormProps> = ({
  user,
  onClose,
}) => {
  const userEdit = useUserEdit();

  const form = useForm<HeaderUserDetailsFormValues>({
    initialValues: {
      name: user.name,
      email: user.email,
    },
    validate: zodResolver(userFormSchema),
  });

  async function handleSubmit(values: HeaderUserDetailsFormValues) {
    await userEdit.mutateAsync({
      id: user.id,
      name: values.name,
      email: values.email,
      profile: user.profile,
      status: user.status,
    });

    onClose();
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Nome"
          placeholder="Insira o nome"
          withAsterisk
          {...form.getInputProps('name')}
        />
        <TextInput
          label="E-mail"
          placeholder="Insira o email"
          withAsterisk
          {...form.getInputProps('email')}
        />
        <Group position="right">
          <Button
            variant="outline"
            onClick={onClose}
            style={{ backgroundColor: 'white' }}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            leftIcon={<IconCheck />}
            loading={userEdit.isLoading}
          >
            Salvar Alterações
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
export default HeaderUserDetailsForm;
