import { useForm } from '@mantine/form';
import { Props } from './UserForm.types';
import { useCreateUser, useUserEdit } from '@/core/domains/users/user.hooks';
import { useEffect } from 'react';
import { UserFormValues } from '@/core/domains/users/user.types';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { userFormInitialValues } from './UserForm.config';

const UserForm: React.FC<Props> = (props) => {
  const form = useForm<UserFormValues>({
    initialValues: userFormInitialValues,
  });
  const userCreate = useCreateUser();
  const userEdit = useUserEdit();

  useEffect(() => {
    if (props.user) {
      form.setValues({
        ...form.values,
      });
    }
  }, [props.user]);

  function handleClose() {
    form.reset();
    props.onClose();
  }

  async function handleSubmit(values: UserFormValues) {
    if (props.user) {
      await userEdit.mutateAsync({
        id: Number(props.user.id),
        name: values.name,
        email: values.email,
        profile: props.user.profile,
        status: props.user.status,
      });
    } else {
      await userCreate.mutateAsync({
        name: values.name,
        email: values.email,
        profile: Number(values.profile),
        password: values.password,
      });
    }

    handleClose();
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput {...form.getInputProps('name')} label="Nome" withAsterisk />
        <Group position="right">
          <Button variant="default" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            type="submit"
            leftIcon={<IconCheck />}
            loading={userCreate.isLoading || userEdit.isLoading}
          >
            Salvar
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default UserForm;
