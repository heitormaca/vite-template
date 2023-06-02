import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Stack, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import UserList from '@/components/User/UserList';
import UserModal from '@/components/User/UserModal';

const UserPage: React.FC = () => {
  const [modalOpened, modalAction] = useDisclosure(false);

  return (
    <>
      <Stack spacing="xl">
        <Group position="apart">
          <Title order={3}>Usuários</Title>

          <Button onClick={modalAction.open} leftIcon={<IconPlus />}>
            Usuário
          </Button>
        </Group>

        <UserList />
      </Stack>

      <UserModal onClose={modalAction.close} opened={modalOpened} />
    </>
  );
};

export default UserPage;
