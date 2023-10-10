import { Props } from './UserList.types';

const UserList: React.FC<Props> = ({ filters }) => {
  console.log(filters);
  // const [params, setParams] = useQueryParams(filters);
  // const modals = useModals();

  // const { data, isLoading } = useUsers({ ...params });
  // const userRemove = useDeleteUser();

  // const [user, setUser] = useState<User>();
  // const [modalOpened, modalAction] = useDisclosure(false);

  // function confirmRemove(item: User) {
  //   modals.openConfirmModal({
  //     title: 'Remoção de usuário',
  //     children: `Tem certeza que deseja remover o usuário "${item.name}" ?`,
  //     confirmProps: {
  //       onClick: () => userRemove.mutateAsync(String(item.id)),
  //       children: 'Remover',
  //     },
  //     cancelProps: {
  //       children: 'Cancelar',
  //     },
  //   });
  // }

  // const columns: TableColumn<User>[] = [
  //   {
  //     key: 'name',
  //     title: 'Nome',
  //     render: (item) => (
  //       <Group spacing="sm">
  //         <Avatar radius="xl">
  //           {/* {typeof item.imageUri === 'string'
  //             ? item.imageUri
  //             : item.name.charAt(0).toUpperCase()} */}
  //         </Avatar>
  //         <Text>{item.name}</Text>
  //       </Group>
  //     ),
  //   },
  //   {
  //     key: 'email',
  //     title: 'E-mail',
  //   },
  //   {
  //     title: 'Ação',
  //     align: 'right',
  //     render: (item) => (
  //       <Group position="right" spacing="sm">
  //         <ActionIcon
  //           onClick={() => {
  //             setUser(item);
  //             modalAction.open();
  //           }}
  //         >
  //           <IconEdit />
  //         </ActionIcon>
  //         <ActionIcon color="red" onClick={() => confirmRemove(item)}>
  //           <IconTrash />
  //         </ActionIcon>
  //       </Group>
  //     ),
  //   },
  // ];

  return (
    <>
      {/* <Table<User>
        width={400}
        loading={isLoading}
        data={data?.items || []}
        columns={columns}
        pagination={{
          total: data?.pagination.pageCount || 1,
          value: data?.pagination.page,
          onChange: (page) => setParams({ page }),
        }}
                  <TableHeader
            title="Usuarios"
            description="Gerencie todas os usuários da plataforma"
            btnName="Novo Usuário"
            onClick={() => {
              setUser(undefined);
              modalAction.open();
            }}
          />
      /> */}

      {/* <UserModal opened={modalOpened} onClose={modalAction.close} user={user} /> */}
    </>
  );
};

export default UserList;
