import { Table } from '@/components/_commons';
import { useDeleteUser, useUsers } from '@/core/domains/users/user.hooks';
import { User } from '@/core/domains/users/user.types';
import { ActionIcon, Avatar, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useModals } from '@mantine/modals';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import UserModal from '../UserModal';
import { TableColumn } from '@/components/_commons/Table/Table.types';
import { useQueryParams } from '@/core/hooks';
import { Props } from './UserList.types';

const UserList: React.FC<Props> = ({ filters }) => {
  const [params, setParams] = useQueryParams(filters);
  const { data, isLoading } = useUsers({ ...params });
  const userRemove = useDeleteUser();

  const [user, setUser] = useState<User>();
  const [modalOpened, modalAction] = useDisclosure(false, {
    onClose: () => setUser(undefined),
  });
  const modals = useModals();

  function confirmRemove(item: User) {
    modals.openConfirmModal({
      title: 'Remoção de usuário',
      children: `Tem certeza que deseja remover o usuário "${item.name}" ?`,
      confirmProps: {
        onClick: () => userRemove.mutateAsync(item.id),
        children: 'Remover',
      },
      cancelProps: {
        children: 'Cancelar',
      },
    });
  }

  const columns: TableColumn<User>[] = [
    {
      key: 'name',
      title: 'Nome',
      render: (item) => (
        <Group spacing="sm">
          <Avatar radius="xl">
            {typeof item.imageUri === 'string'
              ? item.imageUri
              : item.name.charAt(0).toUpperCase()}
          </Avatar>
          <Text>{item.name}</Text>
        </Group>
      ),
    },
    {
      key: 'email',
      title: 'E-mail',
    },
    {
      title: 'Ação',
      align: 'right',
      render: (item) => (
        <Group position="right" spacing="sm">
          <ActionIcon
            onClick={() => {
              setUser(item);
              modalAction.open();
            }}
          >
            <IconEdit />
          </ActionIcon>
          <ActionIcon color="red" onClick={() => confirmRemove(item)}>
            <IconTrash />
          </ActionIcon>
        </Group>
      ),
    },
  ];

  useEffect(() => {
    if (filters) {
      setParams(filters);
    }
  }, [filters]);

  return (
    <>
      <Table<User>
        loading={isLoading}
        data={data?.items || []}
        columns={columns}
        pagination={{
          total: data?.pagination.pageCount || 1,
          value: data?.pagination.page,
          onChange: (page) => setParams({ page }),
        }}
      />

      <UserModal opened={modalOpened} onClose={modalAction.close} user={user} />
    </>
  );
};

export default UserList;
